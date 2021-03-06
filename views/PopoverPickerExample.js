import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView } from 'react-native';

import { NavigationPage, ListRow, PopoverPicker } from 'widow-ui';

export default class PopoverPickerExample extends NavigationPage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'PopoverPicker',
    showBackButton: true,
  };

  constructor(props) {
    super(props);
    this.items = [
      'Apple',
      'Banana',
      'Cherry',
      'Durian',
      'Filbert',
      'Grape',
      'Hickory',
      'Lemon',
      'Mango',
    ];
    Object.assign(this.state, {
      selectedIndex: null,
      modalSelectedIndex: null,
    });
  }

  show(view) {
    view.measureInWindow((x, y, width, height) => {
      console.log(x, y, width, height);
      PopoverPicker.show(
        { x, y, width, height },
        this.items,
        this.state.selectedIndex,
        (item, index) => this.setState({ selectedIndex: index })
      );
    });
  }

  showModal(view) {
    view.measureInWindow((x, y, width, height) => {
      PopoverPicker.show(
        { x, y, width, height },
        this.items,
        this.state.modalSelectedIndex,
        (item, index) => this.setState({ modalSelectedIndex: index }),
        { modal: true }
      );
    });
  }

  renderPage() {
    let { selectedIndex, modalSelectedIndex } = this.state;
    let selected = selectedIndex || selectedIndex === 0
      ? this.items[selectedIndex]
      : null;
    let modalSelected = modalSelectedIndex || modalSelectedIndex === 0
      ? this.items[modalSelectedIndex]
      : null;
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={{ height: 20 }} />
        <ListRow
          title="Default"
          detail={selected}
          ref="defaultRow"
          onPress={() => this.show(this.refs['defaultRow'])}
          topSeparator="full"
        />
        <ListRow
          title="Modal"
          detail={modalSelected}
          ref="modalRow"
          onPress={() => this.showModal(this.refs['modalRow'])}
          bottomSeparator="full"
        />
      </ScrollView>
    );
  }
}
