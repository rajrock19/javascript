const person = {
    firstname: "raj",
    lastname: "yadav",
    id: 556,
    fullname: function () {
        return this.firstname + "" + this.lastname;
    }
};

document.getElementById("demo").innerHTML = person.fullname();

// $(document).ready(function(){
//     $("P").click(function(){
//         $(this).hide();
//     })
// })

// $("#test").mouseleave(function(){
//     alert("hello world")
// });

// $("#test").hover(function(){
//     alert("hey");
// },
// function(){
//     alert("you leave us")
// }
// )
// $(document).ready(function(){
//     $("input").focus(function(){
//         $(this).css("background-color","yellow")
//     })
// });
// $("input").blur(function(){
//     $(this).css("background-color","orange")
// });


// $(document).ready(function(){
//     $("#hide").click(function(){
//         $("p").hide();
//     });
//     $("#show").click(function(){
//         $("p").show();
//     })
// })
// $(document).ready(function(){
//     $("button").click(function(){
//         $("P").toggle();
//     })
// })

// $(document).ready(function(){
//     $("button").click(function(){
//         $("#div1").fadeIn(1000);
//         $("#div2").fadeIn(2000);
//         $("#div3").fadeIn(8000);

//     });
// });
// $(document).ready(function (){
//     $("button").click(function () {
//         $('div1').animate({
//             left: '250px',
//             opacity: '0.5',
//             height: '150px',
//             width: '150px'
//         });
//     });
// });
// $(document).ready(function(){
//     $("button").click(function(){
//       $("div").animate({
//         left: '250px',
//         opacity: '0.5',
//         height: '150px',
//         width: '150px'
//       });
//     });
//   });
$("button").click(function(){
    $("p").hide("slow",function(){
        alert("now the paragraph are hidden");
    });

});

// document.querySelectorAll("button").onclick(function(){
//     document.querySelectorAll("p").hide("slow",function(){
//         alert("now the paragraph are hidden");
//     });
// });