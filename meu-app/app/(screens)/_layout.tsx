import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
<Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#007AFF' },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen name="detalhe" options={{ headerStyle: { backgroundColor: 'red' }, title: 'Tela de Detalhes' }} />
      <Stack.Screen name="[id]" />
    </Stack>
  );
}
