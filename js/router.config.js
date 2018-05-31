angular.module('app').config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider.state({
        name: 'home',
        url: '/home',
        controller: homeCtrl,
        templateUrl: 'pages/home.html'
    })
        .state({
            name: 'managemoney',
            url: '/managemoney',
            controller: managemoneyCtrl,
            templateUrl: 'pages/managemoney.html'
        })
        .state({
            name: 'managemoney.product',
            url: '/product',
            controller: productCtrl,
            templateUrl: 'pages/money_product.html'
        })
        .state({
            name: 'managemoney.fund',
            url: '/fund',
            controller: moneyfundCtrl,
            templateUrl: 'pages/money_fund.html'
        })
        .state({
            name: 'myaccount',
            url: '/myaccount',
            controller: myaccountCtrl,
            templateUrl: 'pages/myaccount.html'
        })
        .state({
            name: 'more',
            url: '/more',
            controller: moreCtrl,
            templateUrl: 'pages/more.html'
        });
});