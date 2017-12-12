# xander

[![CircleCI](https://circleci.com/gh/formula/xander.svg?style=svg)](https://circleci.com/gh/formula/xander)

## Overview

Framework for React Single Page Apps. The framework is a complete environment including routing and state management.

Webpack is recommended to bundle your projects. The [minimal example](./examples/minimal) provides a simple boilerplate setup. For larger projects, look at the [async example](./examples/async) which utilizes webpack's code splitting to scale your app.

## Usage

## Installation

```sh
npm install --save xander
```
### Quick start

A minimal app with home and 404 page.

```js
import React from 'react';
import ReactDOM from 'react-dom';
import app from 'xander';

let App = app({
  routes: [{
    path: '/',
    component: (props) => <div>Hello, World.</div> 
  }, {
    path: '*',
    component: (props) => <div>404</div>
  }])

})

ReactDOM.render(<App />, document.body)
```

### Router

```js
var { router } = require('xander')
var { loadRoutes } = require('xander')

loadRoutes({
  routes: [{
    path: '/',
    load: () => System.import('./HomePage')
  }, {
    path: '*',
    component: (props) => <div>404</div>
  }])
  ```
### Container Component

A component to render the current route content.

```js
import {Container} from 'xander'
render( <Container router={...} location={...} />, document.all.root )
```

### Link Component

A link component to hyperlink your app without annoying page refreshes.

```js
import {Link} from 'xander'
<Link to="/buckets" />
<Link type="button" to="/buckets" />
```

### Open path programmically

Manage location with the easy to use API.

```js
import {location} from 'xander'
location.open('/buckets/1')
```
Use `redirect` to change the URL without adding an entry to the history state.
```js
location.redirect('/buckets')
```

### Replace routes

Routes and related location information stored as routes.

```js
loadRoutes([{
  path: '/',
  load: loadContent( System.import('./pages/home') )
}])
```

### Manage state with stores

Create custom stores with reducer function.

```js
createStore(name, reducerOrSpec)`
```
