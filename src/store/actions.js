export default {
  aUpdateInfo(context, payload) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit("updateInfo");
        console.log(payload);
        resolve("成功时返回的数据");
        reject("失败时返回的数据");
      }, 1000);
    })
  }

}