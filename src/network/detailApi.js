import { requestAxios } from "./request";

// 获取详情数据
export const getDetails = async(data) => {
  return await requestAxios({
    url: '/detail',
    method: 'get',
    params: data,
  })
}

// 获取推荐接口
export const getRecommend = async(data) => {
  return await requestAxios({
    url: '/recommend',
    method: 'get',
    params: data,
  })
}

// 商品信息
export class Goods{
  constructor(itemInfo, columns, services){
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.realPrice = itemInfo.lowNowPrice
    this.discount = itemInfo.discountDesc
    this.discountBgColor = itemInfo.discountBgColor
    this.columns = columns
    this.services = services
  }
}

// 商家信息
export class Shop{
  constructor(shopInfo){
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
    this.goodsCount = shopInfo.cGoods
  }
}

export class GoodsParam {
  constructor(info,rule){
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}