import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, ActivityIndicator } from 'react-native';

import { NavigationPage, ListRow, Toast, Theme } from 'widow-ui';

export default class ToastExample extends NavigationPage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'Toast',
    showBackButton: true,
  };

  static customKey = null;

  showCustom() {
    if (ToastExample.customKey) return;
    ToastExample.customKey = Toast.show({
      text: 'Toast custom',
      icon: <ActivityIndicator size="large" color={Theme.toastIconTintColor} />,
      position: 'top',
      duration: 1000000,
    });
  }

  hideCustom() {
    if (!ToastExample.customKey) return;
    Toast.hide(ToastExample.customKey);
    ToastExample.customKey = null;
  }

  renderPage() {
    let img = require('../images/faircup.jpg');
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={{ height: 20 }} />
        <ListRow
          title="Message"
          onPress={() => Toast.message('Toast message')}
          topSeparator="full"
        />
        <ListRow
          title="Success"
          onPress={() => Toast.success('Toast success')}
        />
        <ListRow title="Fail" onPress={() => Toast.fail('Toast fail')} />
        <ListRow title="Smile" onPress={() => Toast.smile('Toast smile')} />
        <ListRow title="Sad" onPress={() => Toast.sad('Toast sad')} />
        <ListRow title="Info" onPress={() => Toast.info('Toast info')} />
        <ListRow
          title="Stop"
          onPress={() => Toast.stop('Toast stop')}
          bottomSeparator="full"
        />
        <View style={{ height: 20 }} />
        <ListRow
          title="Show custom"
          onPress={() => this.showCustom()}
          topSeparator="full"
        />
        <ListRow
          title="Hide custom"
          onPress={() => this.hideCustom()}
          bottomSeparator="full"
        />
      </ScrollView>
    );
  }
}
