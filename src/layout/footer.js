document.querySelector("#footer").innerHTML = `
  <footer class="bg-main py-6 text-white md:pb-10 md:pt-12">
      <ul class="contact container">
        <li class="flex flex-wrap items-center justify-between pb-2 md:pb-6">
          <ul class="hidden gap-12 md:flex">
            <li><a class="btnHover block" href="index.html">首頁</a></li>
            <li><a class="btnHover block" href="home-2.html">系列鏡框</a></li>
            <li><a class="btnHover block" href="home-4.html">門市據點</a></li>
            <li><a class="btnHover block" href="home-7.html">部落格</a></li>
            <li><a class="btnHover block" href="home-6.html">常見問題</a></li>
          </ul>
          <a class="flex items-center md:hidden" href="tel:+0800-000-000">
            <span class="material-symbols-outlined mr-2 text-[18px]">
              call
            </span>
            0800-000-000
          </a>
          <ul class="flex gap-2 md:gap-4">
            <li>
              <a class="btnHover block size-6 md:size-10 lg:size-12" href="#"
                ><img
                  src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/ic-social-fb.png?raw=true"
                  alt="facebook"
              /></a>
            </li>
            <li>
              <a class="btnHover block size-6 md:size-10 lg:size-12" href="#"
                ><img
                  class="size-6 md:size-10 lg:size-12"
                  src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/ic_social_ig.png?raw=true"
                  alt="instagram"
              /></a>
            </li>
            <li>
              <a class="btnHover block size-6 md:size-10 lg:size-12" href="#"
                ><img
                  class="size-6 md:size-10 lg:size-12"
                  src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/ic_social_line.png?raw=true"
                  alt="line"
              /></a>
            </li>
          </ul>
        </li>
        <li class="mx-auto flex flex-col gap-2">
          <a
            class="hover hidden items-center self-start md:flex md:text-4xl md:leading-[54px]"
            href="tel:+0800-000-000"
          >
            <span
              class="material-symbols-outlined mr-4 text-[18px] md:text-5xl"
            >
              call
            </span>
            0800-000-000
          </a>
          <a
            class="hover flex items-center md:self-start md:text-4xl md:leading-[54px]"
            href="mailto:glasses@business.com"
          >
            <span
              class="material-symbols-outlined mr-2 text-[18px] md:mr-4 md:text-5xl"
            >
              mail
            </span>
            glasses@business.co
          </a>
        </li>
        <hr class="mb-4 mt-6 md:my-8" />
      </ul>
      <ul
        class="container flex flex-col gap-2 md:flex-row md:justify-between md:pt-0"
      >
        <li>Copyright © 2020 Glasses.All rights reserved.</li>
        <div class="flex flex-col gap-2 md:flex-row md:gap-12">
          <li>隱私權政策</li>
          <li>服務條款</li>
        </div>
      </ul>
    </footer>
`;
