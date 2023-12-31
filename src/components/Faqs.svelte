
<!-- FAQs Starts here -->
<div class="bg-[#f5f2f2]   ">

    <div id="faqs" class="flex justify-center mb-10">
      <h1 class="text-2xl text-[#00a8ca] sm:3xl md:text-4xl lg:text-4xl xl:5xl font-bold mt-5 text-center font-poppins">FAQs</h1>
    </div>
    
    <div class=" flex justify-center bg-[#f5f2f2]">
      <div class="w-full md:w-2/3">
          <!-- Paragraph 1 with Slowly Opening Dropdown and Play Icon -->
          <div class="p-2 rounded-md">
              <div class="flex items-center cursor-pointer" id="toggle1">
                  <span class="text-xs mr-2 transition-transform transform rotate-0 ease-in-out duration-200 " id="icon1" >▶</span>
                  <p class=" text-md font-poppins text-justify">How to monitor vital stats using SenseH?</p>
              </div>
              <div class="dropdown-content mt-2 transition-max-h max-h-0 overflow-hidden  duration-100 " id="content1" >
                  <p class="text-justify font-poppins">SenseH is a technology enabled device which works with Sensesemi Mobile Application.</p>
              </div>
          </div>
      </div>
    </div>
    <script>
      const toggleButton = document.getElementById('toggle1');
      const content1 = document.getElementById('content1');
      const icon1 = document.getElementById('icon1');
    
      toggleButton.addEventListener('click', () => {
          if (content1.classList.contains('max-h-0')) {
              content1.classList.remove('max-h-0');
              content1.classList.add('max-h-full');
              icon1.classList.remove('rotate-0');
              icon1.classList.add('rotate-90'); // Rotate the play icon to point downwards
          } else {
              content1.classList.remove('max-h-full');
              content1.classList.add('max-h-0');
              icon1.classList.remove('rotate-90');
              icon1.classList.add('rotate-0'); // Rotate the icon back to its original position
          }
      });
    </script>
    <hr>
    
    <div class=" flex justify-center mt-1 bg-[#f5f2f2]">
      <div class="w-full md:w-2/3">
          <!-- Paragraph 2  with Slowly Opening Dropdown and Play Icon -->
          <div class=" p-2 rounded-md">
              <div class="flex items-center cursor-pointer" id="toggle2">
                  <span class="text-xs mr-2 transition-transform transform rotate-0 ease-in-out duration-200" id="icon2">▶</span>
                  <p class="text-md font-poppins text-justify">Do I need internet connectivity to use the device?</p>
              </div>
              <div class="dropdown-content mt-2 transition-max-h max-h-0 overflow-hidden  duration-100" id="content2">
                  <p class="text-justify font-poppins">No, but you will need internet connectivity for registration and for viewing historical data.</p>
              </div>
          </div>
      </div>
    </div>
    <script>
      const toggleButton2 = document.getElementById('toggle2');
      const content2 = document.getElementById('content2');
      const icon2 = document.getElementById('icon2');
    
      toggleButton2.addEventListener('click', () => {
          if (content2.classList.contains('max-h-0')) {
              content2.classList.remove('max-h-0');
              content2.classList.add('max-h-full');
              icon2.classList.remove('rotate-0');
              icon2.classList.add('rotate-90'); // Rotate the play icon to point downwards
          } else {
              content2.classList.remove('max-h-full');
              content2.classList.add('max-h-0');
              icon2.classList.remove('rotate-90');
              icon2.classList.add('rotate-0'); // Rotate the icon back to its original position
          }
      });
    </script>
    
    
    <hr>
    <div class=" flex justify-center mt-1 bg-[#f5f2f2]">
      <div class="w-full md:w-2/3">
          <!-- Paragraph 3  with Slowly Opening Dropdown and Play Icon -->
          <div class="  p-2 rounded-md">
              <div class="flex items-center cursor-pointer" id="toggle3">
                  <span class="text-xs mr-2 transition-transform transform rotate-0 ease-in-out duration-200" id="icon3">▶</span>
                  <p class="text-md font-poppins text-justify">What is the battery life of this device? / Is this device rechargeable? / How is this device powered?</p>
              </div>
              <div class="dropdown-content mt-2 transition-max-h max-h-0 overflow-hidden  duration-100" id="content3">
                  <p class="text-justify font-poppins"> SenseH is rechargeable and can be charged with Type-C. The battery can store up to 100 readings of vitals.</p>
              </div>
          </div>
      </div>
    </div>
    <script>
      const toggleButton3 = document.getElementById('toggle3');
      const content3 = document.getElementById('content3');
      const icon3 = document.getElementById('icon3');
    
      toggleButton3.addEventListener('click', () => {
          if (content3.classList.contains('max-h-0')) {
              content3.classList.remove('max-h-0');
              content3.classList.add('max-h-full');
              icon3.classList.remove('rotate-0');
              icon3.classList.add('rotate-90'); // Rotate the play icon to point downwards
          } else {
              content3.classList.remove('max-h-full');
              content3.classList.add('max-h-0');
              icon3.classList.remove('rotate-90');
              icon3.classList.add('rotate-0'); // Rotate the icon back to its original position
          }
      });
    </script>
    
    <hr>
    <div class=" flex justify-center mt-1 bg-[#f5f2f2]">
      <div class="w-full md:w-2/3">
          <!-- Paragraph  4 with Slowly Opening Dropdown and Play Icon -->
          <div class=" p-2 rounded-md">
              <div class="flex items-center cursor-pointer" id="toggle4">
                  <span class="text-xs mr-2 transition-transform transform rotate-0 ease-in-out duration-200" id="icon4">▶</span>
                  <p class="text-md font-poppins text-justify">Do I need an individual device per user or can I track the data for multiple users on one device?</p>
              </div>
              <div class="dropdown-content mt-2 transition-max-h max-h-0 overflow-hidden  duration-100" id="content4">
                  <p class="text-justify font-poppins">You can use the device for multiple users.</p>
              </div>
          </div>
      </div>
    </div>
    <script>
      const toggleButton4 = document.getElementById('toggle4');
      const content4 = document.getElementById('content4');
      const icon4 = document.getElementById('icon4');
    
      toggleButton4.addEventListener('click', () => {
          if (content4.classList.contains('max-h-0')) {
              content4.classList.remove('max-h-0');
              content4.classList.add('max-h-full');
              icon4.classList.remove('rotate-0');
              icon4.classList.add('rotate-90'); // Rotate the play icon to point downwards
          } else {
              content4.classList.remove('max-h-full');
              content4.classList.add('max-h-0');
              icon4.classList.remove('rotate-90');
              icon4.classList.add('rotate-0'); // Rotate the icon back to its original position
          }
      });
    </script>
    
    <hr>
    
    
    <div class=" flex justify-center mt-1 bg-[#f5f2f2]">
      <div class="w-full md:w-2/3">
          <!-- Paragraph 5  with Slowly Opening Dropdown and Play Icon -->
          <div class=" p-2 rounded-md">
              <div class="flex items-center cursor-pointer" id="toggle5">
                  <span class="text-xs mr-2 transition-transform transform rotate-0 ease-in-out duration-200" id="icon5">▶</span>
                  <p class="text-md font-poppins text-justify">Does the device need any maintenance? / What is the maintenance procedure for the device?</p>
              </div>
              <div class="dropdown-content mt-2 transition-max-h max-h-0 overflow-hidden  duration-100" id="content5">
                  <p class="text-justify font-poppins">There is no maintenance required for the device.</p>
              </div>
          </div>
      </div>
    </div>
    <script>
      const toggleButton5 = document.getElementById('toggle5');
      const content5 = document.getElementById('content5');
      const icon5 = document.getElementById('icon5');
    
      toggleButton5.addEventListener('click', () => {
          if (content5.classList.contains('max-h-0')) {
              content5.classList.remove('max-h-0');
              content5.classList.add('max-h-full');
              icon5.classList.remove('rotate-0');
              icon5.classList.add('rotate-90'); // Rotate the play icon to point downwards
          } else {
              content5.classList.remove('max-h-full');
              content5.classList.add('max-h-0');
              icon5.classList.remove('rotate-90');
              icon5.classList.add('rotate-0'); // Rotate the icon back to its original position
          }
      });
    </script>
    
    <div class=" flex justify-center mt-1 bg-[#f5f2f2]">
      <div class="w-full md:w-2/3">
          <!-- Paragraph 6  with Slowly Opening Dropdown and Play Icon -->
          <div class=" p-2 rounded-md">
              <div class="flex items-center cursor-pointer" id="toggle6">
                  <span class="text-xs mr-2 transition-transform transform rotate-0 ease-in-out duration-200" id="icon6">▶</span>
                  <p class="text-md font-poppins text-justify">Are there any precautionary measures to follow before using the device?</p>
              </div>
              <div class="dropdown-content mt-2 transition-max-h max-h-0 overflow-hidden  duration-100" id="content6">
                  <p class="text-justify font-poppins">The device is safe and easy to use when not charging.</p>
              </div>
          </div>
      </div>
    </div>
    <script>
      const toggleButton6 = document.getElementById('toggle6');
      const content6 = document.getElementById('content6');
      const icon6 = document.getElementById('icon6');
    
      toggleButton6.addEventListener('click', () => {
          if (content6.classList.contains('max-h-0')) {
              content6.classList.remove('max-h-0');
              content6.classList.add('max-h-full');
              icon6.classList.remove('rotate-0');
              icon6.classList.add('rotate-90'); // Rotate the play icon to point downwards
          } else {
              content6.classList.remove('max-h-full');
              content6.classList.add('max-h-0');
              icon6.classList.remove('rotate-90');
              icon6.classList.add('rotate-0'); // Rotate the icon back to its original position
          }
      });
    </script>
    <hr>
    <div class=" flex justify-center mt-1 bg-[#f5f2f2]">
      <div class="w-full md:w-2/3">
          <!-- Paragraph 7 with Slowly Opening Dropdown and Play Icon -->
          <div class=" p-2 rounded-md mb-8 font-poppins">
              <div class="flex items-center cursor-pointer" id="toggle7">
                  <span class="text-xs mr-2 transition-transform transform rotate-0 ease-in-out duration-200" id="icon7">▶</span>
                  <p classclass="text-md ">Who all has access to the information saved on the device?</p>
              </div>
              <div class="dropdown-content mt-2 transition-max-h max-h-0 overflow-hidden duration-100" id="content7">
                  <p class="text-justify ">The data stored on the device is encrypted and hence cannot be viewed. You will require Sensesemi mobile application or SDK for viewing the data.</p>
              </div>
          </div>
      </div>
    </div>
    <script>
      const toggleButton7 = document.getElementById('toggle7');
      const content7 = document.getElementById('content7');
      const icon7 = document.getElementById('icon7');
    
      toggleButton7.addEventListener('click', () => {
          if (content7.classList.contains('max-h-0')) {
              content7.classList.remove('max-h-0');
              content7.classList.add('max-h-full');
              icon7.classList.remove('rotate-0');
              icon7.classList.add('rotate-90'); // Rotate the play icon to point downwards
          } else {
              content7.classList.remove('max-h-full');
              content7.classList.add('max-h-0');
              icon7.classList.remove('rotate-90');
              icon7.classList.add('rotate-0'); // Rotate the icon back to its original position
          }
      });
    </script>
    <hr>
    </div>
    <!-- FAQs ends here -->
    