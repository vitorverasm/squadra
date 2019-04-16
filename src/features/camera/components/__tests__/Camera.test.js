import { shallow, mount } from 'enzyme';
import React from 'react';
import Camera from '../Camera';

const { JSDOM } = require('jsdom');

const jsdom = new JSDOM();
const { window } = jsdom;

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .map(prop => Object.getOwnPropertyDescriptor(src, prop));
  Object.defineProperties(target, props);
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
copyProps(window, global);

// Ignore React Web errors when using React Native
// but still show relevant errors
const suppressedErrors = /(React does not recognize the.*prop on a DOM element|Unknown event handler property|is using uppercase HTML|Received `true` for a non-boolean attribute `accessible`|The tag.*is unrecognized in this browser)|is using incorrect casing|Received `true` for a non-boolean attribute `enabled`/;
const realConsoleError = console.error; // eslint-disable-line
// eslint-disable-next-line
console.error = message => {
  if (message.match(suppressedErrors)) {
    return;
  }
  realConsoleError(message);
};

describe('Camera', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Camera />);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('onCameraReady', () => {
    const wrapper = shallow(<Camera />);
    wrapper.instance().onCameraReady();
    console.log('@wrapper: ', wrapper);
    // expect(wrapper.state().writeExternalPermission).toBe(true);
  });
});
