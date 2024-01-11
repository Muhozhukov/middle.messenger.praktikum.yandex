import resourcesApi from "../api/resources-api";
import usersApi from "../api/users-api";
import store from "../utils/Store";
import { checkFormValidation } from "../utils/formValidation";

class UsersController {
  public async updateUserInfo(form: HTMLFormElement) {
    try {
      const formIsValid = checkFormValidation(form);

      if (!formIsValid) {
        throw new Error('User data is invalid to update');
      }

      const formData = new FormData(form);
      const data = {
        first_name: formData.get('first_name') as string,
        second_name: formData.get('second_name') as string,
        login: formData.get('login') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        display_name: formData.get('display_name') as string,
      }

      const user = await usersApi.update(data)
      store.set('user', user)

    } catch (e) {
      console.error(e);
    }
  }

  public async updateUserAvatar(form: HTMLFormElement) {
    const formData = new FormData(form);

    const { avatar } = await usersApi.updateAvatar(formData);
    store.set('user.avatar', avatar);
    // await this.getUserAvatar(avatar);
  }

  public async getUserAvatar(id: string) {

    const avatarPath = await resourcesApi.getAvatar(id);
    store.set('user.avatar', avatarPath);
  }

  public async changePassword(form: HTMLFormElement) {
    try {
      const formIsValid = checkFormValidation(form);

      if (!formIsValid) {
        throw new Error('password data is invalid to update');
      }

      const formData = new FormData(form);
      const data = {
        oldPassword: formData.get('oldPassword') as string,
        newPassword: formData.get('newPassword') as string,
      }

      await usersApi.changePassword(data)
    } catch (e) {
      console.error(e);
    }
  }
//   public async signup(form: HTMLFormElement) {
//     try {
//       const formIsValid = checkFormValidation(form);

//       if (!formIsValid) {
//         throw new Error('Signup data is invalid');
//       }

//       const formData = new FormData(form);
//       const data = {
//         first_name: formData.get('first_name') as string,
//         second_name: formData.get('second_name') as string,
//         login: formData.get('login') as string,
//         email: formData.get('email') as string,
//         phone: formData.get('phone') as string,
//         password: formData.get('password') as string,
//       }

//       await authApi.signup(data)
//       await this.getUser();

//       Router.go('/chat');

//     } catch (e) {
//       console.error(e);
//     }
//   }

//   async logout() {

//     try {

//       await authApi.logout();
//       Store.set('user', '');
//       Router.go('/');

//     } catch (e) {
//       console.error(e);
//     }

//   }

//   async getUser() {
//     const user = await authApi.getUser();
//     console.log(user);
//     Store.set('user', user);
//     console.log(Store.getState())
//   }
}

export default new UsersController();
