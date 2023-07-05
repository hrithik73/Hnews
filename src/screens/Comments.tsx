import { useRoute } from '@react-navigation/native';
import { Text, View } from 'react-native';

const Comments = () => {
  const { params } = useRoute<any>();

  console.log('parama', params?.storyId);
  console.log('storyData', params?.storyData);

  return (
    <View>
      <Text>Comments</Text>
    </View>
  );
};
export default Comments;
