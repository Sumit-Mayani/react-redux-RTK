import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({
        baseUrl:"https://jsonplaceholder.typicode.com/"
    }),

    endpoints: (builder) => ({

        // all data get
        getAllPost: builder.query({
            query: () => ({
                url: "posts",
                method:'GET'
            })
        }),

        // id data get
        getPostById: builder.query({
            query: (id) => ({
                url: `posts/${id}`,
                method:'GET'
            })
        }),

        // limit data get
        getLimitPost: builder.query({
            query: (num) => ({
                url: `posts/?_limit=${num}`,
                method:'GET'
            })
        }),

        // delete data by id
        deletePost: builder.mutation({
            query: (id) => ({
                url: `posts/${id}`,
                method:'DELETE'
            })
        }),

        // create data
        createPost: builder.mutation({
            query: (newpost) => ({
                url: `posts`,
                method: 'POST',
                body: newpost,
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                },
            })
        }),

        // update posr
        updatePost: builder.mutation({
            query: (updatepostdata) => {
                const { id, ...data } = updatepostdata
                console.log("actualdata",data)
                return {
                    url: `posts/${id}`,
                    method: 'PUT',
                    body: data,
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                    },
                }
            }
        }),
    })
})

// when create custom hook make sure the its with "use" and after every letter firstletter capital
export const { useGetAllPostQuery, useGetPostByIdQuery, useGetLimitPostQuery, useDeletePostMutation, useCreatePostMutation, useUpdatePostMutation } = postApi;