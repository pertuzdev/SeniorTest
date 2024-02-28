import {Header} from '@/components';
import {AppText} from '@/components/ui';
import {useCustomTheme} from '@/hooks/useCustomTheme';
import React from 'react';
import {View} from 'react-native';
import {styles} from './SettingsScreen.styles';
import {shadow, typography} from '@/theme';

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
          <View
            style={[
              styles.card,
              shadow.primary,
              {backgroundColor: colors.card},
            ]}>
            <AppText
              style={[
                typography.smallLabel,
                styles.cardLabel,
                {color: colors.mediumGray},
              ]}>
              Modelo
            </AppText>
            <AppText style={styles.phoneData}>iPhone</AppText>
          </View>
          <View
            style={[
              styles.card,
              shadow.primary,
              {backgroundColor: colors.card},
            ]}>
            <AppText
              style={[
                typography.smallLabel,
                styles.cardLabel,
                {color: colors.mediumGray},
              ]}>
              Sistema operativo
            </AppText>
            <AppText style={styles.phoneData}>17.0.2</AppText>
          </View>
        </View>
        <View style={styles.cardWrapper}>
          <View
            style={[
              styles.card,
              shadow.primary,
              {backgroundColor: colors.card},
            ]}>
            <AppText
              style={[
                typography.smallLabel,
                styles.cardLabel,
                {color: colors.mediumGray},
              ]}>
              Bateria
            </AppText>
            <View style={styles.batteryWrapper}>
              <View style={styles.battery}>
                {[...Array(100)].map((item, index) => (
                  <View key={index} style={styles.batteryLine} />
                ))}
              </View>
              <AppText style={[styles.batteryPercentage, typography.heading]}>
                100%
              </AppText>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default SettingsScreen;
