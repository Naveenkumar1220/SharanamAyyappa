import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image,Dimensions} from 'react-native';
import {groups,media,pooja,poojaServices,yatra} from '../../assets/images/index';
import {fb,google} from '../../assets/icons/index'
import Carousel from 'react-native-banner-carousel';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 400;


export default class Login extends React.Component {
    render() {
        
        return (
            <View style={{flex:1,width:"100%",height:"100%",justifyContent:"flex-end"}}>
                <Carousel
                    autoplay
                    autoplayTimeout={3000}
                    loop
                    index={0}
                    pageSize={BannerWidth}
                    pageIndicatorStyle={{backgroundColor:"#858585",width:10,height:10,borderRadius:5,top:20}}
                    activePageIndicatorStyle={{backgroundColor:"#a31f0a",width:10,height:10,borderRadius:5}}
                    pageIndicatorOffset={20}
                >
                    <Image style={{ width: BannerWidth, height: 200 }} source={groups} resizeMode="contain"/>
                    <Image style={{ width: BannerWidth, height: 200 }} source={media} resizeMode="contain"/>
                    <Image style={{ width: BannerWidth, height: 200 }} source={pooja} resizeMode="contain"/>
                    <Image style={{ width: BannerWidth, height: 200 }} source={poojaServices} resizeMode="contain"/>
                    <Image style={{ width: BannerWidth, height: 200 }} source={yatra} resizeMode="contain"/>                    
                </Carousel>
                <View style = {styles.container}>
                    <TouchableOpacity style={styles.mobileNum}>
                        <View>
                            <Text style={{color:"#a31f0a"}}>Login With Mobile Number</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.or}>
                        <View style={styles.orLine}></View>
                        <Text style={styles.orText}>OR</Text>
                        <View style={styles.orLine}></View>
                    </View>
                    <View style={styles.loginButtons}>
                        <TouchableOpacity style={{width:"48%"}}>
                            <View style={[styles.socialButton,{backgroundColor:"#39579a"}]}>
                                <Image source={fb} style={{width:25,height:25}}/>
                                <Text style={styles.btnText}>Facebook</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width:"48%"}} onPress={()=>{this.props.navigation.navigate('HomeScreen')}}>
                            <View style={styles.socialButton}>
                                <Image source={google} style={{width:25,height:25}}/>
                                <Text style={[styles.btnText,{color:"#000000"}]}>Sign In</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <Text style={{color:"#a3a3a3"}}>By continuing, you agree to the</Text>
                    <Text style={{marginTop:5,marginBottom:50}}>Terms of use & Privacy Policy</Text>
                </View>
            </View>
        );
     }
  }
  
  const styles = StyleSheet.create({
     container: {
        alignItems: 'center',
        marginHorizontal:30
     },
     mobileNum:{
         height:50,
         borderWidth:1.5,
         borderColor:"#a31f0a",
         width:"100%",
         justifyContent:"center",
         alignItems:"center",
         marginTop:70,
         borderRadius:5
     },
     or:{
         flexDirection:"row",
         alignItems:"center",
         marginVertical:10
     },
     orLine:{
         width:"45%",
         height:1,
         backgroundColor:"#000000"
     },
     orText:{
         marginHorizontal:3,
         fontSize:16
     },
     loginButtons:{
         flexDirection:'row',
         justifyContent:"space-between",
         marginBottom:16,
         width:"100%"
     },
     socialButton:{
         flexDirection:"row",
         justifyContent:"center",
         alignItems:"center",
         height:47,
         borderRadius:5,
         shadowColor: '#000000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0,
        shadowRadius: 6,
        elevation: 3,
        backgroundColor: '#FFFFFF'
     },
     btnText:{
         marginHorizontal:5,
         color:"#FFFFFF",
         fontSize:20
     }
  });
