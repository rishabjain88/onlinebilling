import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Admin from './Admin';
import Product from './Product';
import NewAdmin from './NewAdmin';
import StockDetails from './StockDetails';
import { enableScreens } from 'react-native-screens';

enableScreens();
 
const screens = {
    AdminLogin:{
        screen: Admin
    },
    AddProduct:{
        screen:Product
    },
    AddAdmin:{
        screen:NewAdmin
    },
    stock:{
        screen:StockDetails
    }
}

const HomeStack= createStackNavigator(screens);
export default createAppContainer(HomeStack);