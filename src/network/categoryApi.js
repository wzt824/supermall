import { requestAxios } from "./request";

// 获取分类
export const getCategory = async(data) => {
  return await requestAxios({
    url: '/category',
    method: 'get',
    params: data,
  })
}

// 获取子分类
export const getSubCategory = async(data) => {
  return await requestAxios({
    url: '/subCategory',
    method: 'get',
    params: data,
    // { /subCategory?maitKey=3627 }
  })
}