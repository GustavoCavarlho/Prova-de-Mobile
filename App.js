import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Contador() {
  // Estado inicial do contador
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.numero}>{contador}</Text>

      <View style={styles.botoes}>
        <Button
          title="-"
          onPress={() => setContador(contador - 1)}
          color="#FF6347"
        />
        <Button
          title="+"
          onPress={() => setContador(contador + 1)}
          color="#32CD32"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '00000',
  },
  numero: {
    fontSize: 60,
    marginBottom: 30,
  },
  botoes: {
    flexDirection: 'row',
    width: '40%',
    justifyContent: 'space-between',
  },
});
