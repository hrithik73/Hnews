import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Comments from 'src/screens/Comments';

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
      <HomeStack.Screen
        name='PostDetail'
        component={PostDetails}
        options={{
          title: '',
          headerShown: true,
        }}
      />
      <HomeStack.Screen
        name='Comments'
        component={Comments}
        options={{
          title: '',
          headerShown: true,
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
