var app;
(function (app) {
    var productDetail;
    (function (productDetail) {
        var productDetailCtrl = (function () {
            function productDetailCtrl($routeParams, dataAccessService) {
                var _this = this;
                this.$routeParams = $routeParams;
                this.dataAccessService = dataAccessService;
                this.title = "Product Detail";
                var productId = $routeParams.productId;
                var productResource = dataAccessService.getProductResource();
                productResource.get({ 'productId': productId }, function (data) {
                    _this.product = data;
                });
            }
            productDetailCtrl.$inject = ['$routeParams', 'dataAccessService'];
            return productDetailCtrl;
        })();
        angular.module('productManagement').controller('ProductDetailCtrl', productDetailCtrl);
    })(productDetail = app.productDetail || (app.productDetail = {}));
})(app || (app = {}));
