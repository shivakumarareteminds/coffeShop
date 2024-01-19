import React from 'react';
import {LoginScreenProps} from '../interfaces/app';
import {Button, Text, View, ImageBackground, StyleSheet} from 'react-native';
import {COLORS} from '../constants/Colors';
import CustomButton from '../components/CustomButton';

const Login: React.FC<LoginScreenProps> = ({navigation}): React.JSX.Element => {
  const handleLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <ImageBackground
      source={require('../assets/login/loginBackgroundImage.png')}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.mainContent}>
          <Text style={styles.mainText}>
            Coffee so good, your taste buds will love it.
          </Text>
          <Text style={styles.secondaryText}>
            The best grain, the finest roast, the powerful flavor.
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            onPress={handleLogin}
            color="white"
            label="Continue With Google"
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  buttonContainer: {
    justifyContent: 'flex-end',
    marginBottom: 16,
    padding: 20,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    marginTop: 300,
  },
  mainText: {
    textAlign: 'center',
    fontSize: 40,
    fontFamily: 'Sora',
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0.34,
    color: COLORS.primaryText,
  },
  secondaryText: {
    color: COLORS.secondaryText,
    textAlign: 'center',
    fontFamily: 'Sora',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '400',
    letterSpacing: 0.14,
  },
});

export default Login;
