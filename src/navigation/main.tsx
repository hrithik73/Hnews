import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from 'src/screens/Home';
import PostDetails from 'src/screens/PostDetails';

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name='Home' component={Home} />
      <HomeStack.Screen name='PostDetail' component={PostDetails} />
    </HomeStack.Navigator>
  );
};

const MainNavigator = () => {
  return <HomeStackNavigator />;
};
export default MainNavigator;
