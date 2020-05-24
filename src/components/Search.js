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

// iterate over the selected stocks for our next API call (returning data for each symbol selected)
const cashtags = selected.map(selection => selection.symbol)


// initialize empty array that will hold our unique links for axios.all requests
let dynamicLinks = [];

// iterate over the cashtags array and push a link containing a unique cashtag to the dynamicLinks array.
cashtags.forEach(function(cashtag){
    dynamicLinks.push(`${PROXY}https://api.stocktwits.com/api/2/streams/symbol/${cashtag}.json`)
})

console.log("dynamicLinks",dynamicLinks);

axios.all(dynamicLinks.map(link => axios.get(link)))
.then(axios.spread(function (...res) {
    console.log("response", res);
    {console.log("cashtags", cashtags)}
    console.log("from", Array.from(dynamicLinks))
}));
};


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