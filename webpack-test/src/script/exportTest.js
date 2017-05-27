/**
 * Created by chloe on 2017/5/25.
 */
//node.js中的模块化编程，可以用require导出，而且require导师是在执行时动态加载的
//module.exports = {
//    a : function() {
//        return 2
//    },
//    b : 'xxx'
//}
//export function aaa(){
//     return 1
//}
//export var x=100
    /*****这种方式的export是在编译的时候就导出的，
     * 然后用improtant导入的时候也是编译的时候导入的。
     * *****/
export var obj = {
    a : function() {
        return 2
    },
    b : 'xxx'
}
