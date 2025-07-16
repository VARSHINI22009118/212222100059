const axios = require("axios");

const Log = async (stack, level, pkg, message) => {
  try {
    await axios.post("http://20.244.56.144/evaluation-service/logs", {
      stack,
      level,
      package: pkg,
      message
    }, {
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
      }
    });
  } catch (err) {
    console.log("Logging failed:", err.message);
  }
};

module.exports = Log;
