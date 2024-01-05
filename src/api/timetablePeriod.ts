import { securedApi } from '@/lib/api';
import {
  getManyResourcesRequestParams,
  transformListResponseGeneric,
} from '@/lib/dataHelper/apiHelper';
import { BaseEntity, IGetManyResourceQueryResult, IGetManyResourcesQuery } from '@/types';
import { ITimeTablePeriodDTO } from '@/types/dto/timeTablePeriod';
import { RESOURCES } from '@/types/resources';

const api = securedApi.injectEndpoints({
  endpoints: (builder) => ({
    getListTimetablePeriod: builder.query<
      IGetManyResourceQueryResult<ITimeTablePeriodDTO>,
      IGetManyResourcesQuery<{ id?: BaseEntity['id'] }>
    >({
      query: (arg) => {
        const request = getManyResourcesRequestParams(arg, RESOURCES.TIMETABLE_PERIOD);
        return request;
      },
      // https://redux-toolkit.js.org/rtk-query/usage/automated-refetching#tag-invalidation-behavior
      providesTags: (result = { list: [], meta: { totalRecords: 0 } }) => [
        { type: RESOURCES.TIMETABLE_PERIOD, id: 'LIST' },
        ...result.list.map((item) => ({ type: RESOURCES.TIMETABLE_PERIOD, id: item.id })),
      ],
      transformResponse: transformListResponseGeneric,
    }),
  }),
});

export const { useGetListTimetablePeriodQuery, useLazyGetListTimetablePeriodQuery } = api;
