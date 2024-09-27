import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {centerAll, container, vh} from '../../services/styleSheet';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBar';

const Chart = () => {
  useStatusBar('#1A1A1A');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
      </ScrollView>
    </SafeAreaView>
  );
};

const Header: React.FC = () => {
  return (
    <View style={[centerAll, styles.headerContainer]}>
      <Text style={styles.headertxt}>Danh mục đầu tư</Text>
    </View>
  );
};

export default Chart;

const styles = StyleSheet.create({
  container: container,
  headertxt: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  headerContainer: {
    paddingVertical: vh(2),
  },
});
