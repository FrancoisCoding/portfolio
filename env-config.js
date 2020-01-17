const prod = process.env.NODE_ENV === 'production';

module.exports = {
    'process.env.BASE_URL': prod
        ? 'https://filipjerga.herokuapp.com'
        : 'http://localhost:3000',
    'process.env.NAMESPACE': 'https://filipjerga.herokuapp.com',
    'process.env.CLIENT_ID': '1gbOuVc9mDL2rfsmbsDFGOPbWH0eB2oT'
    // 'process.env.DB_URI':
    //     'mongodb+srv://FrancoisCoding:Dragonballz11@portfolio-francois-viaur.mongodb.net/test?retryWrites=true&w=majority'
};

// PORT=5000
// DB_URI=mongodb+srv://FrancoisCoding:Dragonballz11@portfolio-francois-viaur.mongodb.net/test?retryWrites=true&w=majority
// CLIENT_ID=1gbOuVc9mDL2rfsmbsDFGOPbWH0eB2oT
// BASE_URL=http://localhost:3000
