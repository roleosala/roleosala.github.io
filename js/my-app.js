var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
      {
        path: '/place/',
        url: 'place.html',
      },
      {
        path: '/members/',
        url: 'members.html',
      },
    ],
    // ... other parameters
  });
  
  var mainView = app.views.create('.view-main');
  var $$ = Dom7;

var myPhotoBrowserPopup = app.photoBrowser.create({
    photos : [
        'http://lorempixel.com/1024/1024/sports/1/',
        'http://lorempixel.com/1024/1024/sports/2/',
        'http://lorempixel.com/1024/1024/sports/3/',
    ],
    type: 'popup'
});
$$('.pb-paged').on('click', function () {
    myPhotoBrowserPage.open();
});

var myPhotoBrowserPage = app.photoBrowser.create({
    photos : [
        'http://lorempixel.com/1024/1024/sports/1/',
        'http://lorempixel.com/1024/1024/sports/2/',
        'http://lorempixel.com/1024/1024/sports/3/',
    ],
    type: 'page',
    backLinkText: 'Back'
});
$$('.pb-page').on('click', function () {
    myPhotoBrowserPage.open();
});