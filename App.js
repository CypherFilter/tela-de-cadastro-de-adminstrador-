import  React from 'react';
import { Text, View, StyleSheet,Image,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cadastro from './Cadastration';
import Login from './Login';
import UserList from './views/UserList';
function HomeScreen({navigation}){
return (
<View style={{ flex: 1,alignItems: 'center', justifyContent: 'center'}}>
<Text>Sistema de Cadastro de Login </Text>
<Button
title="Cadastrar"  
onPress={()=> navigation.navigate('Cadastro')}


/>
<Button
title="Cadastrar"
onPress={() => navigation.navigate('Login')}

/>
</View>

)  
}

const Stack = createStackNavigator()

export default props =>{
  return (
    <NavigationContainer>
    <Stack.Navigator 
    initialRouteName= "UserList">
    <Stack.Screen
    name="UserList"
    component={UserList}
    />
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
    <Text>Tela de Cadastro de Administrador</Text>
</View>
  );
<View style={Estilos.container}>
<Button
title="Clique aqui para cadastrar administrador"
onPress={}

}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'center',

},
})