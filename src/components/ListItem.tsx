import { memo, useEffect, useState } from 'react';
import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import { LinearGradient } from 'expo-linear-gradient';

import { fetchData } from 'src/lib/fetchData';
import { IStory } from 'src/types/story';
import { getIndex } from 'src/utils/helperFunctions';
import { colors } from 'src/config/colors';
import { useNavigation } from '@react-navigation/native';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

interface IListItem {
  storyId: string;
  index: number;
}

const ListItem = ({ storyId, index }: IListItem) => {
  const navigation = useNavigation<any>();
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
    <Pressable
      style={styles.container}
      onPress={() =>
        navigation.navigate('PostDetail', {
          story: storyData,
        })
      }
    >
      <ShimmerPlaceholder visible={isFetched} height={70} width={200}>
        <View style={styles.itemContainer}>
          <Text>{getIndex(index)}</Text>
          <View>
            <Text style={styles.title}>{storyData?.title}</Text>
            <Text style={styles.subTitle}>
              {storyData?.score} points by
              <Text style={styles.auther}> {storyData?.by}</Text> |{' '}
              {storyData?.kids?.length} comments
            </Text>
          </View>
        </View>
      </ShimmerPlaceholder>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingVertical: 20,
    margin: 10,
    borderRadius: 10,
    backgroundColor: colors.cardBackground,
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
