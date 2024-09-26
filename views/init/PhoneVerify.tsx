import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {container, vh, vw} from '../../services/styleSheet';
import useStatusBar from '../../services/useStatusBar';
import PhoneInput from 'react-native-phone-input';
import CountryPicker from 'react-native-country-picker-modal';

const PhoneVerify = () => {
  useStatusBar('#1A1A1A');

  const phoneRef = React.useRef<PhoneInput>(null);
  const [pickerData, setPickerData] = useState<any>(null);
  const [countryCode, setCountryCode] = useState('VN');
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (phoneRef.current) {
      setPickerData(phoneRef.current.getPickerData());
    }
  }, []);

  const onSelect = (selectedCountry: any) => {
    setCountryCode(selectedCountry.cca2);
    if (phoneRef.current) {
      phoneRef.current.selectCountry(selectedCountry.cca2.toLowerCase());
    }
  };

  const onPressFlag = () => {
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.phoneContainer}>
          <Text>Nhập số điện thoại</Text>
          <Text>
            Bạn sẽ nhận được mã gồm 4 chữ số để xác minh số điện thoại
          </Text>
          <PhoneInput
            ref={phoneRef}
            onPressFlag={onPressFlag}
            initialCountry="vn"
            style={styles.phoneInput}
            textStyle={styles.inputTxt}
          />
          {modalVisible && (
            <CountryPicker
              withFlag
              withFilter
              withAlphaFilter
              withCallingCode
              onSelect={onSelect}
              onClose={() => setModalVisible(false)}
              visible={modalVisible}
              countryCode={'VN'}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PhoneVerify;

const styles = StyleSheet.create({
  container: container,
  phoneInput: {
    flex: 1,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 16,
    overflow: 'hidden',
    paddingHorizontal: vw(3),
    paddingVertical: vh(2),
  },
  inputTxt: {
    color: '#76787E',
  },
  phoneContainer: {
    paddingHorizontal: vw(5),
  },
});
