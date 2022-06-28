import { View, Text, TouchableOpacity } from 'react-native'

export default function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Screen</Text>
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        style={{
          backgroundColor: "#34A",
          borderRadius: 10,
        }}
      >
        <Text style={{color: "#fff", padding: 10}}>Open Drawer</Text>
      </TouchableOpacity>
      
    </View>
  )
}