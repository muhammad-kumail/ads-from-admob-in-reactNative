import { StatusBar } from 'expo-status-bar';
import React,{useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  //setTestDeviceIDAsync,
} from 'expo-ads-admob';

//Android banner: ca-app-pub-3940256099942544/6300978111
//Android interstitial: ca-app-pub-3940256099942544/1033173712
//Android Rewarded: ca-app-pub-3940256099942544/5224354917
/* googleMobileAdsAppId: ca-app-pub-3940256099942544~3347511713
   in app.json file

   these all are test ad ids*/

export default function App() {
  useEffect(()=>{

    async function showInterstitial(){
      AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712');
      await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
      await AdMobInterstitial.showAdAsync();

    }
    showInterstitial();

  })
  const rewarded=async()=>{
    AdMobRewarded.setAdUnitID('ca-app-pub-3940256099942544/5224354917'); // Test ID, Replace with your-admob-unit-id
    await AdMobRewarded.requestAdAsync();
    await AdMobRewarded.showAdAsync();
  }
  return (

      <View style={styles.container}>
      <View style={styles.container}>
        <Text>hyyy I'm Kumail</Text>
        <AdMobBanner
          bannerSize="banner"
          adUnitID="ca-app-pub-3940256099942544/6300978111"
          servePersonalizedAds={false}
           />
      </View>
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={.3} onPress={rewarded}>
        <Text style={{backgroundColor:'blue',color:'white', padding:10}}>Show Interstitial add</Text>
        </TouchableOpacity>

      </View>
      <StatusBar backgroundColor="black" style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
