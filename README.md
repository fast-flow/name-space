# name-space

> namespace set get

[![NPM version](https://img.shields.io/npm/v/name-space.svg?style=flat)](https://npmjs.org/package/name-space)
[![NPM downloads](http://img.shields.io/npm/dm/name-space.svg?style=flat)](https://npmjs.org/package/name-space)


## Install

```js
npm install name-space --save
#   <script src="https://pkgzip.com/?name-space" ></script>
```

## get

```js
var ns = require('name-space')
var people = {
    user: {
        name: 'nimo'
    }
}
ns.get(people, 'user.name')
// nimo
```

## set

```js
var ns = require('name-space')
var people = {}
ns.set(people, 'user.name', 'nimo')
console.log(people)
/*
    {
        user: {
            name: 'nimo'
        }
    }
*/
```

### replaced object

```js
var ns = require('name-space')
var people = {
    user: 'abc'
}
ns.set(people, 'user.name', 'nimo')
console.log(people)
/*
    node_modules/name-space: set(obj, "user.name", value); obj. is a string
    This value will be replaced by the object

    { user: { name: 'nimo' } }
*/
```

## Development

```
npm run test
# npm run test:ci
```
