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
      a_snippet = new StringMatcher(data.tool);
      console.log(a_snippet);
    });
    run_once = false;
}

run_once = true;
   

  // string matching function
  function StringMatcher(str){
    console.log("\n\n\n\n\n\n\n\n\n\n CREATED STRINGMATCHER \n\n\n")
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
            //debugger;
            // $codeHighlighted.append(node.el);
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
      console.log("not end of string");
    }
  };

  // snippet is the string variable
  // snippet = new StringMatcher("rails\rcd intro_json\rrake db:create");
  // console.log(snippet);



  // we need to listen for command+s to start the game.
  // we can put a start section button somewhere to activate timer
  // on the specific code block
  $("#start-snippet").click(function(){
    alert("angelo");
  })


// Scroll Magic
      // init controller
      var controller = new ScrollMagic();

      // build tween
      var tween = TweenMax.from("#animate", 0.5, {autoAlpha: 0, scale: 0.7});

      // build scene
      var scene = new ScrollScene({triggerElement: "a#top", duration: 200, triggerHook: "onLeave"})
              .setTween(tween)
              .addTo(controller);

      // change behaviour of controller to animate scroll instead of jump
      controller.scrollTo(function (newpos) {
        TweenMax.to(window, 0.5, {scrollTo: {y: newpos}});
      });

      //  bind scroll to anchor links
      $(document).on("click", "a[href^=#]", function (e) {
        var id = $(this).attr("href");
        if ($(id).length > 0) {
          e.preventDefault();

          // trigger scroll
          // ScrollMagic
          // http://janpaepke.github.io/ScrollMagic/examples/advanced/anchor_link_scrolling.html#top
          controller.scrollTo(id);

            // if supported by the browser we can even update the URL.
          if (window.history && window.history.pushState) {
            history.pushState("", document.title, id);
          }
        }
      });

      // show indicators (requires debug extension)
      scene.addIndicators();
    

});
})(window, document);



//Listen for keypress events
$(document).keypress(function(event){
  
  var charCode = event.keyCode;
  var char = String.fromCharCode(charCode);

    // log current charCode and char for testing
    console.log(charCode);
    console.log(char);

  // do simple char match and console.log
  if (charCode == a_snippet.getElement().charCode){
    console.log("MATCH");
    // toggling the matched elements class
    a_snippet.getElement().el.toggleClass("unmatched-letter");

    // check if the current element is the last Element of the 
    if (a_snippet.endOfStringMatch()){

    };
    // snippet.getElement().el.endOfStringMatch();



    // pass matched element into Prism for highlighting
    // http://schier.co/blog/2013/01/07/how-to-re-run-prismjs-on-ajax-content.html
    // Prism.highlightElement($(snippet.getElement().el)[0]);
    a_snippet.updateIndex();

  } else {
     // do not go to next letter 
     // until there is a match
  }

});
//disable delete button
// disable other "browser" reactive buttons... tab, command+T, etc.