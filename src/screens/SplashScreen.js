import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const SplashScreen = () => {

  const navigation = useNavigation();

  useEffect(()=>{
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  },[])

  return (
    <View>
      <Text>SplashScreen</Text>
    </View>
  )
}

export default SplashScreen