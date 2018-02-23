import axios from 'axios';

const helpers = {
  postSendEmail: function (name, email, message) {
    var emailObject = {
      name: name,
      email: email,
      message: message
    };
    return axios
      .post("/api/sendemail", emailObject)
      .then(function (response) {
        console.log("axios response", response);
      })
      .catch(function (error) {
        console.log("axios error", error);
      });
  }
};

export default helpers;