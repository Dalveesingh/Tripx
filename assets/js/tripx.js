 $(' #top_deals .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            navText : ["<i class='fa-solid fa-arrow-left-long'></i>","<i class='fa-solid fa-arrow-right-long'></i>"]
   
        },
        600:{
            items:1,
            nav:false,
            navText : ["<i class='fa-solid fa-arrow-left-long'></i>","<i class='fa-solid fa-arrow-right-long'></i>"]
   
        },
    
        1000:{
            items:3,
            nav:true,
            loop:true,
            navText : ["<i class='fa-solid fa-arrow-left-long'></i>","<i class='fa-solid fa-arrow-right-long'></i>"],
         }
    }
});

$(' #testimonial .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
            navText : ["<i class='fa-solid fa-arrow-left-long'></i>","<i class='fa-solid fa-arrow-right-long'></i>"],
            autoplay: true,
            autoplayTimeout: 4000,
   
        },
        600:{
            items:1,
            nav:false,
            navText : ["<i class='fa-solid fa-arrow-left-long'></i>","<i class='fa-solid fa-arrow-right-long'></i>"],
            autoplay: true,
            autoplayTimeout: 4000,
   
        },
        
        1000:{
            items:1,
            nav:true,
            loop:true,
            navText : ["<i class='fa-solid fa-arrow-left-long'></i>","<i class='fa-solid fa-arrow-right-long'></i>"],
            autoplay: true,
            autoplayTimeout: 4000,
         }
    }
});

$(' #partner .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:false,
            navText : ["<i class='fa-solid fa-arrow-left-long'></i>","<i class='fa-solid fa-arrow-right-long'></i>"],
            autoplay: true,
            autoplayTimeout: 5000,
   
        },
        600:{
            items:2,
            nav:false,
            navText : ["<i class='fa-solid fa-arrow-left-long'></i>","<i class='fa-solid fa-arrow-right-long'></i>"],
            autoplay: true,
            autoplayTimeout: 5000,
   
        },
        
        1000:{
            items:6,
            nav:false,
            loop:true,
            navText : ["<i class='fa-solid fa-arrow-left-long'></i>","<i class='fa-solid fa-arrow-right-long'></i>"],
            autoplay: true,
            autoplayTimeout: 5000,
         }
    }
});



let count = document.querySelectorAll(".counter_num")
let arr = Array.from(count)



arr.map(function(item){
  let startnumber = 0

  function counterup(){
  startnumber++
  item.innerHTML= startnumber
   
  if(startnumber == item.dataset.number){
      clearInterval(stop)
  }
}

let stop =setInterval(function(){
  counterup()
},50)

})