import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, SafeAreaView, StatusBar } from 'react-native';

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  // Consumir la API pública (Misión 2)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* Esto configura la barra de estado superior del celular en color oscuro */}
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      
      <View style={styles.contentWrapper}>
        <Text style={styles.mainTitle}>Misión 2: Dark Mode API</Text>
        <Text style={styles.subtitle}>Consumiendo datos de JSONPlaceholder</Text>
        
        {isLoading ? (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="#00ff88" />
            <Text style={styles.loadingText}>Cargando usuarios...</Text>
          </View>
        ) : (
          <FlatList
            data={data}
            keyExtractor={({ id }) => id.toString()}
            contentContainerStyle={styles.listPadding}
            renderItem={({ item }) => (
              <View style={styles.userCard}>
                <View style={styles.cardHeader}>
                  <Text style={styles.userName}>{item.name}</Text>
                  <Text style={styles.userId}>ID: {item.id}</Text>
                </View>
                <Text style={styles.userEmail}>{item.email}</Text>
                
                <View style={styles.divider} />
                
                <Text style={styles.companyLabel}>Empresa:</Text>
                <Text style={styles.companyName}>{item.company.name}</Text>
                <Text style={styles.companyBs}>"{item.company.bs}"</Text>
              </View>
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

// Estilos renovados para el Modo Oscuro
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#121212', // Fondo general casi negro
  },
  contentWrapper: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  mainTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff', // Letra blanca
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#aaaaaa', // Gris claro para el subtítulo
    marginBottom: 25,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: '#00ff88',
    marginTop: 10,
    fontSize: 16,
  },
  listPadding: {
    paddingBottom: 30,
  },
  userCard: {
    backgroundColor: '#1e1e1e', // Gris muy oscuro para la tarjeta
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#333333', // Borde sutil
    
    // Sombras para darle profundidad (se notan menos en negro, pero ayudan)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00ff88', // Verde neón para el nombre (buen contraste)
    flex: 1,
    marginRight: 10,
  },
  userId: {
    fontSize: 12,
    color: '#666666',
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 14,
    color: '#cccccc', // Gris claro para el email
    marginBottom: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#333333',
    marginVertical: 12,
  },
  companyLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#aaaaaa',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 2,
  },
  companyName: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '600',
  },
  companyBs: {
    fontSize: 13,
    color: '#888888',
    fontStyle: 'italic',
    marginTop: 2,
  },
});
/// Nicolas Martinez Y Criollo Martinez - 2024-06-17