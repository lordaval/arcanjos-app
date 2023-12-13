import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard';
import SettingsScreen from '../screens/Settings';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons'
import Estoque from '../screens/Estoque';
import Vender from '../screens/CAIXA/Vender';
import { Blocks, DollarSign, Settings } from 'lucide-react-native';

const Tab = createBottomTabNavigator();

export default function CaixaRoutes() {
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
                {/* <Tab.Screen name="Dashboard" options={{ tabBarIcon: ({ focused, color, size }) => focused ? <Ionicons name="disc" size={size} color={color} /> : <Ionicons name="disc-outline" size={size} color={color} /> }} component={Dashboard} /> */}
                <Tab.Screen name="Vender" options={{ tabBarIcon: ({ focused, color, size }) => focused ? <DollarSign size={size} color={"#000"} /> : <DollarSign size={size} color={color} /> }} component={Vender} />
                <Tab.Screen name="Estoque" options={{ tabBarIcon: ({ focused, color, size }) => focused ? <Blocks size={size} color={"#000"} /> : <Blocks size={size} color={color} /> }} component={Estoque} />
                <Tab.Screen name="Configurações" options={{ tabBarIcon: ({ focused, color, size }) => focused ? <Settings size={size} color={"#000"} /> : <Settings size={size} color={color} /> }} component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}