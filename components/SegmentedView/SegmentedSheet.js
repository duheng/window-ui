import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import Theme from '../../themes/Theme';

export default class SegmentedSheet extends Component {
  static propTypes = {
    ...View.propTypes,
    title: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    badge: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.number,
    ]),
  };

  render() {
    let { style, ...others } = this.props;
    style = [{ flexGrow: 1 }].concat(style);
    return <View style={style} {...others} />;
  }
}
