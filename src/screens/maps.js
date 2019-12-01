import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import MapView, { Marker, ProviderPropType } from 'react-native-maps';
import firebase from 'firebase'


class maps extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      markers: [

                {
                
                  coordinates: {
                    latitude: 40.71748,
                      longitude: -74.01229,
                      key: '1',
                  },
                },
                {
          
                  coordinates: {
                    latitude: 40.76858,
                      longitude: -73.96504,
                      key: '2',
                  },  
                  },
                  {
                      coordinates: {
                          latitude: 40.82161,
                          longitude: -73.94794,
                          key: '3',
                      }
                      },
                  
                      {
                          coordinates: {
                              latitude: 40.75797,
                                longitude: -73.98554,
                                key: '4',
                            },  

                  },
                  {
                      coordinates: {
                          latitude: 40.71180,
                            longitude:-74.01312,
                            key: '5',
                        },       
              },
                {
                  coordinates: {
                      latitude: 40.71672,
                        longitude: -74.01187,
                        key: '6',
                    },  

              },
              {
                  coordinates: {
                      latitude: 40.71634,
                        longitude: -73.99639,
                        key: '7',
                    },  

              },
              {
                  coordinates: {
                      latitude: 40.75270,
                        longitude: -73.99467,
                        key: '8',
                    },  

              },
              {
                  coordinates: {
                      latitude: 40.75732,
                        longitude: -73.97042,
                        key: '9',
                    },  

              }
        ]
    };
  }


  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle} 
          provider={this.props.provider}
          showsUserLocation={true}
          showsBuildings ={true}
          zoomEnabled={true} 
          userLocationAnnotationTitle={'My Location'}
          zoomControlEnabled={true}
          scrollEnabled = {true}
          initialRegion={{
            latitude: 40.78306,
            longitude: -73.97125,
            latitudeDelta: 0.1600,
            longitudeDelta: 0.04511,
          }}

        >

           
         
          {this.state.markers.map(marker => (
              <Marker
              key={marker.coordinates.key}
                  coordinate={marker.coordinates}
                  value = {marker.coordinates}
                  title={"MoNYC machine"}  
            />
          ))}
        </MapView>
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonText}  onPress={( ) => firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? 'profile' : 'login')
          })}>
                        <Text style={styles.buttonText} > Back</Text>
                </TouchableOpacity>    
        </View>
       
      </View>
    );
  }
}
maps.propTypes = {
  provider: ProviderPropType,
};


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'absolute',  
    top: 0,  
    left: 0,  
    right: 0,  
    bottom: 0,  
    alignItems: 'center',  
    justifyContent: 'flex-end',  
  },
  mapStyle: {  
    position: 'absolute',  
    top: 0,  
    left: 0,  
    right: 0,  
    bottom: 0,  
  },  
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
});
export default maps;