import "../style/style.css";

document.querySelector("#navbar").innerHTML = `
  <nav class="bg-main">
      <div class="flex flex-col justify-between md:container md:flex-row">
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
              class="btn-hover block text-nowrap px-[62px] py-3 outline outline-1 outline-white md:px-0 md:pl-16 md:outline-none"
              href="./home-2.html"
              >系列鏡框</a
            >
          </li>
          <li class="w-1/2 md:w-auto">
            <a
              class="btn-hover block text-nowrap px-[62px] py-3 outline outline-1 outline-white md:px-0 md:pl-16 md:outline-none"
              href="#"
              >門市據點</a
            >
          </li>
          <li class="w-1/2 md:w-auto">
            <a
              class="btn-hover block text-nowrap px-[62px] py-3 outline outline-1 outline-white md:px-0 md:pl-16 md:outline-none"
              href="#"
              >部落格</a
            >
          </li>
          <li class="w-1/2 md:w-auto">
            <a
              class="btn-hover block text-nowrap px-[62px] py-3 outline outline-1 outline-white md:px-0 md:pl-16 md:outline-none"
              href="#"
              >常見問題</a
            >
          </li>
        </ul>
      </div>
    </nav>
`;
