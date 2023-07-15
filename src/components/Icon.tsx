import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
} from 'react-native';
import { ICON_SIZE } from 'src/config/icons';

interface IIcons {
  src: ImageSourcePropType;
  onPress?: () => void;
}

const Icon = ({ src, onPress }: IIcons) => {
  return (
    <Pressable onPress={onPress}>
      <Image source={src} style={styles.iconStyle} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {},
  iconStyle: {
    height: ICON_SIZE,
    width: ICON_SIZE,
  },
});

export default Icon;
