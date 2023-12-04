import handlebars from 'handlebars';
import profile from './profile.tmpl';

const template = handlebars.compile(profile);

const buttons = [
  {
    buttonText: 'Изменить данные',
    buttonClass: 'button_text button_profile',
  },
  {
    buttonText: 'Изменить пароль',
    buttonClass: 'button_text button_profile',
  },
  {
    buttonText: 'Выйти',
    buttonClass: 'button_text button_profile button_danger',
  },
];

const profilePage = document.getElementById('profile') as HTMLElement;

profilePage.innerHTML = template({
  buttons,
  profileName: 'Имя для профиля',
});
