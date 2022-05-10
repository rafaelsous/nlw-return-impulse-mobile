import { StyleSheet } from 'react-native';

import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  options: {
    width: '100%',
    marginBottom: 48,
    alingItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  title: {
    marginBottom: 32,
    fontSize: 20,
    color: theme.colors.text_primary,
    fontFamily: theme.fonts.medium,
  },
});