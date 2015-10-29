module app.productDetail {

	interface IProductDetailModel {
		title: string;
		product: app.domain.IProduct;
	}
	
	interface IProductParams extends ng.route.IRouteParamsService{
		productId:number;
	}

	class productDetailCtrl implements IProductDetailModel {
		title: string;
		product: app.domain.IProduct;

		static $inject = ['$routeParams','dataAccessService'];
		constructor(
			private $routeParams:IProductParams,
			private dataAccessService:app.common.DataAccessService
		) {
			this.title = "Product Detail";
			var productId= $routeParams.productId;
			var productResource= dataAccessService.getProductResource();
			productResource.get(
				{'productId':productId},
				(data:app.domain.IProduct)=>{
				this.product=data;
			});

		}

	}

	angular.module('productManagement').controller('ProductDetailCtrl', productDetailCtrl);
}