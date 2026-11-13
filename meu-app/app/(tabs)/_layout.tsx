import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function LayoutAbas() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'blue',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size * 0.75} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size * 0.75} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="configuracao"
        options={{
          title: 'Configuração',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size * 0.75} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
