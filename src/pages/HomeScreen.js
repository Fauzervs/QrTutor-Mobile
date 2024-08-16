import { View } from "react-native";
import { Button, Text } from "react-native";

export default  function HomeScreen({navigation}){
return(
    <View>
<Text>Home Screen</Text>
<Button
title= "GO TO Details"

onPress={()=>navigation.navigate('Details')}
/>
<Button
title= "Go To Profile"

onPress={()=>navigation.navigate('Profile')}
/>
    </View>

)

}
    
