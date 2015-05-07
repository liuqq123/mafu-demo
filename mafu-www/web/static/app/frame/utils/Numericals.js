/**
 * @description 浮点类型计算
 */
define(['angular'], function (angular) {
    return angular.module('cargo.utils.Numericals', []).factory('Numericals', function () {
        var getDecimalLen = function (arg) {
            var s, len = 0;
            try {
                if (arg) {
                    s = arg.toString();
                    if (s.indexOf('.') != -1) {
                        len = s.split('.')[1].length;
                    }
                }
            } catch (e) {
                len = 0;
            }
            return len;
        };

        return {
            /**
             *  加
             * @param arg1 {number}
             * @param arg2 {number}
             * @returns {number}
             */
            add: function (arg1, arg2) {
                var m,
                    r1 = getDecimalLen(arg1),
                    r2 = getDecimalLen(arg2);
                m = Math.pow(10, Math.max(r1, r2));
                return (arg1 * m + arg2 * m) / m;
            },
            /**
             * 减
             * @param arg1 {number}
             * @param arg2 {number}
             * @returns {string}
             */
            subtraction: function (arg1, arg2) {
                var m, n,
                    r1 = getDecimalLen(arg1),
                    r2 = getDecimalLen(arg2);
                m = Math.pow(10, Math.max(r1, r2));
                //动态控制精度长度
                n = (r1 >= r2) ? r1 : r2;
                return ((arg1 * m - arg2 * m) / m).toFixed(n);
            },
            /**
             * 乘
             * @param arg1 {number}
             * @param arg2 {number}
             * @returns {number}
             */
            multiply: function (arg1, arg2) {
                var m = getDecimalLen(arg1) + getDecimalLen(arg2),
                    s1 = arg1.toString(),
                    s2 = arg2.toString();
                return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m);
            },
            /**
             * 除
             * @param arg1 {number}
             * @param arg2 {number}
             * @returns {number}
             */
            division: function (arg1, arg2) {
                var r1 = Number(arg1.toString().replace('.', '')),
                    r2 = Number(arg2.toString().replace('.', '')),
                    t1 = getDecimalLen(arg1),
                    t2 = getDecimalLen(arg2);
                return (r1 / r2) * Math.pow(10, t2 - t1);
            }
        }
    });
});