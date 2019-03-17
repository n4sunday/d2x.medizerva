module.exports = {
    exportPathMap: () => ({
        '/': {page: '/'},
        '/help': {page: '/help'},
        /*'/shop': {page: '/shop'},
        '/popular1': {page: '/popular1'},
        '/popular2': {page: '/popular2'},*/
    })
};
const withImages = require('next-images')
module.exports = withImages()


