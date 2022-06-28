import { createDrawerNavigator } from '@react-navigation/drawer'

import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import MessagesScreen from '../screens/MessagesScreen'
import MomentsScreen from '../screens/MessagesScreen'
import SettingsScreen from '../screens/SettingsScreen'

import CustomDrawer from '../components/CustomDrawer'

const Drawer = createDrawerNavigator();

export default function AppStack() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Messages" component={MessagesScreen} />
      <Drawer.Screen name="Moments" component={MomentsScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  )
}