import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard';
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
                }}
                
            >
                <Tab.Screen name="Dashboard" options={{ tabBarIcon: ({ focused, color, size }) => focused ? <Ionicons name="disc" size={size} color={color} /> : <Ionicons name="disc-outline" size={size} color={color} /> }} component={Dashboard} />
                <Tab.Screen name="Configurações" options={{ tabBarIcon: ({ focused, color, size }) => focused ? <Ionicons name="settings" size={size} color={color} /> : <Ionicons name="settings-outline" size={size} color={color} /> }} component={Settings} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}