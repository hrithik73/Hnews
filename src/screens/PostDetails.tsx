import { useRoute } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet } from 'react-native';

const PostDetails = () => {
  const route = useRoute<any>();
  const { storyUrl } = route?.params;
  const [isLoaded, setIsLoaded] = useState(false);

  console.log('storyURl=====>', storyUrl);

  return (
    <>
      {/* <WebView
        style={styles.container}
        onLoadEnd={() => setIsLoaded(true)}
        source={{ uri: storyUrl }}
      />
      <Loader
        isReversed={false}
        visible={isLoaded}
        height={windowHeight}
        width={windowWidth}
      /> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PostDetails;
