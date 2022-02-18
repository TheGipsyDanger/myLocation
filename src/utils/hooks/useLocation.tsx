import * as Location from 'expo-location';
import { useStorage } from './useStorage';

export function useLocation() {
  const { getStorage, setStorage, cleanStorage } = useStorage();

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

    if (Object.keys(alreadyRequested).length === 0) {
      const { status } = await Location.requestForegroundPermissionsAsync();
      const boolStatus = status === 'granted' ? false : true;
      setStorage('alreadyRequest', true);
      setStorage('sholdShowRequestView', boolStatus);
      return boolStatus;
    } else {
      const sholdShowRequestView = checkStorageSholdShowRequestView();
      return sholdShowRequestView;
    }
    // await cleanStorage();
    // return false;
  }

  return {
    getPermissionLocation,
  };
}
