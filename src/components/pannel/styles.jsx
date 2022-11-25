import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 20,
    backgroundColor: COLORS.lightGrey,
    padding: 15,
    borderRadius: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  date: {
    fontWeight: 'bold',
    fontSize: SIZES.h3,
    color: COLORS.primary,
  },
  index: {
    borderBottomWidth:1,
    borderColor:"#4682B4",
    paddingTop: 5,
    paddingLeft: 3,
    fontWeight: 'bold',
    fontSize: SIZES.h4,
    color: COLORS.blue,
  },
  txtRow: {
    flexDirection: 'row',
  },
  title: {
    color: COLORS.primary,
    fontWeight: '600',
  },
  titleSub: {
    color: COLORS.primary,
    fontWeight: '600',
    lineHeight: 25,
  },
  subtitle: {
    color: COLORS.primary,
    fontWeight: '600',
    
  },
  subtitleSub: {
    color: COLORS.primary,
    fontWeight: '600',
    lineHeight: 15,
    
  },
  line: {
    height: 1,
    backgroundColor: COLORS.darkGrey,
  },
});

export default styles;
