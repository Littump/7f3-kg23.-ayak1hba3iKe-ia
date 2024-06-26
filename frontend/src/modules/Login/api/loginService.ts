import axios from "axios";
import API_URL from "@/config/api.ts";
import LoginDto from "@/modules/Login/types/login.dto.ts";
import { IOrganization } from "@/modules/Organizations/types/OrganizationTypes.ts";

class loginService {
  async login(body: LoginDto) {
    return axios.post(`${API_URL}auth/token/login/`, body);
  }
  async registration() {
    return axios.post(`${API_URL}users/`, {
      password: "13qwerty13",
      username: "89996665544",
    });
  }
  async getMe() {
    return axios.get<IOrganization>(`${API_URL}users/me/`, {
      headers: {
        Authorization: "Token " + localStorage.getItem("token"),
      },
    });
  }
}

export default new loginService();
