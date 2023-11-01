import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

export default function MainRoutes() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: 'black',
                    tabBarInactiveTintColor: 'gray',
                    headerShown: false,
                }}
            >
                <Tab.Screen name="Estoque" options={{ tabBarIcon: ({ focused, color, size }) => focused ? <Ionicons name="home" size={size} color={color} /> : <Ionicons name="home-outline" size={size} color={color} /> }} component={Home} />
                <Tab.Screen name="Settings" options={{ tabBarIcon: ({ focused, color, size }) => focused ? <Ionicons name="settings" size={size} color={color} /> : <Ionicons name="settings-outline" size={size} color={color} /> }} component={Settings} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}