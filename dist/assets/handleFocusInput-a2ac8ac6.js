const c=`
  <div class="input">
    <input name={{name}} id={{name}} type={{type}} class="input-data">
    <label for={{name}} class="input__placeholder">{{label}}</label>
  </div>
`;function l(t){const e=t.querySelector(".input__placeholder");e.classList.add("input__placeholder_active"),e.style.top="3px"}function n(t){const e=t.querySelector(".input__placeholder");e.classList.remove("input__placeholder_active"),e.style.top="50%"}const o=t=>{t.forEach(e=>{const a=e.querySelector(".input-data");a.addEventListener("focus",()=>{l(e)}),a.addEventListener("focusout",()=>{a.value.length>0||n(e)})})};export{o as h,c as i};
