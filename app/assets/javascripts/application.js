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
// require bootstrap/dist/js/bootstrap.min.js

// bootstrap-material-design
// require bootstrap-material-design/dist/js/material.min.js
// require bootstrap-material-design/dist/js/material.min.js.map
// require bootstrap-material-design/dist/js/ripples.min.js

// editArea real-time syntax highlighter for a text area
// require EditArea/edit_area/edit_area_full.js

//
//= require keypress/keypress-2.1.0.min.js

var a_snippet;
var run_once = false;

(function(window, document, undefined) {
  $(document).on("ready page:load",function(){
    
    //-----------------------------------------------------------------------//
    // GET snippets using AJAX
    //-----------------------------------------------------------------------//
    //-[future] 1. extend to be able to plugin to various 'snippet' gameboards
    // grab ID from params
    var snippetId = window.location.pathname.split("/").pop();
    // request snippet from DB
    $.get('/snippets/'+ snippetId +'.json', function(data){
      a_snippet = new StringMatcher(data.snippet);
      // log snippet to test AJAX req
      // console.log(a_snippet);
    });


    //-----------------------------------------------------------------------//
    // string matching function
    //-----------------------------------------------------------------------//
    //-[future] 1. syntax highlighting using Prism or Custom highlighting regex
    function StringMatcher(str){

      // charSeq is the array of obj that will be matched against
      var charSeq = [];
      var $code = $("#code-entry-id-");

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

    //-----------------------------------------------------------------------//
    // Start Game
    //-----------------------------------------------------------------------//
    // [future] 1. command+s start the game. 
    $("#start-snippet").click(function(){
      startListeningForKeypress();
    });

  });
})(window, document);

//----------------------------------------------------------------------------//
// Listen for keypress events on.Click of #start-snippet btn
//----------------------------------------------------------------------------//
var startListeningForKeypress = function(){
  
  $(document).keypress(function(event){
    //-----------------------------------------------------------------------//
    // prevent the 'problem' keys from impeding play
    //-----------------------------------------------------------------------// 
    $(document).keydown(function(e) {
        switch (e.which) {
            case 8: // backspace
            console.log("Backspace");
            e.preventDefault();
            break;
          case 32: // spacebar 
                // console.log("Space");
            e.preventDefault();
            charCode = 32;
            // console.log(String.fromCharCode(a_snippet.getElement().charCode));
            console.log("THIS IS THE 'mystery char' = " + 
                        a_snippet.getElement().charCode + " " +
                        String.fromCharCode(a_snippet.getElement().charCode));
            if (charCode === a_snippet.getElement().charCode){
                  console.log("MATCH");
                  // toggling the matched elements class
                  a_snippet.getElement().el.toggleClass("unmatched-letter");
                  a_snippet.updateIndex();
                  break;
                }
            break;
          case 9:
            // tab ASCII 9
            console.log("Tab");
            e.preventDefault();
            // treat 'tab' as a space. ASCII 32.
            charCode = 32;
            console.log("NEW PART= " + a_snippet.getElement().charCode);
            if (charCode === a_snippet.getElement().charCode){
                  console.log("MATCH");
                  // toggling the matched elements class
                  a_snippet.getElement().el.toggleClass("unmatched-letter");
                  a_snippet.updateIndex();
                  break;
                }
            break;
          case 27:
            // esc
            console.log("Escape");
            e.preventDefault();
            break;

          default:
            // console.log(e.which);
            break;
        }
      });

    //-----------------------------------------------------------------------//
    // DESCRIBE AND REFACTOR BELOW
    //-----------------------------------------------------------------------// 

    // ascii 13 10 13 10 gets us to the fourth line after a space.
    //    13 = CR = Carriage Return
    //    10 = LF = Line Feed
    //    11 = VT = Vertical Tab <maybe this is when we paste in 'tab' chars?>
    // after the 'last' char in a given line is pressed the 
    //    'ignored ASCII 10-31. treated as a match..13' is triggered twice.
    //    then you can press any key... which will match 
    //    "non-keyboard characters"... x4 
    //    (may just the number we need till we get to a "space" or "indent" for the next code block... )
    // we may want to auto indent x4
    //
    // for RUBY... a pattern emerges...
    //    NL NL SP SP   => moving from a Class/Model Instantiation to the 1st method.
    //    NL SP SP SP SP => moving from a def method, to the method block.
    var charCode = event.keyCode;
    var char = String.fromCharCode(charCode);

    // do simple char match and console.log
    if (a_snippet.getElement().charCode > 9 && a_snippet.getElement().charCode < 32){
      console.log("ignored ASCII 10-31. treated as a match.." + a_snippet.getElement().charCode);
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
};