import { memo, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fetchData } from 'src/lib/fetchData';
import { IStory } from 'src/types/story';

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
      <Text>{getIndex(index)}</Text>
      <View>
        <Text>
          <Text style={styles.title}> {storyData?.title}</Text>
        </Text>
        <Text style={styles.subTitle}>
          {storyData?.score} points by
          <Text style={styles.auther}> {storyData?.by} </Text> |{' '}
          {storyData?.kids?.length} comments
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#1212',
  },
  title: {
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
  },
  subTitle: {
    // paddingTop: 5,
    paddingVertical: 5,
    fontSize: 14,
  },
  auther: {
    color: 'red',
    margin: 10,
  },
});

export default memo(ListItem);
