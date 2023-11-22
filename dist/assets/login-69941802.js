import"./modulepreload-polyfill-3cfb730f.js";import{h as t,b as a}from"./button.tmpl-a4767006.js";import{i as n,h as o}from"./handleFocusInput-a2ac8ac6.js";t.registerPartial("inputPartial",n);t.registerPartial("buttonPartial",a);const i=`
<main class="login-page">
  <form class="authorize-form">
    <h1 class="login-page__title">Вход</h1>
    <div class="login-page__inputs-container">
      {{> inputPartial name="login" label="Логин" type="text"}}
      {{> inputPartial name="password" label="Пароль" type="password"}}
    </div>
    <div class="login-page__buttons-container">
      {{> buttonPartial buttonText="Авторизоваться" buttonClass="button_primary"}}
      {{> buttonPartial buttonText="Нет аккаунта?" buttonClass="button_text"}}
    </div>
  </form>
</main>`,e=t.compile(i);document.getElementById("about").innerHTML=e();const l=document.querySelectorAll(".input");o(l);
