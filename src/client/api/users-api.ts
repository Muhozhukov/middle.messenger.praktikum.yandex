import { BaseApi } from "./base-api";

export interface LoginData {
  login: string;
  password: string;
}

export interface SignupData {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

export interface User {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
}

export interface ChangePassword {
  oldPassword: string,
  newPassword: string,
}

class UsersApi extends BaseApi {
  constructor() {
    super('/user')
  }
  update(data: User): Promise<User> {
    return this.http.put('/profile', data)
  }

  updateAvatar(data: FormData) {
    return this.http.put('/profile/avatar', data)
  }

  changePassword(data: ChangePassword) {
    return this.http.put('/password', data)
  }

  getUser(): Promise<User> {
    return this.http.get('/user')
  }

  logout() {
    return this.http.post('/logout', {});
  }
  create = undefined;
  // update = undefined;
  delete = undefined;
  request = undefined;
}

export default new UsersApi();
