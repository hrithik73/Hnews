import { createDrawerNavigator } from '@react-navigation/drawer';
import SavedStories from 'src/screens/stories/Saved';
import HomeStackNavigator from './home';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name='HomeNavigator' component={HomeStackNavigator} />
      <Drawer.Screen name='Saved' component={SavedStories} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
