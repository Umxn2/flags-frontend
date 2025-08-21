import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginVertical: 10,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 5,
  },

});
