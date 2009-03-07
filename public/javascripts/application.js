/****************************************************************
* Why hello there, mr. nosey :)
*
* author: robert dougan
* website: http://dougan.me
* email: rdougan@me.com
****************************************************************/

/****************************************************************
* WINDOW ONLOAD
****************************************************************/
$(document).ready(function() {
  // run the png fix script
  $(document).pngFix();
  
  // Panel
  panel_Init();
  
  // Sidebar
  sidebar_Init();
  
  // Syntax highlighting
  //sh_highlightDocument();
});

/****************************************************************
* loading
****************************************************************/
function loading_Create(element) {
  var sElement = '<div class="loading"><img src="images/loading.gif" /></div>';
  
  $(element).append(sElement);
};
function loading_Show(fade) {
  if (fade) {
    $('.loading').fadeIn();
  } else {
    $('.loading').show();
  };
};
function loading_Hide(fade) {
  if (fade) {
    $('.loading').fadeOut();
  } else {
    $('.loading').hide();
  };
};

/****************************************************************
* panel
****************************************************************/
function panel_Init() {
  panel_AddButton();
  
  panel_contactform_Init();
  panel_recentposts_Init();
};
/* makes the panel button clickable */
function panel_AddButton() {
  // archive button
  $('#nav_panel').click(function() {
    // open/close the panel
    panel_Controller();
  });
};
/* is the panel shown? */
panel_Shown = true;
/* controls the opening/closing of the panel */
function panel_Controller() {
  if (!panel_Shown) {
    panel_Show(true);
  } else {
    panel_Hide(true);
  };
};
/* shows the main panel */
function panel_Show(slide) {
  // check if we want to slide or not
  if (slide) {
    var panelHeight = $('#panel').height() - 5;
    
    $('#panel').animate({
      top: "+=" + panelHeight
    }, 500);
    $('#content-wrapper').animate({
      top: "+=" + panelHeight
    }, 500);
  } else {
    $('#panel').show();
    $('#panel .panel-content').show();
  };
  
  panel_Shown = true;
};
/* hides the main panel */
function panel_Hide(slide) {
  // check if we want to slide or not
  if (slide) {
    var panelHeight = $('#panel').height() - 5;
    
    $('#panel').animate({
      top: "-=" + panelHeight
    }, 500);
    $('#content-wrapper').animate({
      top: "-=" + panelHeight
    }, 500);
  } else {
    $('#panel').hide();
    $('#panel .panel-content').hide();
  };
  
  panel_Shown = false;
};

/****************************************************************
* panel:contact
****************************************************************/
/* contact form init */
function panel_contactform_Init() {
  // remove input values onclick
  $('#panel #contact input.text').click(function() {
    $(this).attr('value', '');
  });
  $('#panel #contact textarea').click(function() {
    $(this).empty();
  });
  
  $('#panel #contact input.submit').click(function() {
    panel_contactform_Change();
    
    return false;
  });
};
/* resets contact form */
function panel_contactform_Reset() {
  // remove content
  $('#panel #contact input.text').attr('value', '');
};
/* fades the form in/out */
function panel_contactform_Change(goingBack) {
  if (goingBack) {
    $('#panel #contact .loading').fadeOut(250, function() {
      $('#panel #contact .content').fadeIn();
    });
  } else {
    $('#panel #contact .content').fadeOut(250, function() {
      loading_Create('#panel #contact');
    });
  };
};

/****************************************************************
* panel:recentPosts
****************************************************************/
/* recent posts init */
function panel_recentposts_Init() {
  var iOpacity = 0.4;
  var iOpacity2 = 0.5;
  
  // change opacity on page load
  $('#recentPosts li').css('opacity', iOpacity);
  $('#recentPosts .viewAll').css('opacity', iOpacity2);
  
  $('#recentPosts li').hover(function() {
    $(this).fadeTo(250, 1);
  }, function() {
    $(this).fadeTo(250, iOpacity);
  });
  
  $('#recentPosts .viewAll').hover(function() {
    $(this).fadeTo(250, 1);
  }, function() {
    $(this).fadeTo(250, iOpacity2);
  });
};

/****************************************************************
* sidebar
****************************************************************/
function sidebar_Init() {
  sidebar_twitter_Init();
  sidebar_flickr_Init();
};

/****************************************************************
* sidebar:twitter
****************************************************************/
var tweets = [];
/* custom twitter callback method which adds all tweets into an array */
function twitterCallback2(obj) {
  var twitters = obj;
  for (var i=0; i < twitters.length; i++) {
    var t = twitters[i];
    
    // Check if it is a reply
    if (t.text.substr(0, 1) != "@") {
      // Push the tweet if it is not a reply
      tweets.push({
        id:         t.id,
        text:       t.text,
        created_at: t.created_at
      });
    };
  };
};
/* allows you to rollover each tweet */
function sidebar_twitter_Init() {
  // Load the tweets and add them into the twitter side panel
  $.getScript("http://twitter.com/statuses/user_timeline/rdougan.json?callback=twitterCallback2&count=10", function() {
    // Loop through each of the tweets
    for (var i = 0; i < tweets.length; i++) {
      var t = tweets[i];
      
      $('#twitter .content ul').append('<li><a href="http://twitter.com/rdougan/status/' + t.id + '" target="_blank">' + t.text + '</a></li>');
      $('#twitter .content ul li:first').addClass('selected');
    };
  });
};

/****************************************************************
* sidebar:flickr
****************************************************************/
/* allows you to rollover each image */
function sidebar_flickr_Init() {
  var iOpacity = 0.3;
  
  // Load the photos using the jquery flickr plugin
  $("#flickr").flickr({
    api_key:  "66d40a71c9038b033d5e80fc1337b6a1",
    type:     "search",
    user_id:  "27969974@N08",
    per_page: 12,
    callback: function() {
      // change opacity on page load
      $('#flickr img').css('opacity', iOpacity);

      $('#flickr img').hover(function() {
        $(this).fadeTo(250, 1);
      }, function() {
        $(this).fadeTo(250, iOpacity);
      });
    }
  });
};
