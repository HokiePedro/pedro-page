import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from "./homepage";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
    <Homepage/>
  </MuiThemeProvider>,
  document.getElementById('react_container')
);
