import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

export function Copyright() {
  return (
    <View style={styles.container}>
      <Text style={styles.copyrightText}>Feito com ♥ pela Rocketseat</Text>
    </View>
  );
}