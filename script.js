
// Animating the slideshow for the coverpage
var myIndex = 0;
carousel();

function carousel() 
{
  var i;
  var x = document.getElementsByClassName("mySlidescov");
  for (i = 0; i < x.length; i++) // Running the loop for all the pictures
  {
    x[i].style.display = "none";  
  }
  myIndex++; // Displaying the next picture in line
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Changing the image every 2 seconds
}



// Hiding the navbar on scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function() 
{
  var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) // Checking if the user is scrolling up
    {
      document.getElementById("navbar").style.top = "0"; // Keeping the navbar attached to the top
    } 
    else 
    {
      document.getElementById("navbar").style.top = "-50px"; // Hiding the navbar
    }
  prevScrollpos = currentScrollPos; // Setting the previous scroll as the current scroll
}




// Enabling the slideshow for visualizations in the about section 
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) // Function to add slides to the slideshow
{
  showSlides(slideIndex += n); 
}

function currentSlide(n) // Function to get the current slide
{
  showSlides(slideIndex = n);
}

function showSlides(n) // Function to display the slides
{
  var i;
  var slides = document.getElementsByClassName("mySlides"); // Getting all the visualizations for the slideshow
  var dots = document.getElementsByClassName("dot"); 
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) 
  {
      slides[i].style.display = "none"; // Displaying the visualizations one after the other as the user clicks on the arrows
  }
  for (i = 0; i < dots.length; i++) 
  {
      dots[i].className = dots[i].className.replace(" active", ""); // Displaying the dots and changing the active dot accordingly
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
} 



// Enabling the slideshow for visualizations in the evolution section 
var slideIndex1 = 1;
showSlides1(slideIndex1);

function plusSlides1(n) // Function to add slides to the slideshow
{
  showSlides1(slideIndex1 += n);
}

function currentSlide1(n) // Function to get the current slide
{
  showSlides1(slideIndex1 = n);
}

function showSlides1(n) // Function to display the slides
{
  var i;
  var slides = document.getElementsByClassName("mySlides1"); // Getting all the visualizations for the slideshow
  var dots = document.getElementsByClassName("dot1");
  if (n > slides.length) {slideIndex1 = 1}    
  if (n < 1) {slideIndex1 = slides.length}
  for (i = 0; i < slides.length; i++) 
  {
      slides[i].style.display = "none";  // Displaying the visualizations one after the other as the user clicks on the arrows
  }
  for (i = 0; i < dots.length; i++) 
  {
      dots[i].className = dots[i].className.replace(" active", ""); // Displaying the dots and changing the active dot accordingly
  }
  slides[slideIndex1-1].style.display = "block";  
  dots[slideIndex1-1].className += " active";
} 



// Enabling the slideshow for visualizations in the growth section 
var slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) // Function to add slides to the slideshow
{
  showSlides2(slideIndex2 += n);
}

function currentSlide2(n) // Function to get the current slide
{
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) // Function to display the slides
{
  var i;
  var slides = document.getElementsByClassName("mySlides2"); // Getting all the visualizations for the slideshow
  var dots = document.getElementsByClassName("dot2");
  if (n > slides.length) {slideIndex2 = 1}    
  if (n < 1) {slideIndex2 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  // Displaying the visualizations one after the other as the user clicks on the arrows
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", ""); // Displaying the dots and changing the active dot accordingly
  }
  slides[slideIndex2-1].style.display = "block";  
  dots[slideIndex2-1].className += " active";
} 



// Enabling the slideshow for visualizations in the impact section 
var slideIndex3 = 1;
showSlides3(slideIndex3);

function plusSlides3(n) // Function to add slides to the slideshow
{
  showSlides3(slideIndex3 += n);
}

function currentSlide3(n) // Function to get the current slide
{
  showSlides3(slideIndex3 = n);
}

function showSlides3(n) // Function to display the slides
{
  var i;
  var slides = document.getElementsByClassName("mySlides3"); // Getting all the visualizations for the slideshow
  var dots = document.getElementsByClassName("dot3");
  if (n > slides.length) {slideIndex3 = 1}    
  if (n < 1) {slideIndex3 = slides.length}
  for (i = 0; i < slides.length; i++) 
  {
      slides[i].style.display = "none"; // Displaying the visualizations one after the other as the user clicks on the arrows
  }
  for (i = 0; i < dots.length; i++) 
  {
      dots[i].className = dots[i].className.replace(" active", ""); // Displaying the dots and changing the active dot accordingly
  }
  slides[slideIndex3-1].style.display = "block";  
  dots[slideIndex3-1].className += " active";
} 



// JQuery for showing the hidden graph references on hover
$(".myDIV").hover(function()
{ 
  $(".hide").show(1000); // On hover, the hidden references are shown in 1 second period
  }, function(){
  $(".hide").hide(); // On removing the cursor, the menu closes instantly
});