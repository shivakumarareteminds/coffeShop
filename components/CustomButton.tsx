import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
  Image,
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  label: string;
  color: string;
}

const CustomButton: React.FC<ButtonProps> = (props): React.JSX.Element => {
  const {onPress, label, color} = props;
  const buttonStyle = {
    backgroundColor: color || 'blue',
    padding: 10,
    borderRadius: 5,
  };

  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Image
        source={require('../assets/logo/GoogleLogo.png')}
        style={styles.logo}
      />
      <Text style={[styles.text]}>{label}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 18,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 0.54)',
    textAlign: 'center',
  },
  logo: {
    width: 25,
    height: 25,
  },
});
export default CustomButton;
