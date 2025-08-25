import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";
import { useState } from "react";

export default function SearchScreen() {
  const [searchApi, results] = useResults();

  const [term, setTerm] = useState("");

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <ScrollView>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      <ResultList
        title='Ucuz Restoranlar'
        results={filterResultsByPrice("₺")}
      />
      <ResultList
        title='Uygun Restoranlar'
        results={filterResultsByPrice("₺₺")}
      />
      <ResultList
        title='Pahalı Restoranlar'
        results={filterResultsByPrice("₺₺₺")}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
