import React, { useState, useContext, useEffect } from 'react';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { Button} from 'react-bootstrap';
import { GlobalContext } from '../context/GlobalState';

import axios from 'axios';

import 'react-bootstrap-typeahead/css/Typeahead.css';

//Mitigate CORS issues, see https://cors-anywhere.herokuapp.com/
const PROXY = 'https://cors-anywhere.herokuapp.com/';

const Search = () => {
  const { addSymbols } = useContext(GlobalContext);
  // Symol options for search bar
  const [options, setOptions] = useState([]);
  // User-selected input for API requests
  const [selected, setSelected] = useState([]);

  //Everything search bar! See AsyncTypeahead component, where filter (query) can be a symbol or company title.
  async function handleSearch(query) {
    await fetch(
      `${PROXY}https://api.stocktwits.com/api/2/search/symbols.json?&q=${query}`
    )
      .then((response) => response.json())
      .then((data) => setOptions(data.results));
  }

  async function handleQuery() {
    let links = [];
    const cashtags = selected.map((selection) => selection.symbol);
    cashtags.forEach(function (cashtag) {
      links.push(
        `${PROXY}https://api.stocktwits.com/api/2/streams/symbol/${cashtag}.json`
      );
    });
    axios.all(links.map((link) => axios.get(link))).then(
      axios.spread(function (...res) {
        const responses = res.map((response) => response.data);
        addSymbols(responses.map((data) => data));
        console.log(
          "ResponseData",
          responses.map((data) => data)
        );
      })
    );
    console.log("BLINKS", links);
  }

  // on update or deletion our associated Symbol data will respond at the dom level.
  useEffect(() => {
    handleQuery();
  }, [selected]);

  return (
    <>
      <AsyncTypeahead
        isLoading={false}
        id="stocktwits"
        clearButton
        labelKey="symbol"
        multiple
        promptText={"Must input a minimum of 2 characters"}
        searchText={"Searching"}
        useCache
        onChange={setSelected}
        filterBy={["symbol", "title"]}
        emptyLabel="No matches found"
        minLength={2}
        selected={selected}
        options={options}
        onSearch={handleSearch}
        placeholder="Enter cashtag or company name.."
        renderMenuItemChildren={(option) => (
          <div>
            <Button
              onClick={() => console.log("clicked", option.symbol)}
              variant="link"
            >
              {option.title}
            </Button>
          </div>
        )}
      />
    </>
  );
};

export default Search;