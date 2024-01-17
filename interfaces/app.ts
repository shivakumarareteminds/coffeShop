import {
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Details: { itemId: number };
};
type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;
type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;
type LoginScreenProps = {
  navigation: LoginScreenNavigationProp;
};

type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

export type { HomeScreenProps, RootStackParamList, LoginScreenProps }