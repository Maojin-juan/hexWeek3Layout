document.querySelector("#navbar-news").innerHTML = `
  <nav class="bg-[#650300]">
      <ul
        class="container flex items-center text-white md:justify-between md:text-2xl lg:text-[32px] lg:leading-normal"
      >
        <li class="flex w-full md:w-auto">
          <ul
            class="flex w-full flex-row justify-between md:w-auto md:gap-12 md:text-xl"
          >
            <li>
              <a class="btn-hover block py-3 text-center font-bold" href="#">
                最新消息
              </a>
            </li>
            <li>
              <a class="btn-hover block py-3 text-center font-bold" href="#">
                特別企劃
              </a>
            </li>
            <li>
              <a class="btn-hover block py-3 text-center font-bold" href="#">
                新品上市
              </a>
            </li>
            <li>
              <a class="btn-hover block py-3 text-center font-bold" href="#">
                鏡框小知識
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a class="shake-hover block" href="#">
            <span class="material-symbols-outlined block text-[40px]">
              search
            </span>
          </a>
        </li>
      </ul>
    </nav>
`;
