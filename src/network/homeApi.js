import { requestAxios } from "./request";

// 获取首页轮播图数据
export const getHomeBannerData = async(data) => {
  return await requestAxios({
    url: '/home/multidata',
    method: 'get',
    params: data,
  })
}

// 获取首页流行、新款、精选数据
export const getHomeGoods = async(data) => {
  return await requestAxios({
    url: '/home/data',
    method: 'get',
    params: data,
  })
}