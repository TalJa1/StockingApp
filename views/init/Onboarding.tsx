/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {centerAll, container, vh, vw} from '../../services/styleSheet';
import useStatusBar from '../../services/useStatusBar';
import {stocklineIcon} from '../../assets/svgXML';
import {InitPageData} from '../../services/renderData';
import {InitPageProps} from '../../services/typeProps';

const Onboarding = () => {
  useStatusBar('#1A1A1A');
  const [showMainLayout, setShowMainLayout] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMainLayout(true);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <SafeAreaView style={[styles.container, {paddingHorizontal: vw(5)}]}>
      <ScrollView contentContainerStyle={{flex: 1}}>
        {showMainLayout ? <MainLayout /> : <StocklineInit />}
      </ScrollView>
    </SafeAreaView>
  );
};

const MainLayout: React.FC = () => {
  const [renderData, setRenderData] = useState<InitPageProps>(InitPageData[0]);
  const [currentPage, setCurrentPage] = useState(0);
  console.log('currentPage', currentPage);

  useEffect(() => {
    setRenderData(InitPageData[0]);
  }, []);

  const handleMomentumScrollEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const pageIndex = Math.round(offsetX / vw(90)); // Divide by the width of each page
    setCurrentPage(pageIndex);
  };

  return (
    <View style={{paddingVertical: vh(2), flex: 1}}>
      <TouchableOpacity style={styles.btnSkip}>
        <Text style={styles.skipTxT}>Bỏ qua</Text>
      </TouchableOpacity>
      <View style={[styles.upperView, centerAll]}>
        <Image style={styles.mainImg} source={renderData.img} />
      </View>
      <View style={styles.lowerView}>
        <FlatList
          data={InitPageData}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          snapToAlignment="center"
          keyExtractor={(item, index) => index.toString()}
          onMomentumScrollEnd={handleMomentumScrollEnd}
          renderItem={({item}) => (
            <View style={{width: vw(90), rowGap: vh(2)}}>
              <Text style={styles.lowerTitle}>{item.title}</Text>
              <Text style={styles.lowerdescription}>{item.description}</Text>
            </View>
          )}
        />
        <View style={styles.pagination}>
          {InitPageData.map((_, index) => (
            <View
              key={index}
              style={[styles.dot, currentPage === index && styles.activeDot]}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const StocklineInit: React.FC = () => {
  return (
    <View style={[centerAll, {flex: 1}]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {stocklineIcon(vw(13), vw(13))}
        <Text style={styles.stocklineTxT}> Stockline</Text>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: container,
  stocklineTxT: {
    color: '#FFFFFF',
    fontSize: 40,
    fontWeight: '600',
  },
  btnSkip: {
    alignSelf: 'flex-end',
  },
  skipTxT: {
    color: '#FFED4B',
    fontSize: 16,
    fontWeight: '500',
  },
  mainImg: {
    height: vw(100),
    resizeMode: 'contain',
  },
  upperView: {
    zIndex: 1,
    flex: 1,
    position: 'relative',
    top: vh(5),
  },
  lowerView: {
    flex: 1,
    zIndex: 2,
    backgroundColor: '#1A1A1A',
    alignItems: 'center',
    rowGap: vh(2),
  },
  lowerTitle: {
    marginTop: vh(3),
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
  },
  lowerdescription: {
    textAlign: 'center',
    color: '#76787E',
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: vh(2),
    alignSelf: 'center',
  },
  dot: {
    width: vw(10),
    height: vh(1),
    backgroundColor: '#76787E',
    borderRadius: vw(20),
  },
  activeDot: {
    backgroundColor: '#FFED4B',
  },
});
