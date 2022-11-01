import React, {useState, useContext} from 'react';
import {Text} from 'react-native';
import IconInput from '@app/components/IconInput';
import CustomButton from '@app/components/CustomButton';
import BackgroundView from '@app/components/BackGroundView';
import type {RootStack} from '@app/types/navigation';
import useToastResource from '@app/hooks/useToastResource';
import {ExampleUser, UserContext} from '@app/context';
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

  const {setData} = useContext(UserContext);

  const onResource = useToastResource();

  const onChange = (key: keyof LoginFields) => (value: string) =>
    setFields(prev => ({...prev, [key]: value}));

  const IsValidUser = () =>
    (fields.email === ExampleUser.email || fields.email === ExampleUser.user) &&
    fields.password === ExampleUser.password;

  const onSubmit = async () => {
    const valid = await onResource(IsValidUser, undefined, {
      title: type => {
        if (type === 'success') return 'Logeado Satisfactoriamente';
        return 'El usuario y la contraseña es invalida';
      },
      interpeter: result => result,
    });
    if (!valid) return;
    setData(prev => ({
      ...prev,
      email: ExampleUser.email,
      user: ExampleUser.user,
    }));
    navigation.navigate('Home');
  };

  return (
    <BackgroundView source="background1" containerStyles={styles.main}>
      <Text style={styles.loginText}>Iniciar Sesion</Text>
      <IconInput
        value={fields.email}
        onChangeText={onChange('email')}
        keyboardType="email-address"
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
        disabled={!(fields.email && fields.password)}
        style={styles.loginButton}
        title="Iniciar Sesión"
      />
    </BackgroundView>
  );
}
