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
        <ScrollView horizontal>
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
      </ScrollView>
    </SafeAreaView>
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
    <View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{color: '#FFFFFF'}}>{name}</Text>
        <Text style={{color: '#76787E'}}>{shortName}</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={logo} />
        <Text style={{color: '#FFFFFF'}}>{value}</Text>
        {isIncrease ? (
          <Text style={{color: '#00FF00'}}>▲</Text>
        ) : (
          <Text style={{color: '#FF0000'}}>▼</Text>
        )}
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
});
