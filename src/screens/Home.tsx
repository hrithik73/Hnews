import { FlashList } from '@shopify/flash-list';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Header from 'src/components/Header';
import ListItem from 'src/components/ListItem';
import { fetchData } from 'src/lib/fetchData';

const Home = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const storyIDs = await fetchData('topstories');
      setStoryIds(storyIDs);
    };

    getData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.listContainer}>
        <FlashList
          data={storyIds}
          estimatedItemSize={100}
          renderItem={({ item }) => <ListItem storyId={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
export default Home;
