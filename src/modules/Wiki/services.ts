import {fetcher, useFetch, useLoadMore} from '@/network/functions';
import {useEffect, useState} from 'react';
import {Film, Planet, Species, StarWarsCharacter} from './interfaces';
import {routes} from './routes';
import {DEFAULT_SPECIES_URL} from './contants';
import {toastNotification} from '@/utils';

export const useGetCharacters = ({search}: {search?: string}) => {
  return useLoadMore<StarWarsCharacter, {search: string | undefined}>({
    url: routes.people,
    params: {search},
    config: {
      staleTime: 5000,
    },
  });
};

export const useGetCharacterHomeWorld = ({url}: {url: string | undefined}) => {
  return useFetch<Planet>({
    url,
    config: {
      cacheTime: 10000,
      staleTime: Infinity,
    },
  });
};

export const useGetFilms = ({filmsURL}: {filmsURL: string[] | undefined}) => {
  const [filmsTitles, setFilmsTitles] = useState<string[]>([]);
  const [isFilmsLoading, setIsFilmsLoading] = useState(false);

  useEffect(() => {
    const fetchFilms = async () => {
      if (!filmsURL) {
        setFilmsTitles([]);
        return;
      }
      try {
        setIsFilmsLoading(true);
        const films = await Promise.all(
          filmsURL.map(async film => {
            const filmData = await fetcher<Film>({url: film, method: 'get'});
            return filmData.title;
          }),
        );
        setFilmsTitles(films);
      } catch {
        toastNotification({
          type: 'error',
          message:
            'Something went wrong fetching the films, please try again later',
          position: 'top',
        });
      } finally {
        setIsFilmsLoading(false);
      }
    };

    fetchFilms();
  }, [filmsURL]);

  return {
    filmsTitles,
    isFilmsLoading,
  };
};

export const useGetSpecies = ({
  speciesURL,
}: {
  speciesURL: string[] | undefined;
}) => {
  const [species, setSpecies] = useState<Species[]>([]);
  const [isSpeciesLoading, setIsSpeciesLoading] = useState(false);

  useEffect(() => {
    const fetchSpecies = async () => {
      if (!speciesURL) {
        setSpecies([]);
        return;
      }
      if (speciesURL.length === 0) {
        try {
          setIsSpeciesLoading(true);

          const speciesFetched = await fetcher<Species>({
            url: DEFAULT_SPECIES_URL,
            method: 'get',
          });

          setSpecies([speciesFetched]);
        } catch {
          toastNotification({
            type: 'error',
            message:
              'Something went wrong fetching species, please try again later',
            position: 'top',
          });
        } finally {
          setIsSpeciesLoading(false);
        }
        return;
      }
      try {
        setIsSpeciesLoading(true);
        const speciesFetched = await Promise.all(
          speciesURL.map(async url => {
            const speciesData = await fetcher<Species>({
              url,
              method: 'get',
            });
            return speciesData;
          }),
        );
        setSpecies(speciesFetched);
      } catch {
        toastNotification({
          type: 'error',
          message:
            'Something went wrong fetching species, please try again later',
          position: 'top',
        });
      } finally {
        setIsSpeciesLoading(false);
      }
    };

    fetchSpecies();
  }, [speciesURL]);

  return {
    species,
    isSpeciesLoading,
  };
};
