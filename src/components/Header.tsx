import { StyleSheet, Text, View } from 'react-native';
import { colors } from 'src/config/colors';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hacker News</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 50,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 20,
    // fontFamily: 'Poppins_400Regular',
  },
});

export default Header;
