import {useLoadMore} from '@/network/reactQuery';
import {routes} from './routes';
import {StarWarsCharacter} from './interfaces';

export const useGetCharacters = ({search}: {search?: string}) => {
  return useLoadMore<StarWarsCharacter, {search: string | undefined}>({
    url: routes.people,
    params: {search},
    config: {
      staleTime: 5000,
    },
  });
};
