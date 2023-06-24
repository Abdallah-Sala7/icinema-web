import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = `http://icinema.live/api/v1/cinema`;
const userData = JSON.parse(localStorage.getItem("user"));

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer ${userData.token}`,
};

export const addMovieApi = createApi({
  reducerPath: "addMovieApi",
  baseQuery: fetchBaseQuery({ baseUrl, headers }),
  tagTypes: ["Movie"],
  endpoints: (builder) => ({
    addMovie: builder.mutation({
      query: (body) => ({
        url: `/store`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Movie"],
    }),
  }),
});

export const { useAddMovieMutation } = addMovieApi;
