/* eslint-disable react-native/no-inline-styles */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useStatusBar from '../../services/useStatusBar';
import {container, vh, vw} from '../../services/styleSheet';
import {SafeAreaView} from 'react-native-safe-area-context';
import {notiIcon, stocklineIcon} from '../../assets/svgXML';

const Home = () => {
  useStatusBar('#1A1A1A');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Header />
      </ScrollView>
    </SafeAreaView>
  );
};

const Header: React.FC = () => {
  return (
    <View style={styles.headerContainer}>
      <View
        style={{columnGap: vw(2), flexDirection: 'row', alignItems: 'center'}}>
        {stocklineIcon(vw(7), vw(7))}
        <Text style={styles.headerTxT}>Stockline</Text>
      </View>
      {notiIcon(vw(7), vw(7))}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: container,
  scrollContainer: {flex: 1, paddingHorizontal: vw(5)},
  headerContainer: {
    paddingVertical: vh(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTxT: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '600',
  },
});
