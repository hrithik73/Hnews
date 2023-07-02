import { useRoute } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

const PostDetails = () => {
  const route = useRoute<any>();
  const { story } = route?.params;

  console.log({ story });

  return (
    <View style={styles.container}>
      <WebView style={styles.container} source={{ uri: story?.url }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PostDetails;
