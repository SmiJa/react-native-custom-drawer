import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'

export default function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'space-between', paddingHorizontal: 20, alignItems: 'flex-start', flexDirection: 'row'}}>
      <Text>Home Screen</Text>
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
      >
        <ImageBackground
          source={require('./../assets/images/user-profile.jpg')}
          style={{width: 35, height: 35}}
          imageStyle={{borderRadius: 25}}
        />
      </TouchableOpacity>
      
    </View>
  )
}