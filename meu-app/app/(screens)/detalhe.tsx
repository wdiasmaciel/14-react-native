import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams, Link } from 'expo-router';

export default function Detalhes() {
  // Captura os parâmetros passados na URL/Rota:
  const { id, nome } = useLocalSearchParams<{
    id?: string | string[];
    nome?: string | string[];
  }>();
  const identificador = Array.isArray(id) ? id[0] : id;
  const nomeProduto = Array.isArray(nome) ? nome[0] : nome;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes do Produto</Text>
      
      <View style={styles.card}>
        <Text style={styles.text}>ID do Produto: {identificador}</Text>
        <Text style={styles.text}>Nome do Produto: {nomeProduto}</Text>
      </View>

      <Link href="/" style={styles.backLink}>
        <Text style={styles.backText}>Voltar para Início</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 20,
    width: '80%',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },
  backLink: {
    marginTop: 10,
  },
  backText: {
    color: '#007AFF',
    fontSize: 16,
  },
});

/*
 * 1) useLocalSearchParams(): hook que lê de forma reativa os
 *    parâmetros da URL atual: /detalhe?id=123&nome=Notebook%20Gamer
 */
