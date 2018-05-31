var reqData = angular.module('reqData', []);
reqData.directive('carouselFigure', function () {
    return {
        templateUrl: 'lib/pic.html',
        scope: {
            list: '=',
            autoplay: '=',
            direction: '@',
            loop: '=',
            effect: '@',
            pagination: '@'
        },
        replace: true,
        controller: function ($scope, $element, $timeout) {
            $timeout(function () {
                //  $scope.$watch('list', function (n, o) {
                new Swiper($element[0], {
                    // obsever: true,
                    autoplay: $scope.autoplay || false,
                    autoplayDisableOnInteraction: false,
                    direction: $scope.direction || 'horizontal',
                    effect: $scope.effect || 'slide',
                    pagination: $scope.pagination || false,
                    loop: $scope.loop || false
                });
            }, 100);

            //  });
        }
    };
});