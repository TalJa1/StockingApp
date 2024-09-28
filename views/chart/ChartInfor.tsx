import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {container} from '../../services/styleSheet';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBar';
import {useRoute} from '@react-navigation/native';

const ChartInfor = () => {
  useStatusBar('#1A1A1A');
  const route = useRoute();
  const {itemIndex} = route.params as {itemIndex: number};

  console.log(itemIndex);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text>ChartInfor</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChartInfor;

const styles = StyleSheet.create({
  container: container,
});
