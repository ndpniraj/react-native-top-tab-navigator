import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        onPress={() =>
          navigation.navigate('AnotherScreen', {
            someThing: 'This is for testing',
          })
        }
        title='Take Me To Another Screen'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
