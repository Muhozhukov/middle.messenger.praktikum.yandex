import"./modulepreload-polyfill-3cfb730f.js";import{h as t,b as e}from"./button.tmpl-a4767006.js";t.registerPartial("buttonPartial",e);const r=`
<main class="error-page">
  <h1 class="page-title">{{errorCode}}</h1>
  <p class="page-description">{{description}}</p>
  <a href="/">
    {{>buttonPartial buttonText="Назад к чатам" buttonClass="button_text"}}
  </a>
</main>`,a=t.compile(r);document.getElementById("errorPage").innerHTML=a({errorCode:404,description:"Не туда попали"});
