import authApi from "../api/auth-api";
import Router from "../utils/Router";
import Store from "../utils/Store";
import { checkFormValidation } from "../utils/formValidation";

class UserAuthController {
  public async login(form: HTMLFormElement) {
    try {
      const formIsValid = checkFormValidation(form);

      if (!formIsValid) {
        throw new Error('Login data is invalid');
      }

      const formData = new FormData(form);

      const data = {
        login: formData.get('login') as string,
        password: formData.get('password') as string,
      }

      await authApi.signin(data)
      await this.getUser();

      Router.go('/chat');

    } catch (e) {
      console.error(e);
    }
  }

  public async signup(form: HTMLFormElement) {
    try {
      const formIsValid = checkFormValidation(form);

      if (!formIsValid) {
        throw new Error('Signup data is invalid');
      }

      const formData = new FormData(form);
      const data = {
        first_name: formData.get('first_name') as string,
        second_name: formData.get('second_name') as string,
        login: formData.get('login') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        password: formData.get('password') as string,
      }

      await authApi.signup(data)
      await this.getUser();

      Router.go('/chat');

    } catch (e) {
      console.error(e);
    }
  }

  async logout() {
    try {
      await authApi.logout();
      Store.set('user', '');
      Router.go('/');

    } catch (e) {
      console.error(e);
    }

  }

  async getUser() {
    try {
      const user = await authApi.getUser();
      Store.set('user', user);
    } catch (e) {
      console.error(e);
    }
  }
}

export default new UserAuthController();
