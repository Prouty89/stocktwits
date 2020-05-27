import React, { useState, useContext, useEffect } from 'react';
import { AsyncTypeahead, Token } from 'react-bootstrap-typeahead';
import { Button} from 'react-bootstrap';
import { GlobalContext } from '../context/GlobalState';

import axios from 'axios';

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


async function handleSearch  (query)   {
    // const requests = cashtags.map(async(cashtag) => 
    //   await fetch(
    //     `${PROXY}https://api.stocktwits.com/api/2/streams/symbol/${cashtag}.json`
    //   )
    // )
      await fetch(
      `${PROXY}https://api.stocktwits.com/api/2/search/symbols.json?&q=${query}`
    )
      .then ((response) => response.json())
      .then((data) => setOptions(data.results))
      // return await Promise.all(requests)
      // // map array of responses into an array of response.json() to read their content
      // .then((responses) => Promise.all(responses.map((res) => res.json())))
      // // all JSON info is parsed
      // .then((data) => setSymbolData(data.map(symbolData=> symbolData)))
      // // symbolData will be an array of objects for manipulation elsewhere in our application. 
    
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
    addTweets(responses)
    console.log("ResponseDATA?", responses.map((messages) => messages))
  // .then((res)=> axios.all(res.map((r)=> r.json())))
  // .then((data) => console.log(data))
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
        // renderToken={(option, props) => (
        //   <>
        //   <Button variant="link">{option.title}</Button>
        //   <Token
        //   onRemove={() => {
        //     console.log("removed!!", option)
        //     props.onRemove();
        //   }}
        //   />
        //   </>
        // )}
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