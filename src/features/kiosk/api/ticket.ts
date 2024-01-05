import { kioskApi } from '@/lib/api';
import {
  transformListResponseGeneric,
  transformResponseGeneric,
} from '@/lib/dataHelper/apiHelper';
import { IGetManyResourceQueryResult, IGetManyResourcesQuery } from '@/types';
import { KIOSK_RESOURCES } from '@/types/resources';

import {
  ISearchTicketFilter,
  ITicketCreateDTO,
  ITicketDTO,
  ITicketUpdateDTO,
} from '../types/ticket';

// Define a service using a base URL and expected endpoints
const api = kioskApi.injectEndpoints({
  endpoints: (builder) => ({
    getListTicket: builder.query<
      IGetManyResourceQueryResult<ITicketDTO>,
      IGetManyResourcesQuery<ISearchTicketFilter>
    >({
      query: (arg) => {
        const { filter } = arg;
        if (Object.keys(filter).length === 0) {
          // empty filter, use GET ALL if API is available
          return {
            url: `${KIOSK_RESOURCES.KIOSK_TICKET}`,
            method: 'GET',
            useAsync: true,
          };
        }
        return {
          url: `search/${KIOSK_RESOURCES.KIOSK_TICKET}`,
          method: 'POST',
          data: filter,
          useAsync: true,
        };
      },
      transformResponse: transformListResponseGeneric,
    }),
    createTicket: builder.mutation<ITicketDTO, ITicketCreateDTO>({
      query: (data) => ({
        url: `${KIOSK_RESOURCES.KIOSK_TICKET}`,
        method: 'POST',
        data,
        useAsync: true,
      }),
      transformResponse: transformResponseGeneric,
      invalidatesTags: (result, error) => (error ? [] : [KIOSK_RESOURCES.KIOSK_MODALITY]),
    }),
    updateTicket: builder.mutation<ITicketDTO, ITicketUpdateDTO>({
      query: (data) => ({
        url: `${KIOSK_RESOURCES.KIOSK_TICKET}`,
        method: 'PUT',
        data,
        useAsync: true,
      }),
      invalidatesTags: (result, error) => (error ? [] : [KIOSK_RESOURCES.KIOSK_TICKET]),
    }),
  }),
});

export const {
  useCreateTicketMutation,
  useGetListTicketQuery,
  useLazyGetListTicketQuery,
  useUpdateTicketMutation,
} = api;
