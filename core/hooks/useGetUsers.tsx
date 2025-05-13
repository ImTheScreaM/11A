// 'use client'
//
// import {useEffect} from "react";
// import {useQuery} from "@tanstack/react-query";
//
// const getData = async () => {
//     const res = await fetch()
//     return res.json();
// }
//
//
// export const useGetUsers = () => {
//
//     const {data,isLoading,isSuccess,isError} = useQuery({
//         queryKey:['getDataUsers'],
//         queryFn:getData,
//         select:data => data
//     })
//
//     useEffect(() => {
//        if (isError) return console.error(isError);
//     },[isError])
//
//     useEffect(() => {
//         if (isSuccess) return console.log(isSuccess)
//     },[data,isLoading])
//
//     return {data,isLoading,isSuccess,isError}
// }