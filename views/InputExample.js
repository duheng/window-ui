import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, Text } from 'react-native';

import { NavigationPage, ListRow, Input, Label } from 'widow-ui';

export default class InputExample extends NavigationPage {
  static defaultProps = {
    ...NavigationPage.defaultProps,
    title: 'Input',
    showBackButton: true,
  };

  constructor(props) {
    super(props);
    Object.assign(this.state, {
      valueSM: 'Size sm',
      valueMD: 'Size md',
      valueLG: 'Size lg',
      valueReadonly: 'Readonly',
      valueDisable: 'Disable',
      valueCustom: 'Custom',
    });
  }

  renderPage() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={{ height: 20 }} />
        <ListRow
          title="Size sm"
          detail={
            <Input
              style={{ width: 200 }}
              size="sm"
              value={this.state.valueSM}
              onChangeText={text => this.setState({ valueSM: text })}
            />
          }
          topSeparator="full"
        />
        <ListRow
          title="Size md"
          detail={
            <Input
              style={{ width: 200 }}
              size="md"
              value={this.state.valueMD}
              onChangeText={text => this.setState({ valueMD: text })}
            />
          }
        />
        <ListRow
          title="Size lg"
          detail={
            <Input
              style={{ width: 200 }}
              size="lg"
              value={this.state.valueLG}
              onChangeText={text => this.setState({ valueLG: text })}
            />
          }
          bottomSeparator="full"
        />
        <View style={{ height: 20 }} />
        <ListRow
          title="Readonly"
          detail={
            <Input
              style={{ width: 200 }}
              editable={false}
              value={this.state.valueReadonly}
            />
          }
          topSeparator="full"
        />
        <ListRow
          title="Disabled"
          detail={
            <Input
              style={{ width: 200 }}
              disabled={true}
              value={this.state.valueDisable}
            />
          }
          bottomSeparator="full"
        />
        <View style={{ height: 20 }} />
        <ListRow
          title="Custom"
          detail={
            <Input
              style={{
                width: 200,
                backgroundColor: '#rgba(238, 169, 91, .1)',
                borderColor: '#8a6d3b',
                color: '#8a6d3b',
                textAlign: 'right',
              }}
              value={this.state.valueCustom}
              onChangeText={text => this.setState({ valueCustom: text })}
            />
          }
          topSeparator="full"
          bottomSeparator="full"
        />
      </ScrollView>
    );
  }
}
