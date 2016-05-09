//Live-search script//
//Apparently the following allows me to use variables declared by other scripts. Now I know!//

/*global $ */

//target search field and execute search function each time a key-up event occurs
$("#gallerySearch").keyup(function () {
  //I should read up more on 'use strict'...I only discovered it through JSHint//
  "use strict";
  var instaSearch = $(this).val();
  $(".gallery a").each(function () {
    var titleKey = $(this).attr("data-title"), altKey = $(this).children("img").attr("alt");
    if (titleKey.toLowerCase().search(instaSearch.toLowerCase()) > -1 ||  altKey.toLowerCase().search(instaSearch.toLowerCase()) > -1) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
});
