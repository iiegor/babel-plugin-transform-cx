# babel-plugin-transform-cx

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
