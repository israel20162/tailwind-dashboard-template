import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {setUser} from "../features/userSlice"

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: `${process.env.VITE_APP_BASE_URL}/api/`
    baseUrl: `http://localhost:8000/api/admin/`
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query(data) {
        return {
          url: `token`,
          method: 'POST',
          body: data
        }
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (error) {}
      },
    }),
  }),
});

export const {
  useLoginUserMutation
} = authApi;
