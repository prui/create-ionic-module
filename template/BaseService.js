export default function BaseService($q, $http, HttpService) {
    'ngInject';
    var service = {
        getData: getData,
    };
    return service;


    function getData() {}

}