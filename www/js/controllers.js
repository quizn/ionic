angular.module('starter.controllers', [])

  .controller('DashCtrl', function($scope, $rootScope, $cordovaActionSheet, $http) {

    
    var options = {
      title: 'What do you want with this image?',
      buttonLabels: ['Share via Facebook', 'Share via Twitter'],
      addCancelButtonWithLabel: 'Cancel',
      androidEnableCancelButton : true,
      winphoneEnableCancelButton : true,
      addDestructiveButtonWithLabel : 'Delete it'
    };


    

    $scope.doSomething = function() {

    };

    

    //AIzaSyBz9DxmDoB6PbW_90p3FvdXB3mCkIirDQs
    
    /*
     document.addEventListener("deviceready", function () {

     $scope.$on('$cordovaPush:notificationReceived', function(event, notification) {
     
     switch(notification.event) {
     case 'registered':
     
     if (notification.regid.length > 0 ) {
     
     }
     break;

     case 'message':

     //alert(notification.message);
     alert('CTRL DASH');
     
     break;

     case 'error':
     //alert('GCM error = ' + notification.msg);
     break;

     default:
     //alert('An unknown GCM event has occurred');
     break;
     }
     });

     
     }, false);
     */
    
    $rootScope.hello = 'hello';
  })

  .controller('ChatsCtrl', function($scope, Chats, $rootScope) {


    
    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
      Chats.remove(chat);
    };
  })

  .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  })

  .controller('FriendsCtrl', function($scope, Friends) {
    $scope.friends = Friends.all();
  })

  .controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
    $scope.friend = Friends.get($stateParams.friendId);
  })

  .controller('AccountCtrl', function($scope, $rootScope) {

    $scope.hello2 =  $rootScope.hello;
    
    $scope.settings = {
      enableFriends: true
    };
  });
