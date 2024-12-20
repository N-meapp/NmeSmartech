(function ($) {
  "use strict";

  // AOS ANIMATIONS
  AOS.init();

  // NAVBAR
  $(".navbar-nav .nav-link").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // NEWS IMAGE RESIZE
  function NewsImageResize() {
    $(".navbar").scrollspy({ offset: -76 });

    var LargeImage = $(".large-news-image").height();

    var MinusHeight = LargeImage - 6;

    $(".news-two-column").css({ height: MinusHeight - LargeImage / 2 + "px" });
  }

  $(window).on("resize", NewsImageResize);
  $(document).on("ready", NewsImageResize);

  $('a[href*="#"]').click(function (event) {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 66,
          },
          1000
        );
      }
    }
  });
})(window.jQuery);

document.addEventListener("DOMContentLoaded", function () {
  const allElements = document.getElementsByClassName("feat");
  const features = document.querySelector(".feats"); // .features div
  const featureId = $("#main-feat"); // Use jQuery to select the element by ID

  let loop = 500;
  // let loop = true

  function updateFeatures() {
    for (let i = 0; i < loop; i++) {
      // console.log(1);

      setTimeout(() => {
        // First, hide and reset all elements
        for (let j = 0; j < allElements.length; j++) {
          // console.log(2);
          $(allElements[j]).css({
            width: "0px",
            height: "0px",
            marginInline: "0px",
          });
          //     $(allElements[]).find('h5').css({
          //       display:'none',
          //   });
          //   $(allElements[j]).find('p').css({
          //     display:'none',
          // });
        }

        if (allElements[i] && allElements[i + 1] && allElements[i + 2]) {
          // console.log("helloooo");

          // $(allElements[i-1]).css({ display:'none' });
          $(allElements[i - 1])
            .find("h5")
            .css({
              display: "none",
            });
          $(allElements[i - 1])
            .find("p")
            .css({
              display: "none",
            });

          $(allElements[i]).css({
            width: "150px",
            height: "200px",
            marginInline: "0px",
            display: "block",
            visibility: "visible",
            opacity: "1",
          });
          $(allElements[i]).find("h5").css({
            fontSize: "small",
          });
          $(allElements[i]).find("p").css({
            fontSize: "xx-small",
          });

          $(allElements[i + 1]).css({
            width: "250px",
            height: "300px",
            marginInline: "15px",
            display: "block",
            visibility: "visible",
            opacity: "1",
          });
          $(allElements[i + 1])
            .find("h5")
            .css({
              fontSize: "18px",
              paddingInline: "20px",
            });
          $(allElements[i + 1])
            .find("p")
            .css({
              fontSize: "13px",
              textAlign: "center",
            });

          $(allElements[i + 2]).css({
            width: "150px",
            height: "200px",
            marginInline: "0px",
            marginRight: "-33px",
            display: "block",
            visibility: "visible",
            opacity: "1",
          });
          $(allElements[i + 2])
            .find("h5")
            .css({
              fontSize: "small",
            });
          $(allElements[i + 2])
            .find("p")
            .css({
              fontSize: "xx-small",
            });

          // Update the HTML content inside the features div using jQuery

          featureId.append(`
                     <div class="left-feat feat">
                            <h5>Speed, Smartand Secure</h5>
                            <p>Our technical team made N-me for highspeed access to needers, high secured about client dataand smartest display for the app.</p>
                          </div>
                          <div class="left-feat feat">
                            <h5>Excellent Reviews</h5>
                            <p>We heard and read lots of high voltage reviews from national and international famous techies. It helps us to grow our confidence level.</p>

                          </div>
                          <div class="left-feat feat">
                            <h5>Friendly Technology</h5>
                            <p>The N-Me app provides friendly technology and easy proocessing, so even normal people can access so easily.</p>

                          </div>
                          <div class="left-feat feat" style="margin-right: -33px;">
                            <h5>Best Team</h5>
                            <p>Best and well qualified team behind the project. The strength of togetherness made N-Me fabulous.</p>

                          </div>
                      
                  `);
        }
      }, i * 3000); // Every 3 seconds
    }
  }

  updateFeatures(); // Call the function to start updating features
});


