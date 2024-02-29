import {Battery, Header} from '@/components';
import {AppText, CardInfo} from '@/components/ui';
import {useCustomTheme, useDeviceInfo} from '@/hooks';
import React from 'react';
import {View} from 'react-native';
import {styles} from './SettingsScreen.styles';

const SettingsScreen = () => {
  const {colors} = useCustomTheme();
  const {batteryLevel, model, osVersion} = useDeviceInfo();

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <Header title="Ajustes" isSettings />
      <View style={styles.contentWrapper}>
        <View style={styles.cardWrapper}>
          <CardInfo label="Modelo">
            <AppText style={styles.phoneData}>{model}</AppText>
          </CardInfo>
          <CardInfo label="Sistema operativo">
            <AppText style={styles.phoneData}>{osVersion}</AppText>
          </CardInfo>
        </View>
        <View style={styles.cardWrapper}>
          <CardInfo label="Batería">
            <Battery batteryLevel={batteryLevel} />
          </CardInfo>
        </View>
      </View>
    </View>
  );
};
export default SettingsScreen;
