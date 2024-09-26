import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {container} from '../../services/styleSheet';

const PhoneInput = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text>PhoneInput</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PhoneInput;

const styles = StyleSheet.create({
  container: container,
});
