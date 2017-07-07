import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Theme from '../../themes/Theme';
import ListRow from '../ListRow';

export default class PullPickerItem extends ListRow {
  static propTypes = {
    ...ListRow.propTypes,
    selected: PropTypes.bool,
  };

  buildProps() {
    let { style, selected, accessory, ...others } = this.props;
    style = [{ backgroundColor: Theme.pupItemColor }].concat(style);
    accessory = selected ? 'check' : 'empty';
    this.props = { style, selected, accessory, ...others };

    super.buildProps();
  }
}
