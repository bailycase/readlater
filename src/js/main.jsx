import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TopBar from './components/topBar';
import Items from './components/items';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f06292',
    },
  },
});

function App() {
  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <TopBar />
        <Items />
      </MuiThemeProvider>
    </React.Fragment>
  );
}

const content = document.getElementById('content');
ReactDOM.render(<App />, content);
