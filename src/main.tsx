import React, {useCallback, useEffect, useRef, useState} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import socketServices from '../android/app/src/utils/socketService';

function Main() {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '865356315623-oatlubfuhonqhtk19ij1kvl4hslsd8hf.apps.googleusercontent.com',
      offlineAccess: true,
      forceCodeForRefreshToken: true,
    });
  });

  useEffect(()=>{
    console.log('hello');
    
    socketServices.initializeSocket()
  },[])

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      console.log(userInfo);
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User cancelled the login flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Signing in');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play services not available');
      } else {
        console.log('Some other error happened');
        console.log(error.message);
        console.log(error.code);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Tinder</Text>
      <GoogleSigninButton
        style={{width: 192, height: 48, marginTop: 30}}
        size={GoogleSigninButton?.Size.Icon}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Main;
