import 'react-native-gesture-handler';
import DemoStackNavigator from './routers/DemoStackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import MyDrawer from './routers/MyDrawer';
import MyTab from './routers/MyTab';

const App = () => {
  return (
    <NavigationContainer>
      {/* <PaperProvider>
        <DemoStackNavigator/>
      </PaperProvider> */}
      {/* <MyDrawer/>  */}
      <MyTab/>
    </NavigationContainer>
  );
}

export default App;