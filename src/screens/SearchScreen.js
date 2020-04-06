import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
       return results.filter(result => {
           return result.price === price;
       });
    };

    return (
        <>
            <SearchBar
                term={term}
                onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text style={styles.foundTitle}>We have found {results.length}  results</Text>
            <ScrollView>
                <ResultsList
                    results={filterResultsByPrice('$')}
                    title="Cost Effective"

                />
                <ResultsList results={filterResultsByPrice('$$')} title="Bit pricier"  />
                <ResultsList results={filterResultsByPrice('$$$')} title="Big spender"  />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    foundTitle: {
        marginHorizontal: 15,
        marginVertical: 5,
    }
});

export default SearchScreen;