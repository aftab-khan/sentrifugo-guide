var app = angular.module("userguideApp", ["ngRoute"]);
app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "pages/intro.html",
        controller: "introductionCtrl"
    })
    .when("/getting-started", {
        templateUrl : "pages/getting-started.html",
        controller: "GettingStartedCtrl"
    })
    .when("/dashboard", {
        templateUrl : "pages/dashboard.html",
        controller: "DashboardCtrl"
    })
    .when("/leave-management", {
        templateUrl : "pages/leave-management.html",
        controller: "LeaveManagementCtrl"
    })
    .when("/self-service", {
        templateUrl : "pages/self-service.html",
        controller: "SelfServiceCtrl"
    })
    .when("/service-request", {
        templateUrl : "pages/service-request.html",
        controller: "ServiceRequestCtrl"
    })
    .when("/hr", {
        templateUrl : "pages/hr.html",
        controller: "HRCtrl"
    })
    .when("/recruitments", {
        templateUrl : "pages/recruitments.html",
        controller: "RecruitmentsCtrl"
    })
    .when("/background-check", {
        templateUrl : "pages/background-check.html",
        controller: "BackgroundCheckCtrl"
    })
    .when("/organization", {
        templateUrl : "pages/organization.html",
        controller: "OrganizationCtrl"
    })
    .when("/analytics", {
        templateUrl : "pages/analytics.html",
        controller: "AnalyticsCtrl"
    })
    .when("/site-config", {
        templateUrl : "pages/site-config.html",
        controller: "SiteConfigCtrl"
    })
    .when("/modules", {
        templateUrl : "pages/modules.html",
        controller: "ModulesCtrl"
    })
    .when("/logs", {
        templateUrl : "pages/logs.html",
        controller: "LogsCtrl"
    })
    .when("/expenses", {
        templateUrl : "pages/expenses.html",
        controller: "ExpensesCtrl"
    })
    .when("/assets", {
        templateUrl : "pages/assets.html",
        controller: "AssetsCtrl"
    })
    .when("/appraisals", {
        templateUrl : "pages/appraisals.html",
        controller: "AppraisalsCtrl"
    })
    .when("/disciplinary", {
        templateUrl : "pages/disciplinary.html",
        controller: "DisciplinaryCtrl"
    })
    .when("/conference-bookings", {
        templateUrl : "pages/conference-bookings.html",
        controller: "ConferenceBookingsCtrl"
    })
    .when("/payslips", {
        templateUrl : "pages/payslips.html",
        controller: "PayslipsCtrl"
    })
    .when("/exit-procedure", {
        templateUrl : "pages/exit-procedure.html",
        controller: "ExitProcedureCtrl"
    })
    .when("/time", {
        templateUrl : "pages/time.html",
        controller: "TimeCtrl"
    })
    .when("/additional-features", {
        templateUrl : "pages/additional-features.html",
        controller: "AdditionalFeaturesCtrl"
    })
    //route for the 404 page
    /*.otherwise({
        redirectTo: '/intro',
        templateUrl: '/intro.html',
        controller: 'indexCtrl'
    });*/
});



app.controller("indexCtrl", function ($scope) {
    $scope.$parent.seo = {
        pageTitle: 'Sentrifugo - User Guide'
    };
});

app.controller("GettingStartedCtrl", function ($scope) {
    $scope.$parent.seo = {
        pageTitle: 'Getting Started | Sentrifugo - User Guide'
    };
    
});
app.controller("DashboardCtrl", function ($scope) {
    $scope.$parent.seo = {
        pageTitle: 'Dashboard | Sentrifugo - User Guide'
    };
});

app.controller("LeaveManagementCtrl", function ($scope) {
    $scope.$parent.seo = {
        pageTitle: 'Leave Management | Sentrifugo - User Guide'
    };  
});

app.controller("SelfServiceCtrl", function ($scope) {
    $scope.$parent.seo = {
        pageTitle: 'Self Service | Sentrifugo - User Guide'
    };  
});

app.controller("ServiceRequestCtrl", function ($scope) {
    $scope.$parent.seo = {
        pageTitle: 'Service Request | Sentrifugo - User Guide'
    };  
});

app.controller("HRCtrl", function ($scope) {
    $scope.$parent.seo = {
        pageTitle: 'Human Resource | Sentrifugo - User Guide'
    };  
});

app.controller("RecruitmentsCtrl", function ($scope) {
    $scope.$parent.seo = {
        pageTitle: 'Recruitments | Sentrifugo - User Guide'
    };  
});

app.controller("BackgroundCheckCtrl", function ($scope) {
    $scope.$parent.seo = {
        pageTitle: 'Background Check | Sentrifugo - User Guide'
    };  
});

app.controller("OrganizationCtrl", function ($scope) {
    $scope.$parent.seo = {
        pageTitle: 'Organization | Sentrifugo - User Guide'
    };  
});

app.controller("AnalyticsCtrl", function ($scope) {
    $scope.$parent.seo = {
        pageTitle: 'Analytics | Sentrifugo - User Guide'
    };  
});

app.controller("SiteConfigCtrl", function ($scope) {
    $scope.$parent.seo = {
        pageTitle: 'Site Config | Sentrifugo - User Guide'
    };  
});

app.controller("ModulesCtrl", function ($scope) {
    $scope.$parent.seo = {
        pageTitle: 'Modules | Sentrifugo - User Guide'
    };  
});

app.controller("LogsCtrl", function ($scope) {
    $scope.$parent.seo = {
        pageTitle: 'Logs | Sentrifugo - User Guide'
    };  
});

app.controller("ExpensesCtrl", function ($scope) {
    $scope.$parent.seo = {
        pageTitle: 'Expenses | Sentrifugo - User Guide'
    };  
});

app.controller("AssetsCtrl", function ($scope) {
    $scope.$parent.seo = {
        pageTitle: 'Assets | Sentrifugo - User Guide'
    };  
});

app.controller("AppraisalsCtrl", function ($scope) {
    $scope.$parent.seo = {
        pageTitle: 'Appraisals | Sentrifugo - User Guide'
    };  
});

app.controller("DisciplinaryCtrl", function ($scope) {
    $scope.$parent.seo = {
        pageTitle: 'Disciplinary | Sentrifugo - User Guide'
    };  
});

app.controller("ConferenceBookingsCtrl", function ($scope) {
    $scope.$parent.seo = {
        pageTitle: 'Conference Bookings | Sentrifugo - User Guide'
    };  
});

app.controller("PayslipsCtrl", function ($scope) {
    $scope.$parent.seo = {
        pageTitle: 'Payslips | Sentrifugo - User Guide'
    };  
});

app.controller("ExitProcedureCtrl", function ($scope) {
    $scope.$parent.seo = {
        pageTitle: 'Exit Procedure | Sentrifugo - User Guide'
    };  
});

app.controller("TimeCtrl", function ($scope) {
    $scope.$parent.seo = {
        pageTitle: 'Time | Sentrifugo - User Guide'
    };  
});

app.controller("AdditionalFeaturesCtrl", function ($scope) {
    $scope.$parent.seo = {
        pageTitle: 'Additional Features | Sentrifugo - User Guide'
    };  
});