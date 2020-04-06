import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ( { navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    console.log(result);

    try {
        const getResult = async (id) => {
            const response = await yelp.get(`/${id}`);
            setResult(response.data);
        };
        useEffect(() => {
            getResult(id);
        }, []);
    } catch (e) {
        console.log(e);
    }

    if(!result) {
        return null;
    }

    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={( { item } ) => {
                    return <Image style={styles.image}
                    source = {{ url: item }}
                    />
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300
    }
});

export default ResultsShowScreen;