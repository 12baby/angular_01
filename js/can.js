//引用angular.directives-round-progress这个模块;

angular.module('app').controller('MainCtrl', function ($scope) {
    $scope.roundProgressData = {
        // 这个是初始化的数据;
        label: 11,
        percentage: 0.11
    }
    //通过监听scope下的这个roundProgressData属性, 对界面的canvas进行重绘;
    $scope.$watch('roundProgressData', function (newValue) {
        newValue.percentage = newValue.label / 50;
    }, true);
});

/*!
* AngularJS Round Progress Directive
*
* Copyright 2013 Stephane Begaudeau
* Released under the MIT license
*/
angular.module('angular.directives-round-progress', []).directive('angRoundProgress', [function () {
    var compilationFunction = function (templateElement, templateAttributes, transclude) {
        if (templateElement.length === 1) {
            //初始化DOM模型, 包括初始化canvas等;
            var node = templateElement[0];
            var width = node.getAttribute('data-round-progress-width') || '50';
            var height = node.getAttribute('data-round-progress-height') || '50';
            var canvas = document.createElement('canvas');
            canvas.setAttribute('width', width);
            canvas.setAttribute('height', height);
            canvas.setAttribute('data-round-progress-model', node.getAttribute('data-round-progress-model'));
            //相当于demo, 替换原来的元素;
            node.parentNode.replaceChild(canvas, node);
            //各种配置;
            var outerCircleWidth = node.getAttribute('data-round-progress-outer-circle-width') || '10';
            var innerCircleWidth = node.getAttribute('data-round-progress-inner-circle-width') || '5';
            var outerCircleBackgroundColor = node.getAttribute('data-round-progress-outer-circle-background-color') || 'red';
            var outerCircleForegroundColor = node.getAttribute('data-round-progress-outer-circle-foreground-color') || 'orange';
            var innerCircleColor = node.getAttribute('data-round-progress-inner-circle-color') || 'red';
            var labelColor = node.getAttribute('data-round-progress-label-color') || '#fff';
            var outerCircleRadius = node.getAttribute('data-round-progress-outer-circle-radius') || '20';
            var innerCircleRadius = node.getAttribute('data-round-progress-inner-circle-radius') || '20';
            var labelFont = node.getAttribute('data-round-progress-label-font') || '14px Calibri';
            return {
                pre: function preLink(scope, instanceElement, instanceAttributes, controller) {
                    var expression = canvas.getAttribute('data-round-progress-model');
                    //监听模型, O了
                    //就监听一个属性;
                    scope.$watch(expression, function (newValue, oldValue) {
                        // Create the content of the canvas
                        //包括新建和重绘;
                        var ctx = canvas.getContext('2d');
                        ctx.clearRect(0, 0, width, height);
                        // The "background" circle
                        var x = width / 2;
                        var y = height / 2;
                        ctx.beginPath();
                        ctx.arc(x, y, parseInt(outerCircleRadius), 0, Math.PI * 2, false);
                        ctx.lineWidth = parseInt(outerCircleWidth);
                        //ctx.strokeStyle = outerCircleBackgroundColor;
                        // ctx.stroke();
                        ctx.fillStyle = 'red';
                        ctx.fill();

                        // The inner circle
                        ctx.beginPath();
                        ctx.arc(x, y, parseInt(innerCircleRadius), 0, Math.PI * 2, false);


                        ctx.strokeStyle = innerCircleColor;
                        ctx.stroke();
                        // The inner number
                        ctx.font = labelFont;
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'middle';
                        ctx.fillStyle = labelColor;
                        ctx.fillText('抢购', x, y);
                        // The "foreground" circle
                        var startAngle = - (Math.PI / 2);
                        var endAngle = ((Math.PI * 2) * newValue.percentage) - (Math.PI / 2);
                        var anticlockwise = false;
                        ctx.beginPath();
                        ctx.arc(x, y, parseInt(outerCircleRadius), startAngle, endAngle, anticlockwise);
                        ctx.lineWidth = parseInt(outerCircleWidth);
                        ctx.strokeStyle = outerCircleForegroundColor;
                        ctx.stroke();
                        // var PI=Math.PI/180;
                        // ctx.fillStyle="#f06";
                        // ctx.moveTo(100,100);
                        // ctx.arc(100,100,50,0*PI,45*PI,true);
                        // ctx.fill();
                        // ctx.fillStyle="pink";
                        // ctx.beginPath();
                        // ctx.arc(170,120,5,0*PI,360*PI);
                        // ctx.fill();
                    }, true);
                },
                post: function postLink(scope, instanceElement, instanceAttributes, controller) { }
            };
        }
    };
    var roundProgress = {
        // compile里面先对dom进行操作, 再对$socpe进行监听;
        compile: compilationFunction,
        replace: true
    };
    return roundProgress;
}]);