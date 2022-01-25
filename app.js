var app = angular.module("myGallery", [])

app.controller("galleryController", function($scope){
    // $scope.imgs = [{
    //     animalUrl : "imgs/a1.jpeg",
    //     animalUrl : "imgs/a2.jpg"
    // },
    // {
    //     bird1 : "imgs/b1.jpg",
    //     bird2 : "imgs/b2.jpg"
    // },
    // {
    //     people1 : "imgs/p1.jpg",
    //     people2 : "imgs/p2.jpg"
    // }]
    $scope.animals = {
        url1 : "imgs/a1.jpeg",
        url2 : "imgs/a2.jpg",
        url3 : "imgs/a3.jpg",
        url4 : "imgs/a4.jpg"
    }
    $scope.birds = {
        url1 : "imgs/b1.jpg",
        url2 : "imgs/b2.jpg",
        url3 : "imgs/b3.jpg",
        url4 : "imgs/b4.jpg"
    }
    $scope.people = {
        url1 : "imgs/p1.jpg",
        url2 : "imgs/p2.jpg",
        url3 : "imgs/p3.jpg",
        url4 : "imgs/p4.jpg"
    }
})