import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBar';
import {container} from '../../services/styleSheet';

const PasswordModifying = () => {
  useStatusBar('#1A1A1A');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text>PasswordModifying</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PasswordModifying;

const styles = StyleSheet.create({
  container: container,
});
