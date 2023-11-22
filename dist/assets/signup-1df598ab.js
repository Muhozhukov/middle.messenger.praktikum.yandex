import"./modulepreload-polyfill-3cfb730f.js";import{h as t,b as a}from"./button.tmpl-a4767006.js";import{i as e,h as n}from"./handleFocusInput-a2ac8ac6.js";t.registerPartial("inputPartial",e);t.registerPartial("buttonPartial",a);const i=`
<main class="signup-page">
  <form class="signup-form">
    <h1 class="signup-page__title">Вход</h1>
    <div class="signup-page__inputs-container">
      {{> inputPartial name="email" label="Почта" type="email"}}
      {{> inputPartial name="login" label="Логин" type="text"}}
      {{> inputPartial name="first_name" label="Имя" type="text"}}
      {{> inputPartial name="second_name" label="Фамилия" type="text"}}
      {{> inputPartial name="phone" label="Телефон" type="tel"}}
      {{> inputPartial name="password" label="Пароль" type="password"}}
      {{> inputPartial name="repeatPassword" label="Повторите пароль" type="password"}}
    </div>
    <div class="signup-page__buttons-container">
      {{> buttonPartial buttonText="Зарегистрироваться" buttonClass="button_primary"}}
      {{> buttonPartial buttonText="Войти" buttonClass="button_text"}}
    </div>
  </form>
</main>`,l=t.compile(i);document.getElementById("signup").innerHTML=l();const s=document.querySelectorAll(".input");n(s);
