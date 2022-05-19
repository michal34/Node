$(document).ready(function() {
    $('#logout').hide();

    var refreshToken = function() {
        var token = $.cookie('token');
        
        if (token) {
            var url = '/api/refresh-token';
            var data = { key: token };
    
            $.ajax({
                type: 'POST',
                url: url,
                data: data,
                success: successFn
            });
            
            function successFn (data) {
                $.cookie('token', data.key, { expires : 7})
                if (data.key) {
                    $('#loginForm').hide();
                    $('#logout').show();
                    $('#hello').html('Witaj ' + data.user);
                    $('#secret').html("");
                    getUserData();
                };                
            };
        };
    };

    var getUserData = function() {
        var url = '/api/get-user-data';
        var token = $.cookie('token');
        var data = { key: token }

        $.ajax({
            type: 'POST',
            url: url,
            data: data,
            success: successFn
        });

        function successFn (data) {
            for (var [key, value] of Object.entries(data)) {
                $(`<p><span>${key}:</span> ${value}</p>`).appendTo('#data');
            };
        };
    };

    refreshToken();
    
    $('#loginForm').submit(function(event) {
        event.preventDefault();

        var name = event.target[0].value;
        var password = event.target[1].value;

        if (name && password) {
            var url = '/api/login';
            var data = { name, password };
            
            $.ajax({
                type: 'POST',
                url: url,
                data: data,
                success: successFn
            });
            
            function successFn (data) {
                $.cookie('token', data.key, { expires : 7});
                if (data.key) {
                    $('#loginForm').hide();
                    $('#logout').show();
                    $('#hello').html('Witaj ' + data.user);
                    $('#secret').html("");
                    getUserData();
                };
            };
        };
    });

    $('#showSecret').click(function() {
            var url = '/api/secret-data';
            var token = $.cookie('token');
            
            if (!token) { return }; 

            var data = { 
                key: token, 
            };

            $.ajax({
                type: 'POST',
                url: url,
                data: data,
                success: successFn
            });

            function successFn (data) {
                $('#secret').html(data);
            };
    });

    $('#logout').click(function() {
        $.removeCookie('token');
        location.reload();
    });
});