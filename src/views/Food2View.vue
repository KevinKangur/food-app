<template>
  <div class="food2 bg-black py-10 px-2">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Acme&display=swap" rel="stylesheet">

    <header class="flex justify-between bg-black">
      <a href="/"><img src="../assets/back-arrow.png" alt=""></a>
      <img src="../assets/Heart.png" alt="">
    </header>
    <section>
      <div class="flex flex-col items-center justify-center">
        <img class="w-72" src="../assets/shrimp-feat-leaves2.png" alt="">
        <div class="flex flex-col gap-4">
          <h2 class="text-white text-2xl font-['Acme'] text-center">Fried Shrimp</h2>
          <p class="text-[#686F82] font-['Acme'] text-center">This is my kind of breakfast egg sandwich and it 
            <span class="block">takes under 5 minutes to make</span>
          </p>
          <div class="flex justify-center gap-2">
            <div class="flex items-center gap-1">
              <img class="w-6" src="../assets/star.png" alt="">
              <p class="text-[#686F82] text-sm font-['Acme']">4.8(163)</p>
            </div>
            <div class="flex items-center gap-1">
              <img class="w-6" src="../assets/stopwatch.png" alt="">
              <p class="text-[#686F82] text-sm font-['Acme']">20 min</p>
            </div>
            <div class="flex items-center gap-1">
              <img src="../assets/kcal.png" alt="">
              <p class="text-[#686F82] text-sm font-['Acme']"> 150 kcal</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="flex justify-between items-center py-10 px-10">
          <h2 class="text-white text-lg font-['Acme']">Ingridients</h2>
          <p class="text-[#686F82] text-sm font-['Acme']">7 items</p>
        </div>
        <div class="flex justify-center gap-2">
          <div class="bg-gray-800 flex flex-col justify-center items-center rounded-[20px] gap-2 p-4">
            <img src="../assets/broccoli.png" alt="">
            <p class="text-white text-sm font-['Acme']">Broccoli</p>
          </div>
          <div class="bg-gray-800 flex flex-col justify-center items-center rounded-[20px] gap-2 p-4">
            <img src="../assets/chili.png" alt="">
            <p class="text-white text-sm font-['Acme']">Chili</p>
          </div>
          <div class="bg-gray-800 flex flex-col justify-center items-center rounded-[20px] gap-2 p-4">
            <img src="../assets/corn.png" alt="">
            <p class="text-white text-sm font-['Acme']">Corn</p>
          </div>
          <div class="bg-gray-800 flex flex-col justify-center items-center rounded-[20px] gap-2 p-4">
            <img src="../assets/carrot.png" alt="">
            <p class="text-white text-sm font-['Acme']">Carrot</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-1 pt-6">
        <p class="text-[#9CA0AF] font-['Acme'] text-center">Price</p>
        <p class="text-[#FF7269] text-xl font-['Acme'] text-center">€29.00</p>
      </div>
    </section>
  </div>
</template>
