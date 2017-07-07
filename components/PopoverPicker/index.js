import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import Overlay from '../Overlay';
import PopoverPickerView from './PopoverPickerView';

export default class PopoverPicker extends Overlay {
  static PopoverPickerView = PopoverPickerView;

  // fromBounds shape: x, y, width, height
  // items: array of string
  static show(fromBounds, items, selectedIndex, onSelected, options = {}) {
    return super.show(
      <this.PopoverPickerView
        fromBounds={fromBounds}
        items={items}
        selectedIndex={selectedIndex}
        onSelected={onSelected}
        {...options}
      />
    );
  }
}
