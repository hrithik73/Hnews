import { FlashList } from '@shopify/flash-list';
import { StyleSheet } from 'react-native';
import ListItem from 'src/components/ListItem';

interface IStoryListProps {
  storyIds: Array<string> | never[];
}

const StoryList = ({ storyIds }: IStoryListProps) => {
  return (
    <FlashList
      data={storyIds}
      estimatedItemSize={100}
      renderItem={({ item, index }) => (
        <ListItem storyId={item} index={index} />
      )}
    />
  );
};

export default StoryList;
