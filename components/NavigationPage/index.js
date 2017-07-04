import React, { Component, PropTypes } from "react";
import { Platform, View } from "react-native";

import TeaNavigator from "../TeaNavigator";
import Theme from "../../themes/Theme";
import BasePage from "../BasePage";
import NavigationBar from "../NavigationBar";
import KeyboardSpace from "../KeyboardSpace";

export default class NavigationPage extends BasePage {
  static propTypes = {
    ...BasePage.propTypes,
    title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    showBackButton: PropTypes.bool
  };

  static defaultProps = {
    ...BasePage.defaultProps,
    scene: TeaNavigator.SceneConfigs.PushFromRight,
    title: null,
    showBackButton: false
  };

  buildProps() {
    super.buildProps();

    let { ...others } = this.props;
    let pageContainerStyle = [
      {
        flex: 1,
        padding: 0,
        marginTop: Platform.OS === "ios" ? 64 : 44
      }
    ];
    this.props = { pageContainerStyle, ...others };
  }

  renderNavigationTitle() {
    return this.props.title;
  }

  renderNavigationLeftView() {
    if (!this.props.showBackButton) return null;
    return (
      <NavigationBar.BackButton
        title={Theme.backButtonTitle}
        onPress={() => this.navigator.pop()}
      />
    );
  }

  renderNavigationRightView() {
    return null;
  }

  renderNavigationBar() {
    return (
      <NavigationBar
        title={this.renderNavigationTitle()}
        leftView={this.renderNavigationLeftView()}
        rightView={this.renderNavigationRightView()}
      />
    );
  }

  renderPage() {
    return null;
  }

  render() {
    this.buildProps();

    let {
      autoKeyboardInsets,
      keyboardTopInsets,
      pageContainerStyle,
      ...others
    } = this.props;
    return (
      <View {...others}>
        <View style={{ flex: 1 }}>
          <View style={pageContainerStyle}>
            {this.renderPage()}
          </View>
          {this.renderNavigationBar()}
        </View>
        {autoKeyboardInsets
          ? <KeyboardSpace topInsets={keyboardTopInsets} />
          : null}
      </View>
    );
  }
}
