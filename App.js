import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, Alert, SafeAreaView, StatusBar } from 'react-native';
import { syncData } from './src/utils/cloudEngine';

export default function App() {
  const [loading, setLoading] = useState(false);

  const handlePress = async () => {
    setLoading(true);
    const result = await syncData();
    setLoading(false);

    if (result && result.length > 0) {
      Alert.alert("¡Éxito QA!", "Registro enviado a Supabase de manera exitosa con JSON anidado.");
    } else {
      Alert.alert("Aviso", "La función devolvió un array vacío []. Revisa tus credenciales o conexión de red.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <View style={styles.content}>
        <Text style={styles.title}>Fase 2: Conexión Supabase</Text>
        
        {loading ? (
          <ActivityIndicator size="large" color="#00ff88" />
        ) : (
          <TouchableOpacity style={styles.btn} onPress={handlePress}>
            <Text style={styles.btnText}>ENVIAR TELEMETRÍA</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  content: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { color: '#ffffff', fontSize: 24, marginBottom: 40, fontWeight: 'bold', textAlign: 'center' },
  btn: { backgroundColor: '#00ff88', paddingVertical: 18, paddingHorizontal: 35, borderRadius: 12 },
  btnText: { color: '#000', fontWeight: 'bold', fontSize: 18 }
});