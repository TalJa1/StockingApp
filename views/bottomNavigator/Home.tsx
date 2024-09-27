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
import {addIcon, notiIcon, stocklineIcon, viewIcon} from '../../assets/svgXML';
import {StockHomeData1Interface} from '../../services/typeProps';
import {stockHomeData1} from '../../services/renderData';

const Home = () => {
  useStatusBar('#1A1A1A');
  const stockData1: StockHomeData1Interface[] = stockHomeData1;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Header />
        <InforView />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{columnGap: vw(3), paddingVertical: vh(2)}}>
          {stockData1.map((item, index) => {
            return (
              <View key={index}>
                <RenderStockData1
                  name={item.name}
                  logo={item.logo}
                  shortName={item.shortName}
                  isIncrease={item.isIncrease}
                  value={item.value}
                />
              </View>
            );
          })}
        </ScrollView>
        <FollowView />
      </ScrollView>
    </SafeAreaView>
  );
};

const FollowView: React.FC = () => {
  return (
    <View>
      <View>
        <Text>Following</Text>
        {addIcon(vw(7), vw(7))}
      </View>
    </View>
  );
};

const RenderStockData1: React.FC<StockHomeData1Interface> = ({
  name,
  logo,
  shortName,
  isIncrease,
  value,
}) => {
  return (
    <View style={styles.stockContainer1}>
      <View style={styles.row}>
        {logo ? (
          <Image source={logo} style={styles.logo} />
        ) : (
          <View style={styles.circle}>
            <Text style={styles.circleText}>{shortName.charAt(0)}</Text>
          </View>
        )}
        <View style={styles.column}>
          <Text style={styles.nameText}>{name}</Text>
          <Text style={styles.shortNameText}>{shortName}</Text>
        </View>
        <Text
          style={[
            styles.valueText,
            isIncrease ? styles.increaseText : styles.decreaseText,
          ]}>
          {isIncrease ? '+' : '-'}
          {value}%
        </Text>
      </View>
    </View>
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
  stockContainer1: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#FFED4B',
    borderRadius: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#2C2C2C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    color: 'yellow',
    fontSize: 18,
    fontWeight: 'bold',
  },
  nameText: {
    color: '#FFFFFF',
  },
  shortNameText: {
    color: '#76787E',
  },
  valueText: {
    color: '#FFFFFF',
    marginLeft: 10,
  },
  increaseText: {
    color: '#00FF00',
    marginLeft: 5,
  },
  decreaseText: {
    color: '#FF0000',
    marginLeft: 5,
  },
});
