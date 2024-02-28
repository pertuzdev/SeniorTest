import React from 'react';
import {StyleSheet} from 'react-native';
import Toast, {ErrorToast, ToastConfigParams} from 'react-native-toast-message';

type ToastProps = {
  type: 'success' | 'error' | 'info';
  message: string;
  position?: 'top' | 'bottom';
  visibilityTime?: number;
  autoHide?: boolean;
};

export const toastNotification = ({
  type,
  message,
  position = 'bottom',
  visibilityTime = 3000,
  autoHide = true,
}: ToastProps) => {
  return Toast.show({
    type: type,
    text1: message,
    position: position,
    visibilityTime,
    autoHide,
  });
};

export const toastConfig = {
  error: (props: ToastConfigParams<any>) => (
    <ErrorToast
      {...props}
      text1NumberOfLines={2}
      text1Style={styles.textStyle}
    />
  ),
};

const styles = StyleSheet.create({
  textStyle: {
    fontWeight: '500',
  },
});
