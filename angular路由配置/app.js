//声明一个模块，angular 本身是不完整的，因为他把路由部分单独抽离出来了，所以还需要重新引入ui-rooter 模块
var myApp = angular.module("myApp", ['ui.router']);//ui-rooter 必须以【"ui.rooter"】这种方式进行引入
//配置路由

myApp.config(function ($stateProvider, $urlRouterProvider) {
    //如果哈希都没有匹配的话，就跳转到/PageTab 页面
    $urlRouterProvider.otherwise("pageTab");

    $stateProvider.state("pageTab",{
        url: "/pageTab",
        templateUrl:"pages/pageTable.html"
    }).state("pageTab.page1", {
        url: "/page1",
        templateUrl:"pages/page1.html"
    }).state("pageTab.page2", {
        url: "/page2",
        templateUrl:"pages/page2.html"
    }).state("pageTab.page3", {
        url: "/page3",
        templateUrl:"pages/page3.html"
    });
    
});
