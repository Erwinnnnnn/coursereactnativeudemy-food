import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer zzDT7uKqGZbO8F6d-WtRNrDS89cpMvlzkioqeH8GVmWlDIhivQHayaJ8rtdaVQNN6GUTdje4ulDl_jSkubnSwyJE_inVa-AjIeZMMSM9zI43sBsKXTr5tMVCTReKXnYx'
    }
});