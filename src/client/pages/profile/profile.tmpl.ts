import arrowIcon from '../../../../static/sendMessageIcon.svg'
import avatar from '../../../../static/circleIcon.svg'
import profileInput from './components/input/profileInput.tmpl';
import Handlebars from 'handlebars';
import profileButton from './components/button/profileButton.tmpl';

Handlebars.registerPartial('input', profileInput);
Handlebars.registerPartial('profileButton', profileButton);

const profile: string = `
  <main class="profile">
    <a href="/" class="profile__button-back">
      <img class="profile__button-back-image" src="${arrowIcon}" alt="Назад">
    </a>
    <div class="profile__form-container">
      <form class="profile__form">
        <img class="profile__avatar" src="${avatar}" alt="Аватар">
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
`;

export default profile;
