import React, {useState} from 'react';
import {Text} from 'react-native';
import IconInput from '@app/components/IconInput';
import CustomButton from '@app/components/CustomButton';
import BackgroundView from '@app/components/BackGroundView';
import type {RootStack} from '@app/types/navigation';
import styles from './styles';

interface LoginFields {
  email: string;
  password: string;
}

const initial: LoginFields = {
  email: '',
  password: '',
};

export default function LoginScreen({route, navigation}: RootStack<'Login'>) {
  const [fields, setFields] = useState(initial);
  const [showPass, setShowPass] = useState(false);

  const onChange = (key: keyof LoginFields) => (value: string) =>
    setFields(prev => ({...prev, [key]: value}));

  const onSubmit = () => {
    navigation.navigate('Home');
  };

  return (
    <BackgroundView source="background1" containerStyles={styles.main}>
      <Text style={styles.loginText}>Iniciar Sesion</Text>
      <IconInput
        value={fields.email}
        onChangeText={onChange('email')}
        style={styles.textInput}
        placeholder="Correo Electronico"
      />
      <IconInput
        icon={showPass ? 'show' : 'hide'}
        onPress={() => setShowPass(prev => !prev)}
        value={fields.password}
        onChangeText={onChange('password')}
        style={styles.textInput}
        placeholder="Contraseña"
        secureTextEntry={!showPass}
      />
      <CustomButton
        onPress={onSubmit}
        style={styles.loginButton}
        title="Iniciar Sesión"
      />
    </BackgroundView>
  );
}
