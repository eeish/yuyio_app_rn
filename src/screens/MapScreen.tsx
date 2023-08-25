import { useWalletConnectModal } from '@walletconnect/modal-react-native';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Button from '../components/Button';
import Container from '../components/Container';
import { height } from '../utils/layout';
import { RootStackScreenProps } from '../utils/types';

const MapScreen = ({ navigation }: RootStackScreenProps<'MapScreen'>) => {
  const { address } = useWalletConnectModal();

  console.log('address', address);

  const onPressChat = () => {};

  return (
    <Container style={styles.container}>
      <MapView provider={PROVIDER_GOOGLE} style={styles.mapView} />
      <TouchableOpacity
        onPress={onPressChat}
        style={[styles.buttonWrapper, styles.back]}
        activeOpacity={0.85}>
        <Image
          style={styles.icon}
          source={require('../assets/images/chat.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.buttonWrapper, styles.avatar]}
        activeOpacity={0.85}>
        <Image
          style={styles.avatarImage}
          source={require('../assets/images/avatar.png')}
        />
      </TouchableOpacity>
      <View style={styles.bottomButton}>
        <Button fullWidth text={'Go to Travel'} />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  mapView: {
    height,
  },
  icon: {
    width: 24,
    height: 24,
  },
  buttonWrapper: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    backgroundColor: '#f2f2f2',
  },
  back: {
    position: 'absolute',
    left: 20,
    top: 72,
  },
  avatar: {
    position: 'absolute',
    right: 20,
    top: 72,
    borderWidth: 2,
    borderColor: '#FF7D0D',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
  },
  bottomButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 64,
    paddingHorizontal: 20,
  },
});

export default MapScreen;