import { View, Text, StyleSheet } from 'react-native';

export default function Perfil() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meu Perfil</Text>
      <View style={styles.separador} />
      <Text>Segunda aba do aplicativo.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#efefef',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separador: {
    marginVertical: 50,
    height: 1,
    width: '80%',
    borderWidth: 1,
    borderColor: 'green',
    backgroundColor: 'green',
  },
});
