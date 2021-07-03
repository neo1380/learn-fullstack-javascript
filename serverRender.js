import axios from 'axios';
import config from './config';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App';

const url = config.serverUrl + '/api/contests';

const serverRender = () =>
  axios.get(url).then((resp) => {
    return ReactDOMServer.renderToString(<App initialData={resp.data} />);
  });

export default serverRender;
