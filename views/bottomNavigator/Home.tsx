/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import useStatusBar from '../../services/useStatusBar';
import {container, vh, vw} from '../../services/styleSheet';
import {SafeAreaView} from 'react-native-safe-area-context';
import {notiIcon, stocklineIcon, viewIcon} from '../../assets/svgXML';

const Home = () => {
  useStatusBar('#1A1A1A');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Header />
        <InforView />
      </ScrollView>
    </SafeAreaView>
  );
};

const InforView: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.inforContainer}>
      <View style={{rowGap: vh(1)}}>
        <Text style={styles.inforLabel}>Tổng danh mục đầu tư</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {isVisible ? (
            <Text style={styles.inforTxT}>$13,240.11 </Text>
          ) : (
            <Text style={styles.inforTxT}>$******* </Text>
          )}
          <TouchableOpacity
            onPress={() => {
              setIsVisible(!isVisible);
            }}>
            {viewIcon(vw(4), vw(4))}
          </TouchableOpacity>
        </View>
      </View>
      <Image source={require('../../assets/home/chart1.png')} />
    </View>
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
  inforContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inforTxT: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  inforLabel: {
    color: '#76787E',
  },
});
