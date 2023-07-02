import { useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

import Loader from 'src/components/Loader';
import { windowHeight, windowWidth } from 'src/utils/matrics';

const PostDetails = () => {
  const route = useRoute<any>();
  const { story } = route?.params;
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <View style={styles.container}>
      <WebView
        style={styles.container}
        onLoadEnd={() => setIsLoaded(true)}
        source={{ uri: story?.url }}
      />
      <Loader
        isReversed={false}
        visible={isLoaded}
        height={windowHeight}
        width={windowWidth}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PostDetails;
