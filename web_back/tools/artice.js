// 文章的处理
var article = {
    getCate: function (options) {
        $.ajax({
            url: GET_CATE,
            success: function (res) {
                // 1.1检测响应时候成功
                if (res.code === 200) {
                    // 1.2 调用模板迎亲
                    options.success(res);
                }
            }
        })
    },

    xinZeng: function (options) {
        $.ajax({
            type: 'post',
            url: XIN_ZENG,
            data: $('form').serialize(),
            success: function (res) {
                if (res.code === 200) {
                    options.success()
                } else {
                    options.fail();
                }

            }
        })
    },

    bianJi: function (options) {
        $.ajax({
            type: 'post',
            url: BIAN_JI,
            data: options.data,
            success: function (res) {
                if (res.code === 200) {
                    options.success();
                } else {
                    options.fail();
                }

            }
        })
    },

    shanChu: function (options) {
        $.ajax({
            type: 'post',
            url: SHAN_CHU,
            data: {
                id: options.data
            },
            success: function (res) {
                if (res.code === 200) {
                    options.success();
                }
            }

        })
    }

}