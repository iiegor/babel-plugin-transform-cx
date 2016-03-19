# babel-plugin-transform-cx [![npm version](https://badge.fury.io/js/babel-plugin-transform-cx.svg)](https://www.npmjs.com/package/babel-plugin-transform-cx)

Transform cx calls to string literals

## Example

**In**

```javascript
class ComponentName extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className={cx('myClass', 'anotherClass')}>
        {this.props.children}
      </div>
    );
  }
}
```

```javascript
babelCxTransform.setSelectorMap({
  'myClass': 'a',
  'anotherClass': 'b',
});
```

**Out**

```javascript
class ComponentName extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="a b">
        {this.props.children}
      </div>
    );
  }
}
```

Check a real world example [here](https://github.com/iiegor/react-experiments/blob/master/gulpfile.js).

## Installation

```sh
$ npm install babel-plugin-transform-cx
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["transform-cx"]
}
```

### Via CLI

```sh
$ babel --plugins transform-cx script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["transform-cx"]
});
```
