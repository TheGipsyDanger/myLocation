import * as Location from 'expo-location';
import { Linking } from 'react-native';
import { useStorage } from './useStorage';

export function useLocation() {
  const { getStorage, setStorage } = useStorage();

  async function checkStorageAlreadyRequested() {
    const resp = await getStorage('alreadyRequested');
    return resp;
  }

  async function checkStorageSholdShowRequestView() {
    const resp = await getStorage('sholdShowRequestView');
    return resp;
  }

  async function getPermissionLocation() {
    const alreadyRequested = await checkStorageAlreadyRequested();

    if (
      alreadyRequested === undefined ||
      Object.keys(alreadyRequested).length === 0
    ) {
      const { status } = await Location.requestForegroundPermissionsAsync();
      const boolStatus = status === 'granted' ? false : true;
      setStorage('alreadyRequest', true);
      setStorage('sholdShowRequestView', boolStatus);
      return boolStatus;
    } else {
      const sholdShowRequestView = checkStorageSholdShowRequestView();
      return sholdShowRequestView;
    }
  }

  async function getPermissionStatus() {
    const { status } = await Location.requestForegroundPermissionsAsync();
    return status === 'granted' ? true : false;
  }

  async function getLocation() {
    const resp = await Location.getCurrentPositionAsync({});
    return resp;
  }

  function openDeviceSettings() {
    Linking.openSettings();
  }

  return {
    getLocation,
    openDeviceSettings,
    getPermissionStatus,
    getPermissionLocation,
  };
}
