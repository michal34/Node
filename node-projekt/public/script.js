$(document).ready(function() {
    sessionStorage.setItem('token', '',);
    $('#loginForm').submit(function(event) {
        event.preventDefault();

        var user = event.target[0].value;
        var password = event.target[1].value;

        if (user && password) {
            var url = '/api/login';
            var data = { user, password };

            $.ajax({
                type: 'POST',
                url: url,
                data: data,
                success: successFn
            });

            function successFn (res) {
                var resContainer = $('#res');

                if (res.token) {
                    resContainer.html('Logujemy użytkownika');

                    $('.hidden-fn').show();

                    sessionStorage.setItem('token', res.token);
                } else {
                    $('.hidden-fn').hide();

                    sessionStorage.setItem('token', '');

                    resContainer.html('Złe dane do logowania');
                }
            }
        }
    });

    $('.hidden-fn button').click(function() {
        var url = '/api/value';
        var data = {
            token: sessionStorage.getItem('token'),
        }

        $.ajax({
            type: 'POST',
            url: url,
            data: data,
            success: successFn
        });

        function successFn(res) {
            $('#ownerName').html('Właściciel: ' + res.name);
            $('#accountValue').html('Na koncie masz: ' + res.value + ' ' + res.currency);
        }
    });

});