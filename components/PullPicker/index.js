import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import Overlay from '../Overlay';
import PullPickerView from './PullPickerView';

export default class PullPicker extends Overlay {
  static PullPickerView = PullPickerView;

  // items: array of string
  static show(title, items, selectedIndex, onSelected, options = {}) {
    return super.show(
      <this.PullPickerView
        title={title}
        items={items}
        selectedIndex={selectedIndex}
        onSelected={onSelected}
        {...options}
      />
    );
  }
}
