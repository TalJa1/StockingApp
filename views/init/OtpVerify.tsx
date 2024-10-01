import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {container, vh, vw} from '../../services/styleSheet';
import {SafeAreaView} from 'react-native-safe-area-context';
import {backIcon} from '../../assets/svgXML';
import useStatusBar from '../../services/useStatusBar';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import OTPTextInput from 'react-native-otp-textinput';
import {Notifications} from 'react-native-notifications';

const OtpVerify = () => {
  useStatusBar('#1A1A1A');
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [otp, setOtp] = useState('');
  const [otpBackgroundColors, setOtpBackgroundColors] = useState<string[]>([
    'black',
    'black',
    'black',
    'black',
    'black',
  ]);

  useFocusEffect(
    useCallback(() => {
      Notifications.registerRemoteNotifications();

      Notifications.events().registerNotificationReceivedForeground(
        (notification, completion) => {
          console.log(
            `Notification received in foreground: ${notification.title} : ${notification.body}`,
          );
          completion({alert: true, sound: true, badge: false});
        },
      );

      Notifications.events().registerNotificationOpened(
        (notification, completion) => {
          console.log(`Notification opened: ${notification.payload}`);
          completion();
        },
      );

      Notifications.postLocalNotification({
        title: 'OTP Verification',
        body: 'Please enter the OTP sent to your phone.',
        sound: 'chime.aiff',
        identifier: '',
        payload: undefined,
        badge: 0,
        type: '',
        thread: '',
      });

      return () => {
        // Clean up any listeners if necessary
      };
    }, []),
  );

  const handleOtpChange = (otpValue: string) => {
    setOtp(otpValue);
  };

  const handleCellTextChange = (text: string, index: number) => {
    const newBackgroundColors = [...otpBackgroundColors];
    newBackgroundColors[index] = text ? 'yellow' : 'black';
    setOtpBackgroundColors(newBackgroundColors);
  };

  const handleVerify = () => {
    // Add your OTP verification logic here
    if (otp.length === 5) {
      // Assuming OTP length is 5
      console.log('OTP Verified:', otp);
      // Navigate to the next screen or perform any action
    } else {
      console.log('Invalid OTP');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.phoneContainer}>
          <TouchableOpacity
            style={styles.btnBack}
            onPress={() => navigation.goBack()}>
            {backIcon(vw(7), vw(7))}
          </TouchableOpacity>
          <View style={{rowGap: vh(1)}}>
            <Text style={styles.label}>Nhập mã xác minh</Text>
            <Text style={styles.desp}>
              Chúng tôi đã gửi mã xác minh đến số điện thoại di động của bạn
            </Text>
          </View>
          <View>
            <OTPTextInput
              handleTextChange={handleOtpChange}
              inputCount={5}
              containerStyle={styles.otpContainer}
              textInputStyle={styles.otpInput}
              tintColor="#FFED4B"
              offTintColor="#FFED4B"
              handleCellTextChange={handleCellTextChange}
            />
          </View>
          <TouchableOpacity style={styles.btnSendOTP} onPress={handleVerify}>
            <Text style={styles.btnOtptxt}>Xác minh tài khoản</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OtpVerify;

const styles = StyleSheet.create({
  container: container,
  phoneContainer: {
    paddingHorizontal: vw(5),
    flex: 1,
    paddingVertical: vh(2),
    rowGap: vh(2),
  },
  btnSendOTP: {
    backgroundColor: '#FFED4B',
    padding: vw(3),
    borderRadius: 16,
    alignItems: 'center',
    marginVertical: vh(2),
  },
  btnOtptxt: {
    color: '#1A1A1A',
    fontWeight: '600',
    fontSize: 14,
  },
  label: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
  desp: {
    color: '#666D80',
    fontSize: 14,
    fontWeight: '400',
  },
  btnBack: {
    padding: vw(2),
    borderWidth: 1,
    borderColor: '#76787E',
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  otpContainer: {
    marginVertical: vh(2),
  },
  otpInput: {
    borderWidth: 1,
    borderColor: '#FFED4B',
    borderRadius: 12,
    width: vw(15),
    height: vw(15),
    textAlign: 'center',
    color: '#FFED4B',
  },
});
