import { memo, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fetchData } from 'src/lib/fetchData';
import { IStory } from 'src/types/story';
import { getIndex } from 'src/utils/helperFunctions';

import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import { LinearGradient } from 'expo-linear-gradient';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

interface IListItem {
  storyId: string;
  index: number;
}

const ListItem = ({ storyId, index }: IListItem) => {
  const [isFetched, setIsFetched] = useState(false);
  const [storyData, setStoryData] = useState<IStory>();

  useEffect(() => {
    const getStory = async () => {
      setIsFetched(false);
      const res = await fetchData(`item/${storyId}`);
      setStoryData(res);
      setIsFetched(true);
    };

    getStory();
  }, []);

  return (
    <View style={styles.container}>
      <ShimmerPlaceholder visible={isFetched} height={70} width={500}>
        <View style={styles.itemContainer}>
          <Text>{getIndex(index)}</Text>
          <View>
            <Text>
              <Text style={styles.title}> {storyData?.title}</Text>
            </Text>
            <Text style={styles.subTitle}>
              {storyData?.score} points by
              <Text style={styles.auther}> {storyData?.by}</Text> |{' '}
              {storyData?.kids?.length} comments
            </Text>
          </View>
        </View>
      </ShimmerPlaceholder>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
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
  itemContainer: {
    flexDirection: 'row',
  },
});

export default memo(ListItem);
