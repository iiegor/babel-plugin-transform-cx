/**
 * Copyright (c) 2016, Iegor Azuaga.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var selectorMap = {};

function replaceSlashes(str) {
  var selector = selectorMap[str] || str;

  return selector.replace(/\//, '-');
}

function nodeToLiteral(node) {
  // TODO: Need to add an option to transform replaced arguments for string literals
  node.arguments.forEach(function(arg) {
    var selector = selectorMap[arg.value] || arg.value;

    arg.value = arg.extra.rawValue = selector;
    arg.extra.raw = '\'' + selector + '\'';
  });

  return node;
}

exports.setSelectorMap = function(cssSelectorMap) {
  selectorMap = cssSelectorMap;
}

exports.transformer = function(babel) {
  var t = babel.types;

  /**
   * Transforms `cx('Foo')` to `Foo` and `cx('Foo', 'Bar')` to `Foo Bar`.
   */
  function transformCxCall(context, node) {
    if (
      !t.isIdentifier(node.callee, {name: 'cx'})
    ) {
      return node;
    }

    return nodeToLiteral(node);
  }

  return {
    visitor: {
      CallExpression: {
        exit: function(path) {
          transformCxCall(this, path.node);
        },
      },
    }
  };
};
