const forecast= require('./api')
forecast(-75.7888, 44.1545, (error, data)=>{
    console.log('error', error)
    console.log('data', data)
})