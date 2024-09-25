/* eslint-disable react-hooks/exhaustive-deps */
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {container, vh, vw} from '../../services/styleSheet';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBar';
import {passwordHiddenIcon, stocklineIcon} from '../../assets/svgXML';
import {SignUpInputFieldProps} from '../../services/typeProps';

const SignUp = () => {
  useStatusBar('#1A1A1A');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HeaderView />
        <MainForm />
      </ScrollView>
    </SafeAreaView>
  );
};

const MainForm: React.FC = () => {
  const [inputData, setInputData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [emailWarning, setEmailWarning] = useState('');

  const handleInputChange = (field: string) => (text: string) => {
    setInputData(prevData => ({
      ...prevData,
      [field]: text,
    }));
    checkIfAllFieldsFilled();
  };

  const checkIfAllFieldsFilled = () => {
    const {username, email, password} = inputData;
    const isFormFilled = !!(username && email && password);
    setIsFormValid(isFormFilled);
  };

  const checkEmailValidation = () => {
    const {email} = inputData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailValid = emailRegex.test(email);
    setIsEmailValid(emailValid);
    setEmailWarning(emailValid ? '' : 'Email không hợp lệ');
    return emailValid;
  };

  const handleSubmit = () => {
    checkEmailValidation();
    if (!isEmailValid) {
      return;
    }
    // Proceed with form submission
  };

  useEffect(() => {
    checkIfAllFieldsFilled();
  }, [inputData]);

  return (
    <View style={styles.mainContainer}>
      <InputField
        placeholder="Tên đăng nhập"
        value={inputData.username}
        onChangeText={handleInputChange('username')}
      />
      <InputField
        placeholder="Email"
        value={inputData.email}
        onChangeText={handleInputChange('email')}
      />
      {emailWarning ? (
        <Text style={styles.errorText}>{emailWarning}</Text>
      ) : null}
      <InputField
        placeholder="Mật khẩu"
        value={inputData.password}
        onChangeText={handleInputChange('password')}
      />
      <TouchableOpacity
        style={[styles.btnMain, !isFormValid && styles.btnDisabled]}
        disabled={!isFormValid}
        onPress={handleSubmit}>
        <Text style={styles.btnMaintxt}>Tiếp tục</Text>
      </TouchableOpacity>
    </View>
  );
};

const InputField: React.FC<SignUpInputFieldProps> = ({
  onChangeText,
  placeholder,
  value,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={'#76787E'}
        style={styles.inputField}
        secureTextEntry={placeholder === 'Mật khẩu' && !isPasswordVisible}
      />
      {placeholder === 'Mật khẩu' && (
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          style={styles.iconButton}>
          {passwordHiddenIcon(vw(6), vw(6))}
        </TouchableOpacity>
      )}
    </View>
  );
};

const HeaderView: React.FC = () => {
  return (
    <View style={styles.header}>
      {stocklineIcon(vw(10), vw(10))}
      <Text style={styles.label}>Join Stockline</Text>
      <Text style={styles.underLabel}>
        Bắt tay vào hành trình đầu tư của bạn chỉ với đ20.000
      </Text>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: container,
  header: {
    rowGap: vh(2),
    paddingHorizontal: vw(5),
    paddingVertical: vh(4),
  },
  inputField: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 16,
    paddingHorizontal: vw(3),
  },
  mainContainer: {
    paddingHorizontal: vw(5),
    rowGap: vh(1.5),
  },
  btnMain: {
    backgroundColor: '#FFED4B',
    padding: vw(3),
    borderRadius: 16,
    alignItems: 'center',
  },
  btnMaintxt: {
    color: 'black',
    fontWeight: '600',
  },
  btnDisabled: {
    backgroundColor: '#D3D3D3',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    position: 'absolute',
    right: vw(3),
  },
  underLabel: {
    color: '#76787E',
  },
  label: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});
