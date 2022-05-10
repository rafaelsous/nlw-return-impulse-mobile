import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  button: {
    flex: 1,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.brand,
    borderRadius: 4,
  },
  buttonText: {
    color: theme.colors.text_on_brand_color,
    fontSize: 14,
    fontFamily: theme.fonts.medium,
  },
});