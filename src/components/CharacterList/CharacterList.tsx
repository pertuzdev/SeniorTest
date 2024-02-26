import React, {useCallback} from 'react';

import {CharacterListProps} from './CharacterList.types';
import {CharacterItem} from '@/components';
import {FlashList} from '@shopify/flash-list';
import {StarWarsCharacter} from '@/modules/Wiki/interfaces';
import {ActivityIndicator, View} from 'react-native';
import {useGetCharacters} from '@/modules/Wiki/services';
import {styles} from './CharacterList.styles';

const CharacterList = ({search = ''}: CharacterListProps) => {
  const {data, hasNextPage, isFetchingNextPage, fetchNextPage} =
    useGetCharacters({search});
  const characters = data?.pages.flatMap(page => page.results);
  const loadMoreCharacters = () => hasNextPage && fetchNextPage();

  const renderListFooterComponent = useCallback(() => {
    if (isFetchingNextPage) {
      return (
        <View style={styles.loadingWrapper}>
          <ActivityIndicator animating={true} color="blue" size={30} />
        </View>
      );
    }
    return null;
  }, [isFetchingNextPage]);

  const renderItem = ({item}: {item: StarWarsCharacter}) => (
    <CharacterItem character={item} />
  );
  return (
    <View style={{flex: 1}}>
      <FlashList
        data={characters}
        renderItem={renderItem}
        keyExtractor={item => item.url}
        estimatedItemSize={90}
        onEndReached={loadMoreCharacters}
        onEndReachedThreshold={0.7}
        ListFooterComponent={renderListFooterComponent}
      />
    </View>
  );
};

export default CharacterList;
