import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#16162A',
    marginTop: 12,
    height: 75,
    borderStyle: 'solid',
    borderColor: '#24253D',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 16,
    paddingLeft: 16,
    shadowOffset: { width: 4, height: 4 },
    shadowColor: '#0B0D13',
    shadowOpacity: 1,
    borderRadius: 12,
  },
  asseetContainer: {
    flexDirection: 'row',
  },
  rateContainer: {
    width: 100,
    alignItems: 'flex-end',
  },
  paragraph: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F4F2FE',
    textTransform: 'uppercase',
  },
  label: {
    fontSize: 14,
    color: '#9393A5',
  },
  logo: {
    height: 30,
    width: 30,
    marginRight: 16,
  },
});
