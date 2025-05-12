import "./style.css";

import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div style="display:flex">
<div class="menu">
<div>Item 1</div>
<div class="selected">Item 2</div>
<div>Item 3</div>

</div>
<div style="flex:1">
<div class="toolbar">
<button id="counter" type="button"></button>
<button  id="modalopen" type="button">open modal</button>

<input />
<input type="range" />
<input type="checkbox" />
</div>
</div>
  </div>
`;

document.querySelector("#modalopen")!.addEventListener("click", () => {
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.innerHTML = ` <div class="modal">
   <h4>Sample</h4>
   <p>Enter your Aadhaar number</p>
    <input type="text" />
    <button id="submitaadhaar"><span>Submit</span></button>
   </div>`;
  document.body.appendChild(modal);
  document.querySelector("#submitaadhaar")!.addEventListener("click", () => {
    const aadhaarNumber = (
      document.querySelector("input[type='text']") as HTMLInputElement
    ).value;
    console.log(aadhaarNumber);
    modal.remove();
  });
});
setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
