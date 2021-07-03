// .\node_modules\.bin\babel-node.cmd server.js"

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import App from './components/App';

import PropTypes from 'prop-types';

App.propTypes = {
  initialContests: PropTypes.array,
};
axios
  .get('api/contests')
  .then((response) => {
    ReactDOM.hydrate(
      <App initialData={response.data} />,
      document.getElementById('root'),
    );
  })
  .catch((error) => {
    console.log(error);
  });
