import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Navigator from './navigation';
import {ModalContextProvider, ToastContextProvider} from '@app/context';
import {ModalManager} from '@app/components/modals';
import {ToastManager} from '@app/components/toasts';
import 'react-native-gesture-handler';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[styles.app, backgroundStyle]}>
      <ModalContextProvider>
        <ToastContextProvider>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <ToastManager />
          <ModalManager />
          <Navigator />
        </ToastContextProvider>
      </ModalContextProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

export default App;
