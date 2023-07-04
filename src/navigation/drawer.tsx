import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStackNavigator from './home';
import Header from 'src/components/Header';
import SavedStories from 'src/screens/stories/Saved';

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
