import { Stack } from 'expo-router';
import { useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LayoutPilha() {
  const router = useRouter();

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#007AFF' },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerLeft: () => (
          <TouchableOpacity
            style={{ marginLeft: 8 }}
            accessibilityRole="button"
            accessibilityLabel="Voltar para o início"
            onPress={() => router.navigate('/(tabs)')}
            hitSlop={8}
          >
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
        ),
      }}
    >
      <Stack.Screen name="detalhe" options={{ headerStyle: { backgroundColor: 'red' }, title: 'Tela de Detalhes' }} />
      <Stack.Screen name="[id]" />
    </Stack>
  );
}

/*
 * hitSlop={8} aumenta em 8 pontos a área que responde 
 * ao toque ao redor do botão, sem alterar seu tamanho 
 * visual. Assim, fica mais fácil tocar na seta, especialmente 
 * em telas pequenas.
 */