import {toastNotification} from '@/utils/toast';
import {useEffect, useState} from 'react';
import {NativeModules} from 'react-native';

const {DeviceInfoModule} = NativeModules;

interface DeviceInfo {
  model: string;
  batteryLevel: number;
  osVersion: string;
}

const useDeviceInfo = () => {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>();

  console.log('dv=3', NativeModules?.DeviceInfoModule);

  useEffect(() => {
    DeviceInfoModule?.getDeviceInfo((error: any, result: DeviceInfo) => {
      if (error) {
        toastNotification({
          type: 'error',
          message:
            'Something went wrong to get your device info, please try again later',
          position: 'top',
        });
        return;
      }

      setDeviceInfo(result);
    });
  }, []);

  return {...deviceInfo};
};

export default useDeviceInfo;
