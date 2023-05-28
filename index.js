/**
 * @format
 */

import { AppRegistry, I18nManager } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { LogBox } from 'react-native';

AppRegistry.registerComponent(appName, () => App);

/**
 * Ignore Version WARN | Disable RTL
 */
LogBox.ignoreLogs(['new NativeEventEmitter']);