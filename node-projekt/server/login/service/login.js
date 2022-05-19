function login(req) {
    const reqData = req.body;

    const user = reqData.user;
    const password = reqData.password;

    const testUser = {
        user: 'admin',
        password: 'admin123',
        token: '13fsdf2352342efasduio1j23098askdjaskljdaw31', // To jest fake token - prawdziwy token to np. JWT (sprawdzić w google)
    }

    if (user === testUser.user && password === testUser.password) {
        return { token: testUser.token };
    }

    return 'NO';
}

module.exports = {
	login: login
};