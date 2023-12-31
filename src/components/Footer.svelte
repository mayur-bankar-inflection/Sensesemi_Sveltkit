
<!-- footer starts here -->
<footer class=" mt-16  py-10" style="background: linear-gradient(to right, #051e58, #45a2d8);">

    <div class="container mx-auto flex justify-center items-center">
        <img src="/Untitled-2.png" alt="Logo" class="w-38 h-20" />
        
    </div>
  
    <img src="/footer-bg-1.png" alt="">
  
    <nav class="flex flex-col items-center md:space-x-10 lg:space-x-10 xl:space-x-10 md:flex-row md:justify-center lg:flex-row xl:flex-row font-poppins">
      <a href="#top" class="text-white hover:text-black">Home</a>
      <a href="#aboutus" class="text-white  hover:text-black">About us</a>
      <a href="#oursolution" class="text-white hover:text-black">Our Solution</a>
      <a href="#contactus" class="text-white hover:text-black">Contact us</a>
  </nav>
  <!-- Social Links -->
  <div class=" pt-8 flex justify-center ">
    <a  href="https://facebook.com/"><i  class=" text-white fab fa-facebook text-xl"> </i></a>
    <a href="https://twitter.com/"><i class=" text-white fab fa-twitter text-xl ml-4"></i></a>
    <a href="https://www.linkedin.com/"> <i class=" text-white fab fa-linkedin text-xl ml-4"></i></a>
    </div>
    <img src="/footer-bg-1.png" alt="">
  
    <p class="text-white  flex justify-center text-center  font-poppins">Copyright © 2023 Sensesemi.. All Rights Reserved.</p>
  
    <!-- scroll buttun -->
    <div id="scrollToTopContainer" class="fixed bottom-4 right-4 z-50 hidden">
      <button id="scrollToTop" class="bg-gray-300 hover:bg-blue-400 text-gray-800 font-bold text-lg py-3 px-4 rounded-xl">
        <i class="	fas fa-angle-up"></i>
      </button>
    </div>
    
    <script>
  // Function to toggle the button's visibility
  function toggleScrollToTopButton() {
    const scrollToTopContainer = document.getElementById('scrollToTopContainer');
    if (window.scrollY > 100) {
      scrollToTopContainer.classList.remove('hidden');
    } else {
      scrollToTopContainer.classList.add('hidden');
    }
  }
  
  // Function to scroll to the top
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Hide the button after it's pressed
    document.getElementById('scrollToTopContainer').classList.add('hidden');
  }
  
  // Event listener for scrolling
  window.addEventListener('scroll', toggleScrollToTopButton);
  // Event listener for button click
  document.getElementById('scrollToTop').addEventListener('click', scrollToTop);
  
  // Initial visibility check
  toggleScrollToTopButton();
  </script>
  
      
  </footer>
    
  <!-- footer ends here -->
    