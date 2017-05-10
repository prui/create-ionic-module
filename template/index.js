import angular from 'angular';
import BaseRouter from './BaseRouter';
import BaseService from './BaseService';

export default angular.module('BaseComponent', [])
    .factory('BaseService', BaseService)
    .config(BaseRouter)
    .name;