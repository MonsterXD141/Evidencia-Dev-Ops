import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.alertIcon}>⚠️</Text>
      <Text style={styles.title}>Aplicación en Mantenimiento</Text>
      <Text style={styles.subtitle}>Estamos mejorando nuestros servicios. Volveremos pronto.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff3cd',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  alertIcon: {
    fontSize: 64,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#856404',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#856404',
    textAlign: 'center',
    marginTop: 10,
  },
});