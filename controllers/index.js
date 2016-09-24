module.exports = function (router) {
  router.get('/', function (req, res) {
    var data = {
      names: [
        {
          name: 'Diana',
          mobile: '12345678',
          email: 'paulomcnally@gmail.com'
        },
        {
          name: 'Kenneth',
          mobile: '88888888',
          email: 'demo@gmail.com'
        },
        {
          name: 'Mario',
          mobile: '00000000',
          email: 'juan@gmail.com'
        }
      ]
    };

    res.render('index.dust', data);
  });
};
