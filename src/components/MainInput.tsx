import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

const { width } = Dimensions.get('screen');

type Props = {
  isSecuredText?: boolean;
  placeholder: string;
  onChangeText: (val: string) => void;
  autoComplete?:
    | 'additional-name'
    | 'address-line1'
    | 'address-line2'
    | 'birthdate-day'
    | 'birthdate-full'
    | 'birthdate-month'
    | 'birthdate-year'
    | 'cc-csc'
    | 'cc-exp'
    | 'cc-exp-day'
    | 'cc-exp-month'
    | 'cc-exp-year'
    | 'cc-number'
    | 'cc-name'
    | 'cc-given-name'
    | 'cc-middle-name'
    | 'cc-family-name'
    | 'cc-type'
    | 'country'
    | 'current-password'
    | 'email'
    | 'family-name'
    | 'gender'
    | 'given-name'
    | 'honorific-prefix'
    | 'honorific-suffix'
    | 'name'
    | 'name-family'
    | 'name-given'
    | 'name-middle'
    | 'name-middle-initial'
    | 'name-prefix'
    | 'name-suffix'
    | 'new-password'
    | 'nickname'
    | 'one-time-code'
    | 'organization'
    | 'organization-title'
    | 'password'
    | 'password-new'
    | 'postal-address'
    | 'postal-address-country'
    | 'postal-address-extended'
    | 'postal-address-extended-postal-code'
    | 'postal-address-locality'
    | 'postal-address-region'
    | 'postal-code'
    | 'street-address'
    | 'sms-otp'
    | 'tel'
    | 'tel-country-code'
    | 'tel-national'
    | 'tel-device'
    | 'url'
    | 'username'
    | 'username-new'
    | 'off'
    | undefined;
};
export const MainInput = ({
  isSecuredText,
  placeholder,
  onChangeText,
  autoComplete,
}: Props) => {
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={'rgba(1,1,1,0.2)'}
        secureTextEntry={isSecuredText ? hidePassword : false}
        onChangeText={text => onChangeText(text)}
        autoComplete={autoComplete}
        style={[
          styles.inputStyle,
          {
            width: isSecuredText ? '83%' : '100%',
          },
        ]}
      />

      {isSecuredText && (
        <TouchableOpacity
          onPress={() => {
            setHidePassword(prev => {
              return !prev;
            });
          }}
          style={{
            width: '15%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {hidePassword ? (
            <Image
              source={require('../assets/images/show_password.png')}
              style={styles.eyeIcon}
            />
          ) : (
            <Image
              source={require('../assets/images/hide_password.png')}
              style={styles.eyeIcon}
            />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(1,1,1,0.2)',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputStyle: {
    height: '100%',
  },
  eyeIcon: {
    width: '100%',
    height: '50%',
    resizeMode: 'contain',
  },
});
