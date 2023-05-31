import * as React from 'react';
import { Text, View, ScrollView, StatusBar,   StyleSheet,} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native';
import colors from "tailwindcss/colors";
import { styled } from 'nativewind';

import Top from '../components/Top';
import Localisation from '../components/Localisation';



const GlobalView = styled(View, 'overflow-scroll items-center justify-center');


export default function HomeScreen() {
    return (
      
      <View className='flex-1'>
        <LinearGradient to-right colors={['black', 'mediumblue']} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} style={{flex:1}}>
        <SafeAreaView>
          <Top/>
          <ScrollView style={styles.scrollView}>

            <Localisation/>

          </ScrollView>
        </SafeAreaView>
        </LinearGradient>
        
      </View> 
    );
  }


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 10,
  },
}); 