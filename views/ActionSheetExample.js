import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView } from 'react-native';

import { NavigationPage, ListRow, ActionSheet, Label } from 'widow-ui';

export default class ActionSheetExample extends NavigationPage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'ActionSheet',
    showBackButton: true,
  };

  show(modal) {
    let items = [
      { title: 'Say hello', onPress: () => alert('Hello') },
      { title: 'Do nothing' },
      { title: 'Disabled', disabled: true },
    ];
    let cancelItem = { title: 'Cancel' };
    ActionSheet.show(items, cancelItem, { modal });
  }

  renderPage() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={{ height: 20 }} />
        <ListRow
          title="Default"
          onPress={() => this.show(false)}
          topSeparator="full"
        />
        <ListRow
          title="Modal"
          onPress={() => this.show(true)}
          bottomSeparator="full"
        />
      </ScrollView>
    );
  }
}
