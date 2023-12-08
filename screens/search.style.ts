import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants';

interface StyleProps {
  color?: string;
  top?: number;
}

const styles = (props: StyleProps = {}) => StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    marginHorizontal: SIZES.small,
    marginVertical: SIZES.medium,
    height: 50
  },
  searchIcon: {
    marginHorizontal: 10,
    color: COLORS.gray,
    marginTop: SIZES.small
  },
  serachWrapper: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    marginRight: SIZES.small,
    borderRdaius: SIZES.small
  },
  searchInput: {
    fontFamily: "regular",
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.small
  },
  searchButton: {
    width: 50,
    height: "100%",
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
  }
})

export default styles;