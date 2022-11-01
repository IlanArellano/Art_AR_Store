import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 4,
  },
  container: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    borderRadius: 10,
    padding: 5,
  },
  cardInformation: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    marginVertical: 5,
  },
  cardValue: {
    fontWeight: 'bold',
  },
  noCard: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 30,
  },
  iconButton: {
    width: 50,
    height: 35,
  },
  homeIconButton: {
    width: 30,
    height: 30,
  },
  input: {
    fontSize: 14,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'rgba(0,0,0,0.1)',
    color: '#000000',
  },
  cartTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  cardInformationSeparator: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardExp: {
    flex: 2,
    marginRight: 5,
  },
  cardCVV: {
    flex: 1,
  },
  cardAddButton: {
    marginVertical: 10,
  },
  cardCancelButton: {
    marginVertical: 10,
    backgroundColor: '#FC5454',
  },
});

export default styles;
