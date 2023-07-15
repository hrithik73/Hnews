import { memo, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { fetchData } from 'src/lib/fetchData';
import { IComment } from 'src/types/story';

interface ICommentsProps {
  commentId: string | unknown;
}

const Comment = ({ commentId }: ICommentsProps) => {
  console.log({ commentId });
  //
  const [isLoaded, setLoaded] = useState(false);
  const [commentData, setCommentData] = useState<IComment>();

  useEffect(() => {
    //
    const getCommentData = async () => {
      setLoaded(false);
      const res = await fetchData(`item/${commentId}`);
      setCommentData(res);
      setLoaded(true);
    };
    //
    getCommentData();
  }, []);

  return (
    <View>
      <View style={styles.titleContainer}>
        <AntDesign name='caretup' size={20} />
        <Text style={styles.title}>
          {commentData?.text}
          {'  '}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  titleContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  urlText: {
    fontSize: 15,
    fontWeight: '400',
    color: 'gray',
  },
  title: {
    fontSize: 12,
  },
});

export default memo(Comment);
