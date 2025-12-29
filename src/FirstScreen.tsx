import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const FirstScreen = () => {
    const navigation=useNavigation();
  return (
    <View>
      <Text>firstScreen</Text>
      <TouchableOpacity onPress={navigation.navigate('FlyerScreen')}>
        <Text>press</Text>
      </TouchableOpacity>
    </View>
  )
}

export default FirstScreen

const styles = StyleSheet.create({})