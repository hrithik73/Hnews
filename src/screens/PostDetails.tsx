import { AntDesign } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import { useCallback, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Comment from 'src/components/Comment';

import { getHost } from 'src/utils/helperFunctions';

const PostDetails = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { params } = useRoute<any>();
  const [commentInput, setCommentInput] = useState('');

  // console.log('params', params?.storyId);
  console.log('storyData', params?.storyData);
  console.log('time', params?.storyData?.time);
  const onTextChangeHandler = useCallback((e: string) => {
    setCommentInput(e);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <AntDesign name='caretup' size={20} />
        <Text style={styles.title}>
          {params?.storyData?.title}
          {'  '}
          <Text style={styles.urlText}>
            ({getHost(params?.storyData?.url)})
          </Text>
        </Text>
      </View>
      <View style={styles.subtitleContainer}>
        <Text>
          {params?.storyData?.score} points by {params?.storyData?.by} |{' '}
          {params?.storyData?.descendants} comments
        </Text>
      </View>
      <TextInput
        value={commentInput}
        onChangeText={onTextChangeHandler}
        style={styles.commentBox}
        multiline
        placeholder='Post a comment'
      />
      <Button title='Add comment' />
      <FlashList
        data={params?.storyData?.kids}
        renderItem={({ item }) => <Comment commentId={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  chevronUpIcon: {
    height: 20,
    width: 30,
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  title: {
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
  },
  urlText: {
    fontSize: 15,
    fontWeight: '400',
    color: 'gray',
  },
  subtitleContainer: {
    marginTop: 10,
    marginLeft: 20,
  },
  commentBox: {
    // backgroundColor: 'red',
    // marginVertical: 10,
    // paddingTop: 20,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
});

export default PostDetails;
