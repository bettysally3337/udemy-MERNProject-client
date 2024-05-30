import axios from "axios";
const API_URL = "https://udemy-mernproject-server.onrender.com/api/user";

class AuthService {
  login(email, password) {
    console.log("client->登入會員");
    return axios.post(API_URL + "/login", { email, password });
  }
  logout() {
    localStorage.removeItem("user");
  }
  //執行AuthService的register()會幫你post到API_URL/register，並自動帶入後面的4個參數
  register(username, email, password, role) {
    console.log("用戶正在執行register");
    //會return一個promise物件
    return axios.post(API_URL + "/register", {
      username,
      email,
      password,
      role,
    });
  }

  getCurrentUser() {
    console.log("client->獲取localstorage的user");
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
