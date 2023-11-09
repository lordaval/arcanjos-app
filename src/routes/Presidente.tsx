import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard';
import Settings from '../screens/Settings';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons'
import CriarUsuario from '../screens/CriarUsuario';
import Estoque from '../screens/Estoque';

const Tab = createBottomTabNavigator();

export default function PresidenteRoutes() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: 'black',
                    tabBarInactiveTintColor: 'gray',
                    headerShown: false,
                    tabBarHideOnKeyboard: true
                }}
                
            >
                <Tab.Screen name="Dashboard" options={{ tabBarIcon: ({ focused, color, size }) => focused ? <Ionicons name="construct" size={size} color={color} /> : <Ionicons name="construct-outline" size={size} color={color} /> }} component={Dashboard} />
                <Tab.Screen name="Estoque" options={{ tabBarIcon: ({ focused, color, size }) => focused ? <Ionicons name="beer" size={size} color={color} /> : <Ionicons name="beer-outline" size={size} color={color} /> }} component={Estoque} />
                <Tab.Screen name="Relatório" options={{ tabBarIcon: ({ focused, color, size }) => focused ? <Ionicons name="bar-chart" size={size} color={color} /> : <Ionicons name="bar-chart-outline" size={size} color={color} /> }} component={Estoque} />
                {/* <Tab.Screen name="Usuários" options={{ tabBarIcon: ({ focused, color, size }) => focused ? <Ionicons name="create" size={size} color={color} /> : <Ionicons name="create-outline" size={size} color={color} /> }} component={CriarUsuario} /> */}
                <Tab.Screen name="Geral" options={{ tabBarIcon: ({ focused, color, size }) => focused ? <Ionicons name="settings" size={size} color={color} /> : <Ionicons name="settings-outline" size={size} color={color} /> }} component={Settings} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}