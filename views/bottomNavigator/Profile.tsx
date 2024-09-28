/* eslint-disable react-native/no-inline-styles */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {centerAll, container, vh, vw} from '../../services/styleSheet';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBar';
import {ProfileRenderView} from '../../services/renderData';
import {nextIcon} from '../../assets/svgXML';

const Profile = () => {
  useStatusBar('#1A1A1A');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <AccountRender />
        <Main />
      </ScrollView>
    </SafeAreaView>
  );
};

const AccountRender: React.FC = () => {
  return <View></View>;
};

const Main: React.FC = () => {
  return (
    <View style={styles.container1}>
      {ProfileRenderView.map((item, index) => {
        return (
          <View key={index} style={styles.row}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                columnGap: vw(5),
              }}>
              <View style={styles.icon}>{item.icon}</View>
              <Text style={styles.label}>{item.label}</Text>
            </View>
            <View style={styles.nextIcon}>{nextIcon(vw(8), vw(8))}</View>
          </View>
        );
      })}
    </View>
  );
};

const Header: React.FC = () => {
  return (
    <View style={[centerAll, styles.headerContainer]}>
      <Text style={styles.headertxt}>Tài khoản</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: container,
  headertxt: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  headerContainer: {
    paddingVertical: vh(2),
  },
  container1: {
    rowGap: vh(4),
    paddingHorizontal: vw(5),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    width: 24,
    height: 24,
  },
  label: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  nextIcon: {
    width: 24,
    height: 24,
  },
});
