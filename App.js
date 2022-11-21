import HomeScreen from './screens/HomeScreen';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import Search from './screens/Search';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: 'red',
      }}>
        <Tab.Screen 
          name='Home' 
          component={HomeScreen}
          options={{
            tabBarIcon:()=> 
            <Entypo name='home' size={22} color='blue' />
          }}
        />
        <Tab.Screen 
          name='Search' 
          component={Search} 
          options={{
            tabBarIcon:()=> 
            <FontAwesome name="search" size={22} color="blue" />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}