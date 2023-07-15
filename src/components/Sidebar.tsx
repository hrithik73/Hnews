import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { StyleSheet, View } from 'react-native';

const Sidebar = (props: DrawerContentComponentProps) => {
  console.log(props.descriptors[props.state.routes[0].key]);

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    margin: 15,
  },
  sidebarHeading: {
    fontSize: 16,
  },
  toggleThemeContainer: {
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});

export default Sidebar;
