import {StyleSheet} from 'react-native';
import Colors from '@app/constants';
const mainTheme = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  primaryButton: {
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 5,
    borderRadius: 7,
  },
  secondaryButton: {
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.secondary,
    paddingVertical: 15,
    paddingHorizontal: 61,
    borderRadius: 7,
  },
  tertiaryButton: {
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  outlineButton: {
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 61,
    borderRadius: 7,
    buttonText: {
      fontFamily: 'dm-sans',
      textAlign: 'center',
      color: 'black',
    },
  },
  primaryChip: {
    textAlign: 'center',
    backgroundColor: '#14BBA941',
    borderRadius: 50,
    minWidth: 20,
    minHeight: 10,
    paddingHorizontal: 16,
    paddingVertical: 4,
    chipText: {
      color: '#14BBA9',
    },
  },

  secondaryChip: {
    textAlign: 'center',
    backgroundColor: '#24212139',
    borderRadius: 50,
    minWidth: 20,
    minHeight: 10,
    paddingHorizontal: 16,
    paddingVertical: 4,
    chipText: {
      color: 'black',
    },
  },

  defaultInput: {
    width: '100%',
    container: {
      marginBottom: 20,
      marginTop: 20,
      backgroundColor: '#fff',
      paddingTop: 5,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: '#bdbdbd',
      borderRadius: 7,
      width: '100%',
      height: 47,
      alignSelf: 'center',
    },
    input: {
      fontSize: 13,
      height: 35,
      color: '#000',
      marginBottom: 10,
    },
    label: {
      position: 'relative',
      color: '#9B9A9A',
      fontSize: 13,
    },
    errorLabel: {
      position: 'relative',
      color: 'red',
      fontSize: 13,
      alignSelf: 'flex-end',
    },
    animatedStyle: {
      left: 9,
      position: 'absolute',
      top: 10,
      borderRadius: 90,
      zIndex: 10000,
    },
  },
});

export default mainTheme;
