var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
    $scope.count = 0;

    $scope.kfc1 = 1;
    $scope.kfc2 = 1;
    $scope.kfc3 = 1;
    $scope.kfc4 = 1;
    $scope.kfc5 = 1;
    $scope.kfc6 = 1;
    $scope.kfc7 = 1;
    $scope.kfc8 = 1;
    $scope.kfc9 = 1;
    $scope.kfc10 = 1;
    $scope.kfc11 = 1;
    $scope.kfc12 = 1;
    $scope.kfc13 = 1;
    $scope.kfc14 = 1;
    $scope.kfc15 = 1;
    $scope.kfc16 = 1;
    $scope.kfc17 = 1;
    $scope.kfc18 = 1;

    $scope.addQuantity = function (value) {
        if (value.id === 'kfc1-c') {
            $scope.kfc1++;
        }
        if (value.id === 'kfc2-c') {
            $scope.kfc2++;
        }
        if (value.id === 'kfc3-c') {
            $scope.kfc3++;
        }
        if (value.id === 'kfc4-c') {
            $scope.kfc4++;
        }
        if (value.id === 'kfc5-c') {
            $scope.kfc5++;
        }
        if (value.id === 'kfc6-c') {
            $scope.kfc6++;
        }
        if (value.id === 'kfc7-c') {
            $scope.kfc7++;
        }
        if (value.id === 'kfc8-c') {
            $scope.kfc8++;
        }
        if (value.id === 'kfc9-c') {
            $scope.kfc9++;
        }
        if (value.id === 'kfc10-c') {
            $scope.kfc10++;
        }
        if (value.id === 'kfc11-c') {
            $scope.kfc11++;
        }
        if (value.id === 'kfc12-c') {
            $scope.kfc12++;
        }
        if (value.id === 'kfc13-c') {
            $scope.kfc13++;
        }
        if (value.id === 'kfc14-c') {
            $scope.kfc14++;
        }
        if (value.id === 'kfc15-c') {
            $scope.kfc15++;
        }
        if (value.id === 'kfc16-c') {
            $scope.kfc16++;
        }
        if (value.id === 'kfc17-c') {
            $scope.kfc17++;
        }
        if (value.id === 'kfc18-c') {
            $scope.kfc18++;
        }
    }

    $scope.minQuantity = function (value) {
        if (value.id === 'kfc1-t') {
            if ($scope.kfc1 > 1) {
                $scope.kfc1--;
            }
        }
        if (value.id === 'kfc2-t') {
            if ($scope.kfc2 > 1) {
                $scope.kfc2--;
            }
        }
        if (value.id === 'kfc3-t') {
            if ($scope.kfc3 > 1) {
                $scope.kfc3--;
            }
        }
        if (value.id === 'kfc4-t') {
            if ($scope.kfc4 > 1) {
                $scope.kfc4--;
            }
        }
        if (value.id === 'kfc5-t') {
            if ($scope.kfc5 > 1) {
                $scope.kfc5--;
            }
        }
        if (value.id === 'kfc6-t') {
            if ($scope.kfc6 > 1) {
                $scope.kfc6--;
            }
        }
        if (value.id === 'kfc7-t') {
            if ($scope.kfc7 > 1) {
                $scope.kfc7--;
            }
        }
        if (value.id === 'kfc8-t') {
            if ($scope.kfc8 > 1) {
                $scope.kfc8--;
            }
        }
        if (value.id === 'kfc9-t') {
            if ($scope.kfc9 > 1) {
                $scope.kfc9--;
            }
        }
        if (value.id === 'kfc10-t') {
            if ($scope.kfc10 > 1) {
                $scope.kfc10--;
            }
        }
        if (value.id === 'kfc11-t') {
            if ($scope.kfc11 > 1) {
                $scope.kfc11--;
            }
        }
        if (value.id === 'kfc12-t') {
            if ($scope.kfc12 > 1) {
                $scope.kfc12--;
            }
        }
        if (value.id === 'kfc13-t') {
            if ($scope.kfc13 > 1) {
                $scope.kfc13--;
            }
        }
        if (value.id === 'kfc14-t') {
            if ($scope.kfc14 > 1) {
                $scope.kfc14--;
            }
        }
        if (value.id === 'kfc15-t') {
            if ($scope.kfc15 > 1) {
                $scope.kfc15--;
            }
        }
        if (value.id === 'kfc16-t') {
            if ($scope.kfc16 > 1) {
                $scope.kfc16--;
            }
        }
        if (value.id === 'kfc17-t') {
            if ($scope.kfc17 > 1) {
                $scope.kfc17--;
            }
        }
        if (value.id === 'kfc18-t') {
            if ($scope.kfc18 > 1) {
                $scope.kfc18--;
            }
        }
    }
});