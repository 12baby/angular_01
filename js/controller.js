var homeCtrl = ['$scope', '$http', function ($scope, $http) {
    $http.get('./data/banner.json').then((res) => {
        console.log(res.data.img);
        $scope.list = res.data.img;
    });
    $http.get('./data/home.json').then((res) => {
        console.log(res.data);
        $scope.info = res.data;
    });
}];
var managemoneyCtrl = ['$scope', '$http', '$state', function ($scope, $http, $state) {
    $http.get('data/fund_product.json').then((res) => {
        $scope.list1 = res.data.list1;
        $scope.list2 = res.data.list2;
        select();
    });
    function select () {
        if ($state.current.name.split('.')[1] === 'product') {
            $scope.list = $scope.list1;
        } else {
            $scope.list = $scope.list2;
        }
    }
    $scope.$on('$locationChangeSuccess', function () {
        select();
    });
    $scope.click = function (name) {
        $scope.val = name;
        console.log(name);
    };
    $scope.flag = false;
    $scope.click_filter = function () {
        if ($scope.flag) {
            $scope.flag = false;
        } else {
            $scope.flag = true;
        }
    };
}];
var productCtrl = ['$scope', '$http', function ($scope, $http) {
    $http.get('data/fund_product.json').then((res) => {
        $scope.content2 = res.data.main2;
        console.log($scope.content2);
    });
}];
var moneyfundCtrl = ['$scope', '$http', function ($scope, $http) {
    $http.get('data/fund_product.json').then((res) => {
        //  console.log(res.data);
        $scope.content = res.data.main1;
    });
}];

var myaccountCtrl = ['$scope', '$http', function ($scope, $http) {

}];
var moreCtrl = ['$scope', function () {

}];