import { memo, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fetchData } from 'src/lib/fetchData';
import { IStory } from 'types/story';

interface IListItem {
  storyId: string;
  index: number;
}

const getIndex = (idx: number) => {
  return `${idx} .`;
};

const ListItem = ({ storyId, index }: IListItem) => {
  const [storyData, setStoryData] = useState<IStory>();

  useEffect(() => {
    const getStory = async () => {
      const res = await fetchData(`item/${storyId}`);
      setStoryData(res);
    };

    getStory();
  }, []);

  return (
    <View style={styles.container}>
      <Text>
        {getIndex(index)}
        <Text style={styles.title}> {storyData?.title}</Text> ({storyData?.url})
      </Text>
      <Text style={styles.subTitle}>
        {storyData?.score} points by {storyData?.by} | {storyData?.kids?.length}{' '}
        comments
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
  },
  subTitle: {
    paddingTop: 5,
    fontSize: 16,
    paddingLeft: 20,
  },
});

export default memo(ListItem);
