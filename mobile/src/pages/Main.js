import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

// requestPermission pede as permissões, getCurrentPosition pega a posição do usuario.

function Main() {
    const [currentRegion, setCurrentRegion] = useState(null);

    useEffect(() => {
        async function loadInitialPosition() {
            const { granted } = await requestPermissionsAsync();

            if (granted) { // granted = usuario deu permissão
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true, // usar gps para melhor localização/ false: usa a localização por wifi/3G
                });

                const { latitude, longitude } = coords;

                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.04, // zoom
                    longitudeDelta: 0.04,
                })
            }
        }

        loadInitialPosition();
    }, []);

    if (!currentRegion) {
        return null;
    }

    return (
        <MapView initialRegion={currentRegion} style={styles.map}>
            <Marker coordinate={{ latitude: -5.0047668, longitude: -42.7763375 }}>
                <Image style={styles.avatar} source={{ uri: 'https://avatars0.githubusercontent.com/u/43749971?s=460&v=4' }} />

                <Callout>
                    <View style={styles.callout}>
                        <Text style={styles.devName}>John Emerson</Text>
                        <Text style={styles.devBio}>aki é a bio po kkk dale</Text>
                        <Text style={styles.devTechs}>ReactJS, React Native, Node.js</Text>
                    </View>
                </Callout>
            </Marker>
        </MapView>
    );
}

const styles = StyleSheet.create({
    map: {
        flex: 1
    },

    avatar: {
        width: 54,
        height: 54,
        borderRadius: 4,
        borderWidth: 4,
        borderColor: '#fff'
    },

    callout: {
        width: 260,
    },

    devName: {
        fontWeight: 'bold',
        fontSize: 16,
    },

    devBio: {
        color: '#667',
        marginTop: 5,
    },

    devTechs: {
        marginTop: 5,
    }
});

export default Main;