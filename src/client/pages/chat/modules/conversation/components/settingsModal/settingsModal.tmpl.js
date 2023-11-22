import addIcon from '../../../../../../../../static/addIcon.svg';

const settingsModal = `
  <ul class="settings-modal">
    <li class="settings-modal__element">
      <img class="settings-modal__element-image" src="${addIcon}" alt="Добавить">
      <p class="settings-modal__element-text">Добавить пользователя</p>
    </li>
    <li class="settings-modal__element">
      <img class="settings-modal__element-image settings-modal__element-image_rotate" src="${addIcon}" alt="Удалить">
      <p class="settings-modal__element-text">Удалить пользователя</p>
    </li>
  </ul>
`;

export default settingsModal;
