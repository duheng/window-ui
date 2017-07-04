import { AppRegistry } from 'react-native';
import React from 'react';
import { TeaNavigator, Theme } from 'widow-ui';
import TeasetExample from 'widow-ui/views/Home';

Theme.set({
  backButtonTitle: '返回',
});

class App extends React.PureComponent {
  render() {
    return (
      <TeaNavigator
        rootView={<TeasetExample title="Widow-UI" showBackButton={false} />}
      />
    );
  }
}

AppRegistry.registerComponent('example', () => App);
