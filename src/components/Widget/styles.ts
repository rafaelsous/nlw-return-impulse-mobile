import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  button: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: theme.colors.brand,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 16,
    bottom: getBottomSpace() + 16,
  },
  modal: {
    backgroundColor: theme.colors.surface_primary,
    paddingBottom: getBottomSpace() + 16,
  },
  indicator: {
    width: 56,
    backgroundColor: theme.colors.text_primary,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});