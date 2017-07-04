import React, { Component, PropTypes } from 'react';

import Overlay from '../Overlay';
import ActionPopoverView from './ActionPopoverView';

export default class ActionPopover extends Overlay {
  static ActionPopoverView = ActionPopoverView;

  // fromBounds shape: x, y, width, height
  // items shape
  //   title: PropTypes.string.isRequired,
  //   onPress: PropTypes.func,
  static show(fromBounds, items, options = {}) {
    return super.show(
      <this.ActionPopoverView
        fromBounds={fromBounds}
        items={items}
        {...options}
      />,
    );
  }
}
