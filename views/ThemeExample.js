import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, ActivityIndicator } from 'react-native';

import { Theme, NavigationPage, ListRow, PullPicker } from 'widow-ui';

export default class ThemeExample extends NavigationPage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'Theme',
    showBackButton: true,
  };

  changeTheme() {
    PullPicker.show(
      'Select theme',
      Object.keys(Theme.themes),
      -1,
      (item, index) => {
        Theme.set(Theme.themes[item]);
        this.navigator.popToTop();
      }
    );
  }

  renderPage() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={{ height: 20 }} />
        <ListRow
          title="Select theme"
          onPress={() => this.changeTheme()}
          topSeparator="full"
          bottomSeparator="full"
        />
      </ScrollView>
    );
  }
}
