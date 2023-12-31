

<!-- Dark blue above navbar -->
<div class="bg-[#1d345e] w-full h-14"></div>

  <nav class=" p-2 flex lg:w-3/4 xl:w-3/4 w-full mx-auto items-center bg-white  absolute top-0 left-1/2 transform -translate-x-1/2 z-10 mt-4">
    <!-- Your Navbar Content Goes Here -->
   
  <div class="max-w-screen-xl flex flex-wrap items-center justify-evenly mx-auto ">
    <a href="#top" class=" ">
        <img  src="/logo.png" class=" md:flex-row mr-32" alt="Sensesemi Logo" />
    </a>

<!-- buttun for dropdowns -->
<button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
      </svg>
  </button>


<!-- Navbar div starts here -->
  <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
  <!-- ul navbar list starts here -->
      <ul class="flex text-lg text-gray-700 justify-evenly  flex-col font-medium p-4 md:p-0 mt-4  rounded-lg md:flex-row md:space-x-8   md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 mr">
<!-- Navbar list items starts here -->
<!-- list item 1 -->
      <li>
        <a href="#home" class=" text-gray-500 font-poppins block py-2 pl-3 pr-10 rounded md:p-0  dark:bg-blue-400 md:dark:bg-transparent text-[16px] " aria-current="page">Home</a>
      </li>
<!-- list item 2 with buttun -->
      <li>
        <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-500 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-400 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent  font-poppins text-[16px] ">About us<svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg> </button>

<!-- Dropdown menu 1 -->
<div id="dropdownNavbar" class="z-50 hidden font-normal bg-[#00a8ca] divide-y divide-gray-100 shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
  <!-- dropdown ul starts here -->
  <ul class="py-2 mx-auto text-md text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
    <!-- list 1 -->
    <li>
      <a href="#visionmission"  class="block px-4 py-2 text-[16px]  text-white font-poppins">Vision & Mision</a>
    </li>
    <hr>
    <!-- list 2 -->
    <li>
      <a href="#whyus" class="block px-4 py-2  text-[16px]  text-white font-poppins">Why us</a>
    </li>
    <hr>
    <!-- list 3 -->
    <li>
      <a href="#leadershipteam" class="block px-4 py-2 text-[16px]  text-white font-poppins">Leadership team</a>
    </li>
   </ul>
 </div>
</li>
<!-- dropdown 1 list ends here -->

<!-- list item 3 with buttun -->
<li>
  <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar1" class="flex items-center justify-between w-full py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-400 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent  font-poppins text-[17px] text-gray-500">Our Solution<svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg></button>


<!-- Dropdown menu 2  -->
<div id="dropdownNavbar1" class="z-50 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
  <ul class=" text-[16px] text-gray-700 dark:text-gray-500" aria-labelledby="dropdownLargeButton">
    <li>
      <a href="#senseh" class=" block px-5 py-3 text-[16px] font-poppins bg-[#00a8ca] text-white">SenseH</a>
    </li>
  </ul>
</div>
</li>

<!-- list item 4 faqs  -->
<li>
  <a href="#faqs" class="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0 dark:text-white md:dark:hover:text-blue-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent  font-poppins text-[16px] text-gray-500">FAQs</a>
</li>

<!-- list item 5 contact us -->
<li>
  <a href="#contactus" class="block py-2 pl-3 pr-4 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0 dark:text-white md:dark:hover:text-blue-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent  font-poppins text-[16px]">Contact us</a>
</li>
</ul>
</div>
<!-- Dropdown menu 2 ends-->


<!-- Social links starts-->
<div class=" md:flex-row w-28 ml-32 hidden xl:flex  ">
  <a href="https://www.linkedin.com/in/sensesemi-technologies-5a4779144/"><img class="px-1"  src="/linkdin.png" alt="linkdin"></a>
  <a href="#top"><img class="px-1" src="/twittter.png" alt="twitter"></a>
  <a href="#top"><img class="px-1" src="/fb.png" alt="fb"></a>
</div>
</div>
</nav>
<!-- navbar ends -->