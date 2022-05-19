const jwt = require('jsonwebtoken');

function refreshToken(req) {
    const key = req.body.key;
    const decoded = jwt.verify(key, 'password123');

    if (decoded) {
        return {
            user: decoded.name,
            status: 'ok',
            key: key,
        };
    } else {
        return 'no';
    };
};

function login(req) {
    const user = req.body;

    if (user.name === 'adam' && user.password === 'test123') {
        const token = jwt.sign({ name: user.name, userType: 'admin' }, 'password123');
        
        return {
            user: user.name,
            status: 'ok',
            key: token,
        };
    };

    if (user.name === 'ola' && user.password === 'test1234') {
        const token = jwt.sign({ name: user.name, userType: 'user' }, 'password123');

        return {
            user: user.name,
            status: 'ok',
            key: token,
        };
    };

    return 'no';
};

function secretData(req) {
    const key = req.body.key;

    const decoded = jwt.verify(key, 'password123');

    if (decoded.userType === 'admin') {
        return 'To jest Twój sekret Adam (Admin)';
    }
    if (decoded.userType === 'user') {
        return 'To jest Twój sekret Ola (User)';
    }

    return 'Bez klucza nie podam Tobie sekretu';
};

function getUserData(req) {
    const key = req.body.key;
    const decoded = jwt.verify(key, 'password123');
    
    const userData = {
        type: 'admin',
        pseudo: 'Adamski',
        birthDay: '10.10.1990',
        data: 'Tutaj będzie opis użytkownika',
    }
    
    if (decoded.userType === userData.type) {
        return userData;
    }
}

module.exports = { login, refreshToken, secretData, getUserData };