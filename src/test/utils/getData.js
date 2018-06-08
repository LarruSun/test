const getDataApi={
    getDatas(url,callback){
        // console.log(url);
        wx.request({
            url: url,
            method: 'GET',
            data: {},
            header: { 'Accept': 'application/json' },
            success: function (res) {
              callback(true,res)
            },
            fail: function (error) {
              console.log(error);
            }
          })
    }
}

module.exports={
    getDataApi
}