import React from 'react';
import {AppText, BulletItem, Spinner} from '@/components/ui';
import {typography} from '@/theme';

const CharacterBulletList = ({
  list,
  isLoading,
}: {
  list: string[];
  isLoading?: boolean;
}) => {
  if (isLoading) {
    return <Spinner />;
  }

  if (list.length === 1) {
    return <AppText style={[typography.text]}>{list[0]}</AppText>;
  }
  return (
    <>
      {list.map(item => (
        <BulletItem key={item} item={item} />
      ))}
    </>
  );
};

export default CharacterBulletList;
