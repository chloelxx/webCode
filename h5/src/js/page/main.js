/**
 * Created by chloe on 2017/7/26.
 */
require("../../css/main.css");
import Vue from 'vue'
import jQuery from 'jquery'
import app from '../components/app.vue'

window.comment = {};
(function(self, $) {
    self.init = function() {
            var vm = new Vue({
                el: '#app',
                render: function(h) {

                    var x = h(app);
                    console.log("kkk", this)
                    console.log("app", app)
                    window.comment = app;
                    window.comment.vm = window.comment.methods;
                    // console.log("app.function", app.data());
                    console.log("app.function", window.comment.vm.sortCom);
                    return x
                }
            })
            return vm
        }
        // self.init();
})(window.comment, jQuery)
window.comment.init();
console.log("window", window.comment);
console.log("window1", window.comment.vm);
console.log("window2", window.comment.vm.votedNewsSuccess);
window.comment.bindThis = function() {
    console.log('this==', this);
}
console.log("window2", window.comment.data());