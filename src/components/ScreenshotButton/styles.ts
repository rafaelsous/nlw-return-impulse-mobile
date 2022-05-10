import { StyleSheet } from 'react-native';

import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: theme.colors.surface_secondary,
    position: 'relative',
  },
  removeIcon: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 4,
  }
});