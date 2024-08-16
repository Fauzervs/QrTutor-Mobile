import { View, Button,Text } from "react-native"

export default function ProfileScreen({navigation}) {
    return(
      <View>
        <Text>Profile Screen</Text>
        <Button
        title= "Go To home"
        onPress= {()=>navigation.navigate('Home')}
        /> 
        <Button
        title= "Go To Details"
        onPress= {()=>navigation.navigate('Details')}
        />
      </View>  
    )
    
}