function controlLeft() {
  const dot1 = document.getElementById('dot-one');
  const dot2 = document.getElementById('dot-two');
  const categoryOut = document.getElementById('category-out');

  // Change the background colors as before
  dot1.style.background = 'black';
  dot2.style.background = 'none';

  // Clear previous content in categoryOut if needed
  categoryOut.innerHTML = '';

  // Create dec-box div
  const decBox = document.createElement('div');
  decBox.classList.add('col-lg-6', 'dec-box');
  decBox.innerHTML = `
    <div class="box-outer">
      <div class="box-title visible-regular">
       <h3>N-me <span class="text-gray">Smartech</span> </h3>
      </div>
      <div class="box-content visible-light">
      <h5>Our team’s collaboration drives innovation, combining diverse skills to deliver growth-focused business solutions.</h5>
      </div>
      <button class="button-cat">
                                    <a href="career.html">
                                        <p class="text-for-cat">Join Us <i class="fas fa-arrow-right ryt-arrow text-light"></i></p>
                                    </a>
        

                                </button>
    </div>
  `;

  // Create dec-img div
  const decImg = document.createElement('div');
  decImg.classList.add('col-lg-6', 'dec-img');
  decImg.innerHTML = `
    <img src="images/doodlw1.jpg" class="img-fluid" alt="">
  `;

  // Append both divs to the categoryOut container
  categoryOut.appendChild(decBox);
  categoryOut.appendChild(decImg);
  dot1.style.background = 'black'
   dot2.style.background = 'none'
}



function controlRight() {
  const dot1 = document.getElementById('dot-one');
  const dot2 = document.getElementById('dot-two');
  const categoryOut = document.getElementById('category-out');

  // Change the background colors as before
  dot1.style.background = 'black';
  dot2.style.background = 'none';

  // Clear previous content in categoryOut if needed
  categoryOut.innerHTML = '';

  // Create dec-box div
  const decBox = document.createElement('div');
  decBox.classList.add('col-lg-6', 'dec-box');
  decBox.innerHTML = `
    <div class="box-outer">
      <div class="box-title visible-regular">
        <h3>Dedicated IT <span class="text-gray"> Allies</span> </h3>
      </div>
      <div class="box-content visible-light">
        <h5>Our team of passionate professionals drives innovation and excellence across IT solutions.</h5>
      </div>
     
    </div>
  `;

  // Create dec-img div
  const decImg = document.createElement('div');
  decImg.classList.add('col-lg-6', 'dec-img');
  decImg.innerHTML = `
    <img src="images/WhatsApp Image 2024-09-26 at 16.42.38_6f83fcd0.jpg" class="img-fluid" alt="">
  `;

  // Append both divs to the categoryOut container
  categoryOut.appendChild(decBox);
  categoryOut.appendChild(decImg);
  dot1.style.background = 'none'
  dot2.style.background = 'black'
}



// // Run a function when the browser scroll reaches the target div
// function checkScrollPosition() {
//   const count = document.getElementById('count-1');
 

//   const targetElement = document.getElementById('facts');
  
//   if (!targetElement) {
//     console.error("Element with id 'facts' not found.");
//     return;
//   }
  
//   // Get the position of the target element from the top of the page
//   const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;

//   // Set a threshold to ensure it only triggers once around the target position
//   const scrollPosition = window.scrollY || window.pageYOffset;
//   const threshold = 5; // Adjust threshold if needed

//   if (Math.abs(scrollPosition - targetPosition) <= threshold) {
    
//     if(status){
//       onTargetScrollReached(count);
      
//       status = false;
      
//     }
//   }else{
//     count.textContent = 232
//   }
// }

// // Function to call when scroll reaches the target div

// function onTargetScrollReached(count) {

//   for(let i=0;i<50;i++){
//     setInterval(()=>{
//       console.log(i+100);
      
//      count.textContent = i+100
  
      
//     },i*500)
//   }

// }

// // Attach the scroll event listener
// let status = true
// window.addEventListener("scroll", checkScrollPosition);


// Function to check if an element is in the viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Object to track counting status for each counter
let isCounting = {
  count1: false,
  count2: false,
  count3: false,
  count4: false
};

