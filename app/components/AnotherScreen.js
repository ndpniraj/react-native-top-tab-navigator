import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const AnotherScreen = props => {
  console.log(props.route.params);
  return (
    <View style={styles.container}>
      <Text>AnotherScreen</Text>
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

export default AnotherScreen;
