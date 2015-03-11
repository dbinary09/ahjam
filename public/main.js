$(function() {
  var FADE_TIME = 150; // ms
  var TYPING_TIMER_LENGTH = 400; // ms
  var COLORS = [
    '#e21400', '#91580f', '#f8a700', '#f78b00',
    '#58dc00', '#287b00', '#a8f07a', '#4ae8c4',
    '#3b88eb', '#3824aa', '#a700ff', '#d300e7'
  ];

  // Initialize varibles
  var $window = $(window);
  var $usernameInput = $('.usernameInput'); // Input for username
  var $messages = $('.messages'); // Messages area
  var $inputMessage = $('.inputMessage'); // Input message input box

  var $loginPage = $('.login.page'); // The login page
  var $chatPage = $('.chat.page'); // The chatroom page

  // Prompt for setting a username
  var username;
  var connected = false;
  var typing = false;
  var lastTypingTime;
  var $currentInput = $usernameInput.focus();

  var socket = io();

  

  // Sets the client's username
  function setUsername () {
    //username = cleanInput($usernameInput.val().trim());

    // If the username is valid
    //if (username) {
//document.getElementById("panel").style.visibility = "visible";

      //$loginPage.fadeOut();
//      $chatPage.show();
//      $loginPage.off('click');
//      $currentInput = $inputMessage.focus();

      // Tell the server your username
//      socket.emit('add user', username);
    
  }


  // Keyboard events

  $window.keydown(function (event) {
    // Auto-focus the current input when a key is typed
    if (!(event.ctrlKey || event.metaKey || event.altKey)) {
      $currentInput.focus();
    }
    // When the client hits ENTER on their keyboard
    if (event.which === 13) {
       document.getElementById("panel").style.visibility = "visible";
       setUsername();
    }
  });



  
});