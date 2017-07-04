import React, { Component, PropTypes } from 'react';
import { Image } from 'react-native';

import Theme from '../../themes/Theme';
import NavigationButton from './NavigationButton';

export default class NavigationIconButton extends NavigationButton {
  static propTypes = {
    ...NavigationButton.propTypes,
    icon: Image.propTypes.source,
  };

  buildProps() {
    super.buildProps();

    let { icon, children, ...others } = this.props;

    if (!React.isValidElement(icon)) {
      let iconStyle = {
        tintColor: this.context.tintColor,
        width: 20,
        height: 20,
      };
      children = <Image style={iconStyle} source={icon} />;
    } else {
      children = icon;
    }

    this.props = { icon, children, ...others };
  }
}