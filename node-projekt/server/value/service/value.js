function getValue(req) {
    const reqData = req.body;

    const testUser = {
        token: '13fsdf2352342efasduio1j23098askdjaskljdaw31', // To jest fake token - prawdziwy token to np. JWT (sprawdzić w google)
    }

    const account = {
        name: 'Michał',
        value: 120,
        currency: 'PLN',
    }

    if (reqData.token === testUser.token) {
        return account;
    } else {
        return 'NO';
    }

}

module.exports = {
	getValue: getValue
};