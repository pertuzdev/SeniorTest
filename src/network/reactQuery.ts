import {
  QueryFunctionContext,
  QueryMeta,
  UseInfiniteQueryOptions,
  useInfiniteQuery,
} from '@tanstack/react-query';

import {apiClient} from './apiClient';

type QueryKeyT = [string, object | undefined];

type Params<ParamsType> = object & ParamsType;

interface PaginatedQueryData<DataType> {
  results: DataType[];
  count: number;
  previous: string | null;
  next: string | null;
}

export const fetcher = <T>({
  queryKey,
  pageParam,
}: QueryFunctionContext<QueryKeyT>): Promise<T> => {
  const [url, params] = queryKey;

  return apiClient
    .get<T>(url, {
      params: {...params, page: pageParam},
    })
    .then(res => res.data);
};

export const useLoadMore = <T, S = undefined>(
  url: string | null,
  params?: Params<S>,
  config?: UseInfiniteQueryOptions<
    PaginatedQueryData<T>,
    Error,
    PaginatedQueryData<T>,
    PaginatedQueryData<T>,
    QueryKeyT
  >,
  meta?: QueryMeta,
) => {
  const context = useInfiniteQuery<
    PaginatedQueryData<T>,
    Error,
    PaginatedQueryData<T>,
    QueryKeyT
  >({
    queryKey: [url!, params],
    queryFn: ({queryKey, pageParam = 1}) =>
      fetcher({queryKey, pageParam, meta}),

    getNextPageParam: (lastPage, allPages) =>
      lastPage.next ? allPages.length + 1 : undefined,
    enabled: !!url,
    ...config,
  });

  return context;
};
