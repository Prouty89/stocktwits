import React, { useState, useContext, useEffect } from 'react';
import { AsyncTypeahead, Token } from 'react-bootstrap-typeahead';
import { Button} from 'react-bootstrap';
import { GlobalContext } from '../context/GlobalState';

import axios from 'axios';

import 'react-bootstrap-typeahead/css/Typeahead.css';

const PROXY = 'https://cors-anywhere.herokuapp.com/'

const Search = () => {
  const { addSymbols } = useContext(GlobalContext);
  const { addMessages } = useContext(GlobalContext);
// Symol options for search bar
  const [options, setOptions] = useState([]);
// User-selected input for API requests
  const [selected, setSelected] = useState([]);
  const [symbolData, setSymbolData] = useState([]);


async function handleSearch  (query)   {
      await fetch(
      `${PROXY}https://api.stocktwits.com/api/2/search/symbols.json?&q=${query}`
    )
      .then ((response) => response.json())
      .then((data) => setOptions(data.results))
  };

async function handleQuery () {
  let links = []
  const cashtags = selected.map((selection) => selection.symbol);
  cashtags.forEach(function(cashtag) {
    links.push(`${PROXY}https://api.stocktwits.com/api/2/streams/symbol/${cashtag}.json`)
  })
  axios.all(links.map(link => axios.get(link)))
  .then(axios.spread(function (...res) {
    const responses = res.map((response) => response.data)
    addSymbols(responses.map((data) => data))
    addMessages(responses.map((message) => message.messages))
    console.log("ResponseDATA?", responses.map((data) => data))
}))
console.log("BLINKS",links)
}
  

  useEffect(()=> {
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
        filterBy={['symbol', 'title']}
        emptyLabel="No matches found"
        minLength={2}
        selected={selected}
        options={options}
        onSearch={handleSearch}
        placeholder="Enter cashtag or company name.."
        renderMenuItemChildren={(option, props) => (
          <div>
            <Button onClick={(()=> console.log("clicked", option.symbol))} variant="link" >{option.title}</Button>
          </div>
        )}
      />
    </>
  );
};

export default Search;