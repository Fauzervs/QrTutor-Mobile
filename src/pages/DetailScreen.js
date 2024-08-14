import { View } from "react-native";
import { Button , Text} from "react-native";

export default function DetailScreen({navigation}) {
    return(
      <View>
<Text>Details Screen</Text>
<Button
title= "Go To Home"
onPress= {()=>navigation.navigate('Home')}
/>
<Button
title= "Go To Profile"
onPress= {()=>navigation.navigate('Profile')}
/>

      </View>  
    )
    
}