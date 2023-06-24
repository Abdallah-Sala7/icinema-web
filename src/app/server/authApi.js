import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = `http://icinema.live/api/v1/cinema`;
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl, headers }),
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Auth"],
    }),

    register: builder.mutation({
      query: (body) => ({
        url: "/register",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Auth"],
    }),

    verify: builder.mutation({
      query: (body) => ({
        url: "/verify-email?_method=patch",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useVerifyMutation } =
  authApi;
