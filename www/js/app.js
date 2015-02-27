//a Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform, $rootScope, $cordovaPush, $http, $cordovaToast) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }


    var config = null;
    config = {
      "senderID": "816715518674"
    };
    
    
    $cordovaPush.register(config).then(function(result) {

    }, function(err) {
      alert('@@푸시 등록 실패@@');
    });

  
    $rootScope.$on('$cordovaPush:notificationReceived', function(event, notification) {
      
      switch(notification.event) {
      case 'registered':
	
        if (notification.regid.length > 0 ) {
	  /*
	  var req_url = 'http://192.168.0.154:3002?regid=' + notification.regid;
	  $http.get(req_url).
	    success(function(data, status, headers, config) {
	      // this callback will be called asynchronously
	      // when the response is available
	    }).
	    error(function(data, status, headers, config) {
	      // called asynchronously if an error occurs
	      // or server returns response with an error status.
	    });
	   */
	  

	  
	  //alert(notification.regid);
        }
        break;

      case 'message':
	//$rootScope.message = notification.msg;
	//alert(notification.message);
	$cordovaToast
	  .show(notification.message, 'long', 'center')
	  .then(function(success) {
	    // success
	  }, function (error) {
	    // error
	  });
	//alert(cnt++);
        break;

      case 'error':
        //alert('GCM error = ' + notification.msg);
        break;

      default:
        alert('An unknown GCM event has occurred');
        break;
      }
    });
    

    
  });
  /*
  var androidConfig = {
    "senderID": "AIzaSyBz9DxmDoB6PbW_90p3FvdXB3mCkIirDQs"
  };
  */
 
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.friends', {
      url: '/friends',
      views: {
        'tab-friends': {
          templateUrl: 'templates/tab-friends.html',
          controller: 'FriendsCtrl'
        }
      }
    })
    .state('tab.friend-detail', {
      url: '/friend/:friendId',
      views: {
        'tab-friends': {
          templateUrl: 'templates/friend-detail.html',
          controller: 'FriendDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
