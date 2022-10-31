import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
});

export const baseStyles = StyleSheet.create({
  main: {
    zIndex: 999,
  },
  canvas: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    height: Dimensions.get('window').height,
  },
  title: {
    fontSize: 20,
    color: '#3E3D3D',
    marginTop: 15,
    marginBottom: 10,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 14,
    color: '#3E3D3D',
    textAlign: 'center',
    marginBottom: 30,
  },
  modalView: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    paddingLeft: 35,
    paddingRight: 35,
    paddingTop: 40,
    paddingBottom: 40,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalViewSecondary: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  modalViewThird: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
  },
  transactionFilterView: {
    backgroundColor: '#D0D3D9',
    padding: 30,
  },
  transactionButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  transactionText: {
    fontSize: 19,
    textAlign: 'center',
    color: '#767676',
  },
  modalButton: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  buttonGroup: {
    marginTop: 20,
  },
  button: {
    marginBottom: 20,
  },
  textStyle: {
    color: '#000000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  loaderImage: {
    width: '50%',
    height: 210,
    alignSelf: 'center',
  },
});

export default styles;
