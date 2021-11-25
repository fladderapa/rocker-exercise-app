import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E0F1E',
    paddingRight: 24,
    paddingLeft: 24,
  },
  topBar: {
    flex: 1.5,
    backgroundColor: '#0E0F1E',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  header: {
    color: '#ffd5af',
    fontSize: 22,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  body: {
    flex: 5,
    justifyContent: 'center',
  },
  footer: {
    flex: 0.5,
    backgroundColor: '#0E0F1E',
  },
  input: {
    backgroundColor: 'white',
    color: 'black',
    width: 300,
  },
});
