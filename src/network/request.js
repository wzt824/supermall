import axios from 'axios'

/** 第一种，参数格式 */
export function request(config, success, failure){
  // 创建实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000,
  })

  // 发送真正的网络请求
  instance(config)
  .then(res => {
    success(res)
  })
  .catch(err => {
    failure(err)
  })
}

/** 第二种，object格式 */
export function requestObj(config){
  // 创建实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000,
  })

  // 发送真正的网络请求
  instance(config.baseConfig)
  .then(res => {
    config.success(res)
  })
  .catch(err => {
    config.failure(err)
  })
}

/** 第三种，promise格式 */
export function requestPromise(config){
  return new Promise((resolve, reject) => {
    // 创建实例
    const instance = axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 5000,
    })

    // 发送真正的网络请求
    instance(config)
    .then(res => {
      resolve(res)
    })
    .catch(err => {
      reject(err)
    })
  })
}

/** 第四种，直接返回axios的实例格式 因为axios返回的就是promise*/
export function requestAxios(config){
  // 1.创建实例
  const instance = axios.create({
    // baseURL: 'http://123.207.32.32:8000',
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000,
  })

  // 2.axios的拦截器
  // 2.1 请求拦截
  instance.interceptors.request.use(config => {
    // 请求成功的拦截
    console.log('---- 请求成功的拦截 ----',config);
    /**
     * 1.可以修改config中某些不符合服务器要求的配置(也可以直接在创建实例的时候直接修改)
     * 2.每次发送请求的时候，可以统一添加加载动画
     * 3.判断某些特殊的请求（比如登录(token)）,必须携带些特殊的信息
     */

    // 需要返回，否则内部拿不到数据
    return config
  }, err => {
    // 请求失败的拦截
    console.log('---- 请求失败的拦截 ----',err);
  })

  // 2.2 响应拦截
  instance.interceptors.response.use(result => {
    console.log('---- 响应成功的拦截 ----',result);
    return result.data
  }, err => {
    console.log('---- 响应失败的拦截 ----',err);
  })


  // 3.发送真正的网络请求
  return instance(config)
}