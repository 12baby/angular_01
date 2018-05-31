var circleProgress = angular.module('circleProgress', []).directive('circleProgress', function () {
    return {
        template: '<canvas width="50" height="50"></canvas>',
        scope: {
            total: '@',
            saled: '@'
        },
        replace: true,
        controller: function ($scope, $element) {
            var ctx = $element[0].getContext('2d');
            var deg = ($scope.saled / $scope.total) * Math.PI * 2 - Math.PI / 2;
            console.log(deg);
            ctx.beginPath();
            ctx.arc(25, 25, 24, -Math.PI / 2, deg);
            ctx.fillStyle = 'orange';
            ctx.fill();
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(25, 25, 20, 0, Math.PI * 2);
            ctx.fillStyle = '#ed5858';
            ctx.fill();
            ctx.closePath();

            ctx.strokeStyle = '#fff';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.strokeText('抢购', 25, 25);
            font='14px 宋体';
            ctx.stroke();
        }
    };
});