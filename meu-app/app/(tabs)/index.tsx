import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link, useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();
  const produto = { id: '45', nome: 'Notebook Dell' };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Home Page</Text>
      <View style={styles.separador} />
      <View style={styles.painel}>
        {/* Navegação passando um objeto no href: */}
      <Link
        href={{
          pathname: '/(screens)/detalhes',
          params: produto,
        }}
        style={styles.botao}
      >
        <Text style={styles.textoDoBotao}>Ver Detalhes do Produto</Text>
      </Link>


        <TouchableOpacity
          style={styles.botao}
          activeOpacity={0.75}
          onPress={() => router.push({ pathname: '/(screens)/[id]', params: produto })} >
          <Text style={styles.textoDoBotao}>Carregar Produto</Text>
        </TouchableOpacity>
      </View>
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
    borderColor: 'red',
    backgroundColor: 'red',
  },
  painel: {flex: 1},
  botao: {
    minWidth: 220,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#2563EB',
    elevation: 3,
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.18,
    shadowRadius: 5,
  },
  textoDoBotao: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
