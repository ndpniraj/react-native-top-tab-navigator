import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Friends = () => {
  return (
    <View style={styles.container}>
      <Text>Friends</Text>
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

export default Friends;
