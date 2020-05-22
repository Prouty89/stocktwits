import React, { useState, useCallback } from 'react';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { Button} from 'react-bootstrap';

import axios from 'axios';

import 'react-bootstrap-typeahead/css/Typeahead.css';

const PROXY = 'https://cors-anywhere.herokuapp.com/'

const Search = () => {
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState([]);
  

  const handleSearch = useCallback((query) => {
    fetch(`${PROXY}https://api.stocktwits.com/api/2/search/symbols.json?&q=${query}`)
    .then(response => response.json())
    .then(data => setOptions((data.results)))
});

const handleSubmit = () => {
const cashtags = selected.map(selection => selection.symbol);
let links = new Array(cashtags.length).fill(`${PROXY}https://api.stocktwits.com/api/2/streams/symbol/${cashtags}.json`)
console.log("links", links)

// var columns = ["Date", "Number", "Size", "Location", "Age"];
// var rows = ["2001", "5", "Big", "Sydney", "25"];
// var result =  rows.reduce(function(result, field, index) {
//   result[columns[index]] = field;
//   return result;
// }, {})

// console.log(result);
let joinArr = links.reduce(function(joinArr, field, index) {
    joinArr[cashtags[index]] = field;
    return joinArr
})
console.log("joined",joinArr);
for ( const [index, cashtag] of cashtags.entries() ) {
    console.log(`${cashtag}`)
}
axios.all(links.map(link => axios.get(link)))
.then(axios.spread(function (...res) {
    console.log("response", res);
    {console.log("cashtags length", cashtags)}
}));
};


//  const handleSubmit = () => {
//      const cashtags = selected.map(selection => selection.symbol);
//      fetch(`${PROXY}https://api.stocktwits.com/api/2/streams/symbol/${cashtags}.json`)
//      .then(response => response.json())
//      .then(data => console.log("data", data))
//  };

  return (
      <>
      {console.log("selected",selected.map(selection => selection.symbol))}
    <AsyncTypeahead
      id="stocktwits"
      clearButton
      labelKey= "symbol"
      multiple
      useCache
      clearButton
      emptyLabel="No matches found"
      minLength={1}
      selected={selected}
      onChange={setSelected}
      options={options}
      onSearch={handleSearch}
      placeholder="Search by cashtag..."
      renderMenuItemChildren={(option, props) => (
        <div>
          <span>{option.title}</span>
        </div>
      )}
    />
    <Button onClick={ ()=> selected.length > 0 ? handleSubmit() : alert("None selected!")} variant="light">Submit</Button>
    </>
  );
};

export default Search;