import { memo, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fetchData } from 'src/lib/fetchData';
import { IStory } from 'types/story';

interface IListItem {
  storyId: string;
}

const ListItem = ({ storyId }: IListItem) => {
  const [storyData, setStoryData] = useState<IStory>();

  useEffect(() => {
    const getStory = async () => {
      const res = await fetchData(`item/${storyId}`);
      console.log('res', res);
      setStoryData(res);
    };
    getStory();
  }, []);

  return (
    <View style={styles.container}>
      <Text> {storyData?.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 30,
  },
});

export default memo(ListItem);
