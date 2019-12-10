import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import App from './App';
import Login from './src/component/Login';
import Register from './src/component/Register';
import Hesap from './src/component/Hesap';
import Detay from './src/component/Detay'


const AppNavigator=createStackNavigator(
{
    App:{screen:App},
    Login:{screen:Login},
    Register:{screen:Register},
    Hesap:{screen:Hesap},
    Detay:{screen:Detay}

},  
{
    initialRouteName:'Login',
    headerMode:'none'
}
);
export default createAppContainer(AppNavigator);