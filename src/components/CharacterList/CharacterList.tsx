import React, {useCallback} from 'react';

import {CharacterItem, ScreenMessage} from '@/components';
import {CharacterListLoader, Spinner} from '@/components/ui';
import {StarWarsCharacter} from '@/modules/Wiki/interfaces';
import {useGetCharacters} from '@/modules/Wiki/services';
import {FlashList} from '@shopify/flash-list';
import {RefreshControl, View} from 'react-native';
import {CharacterListProps} from './CharacterList.types';

const CharacterList = ({search = ''}: CharacterListProps) => {
  const {
    data,
    isLoading,
    isError,
    hasNextPage,
    isFetchingNextPage,
    isRefetching,
    refetch,
    fetchNextPage,
  } = useGetCharacters({search});
  const characters = data?.pages.flatMap(page => page.results);
  const loadMoreCharacters = () => hasNextPage && fetchNextPage();

  const renderEmptyComponent = () => (
    <ScreenMessage
      firstLine="There's no characters 😢"
      secondLine="Try reloading or with a new search"
    />
  );

  const renderListFooterComponent = useCallback(
    () => (isFetchingNextPage ? <Spinner /> : null),
    [isFetchingNextPage],
  );

  const renderItem = ({item}: {item: StarWarsCharacter}) => (
    <CharacterItem character={item} />
  );

  if (isLoading) {
    return <CharacterListLoader />;
  }

  if (isError) {
    return (
      <ScreenMessage
        firstLine="Something wrong happened 😢"
        secondLine="Try reloading later"
      />
    );
  }

  return (
    <View style={{flex: 1}}>
      <FlashList
        data={characters}
        renderItem={renderItem}
        keyExtractor={item => item.url}
        estimatedItemSize={90}
        onRefresh={refetch}
        refreshing={isRefetching && !search}
        onEndReached={loadMoreCharacters}
        onEndReachedThreshold={0.7}
        ListFooterComponent={renderListFooterComponent}
        ListEmptyComponent={renderEmptyComponent}
        refreshControl={
          <RefreshControl
            refreshing={isRefetching && !search}
            onRefresh={refetch}
          />
        }
      />
    </View>
  );
};

export default CharacterList;
