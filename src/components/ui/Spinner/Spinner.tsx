import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {styles} from './Spinner.styles';

export const Spinner = () => {
  return (
    <View style={styles.loadingWrapper}>
      <ActivityIndicator animating={true} color="blue" size={30} />
    </View>
  );
};
