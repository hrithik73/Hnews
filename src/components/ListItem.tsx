import { memo, useEffect, useState } from 'react';
import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { colors } from 'src/config/colors';
import { fetchData } from 'src/lib/fetchData';
import { IStory } from 'src/types/story';
import { getHost, getIndex } from 'src/utils/helperFunctions';
import Loader from './Loader';
import { isWeb } from 'src/utils/matrics';

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

  const onPressHandler = () => {
    if (isWeb && storyData?.url) {
      Linking.openURL(storyData?.url);
      return;
    }
    navigation.navigate('PostDetail', {
      story: storyData,
    });
  };

  return (
    <Pressable style={styles.container} onPress={onPressHandler}>
      <Loader visible={isFetched} height={70} width={200}>
        <View style={styles.itemContainer}>
          <Text>{getIndex(index)}</Text>
          <View>
            <Text style={styles.title}>
              {storyData?.title}
              {'  '}
              <Text style={styles.urlText}>({getHost(storyData?.url)})</Text>
            </Text>
            <Text style={styles.subTitle}>
              {storyData?.score} points by
              <Text style={styles.auther}> {storyData?.by}</Text> |{' '}
              {storyData?.kids?.length} comments
            </Text>
          </View>
        </View>
      </Loader>
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
  urlText: {
    fontSize: 15,
    fontWeight: '400',
    color: 'gray',
  },
});

export default memo(ListItem);
