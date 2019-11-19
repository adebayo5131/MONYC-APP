import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import MapView, { Marker, ProviderPropType } from 'react-native-maps';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 40.71427
const LONGITUDE = -74.663140;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
let id = 0;

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

class maps extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        markers: [{
         
            coordinates: {
              latitude: 40.71427,
                longitude: -74.663140,
                key: '1',
            },
          },
          {
    
            coordinates: {
              latitude: 40.717250,
                longitude: -74.012180,
                key: '2',
            },  
            },
            {
                coordinates: {
                    latitude: 40.779860,
                    longitude: -74.959310,
                    key: '3',
                }
                },
            
                {
                    coordinates: {
                        latitude: 40.712521,
                          longitude:-74.008920,
                          key: '4',
                      },  

            },
            {
                coordinates: {
                    latitude: 41.315048,
                      longitude: -74.0116180,
                      key: '5',
                  },       
            },
            {
                coordinates: {
                    latitude: 39.005821,
                      longitude: -122.006981,
                      key: '6',
                  },  

            },
            {
                coordinates: {
                    latitude: 36.627529,
                      longitude: -88.327171,
                      key: '7',
                  },  

            },
            {
                coordinates: {
                    latitude: 47.750679,
                      longitude: -122.363281,
                      key: '9',
                  },  

            },
            {
                coordinates: {
                    latitude: 40.736374,
                      longitude: -73.819458,
                      key: '10',
                  },  

            },
            {
                coordinates: {
                    latitude: 40.736374,
                      longitude: -73.819458,
                      key: '11',
                  },  

            },
            {
                coordinates: {
                    latitude:40.578140,
                      longitude: -73.933150,
                      key: '12',
                  },  

            }
          
        ]
    };
  }

  onMapPress(e) {
    this.setState({
      markers: [
        ...this.state.markers,
        {
          coordinate: e.nativeEvent.coordinate,
          color: randomColor(),
        },
      ],
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={this.props.provider}
          style={styles.map}
          initialRegion={this.state.region}
          onPress={e => this.onMapPress(e)}
        >
          {this.state.markers.map(marker => (
              <Marker
              key={marker.key}
                  coordinate={marker.coordinates}
                  value = {marker.coordinates}
                  pinColor={marker.color}
            />
          ))}
        </MapView>
        <View style={styles.buttonContainer}>
          
       
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
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
});
export default maps;