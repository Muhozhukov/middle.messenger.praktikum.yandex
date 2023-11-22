import"./modulepreload-polyfill-3cfb730f.js";import{h as t,b as e}from"./button.tmpl-a4767006.js";import{b as a,a as n}from"./sendMessageIcon-9948390f.js";const o=`
  <div class="profile__input">
    <label for={{name}} class="profile__input-label">{{label}}</label>
    <input class="profile__input-data" type={{type}} id={{name}} name={{name}} value="test value to input">
  </div>
`;t.registerPartial("button",e);const l=`
  <div class="profile__button-container">
    {{>button}}
  </div>
`;t.registerPartial("input",o);t.registerPartial("profileButton",l);const i=`
  <main class="profile">
    <a href="/" class="profile__button-back">
      <img class="profile__button-back-image" src="${a}" alt="Назад">
    </a>
    <div class="profile__form-container">
      <form class="profile__form">
        <img class="profile__avatar" src="${n}" alt="Аватар">
        <h3 class="profile__name">{{profileName}}</h3>
        <div class="profile__inputs-container">
          {{>input label="Почта" name="email" type="email"}}
          {{>input label="Логин" name="login" type="text"}}
          {{>input label="Имя" name="first_name" type="text"}}
          {{>input label="Фамилия" name="second_name" type="text"}}
          {{>input label="Имя в чате" name="display_name" type="text"}}
          {{>input label="Телефон" name="phone" type="tel"}}
        </div>
        <div class="profile__buttons-container">
          {{#each buttons}}
            {{>profileButton buttonData=this}}
          {{/each}}
        </div>
      </form>
    </div>
  </main>
`,r=t.compile(i),s={buttons:[{buttonText:"Изменить данные",buttonClass:"button_text button_profile"},{buttonText:"Изменить пароль",buttonClass:"button_text button_profile"},{buttonText:"Выйти",buttonClass:"button_text button_profile button_danger"}]};document.getElementById("profile").innerHTML=r(s);
