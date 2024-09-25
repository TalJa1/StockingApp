/* eslint-disable react-native/no-inline-styles */
import {
  Image,
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

  useEffect(() => {
    setRenderData(InitPageData[0]);
  }, []);

  return (
    <View style={{paddingVertical: vh(2), flex: 1}}>
      <TouchableOpacity style={styles.btnSkip}>
        <Text style={styles.skipTxT}>Bỏ qua</Text>
      </TouchableOpacity>
      <View style={[styles.upperView, centerAll]}>
        <Image style={styles.mainImg} source={renderData.img} />
      </View>
      <View style={styles.lowerView}>
        <Text style={styles.lowerTitle}>{renderData.title}</Text>
        <Text style={styles.lowerdescription}>{renderData.description}</Text>
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
});
