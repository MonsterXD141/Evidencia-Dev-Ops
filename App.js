import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { syncData } from './src/utils/cloudEngine';

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={() => syncData()}>
        <Text style={styles.btnText}>ENVIAR TELEMETRÍA</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', alignItems: 'center', justifyContent: 'center', padding: 20 },
  btn: { backgroundColor: '#00ff88', paddingVertical: 18, paddingHorizontal: 35, borderRadius: 12 },
  btnText: { color: '#000', fontWeight: 'bold', fontSize: 18 }
});