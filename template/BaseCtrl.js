export default class BaseCtrl {

    constructor($scope, StateService, $loading) {
        'ngInject';
        angular.forEach(arguments, (arg, i) => this[BaseCtrl.$inject[i]] = arg);

        $scope.$on('$ionicView.afterEnter', this.afterEnter.bind(this));
        this.activated = false;
        $scope.$on('$ionicView.afterEnter', this.afterEnter.bind(this));


    }

    afterEnter() {
        if (this.activated)
            return;
        this.activated = true;
        this.getData().finally(() => {
            this.firstLoading = false;
            console.log(this.firstLoading);
        });
    }
};