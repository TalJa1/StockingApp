import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {container} from '../../services/styleSheet';
import useStatusBar from '../../services/useStatusBar';

const PhoneVerify = () => {
  useStatusBar('#1A1A1A');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text>PhoneVerify</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PhoneVerify;

const styles = StyleSheet.create({
  container: container,
});
