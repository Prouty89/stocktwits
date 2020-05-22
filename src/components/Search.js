import React, { useState, useCallback } from 'react';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';

import 'react-bootstrap-typeahead/css/Typeahead.css';

const PROXY = 'https://cors-anywhere.herokuapp.com/'

const AsyncExample = () => {
  const [options, setOptions] = useState([]);

  const handleSearch = useCallback((query) => {
    fetch(`${PROXY}https://api.stocktwits.com/api/2/search/symbols.json?&q=${query}`)
    .then(response => response.json())
    .then(data => setOptions((data.results)))
});

  return (
    <AsyncTypeahead
      id="stocktwits"
      clearButton
      labelKey="symbol"
      multiple
      clearButton
      minLength={1}
      options={options}
      onSearch={handleSearch}
      placeholder="Search for Stock..."
      renderMenuItemChildren={(option, props) => (
        <div>
          <span>{option.title}</span>
        </div>
      )}
    />
  );
};

export default AsyncExample;