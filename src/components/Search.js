import React, { useState, useCallback } from 'react';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { Button} from 'react-bootstrap';

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

const handleRequests = selected.map(selection => {
    return new Promise((resolve, reject) => {
        request({
            uri:`${PROXY}https://api.stocktwits.com/api/2/streams/symbol/${cashtags}.json`
        })
    })
})

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