import React, { Component, PropTypes } from "react";
import { StyleSheet, Platform, StatusBar, View, Text } from "react-native";

import Theme from "../../themes/Theme";
import NavigationTitle from "./NavigationTitle";
import NavigationButton from "./NavigationButton";
import NavigationLinkButton from "./NavigationLinkButton";
import NavigationIconButton from "./NavigationIconButton";
import NavigationBackButton from "./NavigationBackButton";

export default class NavigationBar extends Component {
  static propTypes = {
    ...View.propTypes,
    type: PropTypes.oneOf(["auto", "ios", "android"]),
    tintColor: PropTypes.string, //bar tint color, default tint color of title, leftView and rightView
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    titleStyle: Text.propTypes.style,
    leftView: PropTypes.element,
    rightView: PropTypes.element,
    tintColor: PropTypes.string, // bar tint color, default tint color leftview and rightview
    statusBarStyle: PropTypes.oneOf(["default", "light-content"]), //status bar style (iOS only)
    statusBarColor: PropTypes.string, //status bar color, default: style.backgroundColor
    statusBarHidden: PropTypes.bool, //status bar hidden
    statusBarInsets: PropTypes.bool //auto add space for iOS status bar
  };

  static defaultProps = {
    ...View.defaultProps,
    type: "auto",
    statusBarInsets: true
  };

  static childContextTypes = {
    tintColor: PropTypes.string
  };

  static Title = NavigationTitle;
  static Button = NavigationButton;
  static LinkButton = NavigationLinkButton;
  static IconButton = NavigationIconButton;
  static BackButton = NavigationBackButton;

  constructor(props) {
    super(props);
    this.state = {
      leftViewWidth: 0,
      rightViewWidth: 0
    };
  }

  getChildContext() {
    return { tintColor: this.props.tintColor };
  }

  buildProps() {
    let {
      style,
      type,
      tintColor,
      title,
      titleStyle,
      statusBarColor,
      statusBarStyle,
      statusBarInsets,
      ...others
    } = this.props;

    //build style
    let justifyContent = "space-between", titleTextAlign = "center";
    style = [
      {
        backgroundColor: Theme.navColor,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: statusBarInsets && Platform.OS === "ios" ? 64 : 44,
        paddingTop: statusBarInsets && Platform.OS === "ios" ? 20 : 0,
        borderBottomWidth: Theme.navSeparatorLineWidth,
        borderBottomColor: Theme.navSeparatorColor,
        paddingLeft: 4,
        paddingRight: 4,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: justifyContent
      }
    ].concat(style);

    let fs = StyleSheet.flatten(style);

    //build tintColor
    if (!tintColor) tintColor = Theme.navTintColor;

    //build statusBarColor and statusBarStyle
    if (!statusBarColor) statusBarColor = fs.backgroundColor;
    if (!statusBarStyle)
      statusBarStyle = Theme.navStatusBarStyle
        ? Theme.navStatusBarStyle
        : "default";

    //build titleViewStyle
    let { leftViewWidth, rightViewWidth } = this.state;
    let barPaddingLeft = fs.paddingLeft
      ? fs.paddingLeft
      : fs.padding ? fs.padding : 0;
    let barPaddingRight = fs.paddingRight
      ? fs.paddingRight
      : fs.padding ? fs.padding : 0;
    let paddingLeft, paddingRight;
      let paddingLeftRight = Math.max(
          leftViewWidth + barPaddingLeft,
          rightViewWidth + barPaddingRight
        );
        paddingLeft = paddingLeftRight;
        paddingRight = paddingLeftRight;
    let titleViewStyle = {
      position: "absolute",
      top: statusBarInsets && Platform.OS === "ios" ? 20 : 0,
      left: 0,
      right: 0,
      height: 44,
      paddingLeft: paddingLeft,
      paddingRight: paddingRight,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center"
    };

    //convert string title to NavigationBar.Title
    if (typeof title === "string") {
      title = (
        <this.constructor.Title
          style={{ textAlign: titleTextAlign, color: Theme.navTitleColor }}
          text={title}
        />
      );
    }

    this.props = {
      style,
      type,
      title,
      titleStyle,
      titleViewStyle,
      tintColor,
      statusBarColor,
      statusBarStyle,
      statusBarInsets,
      ...others
    };
  }

  onLeftViewLayout(e) {
    if (e.nativeEvent.layout.width != this.state.leftViewWidth) {
      this.setState({ leftViewWidth: e.nativeEvent.layout.width });
    }
  }

  onRightViewLayout(e) {
    if (e.nativeEvent.layout.width != this.state.rightViewWidth) {
      this.setState({ rightViewWidth: e.nativeEvent.layout.width });
    }
  }

  render() {
    this.buildProps();

    let {
      style,
      statusBarStyle,
      statusBarColor,
      statusBarHidden,
      title,
      titleViewStyle,
      leftView,
      rightView,
      ...others
    } = this.props;
    return (
      <View style={style} {...others}>
        <StatusBar
          backgroundColor={statusBarColor}
          barStyle={statusBarStyle}
          animated={true}
          hidden={statusBarHidden}
        />
        <View style={titleViewStyle}>{title}</View>
        <View onLayout={e => this.onLeftViewLayout(e)}>{leftView}</View>
        <View onLayout={e => this.onRightViewLayout(e)}>{rightView}</View>
      </View>
    );
  }
}
