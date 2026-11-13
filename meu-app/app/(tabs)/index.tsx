import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link, useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();
  const produto = { id: '45', nome: 'Notebook Gamer' };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Home Page</Text>
      <View style={styles.separador} />
      <View style={styles.painel}>
        {/* Navegação passando um objeto no href: */}
        <Link
          href={{
            pathname: '/(screens)/detalhe',
            params: produto,
          }}
          asChild
        >
          <TouchableOpacity style={styles.botao} activeOpacity={0.75}>
            <Text style={styles.textoDoBotao}>Detalhar Produto</Text>
          </TouchableOpacity>
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
  painel: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    paddingHorizontal: 16,
  },
  botao: {
    flex: 1,
    minWidth: 0,
    paddingVertical: 14,
    paddingHorizontal: 12,
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
    textAlign: 'center',
  },
});
