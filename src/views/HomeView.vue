<template>
  <div class="home">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Acme&display=swap" rel="stylesheet">

    <header class="flex flex-col bg-black pt-14 gap-4">
      <div class="px-10">
        <button><img src="../assets/dropdown-btn.png" alt=""></button>
      </div>
      <div class="flex justify-between items-center px-6">
        <div class="flex flex-col gap-1">
          <p class="text-[#686F82] font-['Acme']">Good morning</p>
          <p class="text-white text-xl font-['Acme']">Foo Fighters</p>
        </div>
        <div>
          <img src="../assets/bugier.png" alt="">
        </div>
      </div>
    </header>
    <section class="bg-black pt-7 px-2">
      <div class="flex justify-between bg-[#252830] rounded-2xl p-7">
        <div>
          <p class="text-[#686F82] text-lg font-['Acme']">Find your dishes</p>
        </div>
        <div>
          <img src="../assets/filter-btn.png" alt="">
        </div>
      </div>
    </section>

    <section class="flex flex-col gap-3 bg-black py-3 px-6">
      <div class="flex justify-between items-center">
        <div>
          <p class="text-white text-[26px] font-['Acme']">Categories</p>
        </div>
        <div class="flex gap-2">
          <p class="text-white text-lg font-['Acme']">All</p>
          <img class="w-7" src="../assets/right-arrow.png" alt="">
        </div>
      </div>
      <div class="flex gap-7">
        <div class="flex bg-[#353842] items-center gap-4 rounded-2xl py-4 px-5">
          <img src="../assets/bugier.png" alt="">
          <p class="text-[#8E94A4] text-lg font-['Acme']">Burger</p>
        </div>
        <div class="flex bg-[#353842] items-center gap-4 rounded-2xl py-4 px-5">
          <img src="../assets/sandwich.png" alt="">
          <p class="text-[#8E94A4] text-lg font-['Acme']">Sandwich</p>
        </div>
      </div>
    </section>

    <section class="flex flex-col gap-4 bg-black py-3 px-6">
      <div class="flex justify-between items-center">
        <div>
          <p class="text-white text-[26px] font-['Acme']">New dishes</p>
        </div>
        <div class="flex gap-2">
          <p class="text-white text-lg font-['Acme']">All</p>
          <img class="w-7" src="../assets/right-arrow.png" alt="">
        </div>
      </div>
      <div class="flex gap-4">
        <a href="#/food">
          <div class="flex flex-col bg-[#353842] rounded-[26px] p-3 gap-5">
            <div>
              <img src="../assets/fried-shrimp.png" alt="">
            </div>
            <div class="flex flex-col gap-[14px]">
              <div>
                <p class="text-white text-lg font-['Acme'] text-center">Fried Shrimp</p>
                <div class="flex gap-2">
                  <div class="flex items-center gap-1">
                    <img src="../assets/star.png" alt="">
                    <p class="text-[#686F82] text-sm font-['Acme']">4.8(163)</p>
                  </div>
                  <div class="flex items-center gap-1">
                    <img src="../assets/stopwatch.png" alt="">
                    <p class="text-[#686F82] text-sm font-['Acme']">20 min</p>
                  </div>
                </div>
              </div>
              <div>
                <p class="text-[#FF7269] text-xl font-['Acme'] text-center">€29.00</p>
              </div>
            </div>
          </div>
        </a>
        <a href="#/food2">
          <div class="flex flex-col bg-[#353842] rounded-[26px] p-3 gap-5">
            <div>
              <img src="../assets/fried-shrimp2.png" alt="">
            </div>
            <div class="flex flex-col gap-[14px]">
              <div>
                <p class="text-white text-lg font-['Acme'] text-center">Fried Shrimp</p>
                <div class="flex gap-2">
                  <div class="flex items-center gap-1">
                    <img src="../assets/star.png" alt="">
                    <p class="text-[#686F82] text-sm font-['Acme']">4.8(163)</p>
                  </div>
                  <div class="flex items-center gap-1">
                    <img src="../assets/stopwatch.png" alt="">
                    <p class="text-[#686F82] text-sm font-['Acme']">20 min</p>
                  </div>
                </div>
              </div>
              <div>
                <p class="text-[#FF7269] text-xl font-['Acme'] text-center">€29.00</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
    
    <footer class=" bg-black py-6">
      <div class="flex justify-center gap-14">
        <button><img src="../assets/cooking.png" alt=""></button>
        <button><img src="../assets/Category.png" alt=""></button>
        <button><img src="../assets/Heart.png" alt=""></button>
        <button><img src="../assets/Buy.png" alt=""></button>
      </div>
    </footer>
  </div>
</template>