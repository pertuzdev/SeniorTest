import React from 'react';
import {View} from 'react-native';
import {AppText} from '../ui';
import {styles} from './Battery.styles';
import {typography} from '@/theme';

const Battery = () => {
  return (
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
  );
};

export default Battery;
