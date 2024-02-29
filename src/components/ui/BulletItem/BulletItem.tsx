import {AppText} from '@/components/ui';
import React from 'react';

export const BulletItem = ({item}: {item: string}) => {
  return <AppText> {` \u2022 ${item}`}</AppText>;
};
