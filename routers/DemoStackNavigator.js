import { createStackNavigator } from '@react-navigation/stack';
import CustomNavigationBar from '../components/CustomNavigationBar';
import HomeScreen from '../screens/Home';
import DetailScreen from '../screens/Details';

const Stack = createStackNavigator();

const DemoStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: (props) => <CustomNavigationBar {...props} />,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default DemoStackNavigator;