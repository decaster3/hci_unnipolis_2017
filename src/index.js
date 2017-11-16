import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import { AppContainer } from 'react-hot-loader';
import configureStore, { history } from './store/configureStore'
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCW7Yc21FSme2Jk9EaJnAn3i8XQi1riWAE",
  authDomain: "hci-inno.firebaseapp.com",
  databaseURL: "https://hci-inno.firebaseio.com",
  projectId: "hci-inno",
  storageBucket: "",
  messagingSenderId: "619784833058"
};
firebase.initializeApp(config);

const store = configureStore()

ReactDOM.render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('app')
);

// NOTE: хот реплейсмент при появлении новых верхних элементов в дереве редаксa
if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default;
    ReactDOM.render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
