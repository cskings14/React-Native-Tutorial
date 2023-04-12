import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!!</Text>
      <Text>I am testing the server</Text>
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