// Function to initialize counters when the section is in the viewport
function initCounters() {
  const section = document.getElementById("facts");
  if (isElementInViewport(section)) {
    if (!isCounting.count1) autoCount('count-1', 0, 632, 2000, 'count1');
    if (!isCounting.count2) autoCount('count-2', 0, 921, 2000, 'count2');
    if (!isCounting.count3) autoCount('count-3', 0, 24, 2000, 'count3');
    if (!isCounting.count4) autoCount('count-4', 0, 127, 2000, 'count4');

    // Remove the scroll event listener after the counters start
    window.removeEventListener("scroll", initCounters);
  }
}

// Attach the scroll event listener to start counting once
window.addEventListener("scroll", initCounters);

function autoCount(targetId, startValue, targetValue, duration, counterKey) {
  // Check if counting is already in progress for this specific counter
  if (isCounting[counterKey]) {
    console.warn(`Counting is already in progress for element with id "${targetId}".`);
    return;
  }

  const element = document.getElementById(targetId);
  let currentValue = startValue;
  const totalSteps = duration / 100; // Number of steps based on 100ms intervals
  const increment = (targetValue - startValue) / totalSteps;

  // Ensure element exists
  if (!element) {
    console.error(`Element with id "${targetId}" not found.`);
    return;
  }

  isCounting[counterKey] = true; // Set the flag for this specific counter

  const intervalId = setInterval(() => {
    currentValue += increment;

    // Check if we reached or surpassed the target value
    if ((increment > 0 && currentValue >= targetValue) || (increment < 0 && currentValue <= targetValue)) {
      currentValue = targetValue; // Set to target value to avoid overshoot
      clearInterval(intervalId); // Stop the interval
    }

    element.textContent = Math.floor(currentValue); // Update the display
  }, 100); // Update every 100ms
}






function handleEnter(id) {

  // Assuming you are using className to identify the element
  const idElement = document.getElementsByClassName(id);
  console.log(idElement);

  if (idElement.length > 0) {
      idElement[0].classList.add('hithere');  // Corrected the usage of add
  }
}

function handleLeave(id) {
  const idElement = document.getElementsByClassName(id);

  if (idElement.length > 0) {
      idElement[0].classList.remove('hithere');  // Corrected the usage of remove
  }
}







// function handleViewMoreBtn(viewSectionId){

//   const viewSection = document.getElementById(viewSectionId)
//   const button = document.getElementById(`${viewSectionId}-btn`)
//   const viewSectionHide = document.getElementById(`${viewSectionId}-hidden`)

//   viewSection.style.display = 'block';
//   button.style.display = 'none';
//   viewSectionHide.style.display = 'none'

//   console.log('ddddd');

  
// }







window.addEventListener('load',()=>{
    const ideaId = document.getElementById('idea-id')
    const realityId = document.getElementById('reality-id')

    let flag = true

    if(ideaId && realityId){
      setInterval(()=>{
        if(flag==true){
          ideaId.style.transform = 'perspective(500px) scaleZ(2) rotateX(90deg)';
          ideaId.style.marginTop = '-15px'
      realityId.style.transform = 'perspective(500px) scaleZ(1) rotateX(0deg)';
      realityId.style.marginTop = '0px'
      flag = false
        }else{
          ideaId.style.transform = 'perspective(500px) scaleZ(0.5) rotateX(0deg)';
          ideaId.style.marginTop = '0px'
          realityId.style.transform = 'perspective(500px) scaleZ(2) rotateX(-90deg)';
          realityId.style.marginTop = '15px'
      flag = true
        }
      
      },2000)
    }

   

})



// .rotateX{
//   /*   perspective: 100px; */
//     transform: perspective(500px) scaleZ(2) rotateX(-90deg);
//     transition: transform 0.5s ease;  
//   }
  
//   .box:hover .rotateX{
//     transform: perspective(500px) scaleZ(1) rotateX(0deg);
//    /* Standard syntax */
//   }
  





//   .rotateX{
//     /*   perspective: 100px; */
//       transform: perspective(1) scaleZ(1) rotateX(0deg);
//       transition: transform 0.5s ease;  
//     }