import {useCustomTheme} from '@/hooks/useCustomTheme';
import {typography} from '@/theme';
import React from 'react';
import {View} from 'react-native';
import {AppText} from '../ui';
import {styles} from './CharacterInfoRow.styles';
import {CharacterRowProps} from './CharacterInfoRow.types';

const CharacterInfoRow = ({children}: CharacterRowProps) => {
  const {colors} = useCustomTheme();
  return (
    <View style={styles.infoRow}>
      <AppText
        style={[
          typography.smallLabel,
          styles.infoRowLabel,
          {color: colors.mediumGray},
        ]}>
        height
      </AppText>
      <View>{children}</View>
      <View style={[styles.line, {backgroundColor: colors.border}]} />
    </View>
  );
};

export default CharacterInfoRow;
