import {toastNotification} from '@/utils/toast';
import {useEffect, useState} from 'react';
import {NativeModules} from 'react-native';

const {DeviceInfoModule} = NativeModules;

interface DeviceInfo {
  model: string;
  batteryLevel: number;
  osVersion: string;
}

const defaultValues = {
  model: 'N/A',
  batteryLevel: 0,
  osVersion: 'N/A',
};

const useDeviceInfo = () => {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>(defaultValues);

  useEffect(() => {
    DeviceInfoModule?.getDeviceInfo((error: any, result: DeviceInfo) => {
      if (error) {
        toastNotification({
          type: 'error',
          message: 'Something went wrong, please try again later',
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
