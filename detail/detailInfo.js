app.controller('DetailCtrl', function ($scope,$rootScope,$location,$http,$mdDialog) {
    
    if($rootScope.user!==undefined)
    $scope.user=$rootScope.user;
    else
    {
        $scope.user=JSON.parse(localStorage.getItem('user'));
        
        if(localStorage.getItem('UserRepoInfo')===null)
        $scope.userData=JSON.parse(localStorage.getItem('UserRepoInfo'));
    }
    
    
    $scope.showAlert = function(repo) {
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title(repo.name)
        .textContent(repo.clone_url)
        .ariaLabel('Alert Dialog Demo')
        .ok('Copy')
        
    );
  };
    
    $http.get($scope.user.repos_url).then(function(response){
        $scope.userData=response.data;
         
           $scope.userData.forEach(function(item){
                $http.get(item.languages_url).then(function(response){
                    item.language=Object.keys(response.data);
                   
                },function(err){
                   console.log(err); 
                });
           });
          localStorage.setItem('UserRepoInfo',JSON.stringify($scope.userData));
    },function(err){
       console.log(err); 
    });
    

    
});