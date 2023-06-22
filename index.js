/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

if (Platform.OS === 'android') {
    AppRegistry.registerHeadlessTask(
      'socketService',
      () => socketService
    );
  }
AppRegistry.registerComponent(appName, () => App);
