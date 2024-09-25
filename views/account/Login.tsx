import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {container, vh, vw} from '../../services/styleSheet';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBar';
import {stocklineIcon} from '../../assets/svgXML';

const Login = () => {
  useStatusBar('#1A1A1A');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HeaderView />
      </ScrollView>
    </SafeAreaView>
  );
};

const HeaderView: React.FC = () => {
  return (
    <View style={styles.header}>
      {stocklineIcon(vw(10), vw(10))}
      <Text style={styles.label}>
        Xin chào <Image source={require('../../assets/init/wavingHand.png')} />
      </Text>
      <Text style={styles.underLabel}>
        Chào mừng đã quay trở lại, hãy đăng nhập:
      </Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: container,
  header: {
    rowGap: vh(2),
    paddingHorizontal: vw(5),
    paddingVertical: vh(4),
  },
  underLabel: {
    color: '#76787E',
  },
  label: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});
