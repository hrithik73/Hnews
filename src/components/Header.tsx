import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from 'src/config/colors';
import icons from 'src/config/icons';
import Icon from './Icon';

const Header = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Icon
          src={icons.left}
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
        <Text style={styles.heading}>Hacker News</Text>
        <Icon
          src={icons.filter}
          onPress={() => {
            console.log('Pressed');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 100,
    justifyContent: 'flex-end',
  },
  titleContainer: {
    padding: 10,
    paddingBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: 20,
  },
});

export default Header;
