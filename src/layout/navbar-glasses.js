import "../style/style.css";

document.querySelector("#navbar-glasses").innerHTML = `
  <nav>
    <ul
      class="flex items-center lg:container md:text-2xl lg:text-[32px] lg:leading-normal"
    >
      <li
        class="border-b-1 relative flex flex-1 justify-center border border-[#DCDCDC]"
      >
        <input
          type="radio"
          name="tabs"
          id="tab1"
          class="checked hidden"
          checked
        />
        <label
          for="tab1"
          class="checked after:navbar-selected w-full cursor-pointer py-4 text-center font-medium lg:py-6"
          ><a href="./home-2.html">OPTICAL</a></label
        >
      </li>
      <li
        class="border-b-1 relative flex flex-1 justify-center border border-[#DCDCDC]"
      >
        <input type="radio" name="tabs" id="tab2" class="checked hidden" />
        <label
          for="tab2"
          class="checked after:navbar-selected w-full cursor-pointer py-4 text-center font-medium lg:py-6"
          ><a href="./home-3.html">SUNGLASSES</a></label
        >
      </li>
      <li class="border-b-1 relative flex flex-1 justify-center border">
        <input type="radio" name="tabs" id="tab3" class="checked hidden" />
        <label
          for="tab3"
          class="checked after:navbar-selected w-full cursor-pointer py-4 text-center font-medium lg:py-6"
          ><a href="./home-4.html">FUNCTIONAL</a></label
        >
      </li>
    </ul>
  </nav>
`;
