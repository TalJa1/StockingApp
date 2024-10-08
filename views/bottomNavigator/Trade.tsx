import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {container} from '../../services/styleSheet';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBar';

const Trade = () => {
  useStatusBar('#1A1A1A');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Trade;

const styles = StyleSheet.create({
  container: container,
});
