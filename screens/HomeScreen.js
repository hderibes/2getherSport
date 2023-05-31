import * as React from 'react';
import { Text, View } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-web';





export default function HomeScreen() {
    return (
      
      <View className='flex-1'>
        <LinearGradient to-right colors={['black', 'mediumblue']} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} style={{flex:1}}>
        {/* <SafeAreaView> */}
        <View className="w-1/4 h-100 bg-blue">
            <Text className='text-2xl text-black'>TogetherSport</Text>
        </View>
       

        {/* </SafeAreaView> */}
        


          <Text className='text-white'>Home!</Text>



        </LinearGradient>
        
      </View> 
    );
  }