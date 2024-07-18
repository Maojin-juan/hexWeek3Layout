import "../style/style.css";

document.querySelector("#navbar").innerHTML = `
  <nav class="bg-main">
      <div
        class="flex flex-col md:container md:flex-row md:items-center md:justify-between"
      >
        <a class="ml-[14px] block md:ml-0" href="./index.html">
          <img
            class="logo py-4"
            src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/logo-white.png?raw=true"
            alt="logo"
          />
        </a>
        <ul
          class="flex flex-wrap text-white md:w-auto md:flex-row md:flex-nowrap md:justify-between md:gap-12 leading-normal md:text-xl"
        >
          <li class="w-1/2 md:w-auto">
            <a
              class="hover block py-3 text-center outline outline-1 outline-white md:py-6 md:outline-none"
              href="./home-2.html"
            >
              系列鏡框
            </a>
          </li>
          <li class="w-1/2 md:w-auto">
            <a
              class="hover block py-3 text-center outline outline-1 outline-white md:py-6 md:outline-none"
              href="./home-4.html"
            >
              門市據點
            </a>
          </li>
          <li class="w-1/2 md:w-auto">
            <a
              class="hover block py-3 text-center outline outline-1 outline-white md:py-6 md:outline-none"
              href="./home-7.html"
            >
              部落格
            </a>
          </li>
          <li class="w-1/2 md:w-auto">
            <a
              class="hover block py-3 text-center outline outline-1 outline-white md:py-6 md:outline-none"
              href="./home-6.html"
            >
              常見問題
            </a>
          </li>
        </ul>
      </div>
    </nav>
`;
{
  /* <div class="flex flex-col justify-between md:container md:flex-row">
      <a class="logo ml-[15px] py-4 md:ml-0" href="./index.html">
        <img
          src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/logo-white.png?raw=true"
          alt="logo"
        />
      </a>
      <ul
        class="flex flex-wrap items-center text-center text-white md:flex-nowrap md:text-xl md:leading-[30px]"
      >
        <li class="w-1/2 md:w-auto">
          <a
            class="navbar-list"
            href="./home-2.html"
            >系列鏡框</a
          >
        </li>
        <li class="w-1/2 md:w-auto">
          <a
            class="navbar-list"
            href="./home-4.html"
            >門市據點</a
          >
        </li>
        <li class="w-1/2 md:w-auto">
          <a
            class="navbar-list"
            href="./home-7.html"
            >部落格</a
          >
        </li>
        <li class="w-1/2 md:w-auto">
          <a
            class="navbar-list"
            href="./home-6.html"
            >常見問題</a
          >
        </li>
      </ul>
    </div> */
}
