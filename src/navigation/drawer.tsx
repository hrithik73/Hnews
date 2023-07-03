import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStackNavigator from './home';
import Header from 'src/components/Header';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name='HomeNavigator' component={HomeStackNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
