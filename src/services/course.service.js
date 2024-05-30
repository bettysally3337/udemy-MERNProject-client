import axios from "axios";
const API_URL = "http://udemy-mernproject-server.onrender.com/api/courses";

class CourseService {
  post(title, description, price) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.post(
      API_URL,
      { title, description, price },
      {
        headers: {
          Authorization: token,
        },
      }
    );
  }

  //使用學生id找到學生註冊的課程
  getEnrolledCourses(_id) {
    console.log("client->使用學生id找到學生註冊的課程");
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.get(API_URL + "/student/" + _id, {
      headers: {
        Authorization: token,
      },
    });
  }

  //使用instructor id來找到講師擁有的課程
  get(_id) {
    console.log("client->使用instructor id來找到講師擁有的課程");
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }

    return axios.get(API_URL + "/instructor/" + _id, {
      headers: {
        Authorization: token,
      },
    });
  }

  getCourseByName(name) {
    console.log("client->用課程名稱尋找課程");
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }

    return axios.get(API_URL + "/findByName/" + name, {
      headers: {
        Authorization: token,
      },
    });
  }

  enroll(_id) {
    console.log("client->學生註冊課程");
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }

    return axios.post(
      API_URL + "/enroll/" + _id,
      {},
      {
        headers: {
          Authorization: token,
        },
      }
    );
  }
}
export default new CourseService();
