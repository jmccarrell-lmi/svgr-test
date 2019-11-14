'use strict';



function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var Hold = (({
  styles = {},
  ...props
}) => React.createElement("svg", _extends({
  width: "15",
  height: "18",
  xmlns: "http://www.w3.org/2000/svg"
}, props), React.createElement("g", {
  fill: "#0F0",
  fillRule: "nonzero",
  stroke: "#FFF",
  strokeWidth: "2"
}, React.createElement("path", {
  d: "M3.133 17c1.174 0 2.134-1.029 2.134-2.286V3.286C5.267 2.029 4.307 1 3.133 1 1.96 1 1 2.029 1 3.286v11.428C1 15.971 1.96 17 3.133 17zM9.533 3.286v11.428c0 1.257.96 2.286 2.134 2.286 1.173 0 2.133-1.029 2.133-2.286V3.286C13.8 2.029 12.84 1 11.667 1c-1.174 0-2.134 1.029-2.134 2.286z"
}))));

var App = function () {
  // @ts-ignore
  var hold = React.createElement(Hold, {
    style: {
      backgroundColor: 'yellow'
    }
  });
  return React.createElement("div", {
    className: "App"
  }, React.createElement("header", {
    className: "App-header"
  }, React.createElement("p", null, "Edit ", React.createElement("code", null, "src/App.tsx"), " and save to reload."), React.createElement("a", {
    className: "App-link",
    href: "https://reactjs.org",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Learn React"), hold));
};

module.exports = App;
