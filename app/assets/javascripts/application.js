// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

// bootstrap core js
//= require bootstrap/dist/js/bootstrap.min.js

// bootstrap-material-design
//= require bootstrap-material-design/dist/js/material.min.js
//= require bootstrap-material-design/dist/js/ripples.min.js

// editArea real-time syntax highlighter for a text area
//= require EditArea/edit_area/edit_area_full.js

//
//= require keypress/keypress-2.1.0.min.js

var a_snippet;
var run_once = false;
var SM;
(function(window, document, undefined) {
  $(document).on("ready page:load",function(){
    var snippetId = window.location.pathname.split("/").pop();
    if (run_once) {
    $.get('/snippets/'+ snippetId +'.json', function(data){
      a_snippet = new StringMatcher(data.snippet);
      console.log(a_snippet);
    });
    run_once = false;
}

run_once = true;
   

  // string matching function
  function StringMatcher(str){
        var charSeq = [];
        var $code = $("#code-entry-id-");
        // var $codeHighlighted = $("#code-highlighted")
        for (var i = 0; i < str.length; i++) {
          (function(k){
            var $el = $("<span class='unmatched-letter'>" + str[k] + "</span>");
            var char = str[k];
            var charCode = str[k].charCodeAt(0);
            var node = { el: $el, char: char, charCode: charCode};
            charSeq.push(node);
            $code.append(node.el);
            console.log("\n\n\n"+$code+"\n\n\n");
          })(i);
        };
        // on each pass of the for-loop we are constructing a single object
          // that will go into the charSeq array. 
          // the $el will be pushed to the DOM
          // the char and charCode will be used below for matching
          // and for styling
          // charSeq = [
          //   {el: <span>t</span>,
          //   c: "t",
          //   charCode: 123har},
          //   {el: html for each letter => <span>"t"</span>
          //   char: "e"
          //   charCode: 122}.
          //   {el: html for each letter => <span>"t"</span>
          //   char: "s"
          //   charCode: 134}.
          //   {el: html for each letter => <span>"t"</span>
          //   char: "t"
          //   charCode: 133}
          // ]
    
      this.charSeq = charSeq;
      this.index = 0;

  };

  var SM = StringMatcher;
  
  // extend StringMatcher with additional methods
  var sm_proto = StringMatcher.prototype;
  sm_proto.updateIndex = function() {
    this.index += 1;
    return this;
  };
  sm_proto.getElement = function() {
    return this.charSeq[this.index];
  };
  sm_proto.endOfStringMatch = function(){
    if (this.index === this.charSeq.length-1){
      // mark exersise as completed

      // scroll screen to have the "next-step-notes" be on-top...

    } else {
      // console.log("not end of string");
    }
  };

  // we need to listen for command+s to start the game.
  // we can put a start section button somewhere to activate timer
  // on the specific code block
  $("#start-snippet").click(function(){
    startListeningForKeypress();
  })


// Scroll Magic
      // init controller
      var controller = new ScrollMagic();
    

});
})(window, document);


//Listen for keypress events on.Click of #start-snippet btn
var startListeningForKeypress = function(){
  
  $(document).keypress(function(event){
    
    var charCode = event.keyCode;
    var char = String.fromCharCode(charCode);

      // log current charCode and char for testing
      // console.log(charCode);
      // console.log(char);

    // prevent default behavior of troublesome keys
    // spacebar ASCII 32
    // if (event.keyCode == 32 && event.target == document.body) {
    //     event.preventDefault();
    //     charCode === 32;
    // }
    // // tab ASCII 9
    // if (event.keyCode == 9 && event.target == document.body) {
    //     event.preventDefault();
    //     charCode === 9;
    // }

    // // esc ASCII 27
    // if (event.keyCode == 27 && event.target == document.body) {
    //     event.preventDefault();
    //     charCode === 27;
    // }
    // // backspace ASCII 8
    // if (event.keyCode == 8 && event.target == document.body) {
    //     event.preventDefault();
    //     charCode === 8;
    // }
    // just accept 10-32

    // do simple char match and console.log
    if (a_snippet.getElement().charCode > 9 && a_snippet.getElement().charCode < 32){
      console.log("ignored ASCII 10-31. treated as a match..")
      a_snippet.updateIndex();
    } else if (charCode === a_snippet.getElement().charCode){
      console.log("MATCH");
      // toggling the matched elements class
      a_snippet.getElement().el.toggleClass("unmatched-letter");

      // check if the current element is the last Element of the 
      if (a_snippet.endOfStringMatch()){
        alert("that was the end of the string...");
      };
      a_snippet.updateIndex();
    } else {
       // do not go to next letter 
       // until there is a match
       console.log("uh oh....");
    }

  });
  //disable delete button
  // disable other "browser" reactive buttons... tab, command+T, etc.
};
