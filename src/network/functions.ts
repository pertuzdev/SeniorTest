import {
  QueryFunctionContext,
  QueryMeta,
  UseInfiniteQueryOptions,
  UseQueryOptions,
  useInfiniteQuery,
  useQuery,
} from '@tanstack/react-query';

import {apiClient} from './apiClient';
import {AxiosRequestConfig} from 'axios';

type QueryKeyT = [string, object | undefined];

type Params<ParamsType> = object & ParamsType;

interface PaginatedQueryData<DataType> {
  results: DataType[];
  count: number;
  previous: string | null;
  next: string | null;
}

export type fetcherProps = {
  url: string;
  method: 'get' | 'post' | 'put' | 'delete' | 'patch';
  data?: object;
  config?: AxiosRequestConfig<object> | undefined;
};

export const fetcher = async <T>({url, method, data, config}: fetcherProps) => {
  const response = await apiClient[method]<T>(url, data, config);
  return response.data;
};

export const reactQueryFetcher = <T>({
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

export const useLoadMore = <T, S = undefined>({
  url,
  params,
  config,
  meta,
}: {
  url: string | null;
  params?: Params<S>;
  config?: UseInfiniteQueryOptions<
    PaginatedQueryData<T>,
    Error,
    PaginatedQueryData<T>,
    PaginatedQueryData<T>,
    QueryKeyT
  >;
  meta?: QueryMeta;
}) => {
  const context = useInfiniteQuery<
    PaginatedQueryData<T>,
    Error,
    PaginatedQueryData<T>,
    QueryKeyT
  >({
    queryKey: [url!, params],
    queryFn: ({queryKey, pageParam = 1}) =>
      reactQueryFetcher({queryKey, pageParam, meta}),

    getNextPageParam: (lastPage, allPages) =>
      lastPage.next ? allPages.length + 1 : undefined,
    enabled: !!url,
    ...config,
  });

  return context;
};

export const useFetch = <T>({
  url,
  config,
  meta,
  params,
}: {
  url: string | undefined;
  params?: object;
  config?: UseQueryOptions<T, Error, T, QueryKeyT>;
  meta?: QueryMeta;
}) => {
  const context = useQuery<T, Error, T, QueryKeyT>(
    [url!, params],
    ({queryKey}) => reactQueryFetcher({queryKey, meta}),
    {
      ...config,
      enabled: !!url && (config?.enabled ?? true),
    },
  );

  return context;
};
