const usersCtrl = {};

usersCtrl.getUsers = (req, res) => res.send('users routers');
usersCtrl.createUser = (req, res) => res.send('users routers');
usersCtrl.deleteUser = (req, res) => res.send('users routers');

module.exports = usersCtrl;

