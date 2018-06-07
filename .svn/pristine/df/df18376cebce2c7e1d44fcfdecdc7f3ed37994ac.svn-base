import axios from 'axios'
import qs from 'qs'
axios.defaults.timeout = 10000
// axios.defaults.headers['Content-Type'] = 'application/x-www=form-urlencoded'

var HOST = '/api/eshop';
export default {
  fetchGet (url, params = {}) {
    if (process.env.NODE_ENV == 'development') {
        HOST = '/api/eshop'
    } else {
       HOST = '/equan-wxweb/eshop'
    }
    url = HOST + url;
    return new Promise((resolve, reject) => {
      axios.get(url, params).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    
    })
  },
  fetchPost (url, data) {
    if (process.env.NODE_ENV == 'development') {
        HOST = '/api/eshop'
    } else {
      HOST = '/equan-wxweb/eshop'
    }
    url = HOST + url;

    return new Promise((resolve, reject) => {
       axios({
           method: 'post',
           url: url,
           data: data
       }).then(response => {
          resolve(response.data);
        }).catch(error => {
         reject(error);
        })
 
    })
  }
  // fetchPost (url, data) {    
  //   return new Promise((resolve, reject) => {
  //      axios({
  //          method: 'post',
  //          url: url,
  //          data: qs.stringify(data),
  //          headers: {
  //             'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  //         }
  //      }).then(response => {
  //         resolve(response.data);
  //       }).catch(error => {
  //        reject(error);
  //       })
 
  //   })
  // }
  // fetchPost (url, data) {
  //   url = HOST + url;
  //   let params = new URLSearchParams();
  //   for(var key in data) {
  //     params.append(key, data[key]);
  //   }
  //   return new Promise((resolve, reject) => {
  //      axios({
  //          method: 'post',
  //          url: url,
  //          data: params,
  //          headers: {
  //             'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  //         }
  //      }).then(response => {
  //         resolve(response.data);
  //       }).catch(error => {
  //        reject(error);
  //       })
 
  //   })

}
