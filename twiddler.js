$(document).ready(function(){
  var $body = $('body');
  // $body.html('');

  var index = streams.home.length - 1; //an array of all tweets from all the users you're following
  while(index >= 0){
    var tweetTime = streams.home[index].created_at;
    var tweet = streams.home[index];
    var $tweet = $('<div class="tweets"></div>');
    $tweet.text('@' + tweet.user + ': ' + tweet.message + '. ' + tweetTime);
    $tweet.appendTo($body);
    index -= 1;
  }

  $('#showNewTweets').on('click', function(){
    var $newTweet = $('<div class="tweets"></div>');
    var randomUser = randomElement(users);
    var randomMess = randomMessage();
    var newTweet = '@' + randomUser + ': ' + randomMess + '. ' + tweetTime; //tweetTime not up to date
    $newTweet.text(newTweet);
    $newTweet.appendTo($body);
    addTweet(newTweet);
  })
});



// Create a new tweet !!! NOT WORKING !!! 
$("#submit").on('click', function(){
  var message = $("#tweetText").val();
  writeTweet(message);
  displayTweets();
});
  



  //   var checkTweets = true;
  //   $(document).ready(function(){
  //     $('#showNewTweets').on('click', function(){
  //       if(checkTweets){
  //         var index = streams.home.length - 1;
  //         while (index <= streams.home.length - 1){
  //           var tweetTime = streams.home[index].created_at;
  //           var tweet = streams.home[index];
  //           var $tweet = $('<div></div>');
  //           $tweet.text('@' + tweet.user + ': ' + tweet.message + '. ' + tweetTime);
  //           $tweet.appendTo($body);
  //           index -= 1;
  //           checkTweets = false;
  //         }
  //       } else {
  //         $('#showNewTweets').empty();
  //         checkTweets = false;
  //       }
  //     })
  //   });
    
  // });