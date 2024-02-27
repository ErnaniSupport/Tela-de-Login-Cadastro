import { StyleSheet, Text, View, Image } from 'react-native';
import { Input, Button } from 'react-native-elements';

function TelaLogin() {

  return (
    <View style={[login.container, {
      flexDirection: "column",
    }]}>
      <View style={{ flex: 2 }}>
        <Image style={{ width: 220, height: 220 }} source={require('../TelasLoginCadastro/assets/Marca.jpeg')} />
      </View>

      <Input label='Email' placeholder="Informe o seu E-mail" />
      <br></br>
      <Input label='Senha' placeholder="Informe a sua Senha" />

      <View style={{ flex: 2, marginVertical: 'auto' }} >

        <Button title="Logar" buttonStyle={{
          backgroundColor: 'red', width: 150, padding: 10,
          justifyContent: 'center', marginBottom: 40, marginTop: 40
        }} />

        <Button title="Cadastra-se" buttonStyle={{ backgroundColor: 'red', width: 150, padding: 10, justifyContent: 'center' }} />

      </View>

    </View>
  );
}

export default TelaLogin;

function cadastroTela() {
  return (
    <View style={[cadastro.container, {
      flexDirection: "column",
    }]}>
      <View style={{ flex: 2 }}>
        <Image style={{ width: 220, height: 220 }} source={require('../TelasLoginCadastro/assets/Marca.jpeg')} />
        <Text style={{ color: "red", textAlign: 'center', fontWeight: 'bold', fontSize: 30 }}>CADASTRO</Text>
      </View>

      <Input label='Nome' placeholder="Informe o seu Nome" />

      <Input label='Email' placeholder="Informe a seu Email" />

      <Input label='Senha' placeholder="Informe a sua Senha" />
      

      <View style={{ flex: 1 }} >

        <Button title="Cadastrar" buttonStyle={{ backgroundColor: 'red', width: 150, padding: 10, marginBottom: 40, marginTop: 40 }} />

      </View>

    </View>

  );
}

//export default cadastroTela;

const login = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 5,
    alignContent: 'center',
    alignItems: 'center'
  }

});

const cadastro = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
