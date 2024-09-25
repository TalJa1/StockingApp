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
import {appleIcon, goggleIcon, stocklineIcon} from '../../assets/svgXML';

const Login = () => {
  useStatusBar('#1A1A1A');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HeaderView />
        <FooterView />
      </ScrollView>
    </SafeAreaView>
  );
};

const FooterView: React.FC = () => {
  const handleLoginPress = () => {
    // Handle the login press event
    console.log('Đăng nhập pressed');
  };

  return (
    <View style={styles.footerContainer}>
      <View style={styles.lineContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>Hoặc có thể tiếp tục</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <View style={styles.txtIconGrp}>
            {goggleIcon(vw(5), vw(5))}
            <Text style={styles.buttonText}>Google</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <View style={styles.txtIconGrp}>
            {appleIcon(vw(5), vw(5))}
            <Text style={styles.buttonText}>Apple</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={centerAll}>
        <View style={styles.loginContainer}>
          <Text style={styles.orText}>Bạn đã có tài khoản? </Text>
          <TouchableOpacity onPress={handleLoginPress}>
            <Text style={styles.loginText}>Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
  footerContainer: {
    paddingHorizontal: vw(5),
    alignItems: 'center',
    marginTop: vh(5),
    rowGap: vh(2),
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#76787E',
  },
  orText: {
    marginHorizontal: 10,
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  buttonContainer: {
    width: '100%',
    rowGap: vh(1),
  },
  button: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#76787E',
    backgroundColor: 'transparent',
    borderRadius: 6,
  },
  buttonText: {
    color: '#76787E',
    fontWeight: '500',
  },
  txtIconGrp: {flexDirection: 'row', alignItems: 'center', columnGap: vw(2)},
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginText: {
    color: '#FFED4B',
    fontWeight: '600',
  },
});
