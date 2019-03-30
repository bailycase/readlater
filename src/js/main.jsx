/* global chrome */
import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TopBar from './components/topBar';
import Items from './components/items';
import { SaveProvider } from './components/context';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      color: '#f06292',
      darkMode: false,
    };
    chrome.storage.sync.get({ storage: [] }, (result) => {
      this.setState({
        data: result.storage
      });
    });
    chrome.storage.sync.get({preferences: []}, (result) => {
      this.setState({
        color: result.preferences.color,
        darkMode: result.preferences.darkMode
      })
    })
  }


  render() {
    const { color, darkMode } = this.state;
    const type = darkMode ? 'dark' : 'light';
    const theme = createMuiTheme({
      palette: {
        primary: {
          main: color,
        },
        type,
      },
    });
    return (
      <SaveProvider value={{
        state: this.state,
        removeItem: (item) => {
          const urls = this.state.data;
          const pos = urls.find(state => state.url === item);
          const index = urls.indexOf(pos);
          if (index > -1) {
            urls.splice(index, 1);
          }
          this.setState({ data: urls  });
          chrome.storage.sync.set({ storage: urls}); //optimize this
        },
        addItem: (item) => {
          const urls = this.state.data;
          urls.push(item)
          this.setState({data: urls})
          chrome.storage.sync.set({ storage:  urls}); 
        },
        toggleDark: (state) => {
          this.setState({
            ...state,
            darkMode: !state,
          });
          chrome.storage.sync.set({ preferences: {color: this.state.color, darkMode: !this.state.darkMode}  });
        },
      }}
      >
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <TopBar />
          <Items />
        </MuiThemeProvider>
      </SaveProvider>
    );
  }
}

const content = document.getElementById('content');
ReactDOM.render(<Main />, content);
