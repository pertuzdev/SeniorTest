import {AppText} from '@/components/ui';
import React from 'react';

const BulletItem = ({item}: {item: string}) => {
  return <AppText> {` \u2022 ${item}`}</AppText>;
};

export default BulletItem;
