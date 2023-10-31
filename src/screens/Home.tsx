import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from 'src/components/Header';
import { fetchData } from 'src/lib/fetchData';
import StoryList from './stories/StoryList';

const Home = () => {
  const [storyIds, setStoryIds] = useState<Array<string>>([]);

  useEffect(() => {
    const getData = async () => {
      const storyIDs = await fetchData('topstories');
      setStoryIds(storyIDs);
    };

    getData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <Header />
        {storyIds && <StoryList storyIds={storyIds} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
  },
});
export default Home;
