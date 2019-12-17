var user = {
    login: function (options) {
        $.ajax({
            type: 'post',
            url: LOGIN,
            data: {
                user_name: options.data.username,
                password: options.data.password

            },
            success: function (res) {
                if (res.code === 200) {
                    options.success();
                } else {
                    options.fail();
                }
            }



        })

    },

    getUser: function (options) {
        $.ajax({
            url: GET_USER,
            success: function (res) {
                if (res.code === 200) {
                    options.success(res.data)
                }
            }
        })

    }

}

