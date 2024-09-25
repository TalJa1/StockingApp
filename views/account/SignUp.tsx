import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {container, vh, vw} from '../../services/styleSheet';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBar';
import {stocklineIcon} from '../../assets/svgXML';
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

  const handleInputChange = (field: string) => (text: string) => {
    setInputData(prevData => ({
      ...prevData,
      [field]: text,
    }));
  };

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
      <InputField
        placeholder="Mật khẩu"
        value={inputData.password}
        onChangeText={handleInputChange('password')}
      />
    </View>
  );
};

const InputField: React.FC<SignUpInputFieldProps> = ({
  onChangeText,
  placeholder,
  value,
}) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={'#76787E'}
      style={styles.inputField}
      secureTextEntry={placeholder === 'Mật khẩu'}
    />
  );
};

const HeaderView: React.FC = () => {
  return (
    <View style={styles.header}>
      {stocklineIcon(vw(10), vw(10))}
      <Text>Join Stockline</Text>
      <Text>Bắt tay vào hành trình đầu tư của bạn chỉ với đ20.000</Text>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: container,
  header: {
    rowGap: vh(2),
    paddingHorizontal: vw(5),
    paddingVertical: vh(2),
  },
  inputField: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 16,
    paddingHorizontal: vw(3),
  },
  mainContainer: {
    paddingHorizontal: vw(5),
    rowGap: vh(1.5),
  },
});
