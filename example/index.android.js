import { AppRegistry } from 'react-native';
import React from 'react';
import { TeaNavigator } from 'widow-ui';
import TeasetExample from 'widow-ui/views/Home';

AppRegistry.registerComponent('example', () => {
  return <TeaNavigator rootView={<TeasetExample />} />;
});
