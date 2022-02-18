import * as React from 'react';
import { useEffect } from 'react';
import { AppState } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useLocation } from '~/utils';

import { IRequestLocation } from '~/pages/RequestLocation/data';
import { RequestLocation as Layout } from './Layout';

export const RequestLocation = (props: IRequestLocation) => {
  const { navigate } = useNavigation();
  const { openDeviceSettings, getPermissionStatus } = useLocation();

  useEffect(() => {
    AppState.addEventListener('change', checkAppStatus);
    return () => {
      AppState.removeEventListener('change', checkAppStatus);
    };
  }, []);

  function checkAppStatus(nextAppState: string) {
    nextAppState === 'active' && checkActualPermissions();
  }

  async function checkActualPermissions() {
    const resp = await getPermissionStatus();
    resp && navigate('Home');
  }

  const layoutProps = {
    ...props,
    press: openDeviceSettings,
  };

  return <Layout {...layoutProps} />;
};
