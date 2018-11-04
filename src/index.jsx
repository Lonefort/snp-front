// Application entrypoint.
import 'bootstrap'
import '../styles/index.scss'
// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes.jsx'

ReactDOM.render(<Routes />, document.getElementById('react-root'));
