import axios from "axios";

export const leadeApi =()=>{
    const headers = {
        Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IndlYjJyaXNlMkBnbWFpbC5jb20iLCJ0eXBlIjoiYWRtaW4iLCJpYXQiOjE2ODM0NDI3NDZ9.CVqxDt-j-zKJO0oQdZ1z5bWTTBrQGO7WM8OZuRg9VMo`,
      };
      return new Promise((resolve, reject) => {
        axios({
          method: "GET",
          url: `https://leads-manager.web2rise.in/leads`,
          headers: headers,
        })
          .then(async (responce) => {
            resolve(responce.data);
          })
          .catch((error) => {
            if (error) {
              reject(error.message);
            }
          });
      });
}