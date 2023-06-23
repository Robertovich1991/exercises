/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import socketServices from './android/app/src/utils/socketService';

if (Platform.OS === 'android') {
    AppRegistry.registerHeadlessTask(
      'socketService',
      () => socketServices
    );
  }
AppRegistry.registerComponent(appName, () => App);
