import { Image, StyleSheet, Text, View } from 'react-native';
import icons from 'src/config/icons';

const ListEmpty = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sceneContainer}>
        <Image source={icons.cross} style={styles.emptyIcon} />
        <Text style={styles.title}>You don't have saved any stories</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyIcon: {
    height: 25,
    width: 25,
    tintColor: 'gray',
  },
  title: {
    fontSize: 18,
    color: 'gray',
  },
  sceneContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
});

export default ListEmpty;
