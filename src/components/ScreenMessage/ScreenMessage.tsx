import React from 'react';
import {View} from 'react-native';
import {AppText} from '@/components/ui';
import {styles} from './ScreenMessage.styles';

const ScreenMessage = ({
  firstLine,
  secondLine,
}: {
  firstLine: string;
  secondLine: string;
}) => {
  return (
    <View style={styles.messageScreenWrapper}>
      <AppText style={styles.message}>{firstLine}</AppText>
      <AppText style={styles.message}>{secondLine}</AppText>
    </View>
  );
};

export default ScreenMessage;
