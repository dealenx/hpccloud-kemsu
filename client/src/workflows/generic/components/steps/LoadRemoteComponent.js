import React from 'react';
import PropTypes from 'prop-types';
import * as THREE from 'three';
import * as Antd from 'antd';
/* eslint-disable */
export const loadRemoteComponent = async (url) => {
  return fetch(url)
    .then((res) => res.text())
    .then((source) => {
      const exports = {};
      function require(name) {
        console.log('name', name);
        if (name === 'react') return React;
        if (name === 'prop-types') return PropTypes;
        if (name === 'three') return THREE;
        if (name === 'antd') return Antd;
        else
          throw `You can't use modules other than "react" in remote component.`;
      }
      const transformedSource = Babel.transform(source, {
        presets: ['react', 'stage-3'],
      }).code;
      eval(transformedSource);
      return exports.__esModule ? exports.default : exports;
    });
};
/* eslint-enable */
