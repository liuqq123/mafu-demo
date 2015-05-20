/**
 * Created by liuqq on 2015/5/18.
 */
$(function () {
    $('#userForm').validate({
        rules: {
            userName: {
                required: true
            },
            email:{email:true}
        },
        messages: {
            "UserName": {
                required: "用户名不能为空.",
                minlength: "最少6位",
                maxlength:"最多12位"
            },
            "Password": {
                required:"密码不能为空."
            }
        }
    });
});
