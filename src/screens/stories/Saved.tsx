import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from 'src/components/Header';
import { useAppSelector } from 'src/hooks/redux';
import StoryList from './StoryList';

const SavedStories = () => {
  const { favStories } = useAppSelector((state) => state.stories);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.listContainer}>
        {favStories && <StoryList storyIds={favStories} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
  },
});

export default SavedStories;
