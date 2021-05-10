<template>
  <div class="detail-param-info" v-if="Object.keys(paramsInfo).length !== 0">
    <table class="info-size" v-for="(table,indexT) in paramsInfo.sizes" :key="indexT">
      <tr v-for="(tr,indexTr) in table" :key="indexTr">
        <td v-for="(td,indexTd) in tr" :key="indexTd">{{td}}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(item,index) in paramsInfo.infos" :key="index">
        <td class="info-param-key">{{item.key}}</td>
        <td class="info-param-value">{{item.value}}</td>
      </tr>
    </table>
    <div class="info-image" v-if="paramsInfo.image.length !== 0">
      <img :src="paramsInfo.image" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailParamInfo',
  data() {
    return {

    }
  },
  created(){
    console.log(this.paramsInfo);
  },
  props: {
    paramsInfo:{
      type: Object,
      default(){
        return {}
      }
    }
  },
}
</script>

<style scoped lang="less">
  .detail-param-info{
    padding: 20px 0;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;

    table{
      width: 100%;
      padding: 0 15px;
      // border-collapse: collapse;

      tr{
        height: 42px;

        td{
          border-bottom: 1px solid rgba(100, 100, 100, .1);
        }
      }
          
      tr:last-child{
        td{
          border-bottom: none;
        }
      }
    }

    .info-param{
      border-top: 5px solid #f2f5f8;
      tr{
        :last-child{
          color: var(--color-text);
        }
      }
    }

    .info-param-key{
      width: 95px;
    }

  }
</style>
