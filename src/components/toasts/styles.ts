import {StyleSheet, Dimensions, StatusBar} from 'react-native';

const styles = StyleSheet.create({
  main: {
    height: 100,
    width: Dimensions.get('window').width,
    position: 'absolute',
    zIndex: 99999,
    paddingTop: StatusBar.currentHeight,
  },
  container: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: '100%',
  },
  title: {
    textAlign: 'center',
    color: '#ffffff',
    width: 200,
  },
  button: {
    flex: 1,
    fontWeight: 'bold',
    position: 'absolute',
    top: 30,
    right: Dimensions.get('window').width / 12,
  },
});

export default styles;
