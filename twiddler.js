$(document).ready(function(){
//   Creates two global variables, users and streams.
// users is an array of strings -- all the usernames that you're following.
// streams is an object with two properties, users and home.
// streams.home is an array of all tweets from all the users you're following.
// streams.users is an object with properties for each user. streams.users.shawndrost has all of shawndrost's tweets.
// Kicks off a periodic process that puts more data in streams.
    var $body = $('body');
  // $body.html('');
  var index = streams.home.length - 1; //an array of all tweets from all the users you're following
  var totalTweet = streams.home.length - 1; //num of total tweets
  while(index >= 0){
    var tweet = streams.home[index];

    var $username = $("<a class ='username' href='#'></a>"); //creates div for username
    $username.text('@' + tweet.user + ': ' + '\n');

    var $tweet = $('<div class="tweets"></div><br>'); // creates an individual div for every tweet
    $tweet.append($username);

    var $message = $("<div></div>");
    $message.text(tweet.message + '. ' + tweet.created_at);
    $tweet.append($message);
    $tweet.appendTo($body);
    index -= 1;
  }

  $('#showNewTweets').on('click', function(){
    var latestIndex = streams.home.length-1;
    var tweet = streams.home[latestIndex];
    
    var $username = $("<a class ='username' href='#'></a>");
    $username.text('@' + tweet.user + ': ' );
    
    var $tweet = $('<div class="tweets"></div><br>'); // creates an individual div for every tweet
    $tweet.append($username);

    var $message = $("<div></div>");
    $message.text(tweet.message + '. ' + tweet.created_at);
    $tweet.append($message);
    $tweet.insertBefore(".tweets:first");
  });

$(".username").on("click", function(){
    console.log('Username was just clicked');

    $(".sidebar").html("<div class='side'></div>"); //create div for side panel
    var username = this.textContent;
    var name = username.slice(1, username.length - 3); //slice off @
    $(".side").append(name); //works//appends username to top 
    console.log(name)
    var index = streams.users[name].length - 1;
    while(index >= 0){
      console.log(userTweet);
      var userTweet = streams.users[name][index];
      var $userTweet = $("<div class ='side-tweet'></div>");
      $userTweet.text(userTweet.message + ', ' + userTweet.created_at);
      $userTweet.appendTo(".sidebar");
      index -= 1; 
    }
  });
});



  // $('#showNewTweets').on('click', function(){
  //   var index = streams.home.length - 1;
  //   while (index > totalTweet){
  //     var tweet = streams.home[index];
  //     var $tweet = $('<div class="indiv-tweets"></div>');
  //     $tweet.text('@' + tweet.user + ': ' + tweet.message + '. ' + tweetTime);
  //     $tweet.appendTo($body);
  //     index -= 1;
  //   }
  //   totalTweets = streams.home.length;
  // });
