const axios = require("axios");
const env = require("../../env.js");

function resetstationsFunction() {
    env.instance.post(`${env.baseURL}/admin/resetstations`).then((res) => {
        console.log(res.data);
    });
}

module.exports = { resetstationsFunction };
