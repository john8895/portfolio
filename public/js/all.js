let myApp = new Vue({
    el: '#myApp',
    data: {
      message: '',
    },
    mounted: function () {
        this.message = 'Hello!'
    }
})