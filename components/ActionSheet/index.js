import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Overlay from '../Overlay';
import ActionSheetView from './ActionSheetView';

export default class ActionSheet extends Overlay {
  static ActionSheetView = ActionSheetView;

  // items and cancelItem shape
  //   title: PropTypes.string.isRequired,
  //   onPress: PropTypes.func,
  //   disabled: PropTypes.bool,
  static show(items, cancelItem, options = {}) {
    return super.show(
      <this.ActionSheetView
        items={items}
        cancelItem={cancelItem}
        {...options}
      />
    );
  }
}
