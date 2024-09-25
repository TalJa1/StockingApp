import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {container} from '../../services/styleSheet';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBar';

const Chart = () => {
  useStatusBar('#1A1A1A');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text>Chart</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Chart;

const styles = StyleSheet.create({
  container: container,
});
