/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {centerAll, container, vh, vw} from '../../services/styleSheet';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBar';
import {useNavigation, useRoute} from '@react-navigation/native';
import {backIcon, notiIcon} from '../../assets/svgXML';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StockHomeData3} from '../../services/renderData';

const ChartInfor = () => {
  useStatusBar('#1A1A1A');
  const route = useRoute();
  const {itemIndex} = route.params as {itemIndex: number};

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <BannerView itemIndex={itemIndex} />
      </ScrollView>
    </SafeAreaView>
  );
};

const BannerView: React.FC<{itemIndex: number}> = ({itemIndex}) => {
  const amount = parseFloat(StockHomeData3[itemIndex].amount);
  const newAmount = amount + amount * 0.0014;
  return (
    <View style={styles.stockContainer}>
      <View style={styles.stock3Container}>
        <View style={styles.stockContent}>
          <View style={styles.stockContent1}>
            <Image source={StockHomeData3[itemIndex].logo} />
            <View>
              <Text style={styles.stock3Title}>
                {StockHomeData3[itemIndex].shortName}
              </Text>
              <Text style={styles.stock3Sub}>
                {StockHomeData3[itemIndex].name}
              </Text>
            </View>
          </View>
          {notiIcon(vw(5), vw(5), 'black')}
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: vw(3),
        }}>
        <View>
          <Text style={styles.whiteTxt}>
            ${StockHomeData3[itemIndex].amount}
          </Text>
          <Text>
            <Text style={styles.yellowTxt}>++33,82</Text>{' '}
            <Text style={styles.greenTxt}>(+4,91%%)</Text>{' '}
            <Text style={styles.greyTxt}>Tháng trước</Text>
          </Text>
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <Text style={styles.whiteTxt}>${newAmount.toFixed(2)}</Text>
          <Text style={styles.yellowTxt}>+0,14 (+0,030%)</Text>
        </View>
      </View>
    </View>
  );
};

const Header: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View style={[centerAll, {paddingVertical: vh(3)}]}>
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => {
          navigation.goBack();
        }}>
        {backIcon(vw(6), vw(6), '#76787E')}
      </TouchableOpacity>
      <Text style={styles.headerTxt}>Thông tin cổ phiếu</Text>
    </View>
  );
};

export default ChartInfor;

const styles = StyleSheet.create({
  container: container,
  headerTxt: {color: '#FFFFFF', fontSize: 14, fontWeight: '600'},
  backBtn: {
    position: 'absolute',
    left: vw(5),
    borderWidth: 1,
    borderColor: '#76787E',
    borderRadius: 10,
    padding: vw(1.5),
  },
  stockContainer: {
    paddingHorizontal: vw(5),
    rowGap: vh(2),
  },
  stock3Container: {
    borderRadius: 6,
    width: '100%',
    backgroundColor: '#FFED4B',
    paddingVertical: vh(1.5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: vw(2),
  },
  stock3Title: {
    color: '#1A1A1A',
    fontSize: 14,
    fontWeight: '600',
  },
  stock3Sub: {
    color: '#76787E',
    fontSize: 12,
    fontWeight: '400',
  },
  stockContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  stockContent1: {
    flexDirection: 'row',
    columnGap: vw(2),
    alignItems: 'center',
  },
  yellowTxt: {
    color: '#FFED4B',
    fontSize: 12,
    fontWeight: '500',
  },
  greenTxt: {
    color: '#5DC172',
    fontSize: 12,
    fontWeight: '500',
  },
  greyTxt: {
    color: '#76787E',
    fontSize: 12,
    fontWeight: '500',
  },
  whiteTxt: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});
