import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import { useRouter } from 'expo-router';

export default function DetalhesDoProduto() {
  // Captura os parâmetros passados na URL/Rota:
  const { id, nome } = useLocalSearchParams();
  const identificador = Array.isArray(id) ? id[0] : id;
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ title: `Produto ${identificador}` }} />
      <View style={styles.conteudo}>
        <View style={styles.detalhes}>
          <Text style={styles.texto}>ID do Produto: {id}</Text>
          <Text style={styles.texto}>Nome do Produto: {nome}</Text>
        </View>
        <TouchableOpacity
          style={styles.botao}
          activeOpacity={0.75}
          onPress={() => router.navigate('/(tabs)')} >
          <Text style={styles.textoDoBotao}>Home</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  conteudo: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
  },
  detalhes: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 18,
    color: '#1F2937',
    marginBottom: 8,
    textAlign: 'center',
  },
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
