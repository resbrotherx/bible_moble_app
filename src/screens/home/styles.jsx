import { Platform, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#003460",
    alignItems: 'center',
    paddingBottom: 30,
    zIndex: 400,
    elevation: 400,
  },
  appName: {
    color: COLORS.white,
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    fontWeight: 'bold',
    marginBottom:20,
    fontSize: SIZES.h1,
  },
  noData: {
    marginTop: 100,
    alignItems: 'center',
  },
  noDataTxt: {
    color: COLORS.blue,
    fontSize: SIZES.h1,
    fontWeight: 'bold',
  },
});

export default styles;
