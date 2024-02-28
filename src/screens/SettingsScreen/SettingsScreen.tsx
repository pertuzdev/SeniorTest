import {Header} from '@/components';
import Battery from '@/components/Battery/Battery';
import {AppText} from '@/components/ui';
import CardInfo from '@/components/ui/CardInfo/CardInfo';
import {useCustomTheme} from '@/hooks/useCustomTheme';
import React from 'react';
import {View} from 'react-native';
import {styles} from './SettingsScreen.styles';

const SettingsScreen = () => {
  const {colors} = useCustomTheme();
  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <Header
        title="Ajustes"
        backgroundColor={colors.secondary}
        titleColor="#fff"
      />
      <View style={styles.contentWrapper}>
        <View style={styles.cardWrapper}>
          <CardInfo label="Modelo">
            <AppText style={styles.phoneData}>iPhone</AppText>
          </CardInfo>
          <CardInfo label="Sistema operativo">
            <AppText style={styles.phoneData}>17.0.2</AppText>
          </CardInfo>
        </View>
        <View style={styles.cardWrapper}>
          <CardInfo label="Batería">
            <Battery />
          </CardInfo>
        </View>
      </View>
    </View>
  );
};
export default SettingsScreen;
