
      $(document).ready(function(){
        $(".h-click").mouseenter(function(){
          $(".dropDn-home").slideToggle(500);
          $(".dropDn-about").hide();
          $(".dropDn-contact").hide();
        })

        $(".a-click").mouseenter(function(){
          $(".dropDn-about").slideToggle(500);
          $(".dropDn-home").hide();
          $(".dropDn-contact").hide();
          
        })

        $(".c-click").mouseenter(function(){
          $(".dropDn-contact").slideToggle(500);
          $(".dropDn-about").hide();
          $(".dropDn-home").hide();
        })
        
      //  ------------
        $(".fa-facebook").mouseenter(function(){
          var div= $(".fa-facebook");
          div.animate({
            right:"1px",
            width:'100px'
          }, "slow");

          var div= $(".fa-youtube");
          div.animate({
            right:"1px",
            width:'40px'
          }, "slow");

          var div= $(".fa-linkedin");
          div.animate({
            right:"1px",
            width:'40px'
          }, "slow");

          var div= $(".fa-google");
          div.animate({
            right:"1px",
            width:'40px'
          }, "slow");
          var div= $(".fa-twitter");
          div.animate({
            right:"1px",
            width:'40px'
          }, "slow");
        })
//  ------------
        $(".fa-twitter").mouseenter(function(){
          var div= $(".fa-twitter");
          div.animate({
            right:"1px",
            width:'100px'
          }, "slow");
          
          var div= $(".fa-facebook");
          div.animate({
            right:"1px",
            width:'40px'
          }, "slow");

          var div= $(".fa-youtube");
          div.animate({
            right:"1px",
            width:'40px'
          }, "slow");

          var div= $(".fa-linkedin");
          div.animate({
            right:"1px",
            width:'40px'
          }, "slow");

          var div= $(".fa-google");
          div.animate({
            right:"1px",
            width:'40px'
          }, "slow");
          
        })
//  ------------
        $(".fa-google").mouseenter(function(){
          var div= $(".fa-google");
          div.animate({
            right:"1px",
            width:'100px'
          }, "slow");

          var div= $(".fa-twitter");
          div.animate({
            right:"1px",
            width:'40px'
          }, "slow");
          
          var div= $(".fa-facebook");
          div.animate({
            right:"1px",
            width:'40px'
          }, "slow");

          var div= $(".fa-youtube");
          div.animate({
            right:"1px",
            width:'40px'
          }, "slow");

          var div= $(".fa-linkedin");
          div.animate({
            right:"1px",
            width:'40px'
          }, "slow");

        })
// ---------------------------
        $(".fa-linkedin").mouseenter(function(){
          var div= $(".fa-linkedin");
          div.animate({
            right:"1px",
            width:'100px'
          }, "slow");

          var div= $(".fa-google");
          div.animate({
            right:"1px",
            width:'40px'
          }, "slow");

          var div= $(".fa-twitter");
          div.animate({
            right:"1px",
            width:'40px'
          }, "slow");
          
          var div= $(".fa-facebook");
          div.animate({
            right:"1px",
            width:'40px'
          }, "slow");

          var div= $(".fa-youtube");
          div.animate({
            right:"1px",
            width:'40px'
          }, "slow");

          var div= $(".fa-linkedin");
          div.animate({
            right:"1px",
            width:'40px'
          }, "slow");

          var div= $(".fa-google");
          div.animate({
            right:"1px",
            width:'40px'
          }, "slow");

          var div= $(".fa-twitter");
          div.animate({
            right:"1px",
            width:'40px'
          }, "slow");
          
          var div= $(".fa-facebook");
          div.animate({
            right:"1px",
            width:'40px'
          }, "slow");
        })
        $(".fa-youtube").mouseenter(function(){
          var div= $(".fa-youtube");
          div.animate({
            right:"1px",
            width:'100px'
          }, "slow");
        })

        // --------------------------------------

        // card session nav
        $(".fa-angle-down").click(function(){
          $(".m-nav").slideToggle(500);
          $(".cardds").hide();
          $(".blog-ch").hide();
        })

        // card session nav end

        //like , dislike
        $("#ca").click(function(){
          $(".cardds").fadeToggle(400);
          $(".blog-ch").hide();
        })

        $("#ba").click(function(){
          $(".blog-ch").fadeToggle(400);
          $(".cardds").hide();
        })
             $(".l0").click(function(){
               var like = $(".l0");
               like.css({color:"green"});

               var dislike = $(".d0");
               dislike.css({color:"black"});
                   })

             $(".l1").click(function(){
               var like = $(".l1");
               like.css({color:"green"});

               var dislike = $(".d1");
               dislike.css({color:"black"});
                })

                $(".l2").click(function(){
               var like = $(".l2");
               like.css({color:"green"});

               var dislike = $(".d2");
              dislike.css({color:"black"});
               
                })

                // dis like

                $(".d0").click(function(){
               var dislike = $(".d0");
               dislike.css({color:"red"});

               var like = $(".l0");
               like.css({color:"black"});
               
                })

                $(".d1").click(function(){
               var dislike = $(".d1");
               dislike.css({color:"red"});

               var like = $(".l1");
               like.css({color:"black"});
               
                })

                $(".d2").click(function(){
               var dislike = $(".d2");
               dislike.css({color:"red"});

               var like = $(".l2");
               like.css({color:"black"});
               
                })
        //like , dislike end


        // part-6
$("#clr0").mouseenter(function(){
  $("#trin0").show();
  $("#trin1 ,#trin2,#trin3,#trin4,#trin5,#trin6,#trin7,#trin8").hide();
})
$("#clr1").mouseenter(function(){
  $("#trin1").show();
  $("#trin0,#trin2 ,#trin3,#trin4,#trin5,#trin6,#trin7,#trin8").hide();
})
$("#clr2").mouseenter(function(){
  $("#trin2").show();
  $("#trin0 ,#trin1,#trin3,#trin4,#trin5,#trin6,#trin7,#trin8").hide();
})
$("#clr3").mouseenter(function(){
  $("#trin3").show();
  $("#trin0 ,#trin1,#trin2,#trin4,#trin5,#trin6,#trin7,#trin8").hide();
})
$("#clr4").mouseenter(function(){
  $("#trin4").show();
  $("#trin0 ,#trin1,#trin2,#trin3,#trin5,#trin6,#trin7,#trin8").hide();
})
$("#clr5").mouseenter(function(){
  $("#trin5").show();
  $("#trin0 ,#trin1,#trin2,#trin3,#trin4,#trin6,#trin7,#trin8").hide();
})
$("#clr6").mouseenter(function(){
  $("#trin6").show();
  $("#trin0 ,#trin1,#trin2,#trin3,#trin4,#trin5,#trin7,#trin8").hide();
})
$("#clr7").mouseenter(function(){
  $("#trin7").show();
  $("#trin0 ,#trin1,#trin2,#trin3,#trin4,#trin5,#trin6,#trin8").hide();
})
// part-6 end



//night mode
$(".fa-adjust").click(function(){
  $(".wrapper").toggleClass("black");
  $(".about").toggleClass("aboutshadow");
  $(".main").toggleClass("mainbg-black");
  $(".icol-8").toggleClass("icol-8-h3");
  $(".whether-col3").toggleClass("icol-8-h3");
  $(".form").toggleClass("formbg");
  $(".story0fweak").toggleClass("story0fweakdark");
  $(".new-infos").toggleClass("new-infoscolor");
})

      })
     
