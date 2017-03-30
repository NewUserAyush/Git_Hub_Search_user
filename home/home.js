app.controller('HomeCtrl', function ($scope,$rootScope,$location,$http) {
    
if(localStorage.getItem('UserInfo')!==null)
 $scope.UserInfo=JSON.parse(localStorage.getItem('UserInfo'));
    
    $scope.serachuser=function(user){
       if(localStorage.getItem('UserInfo')=== null){
                $http.get('https://api.github.com/search/users?q='+user,{cache: true}).then(function(response){  
                    $scope.UserInfo=response.data.items;
                    localStorage.setItem('UserInfo',JSON.stringify($scope.UserInfo));
                },function(err){
                    console.log(err);
                })
            }else
                $scope.UserInfo=JSON.parse(localStorage.getItem('UserInfo'));
    }

    $scope.getDetailInformation=function(user){
        $rootScope.user=user;
        localStorage.setItem('user',JSON.stringify(user));
        $location.path('/DetailInfo');
    }
    
    
    $scope.cleanCache=function(){
        localStorage.removeItem('UserInfo');
        localStorage.removeItem('user');
        localStorage.removeItem('UserRepoInfo');
        $location.path('/index.html');
    }
});