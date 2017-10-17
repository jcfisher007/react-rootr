// Knows all about which page is loaded and responds to action to load new page.
var createStore = require('pure-flux').createStore;
var dispatch = require('pure-flux').dispatch;
var parsequery = require('functionfoundry/fn/parsequery');

function readLocation(state) {
  var path = window.location.pathname,
      search = window.location.search;

  return {
    title: document.title,
    path,
    search,
    query: search && search.length > 0 ? parsequery(window.location.search) : {}
  };
}

var store = createStore( 'location', ( state={ path: null }, action ) => {

  switch (action.type) {
  case 'openPath':
  case 'redirectPath':
    return readLocation();
  }

  return state;

}, {
  open: (state, path) => {
    history.pushState({ path }, document.title, path);
    return dispatch('openPath', path);
  },
  redirect: (state, path) => {
    history.replaceState({ path }, document.title, path);
    return dispatch('redirectPath', path);
  }
});

window.addEventListener('popstate', function(event) {
  store.redirect( window.location.pathname );
});

module.exports = store;
