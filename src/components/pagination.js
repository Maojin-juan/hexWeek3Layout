import "../style/style.css";

document.querySelector("#pagination").innerHTML = `
  <nav id="pagination">
    <ul class="container flex items-center justify-center">
      <li>
        <a
          class="me-[-1px] block text-nowrap border border-[#555555] p-3 text-[#555555] duration-300 ease-in-out hover:bg-black hover:text-white"
          href="#"
          >上一頁</a
        >
      </li>
      <li>
        <a
          class="me-[-1px] block border border-[#555555] px-[15px] py-3 text-[#555555] duration-300 ease-in-out hover:bg-black hover:text-white"
          href="#"
          >1</a
        >
      </li>
      <li>
        <a
          class="me-[-1px] block border border-[#555555] px-[15px] py-3 text-[#555555] duration-300 ease-in-out hover:bg-black hover:text-white"
          href="#"
          >2</a
        >
      </li>
      <li>
        <a
          class="me-[-1px] block border border-[#555555] px-[15px] py-3 text-[#555555] duration-300 ease-in-out hover:bg-black hover:text-white"
          href="#"
          >3</a
        >
      </li>
      <li>
        <a
          class="me-[-1px] block border border-[#555555] px-[15px] py-3 text-[#555555] duration-300 ease-in-out hover:bg-black hover:text-white"
          href="#"
          >4</a
        >
      </li>
      <li>
        <a
          class="me-[-1px] block border border-[#555555] px-[15px] py-3 text-[#555555] duration-300 ease-in-out hover:bg-black hover:text-white"
          href="#"
          >5</a
        >
      </li>
      <li>
        <a
          class="me-[-1px] block text-nowrap border border-[#555555] bg-[#F2F2F2] p-3 text-[#555555] duration-300 ease-in-out hover:bg-black hover:text-white"
          href="#"
          >下一頁</a
        >
      </li>
    </ul>
  </nav>
`;
