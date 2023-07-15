import { createDrawerNavigator } from '@react-navigation/drawer';
import SavedStories from 'src/screens/stories/Saved';
import HomeStackNavigator from './home';
import Sidebar from 'src/components/Sidebar';
import icons from 'src/config/icons';
import Icon from 'src/components/Icon';
import { colors } from 'src/config/colors';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <Sidebar {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: colors.cardBackground,
        drawerInactiveBackgroundColor: '#fefefe',
        drawerActiveTintColor: colors.black,
        drawerItemStyle: {
          width: '90%',
        },
        drawerLabelStyle: {
          marginLeft: -15,
        },
      }}
    >
      <Drawer.Screen
        name='HomeNavigator'
        component={HomeStackNavigator}
        options={{
          drawerLabel: 'Home',
          drawerIcon: () => <Icon src={icons.home} />,
        }}
      />
      <Drawer.Screen
        name='Saved'
        component={SavedStories}
        options={{
          drawerLabel: 'Saved',
          drawerIcon: ({ focused }) => <Icon src={icons.save_outline} />,
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
