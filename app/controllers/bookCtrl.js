myApp.factory("GuideFactory", function($q, $http){

  let getGuides = () => {
    return $q( (resolve, reject) => {
      $http.get('../../data/guides.json')
      .then( (guides) => {
        resolve(guides)
      })
      .catch ( (err) => {
        reject(err);
      });
    });
  };

  return {getGuides};
});
// $http uses promises languages. It's not optional!

myApp.controller('GuideController', function($scope, GuideFactory){
  GuideFactory.getGuides()
  .then( (guidesData) => {
    $scope.guideList = guidesData.data.guides;
  });
});
