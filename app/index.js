import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
    // View serves as render for react-native
    // Text serves as a h1 tag for react-native
    // Button only works as a closing tag
  return (
    <View style={styles.container}> 
      <Text>Hello World!!</Text>
      <Text>I am testing the server</Text>
      <Button title="ee oo" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({ // this is how we style the components
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
