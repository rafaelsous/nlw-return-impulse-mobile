import React from 'react';
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { theme } from '../../theme';

import { styles } from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  isLoading: boolean;
}

export function Button({ title, isLoading, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.button} {...rest}>
      {isLoading ? (
        <ActivityIndicator
          color={theme.colors.text_on_brand_color}
        />
      ) : (
        <Text style={styles.buttonText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}
