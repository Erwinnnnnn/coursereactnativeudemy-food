import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import useResults from "../hooks/useResults";
import { withNavigation } from 'react-navigation';
import ResultsDetail from './ResultsDetail';

const ResultsList = ( {title, results, navigation } ) => {

    return (
        <View>
           <Text style={styles.title}>{title}</Text>
           <FlatList
                  horizontal
                  data={results}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(result) => result.id}
                  renderItem={({item}) => {
                      return (
                          <TouchableOpacity onPress={() => navigation.navigate('ResultsShow')}>
                            <ResultsDetail result={item} />
                          </TouchableOpacity>
                      )
                  }}
           />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        marginHorizontal: 15,
        marginVertical: 5,
        fontWeight: 'bold'
    }
});

export default withNavigation(ResultsList);