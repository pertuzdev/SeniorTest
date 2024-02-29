import React from 'react';
import {View} from 'react-native';
import {AppText} from '../ui';
import {styles} from './Battery.styles';
import {typography} from '@/theme';
import {useCustomTheme} from '@/hooks/useCustomTheme';

const Battery = ({batteryLevel}: {batteryLevel: number}) => {
  const {colors} = useCustomTheme();
  return (
    <View style={styles.batteryWrapper}>
      <View style={styles.battery}>
        {[...Array(100)].map((item, index) => (
          <View
            key={index}
            style={[
              styles.batteryLine,
              {
                backgroundColor:
                  index <= batteryLevel ? colors.green : colors.stale,
              },
            ]}
          />
        ))}
      </View>
      <AppText
        style={[
          styles.batteryPercentage,
          typography.heading,
          {color: batteryLevel > 15 ? colors.white : colors.black},
        ]}>
        {batteryLevel > 0 ? `${batteryLevel}%` : 'N/A'}
      </AppText>
    </View>
  );
};

export default Battery;
