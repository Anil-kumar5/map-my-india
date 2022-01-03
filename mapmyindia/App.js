// import React, { Component } from "react";
// import {View } from "react-native";
// import  MapmyIndiaGL  from  'mapmyindia-map-react-native-beta';

// MapmyIndiaGL.setMapSDKKey("58470f1b2b8716a661e45819df85345d");//place your mapsdkKey
// MapmyIndiaGL.setRestAPIKey("58470f1b2b8716a661e45819df85345d");//your restApiKey
// MapmyIndiaGL.setAtlasClientId("33OkryzDZsK-kNTYb54ZO59G14_kPOmZ81-DqH-g7yjD85HtYjY75LW2MjeZHNmWqGGgdcaw15K-Ioh6bxp3Tw==");//your atlasClientId key
// MapmyIndiaGL.setAtlasClientSecret("lrFxI-iSEg9ocysjMfILz54l-YPAiY05PqV2c_wzZHkvfe_wY4v_PiVn9Tui_7J3ZMOhN-8tMHjCgo1rrbZzgQL24Su74aM9"); //your atlasClientSecret key
// MapmyIndiaGL.setAtlasGrantType("");


// export default class App extends Component {
//   render() {
//     return (
//       <View style={{flex:1}}>
//           <MapmyIndiaGL.MapView style={{flex:1}} >
// 		  <MapmyIndiaGL.Camera
//                 ref={c  => (this.camera = c)}
//                 zoomLevel={12}
//                 minZoomLevel={4}
//                 maxZoomLevel={22}
//                 centerCoordinate={[77.231409,28.6162]}
//                  />
// 		 </MapmyIndiaGL.MapView>
//       </View>
//     );
//   }
// }
import  MapmyIndiaUIWidgets  from  'mapmyindia-search-widgets-react-native'
import  MapmyIndiaGL  from  'mapmyindia-map-react-native-beta';
import  MapmyIndia  from  'mapmyindia-restapi-react-native-beta';
const atlasClientId='33OkryzDZsK-kNTYb54ZO59G14_kPOmZ81-DqH-g7yjD85HtYjY75LW2MjeZHNmWqGGgdcaw15K-Ioh6bxp3Tw==';
const atlasClientSecret='lrFxI-iSEg9ocysjMfILz54l-YPAiY05PqV2c_wzZHkvfe_wY4v_PiVn9Tui_7J3ZMOhN-8tMHjCgo1rrbZzgQL24Su74aM9';
// const atlasGrantType='';
const mapSDKKey='58470f1b2b8716a661e45819df85345d';
const restAPIKey='58470f1b2b8716a661e45819df85345d';
// for map sdk
MapmyIndiaGL.setMapSDKKey(mapSDKKey);//place your mapsdkKey
MapmyIndiaGL.setRestAPIKey(restAPIKey);//your restApiKey
MapmyIndiaGL.setAtlasClientId(atlasClientId);//your atlasClientId key
MapmyIndiaGL.setAtlasClientSecret(atlasClientSecret); //your atlasClientSecret key
// MapmyIndiaGL.setAtlasGrantType(atlasGrantType);

//restApi sdk
MapmyIndia.setRestApiKey(restAPIKey);//your restApiKey
MapmyIndia.setClientId(atlasClientId);//your atlasClientId key
MapmyIndia.setClientSecret(atlasClientSecret);//your atlasClientSecret key


const App = () =>{
  return(
    <View>
  <MapmyIndiaUIWidgets.PlacePicker
      center={plcePickerCenter}
      zoom={10}
      searchWidgetProps={{backgroundColor:'#F0FFF0'}}
      pickerImage={{uri:'http://maps.google.com/mapfiles/ms/micons/blue.png'}}
      resultCallback={(res) => 
      console.log(res)
         }
   />
   
    </View>
  );
};

export default App