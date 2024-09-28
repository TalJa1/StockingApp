import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {container} from '../../services/styleSheet';

const BuyingVerify = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text>BuyingVerify</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BuyingVerify;

const styles = StyleSheet.create({
  container: container,
});
