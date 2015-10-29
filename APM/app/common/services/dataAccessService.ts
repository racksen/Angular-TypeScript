module app.common{

	interface IProductResource extends ng.resource.IResource<app.domain.IProduct>{
	}
	
	interface IDataAccessService{
		getProductResource() : ng.resource.IResourceClass<IProductResource>;
	}
	
	export class DataAccessService implements IDataAccessService{
		
		static $inject=['$resource'];
		constructor(private $resource:ng.resource.IResourceService){
			
		}
		
		getProductResource() : ng.resource.IResourceClass<IProductResource>{
			return this.$resource('/api/products/:productId');
		}
	}
	
	angular.module('common.services').service('dataAccessService',DataAccessService);
}