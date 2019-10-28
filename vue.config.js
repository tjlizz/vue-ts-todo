module.exports = {

    devServer: {
        before: require('./mock')
       // open:true
    },
    publicPath: process.env.NODE_ENV === 'production'
        ? '/todo/'
        : '/'
}