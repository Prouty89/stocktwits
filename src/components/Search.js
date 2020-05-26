import React, { useState, useContext, useEffect } from 'react';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { Button} from 'react-bootstrap';
import { GlobalContext } from '../context/GlobalState';

import 'react-bootstrap-typeahead/css/Typeahead.css';

const PROXY = 'https://cors-anywhere.herokuapp.com/'

const Search = () => {
  const { addTweets } = useContext(GlobalContext);
  const { deleteTweet } = useContext(GlobalContext);
// Symol options for search bar
  const [options, setOptions] = useState([]);
// User-selected input for API requests
  const [selected, setSelected] = useState([]);
  const [symbolData, setSymbolData] = useState([]);

  const cashtags = selected.map((selection) => selection.symbol);

async function handleSearch  (query)   {
    const requests = cashtags.map(async(cashtag) => 
      await fetch(
        `${PROXY}https://api.stocktwits.com/api/2/streams/symbol/${cashtag}.json`
      )
    )
      await fetch(
      `${PROXY}https://api.stocktwits.com/api/2/search/symbols.json?&q=${query}`
    )
      .then ((response) => response.json())
      .then((data) => setOptions(data.results))
      return await Promise.all(requests)
      // map array of responses into an array of response.json() to read their content
      .then((responses) => Promise.all(responses.map((res) => res.json())))
      // all JSON info is parsed
      .then((data) => setSymbolData(data.map(symbolData=> symbolData)))
      // symbolData will be an array of objects for manipulation elsewhere in our application. 
    
  };

  useEffect(() => {
    if(symbolData){
      addTweets(symbolData);
    }
  }, [symbolData]);

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
            <Button variant="link">{option.title}</Button>
          </div>
        )}
      />
      {console.log("$tags", cashtags)}
    </>
  );
};

export default Search;