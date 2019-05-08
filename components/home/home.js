import React from 'react';
import {View,Text,Dimensions,Image,ScrollView} from 'react-native';
import {groups,media,pooja,poojaServices,yatra} from '../../assets/images/index'
import {feeds_maroon,feeds,groups_icon_maroon,groups_icon_white,groups_icon,home_maroon,home,info,pooja_maroon,pooja_white,pooja_home,pooja_services,pooja_services_maroon,pooja_services_white,side_arrow,slokas,songs,stories,temples,videos,yatra_home} from '../../assets/icons/index';
import Carousel from 'react-native-banner-carousel';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 400;

export default class Home extends React.Component{
    render(){
        return(
            <View>
                <ScrollView>
                    <Carousel
                        autoplay
                        autoplayTimeout={3000}
                        loop
                        index={0}
                        pageSize={BannerWidth}
                        pageIndicatorStyle={{backgroundColor:"#858585",width:10,height:10,borderRadius:5,top:5}}
                        activePageIndicatorStyle={{backgroundColor:"#a31f0a",width:10,height:10,borderRadius:5}}
                        pageIndicatorOffset={20}
                    >
                        <View>
                            <Image style={{ width: BannerWidth, height: 200 }} source={groups} resizeMode="contain"/>
                        </View>
                        <View>
                            <Image style={{ width: BannerWidth, height: 200 }} source={media} resizeMode="contain"/>
                        </View>
                        <View>
                            <Image style={{ width: BannerWidth, height: 200 }} source={pooja} resizeMode="contain"/>
                        </View>
                        <View>
                            <Image style={{ width: BannerWidth, height: 200 }} source={poojaServices} resizeMode="contain"/>
                        </View>
                        <View>
                            <Image style={{ width: BannerWidth, height: 200 }} source={yatra} resizeMode="contain"/> 
                        </View>                   
                    </Carousel>
                    <View style={{flexDirection:"row",justifyContent:"space-between",marginVertical:6}}>
                        <View style={{backgroundColor:"#16aaa3",width:"35%",height:120,justifyContent:"space-between",paddingTop:30,paddingBottom:10}}>
                            <Image source={slokas} resizeMode="contain" style={{height:54,alignSelf:"center",marginBottom:10}}/>
                            <Text style={{color:"#FFFFFF",fontSize:16,marginLeft:10}}>Slokas</Text>
                        </View>
                        <View style={{backgroundColor:"#0269a4",width:"63.5%",height:120,justifyContent:"space-between",paddingTop:30,paddingBottom:5}}>
                            <Image source={stories} resizeMode="contain" style={{height:44,alignSelf:"center",marginBottom:10}}/>
                            <Text style={{color:"#FFFFFF",fontSize:16,marginLeft:10}}>Stories</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                        <View style={{backgroundColor:"#ff7a00",width:"32.5%",height:120,justifyContent:"space-between",paddingTop:30,paddingBottom:5}}>
                            <Image source={songs} resizeMode="contain" style={{height:44,alignSelf:"center"}}/>
                            <Text style={{color:"#FFFFFF",fontSize:16,marginLeft:10}}>Songs</Text>
                        </View>
                        <View style={{backgroundColor:"#208d87",width:"32.5%",height:120,justifyContent:"space-between",paddingTop:30,paddingBottom:5}}>
                            <Image source={temples} resizeMode="contain" style={{height:44,alignSelf:"center"}}/>
                            <Text style={{color:"#FFFFFF",fontSize:16,marginLeft:10}}>Temples</Text>
                        </View>
                        <View style={{backgroundColor:"#e2a900",width:"32.5%",height:120,justifyContent:"space-between",paddingTop:30,paddingBottom:5}}>
                            <Image source={videos} resizeMode="contain" style={{height:44,alignSelf:"center"}}/>
                            <Text style={{color:"#FFFFFF",fontSize:16,marginLeft:10}}>Videos</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:"row",justifyContent:"space-between",marginVertical:6}}>
                        <View style={{backgroundColor:"#009dff",width:"35%",height:120,justifyContent:"space-between",paddingTop:30,paddingBottom:5}}>
                            <Image source={pooja_white} resizeMode="contain" style={{height:44,alignSelf:"center"}}/>
                            <Text style={{color:"#FFFFFF",fontSize:16,marginLeft:10}}>Poojas</Text>
                        </View>
                        <View style={{backgroundColor:"#ef4200",width:"63.5%",justifyContent:"space-between",paddingTop:30,paddingBottom:5}}>
                            <Image source={groups_icon_white} resizeMode="contain" style={{height:44,alignSelf:"center"}}/>
                            <Text style={{color:"#FFFFFF",fontSize:16,marginLeft:10}}>Groups</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                        <View style={{backgroundColor:"#964d08",width:"32.5%",height:120,justifyContent:"space-between",paddingTop:30,paddingBottom:5}}>
                            <Image source={yatra_home} resizeMode="contain" style={{height:44,alignSelf:"center"}}/>
                            <Text style={{color:"#FFFFFF",fontSize:16,marginLeft:10}}>Yatra</Text>
                        </View>
                        <View style={{backgroundColor:"#02a49e",width:"32.5%",height:120,justifyContent:"space-between",paddingTop:30,paddingBottom:5}}>
                            <Image source={info} resizeMode="contain" style={{height:44,alignSelf:"center"}}/>
                            <Text style={{color:"#FFFFFF",fontSize:16,marginLeft:10}}>Info</Text>
                        </View>
                        <View style={{backgroundColor:"#898d20",width:"32.5%",height:120,justifyContent:"space-between",paddingTop:30,paddingBottom:5}}>
                            <Image source={pooja_services_white} resizeMode="contain" style={{height:44,alignSelf:"center"}}/>
                            <Text style={{color:"#FFFFFF",fontSize:16,marginLeft:10}}>Pooja Services</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}