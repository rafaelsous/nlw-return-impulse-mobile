import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 40,
    marginTop: 42,
    marginBottom: 10,
  },
  title: {
    marginBottom: 24,
    fontSize: 20,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_primary,
  },
  button: {
    height: 40,
    marginBottom: 46 + getBottomSpace(),
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.surface_secondary,
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 14,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_primary,
  },
});