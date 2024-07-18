document.querySelector("#navbar-glasses").innerHTML = `
  <nav>
    <ul
      class="flex items-center lg:container md:text-2xl lg:text-[32px] lg:leading-normal"
    >
      <li
        class="border-b-1 relative flex-1 border border-[#DCDCDC]"
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
          class="checked after:navbar-selected"
          ><a class="py-4 text-center lg:py-6 font-medium block" href="./home-2.html">OPTICAL</a></label
        >
      </li>
      <li
        class="border-b-1 relative flex-1 border border-[#DCDCDC]"
      >
        <input type="radio" name="tabs" id="tab2" class="checked hidden" />
        <label
          for="tab2"
          class="checked after:navbar-selected"
          ><a class="py-4 text-center lg:py-6 font-medium block" href="./home-3.html">SUNGLASSES</a></label
        >
      </li>
      <li class="border-b-1 relative flex-1 border">
        <input type="radio" name="tabs" id="tab3" class="checked hidden" />
        <label
          for="tab3"
          class="checked after:navbar-selected"
          ><a class="py-4 text-center lg:py-6 font-medium block" href="./home-4.html">FUNCTIONAL</a></label
        >
      </li>
    </ul>
  </nav>
`;
