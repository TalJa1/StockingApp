import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {container} from '../../services/styleSheet';
import {SafeAreaView} from 'react-native-safe-area-context';

const OtpVerify = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text>OtpVerify</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OtpVerify;

const styles = StyleSheet.create({
  container: container,
});
