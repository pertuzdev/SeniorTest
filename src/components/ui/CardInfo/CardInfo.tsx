import React, {ReactNode} from 'react';
import {View} from 'react-native';
import {AppText} from '@/components/ui';
import {styles} from './CardInfo.styles';
import {shadow, typography} from '@/theme';
import {useCustomTheme} from '@/hooks/useCustomTheme';

const CardInfo = ({children, label}: {children: ReactNode; label: string}) => {
  const {colors} = useCustomTheme();
  return (
    <View style={[styles.card, shadow.primary, {backgroundColor: colors.card}]}>
      <AppText
        style={[
          typography.smallLabel,
          styles.cardLabel,
          {color: colors.mediumGray},
        ]}>
        {label}
      </AppText>
      {children}
    </View>
  );
};

export default CardInfo;
