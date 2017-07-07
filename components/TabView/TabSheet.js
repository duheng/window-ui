import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import Theme from '../../themes/Theme';

export default class TabSheet extends Component {
  static propTypes = {
    title: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.number,
    ]),
    icon: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.shape({ uri: PropTypes.string }),
      PropTypes.number,
    ]),
    activeIcon: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.shape({ uri: PropTypes.string }),
      PropTypes.number,
    ]),
    badge: PropTypes.oneOfType([PropTypes.element, PropTypes.number]),
  };

  static defaultProps = {
    active: false,
  };

  render() {
    let { style, ...others } = this.props;
    style = [{ flex: 1 }].concat(style);
    return <View style={style} {...others} />;
  }
}
