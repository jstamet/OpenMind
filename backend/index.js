const { Notion } = require("@neurosity/notion");
require('dotenv').config();

const deviceId = process.env.DEVICE_ID || "";
const email = process.env.EMAIL || "";
const password = process.env.PASSWORD || "";
const filePath = process.env.FILE_PATH || "";
const verifyEnvs = (email, password, deviceId) => {
  const invalidEnv = (env) => {
    return (env === "");
  }
  if (invalidEnv(email) || invalidEnv(password) || invalidEnv(deviceId)) {
    console.error("Please verify deviceId, email and password are in .env file, quitting...");
    process.exit(0);
  }
}
verifyEnvs(email, password, deviceId);
console.log(`${email} attempting to authenticate with ${deviceId}`);

const notion = new Notion({
  deviceId
});

const main = async () => {
  const calm_values = [];
  const focus_values = [];
  const power_values = [];
  const brain_values = [];
  const fs = require('fs');
  await notion.login({
    email,
    password
  })
    .catch(error => {
      console.log(error);
      throw new Error(error);
    });
  console.log("Logged in");

  notion.calm().subscribe((calm) => {
    console.log(calm)
    calm_values.push(calm)
  });

  notion.focus().subscribe(focus => {
    focus_values.push(focus)
  });

  notion.brainwaves("raw").subscribe((brain) => {
    brain_values.push(brain)
  })
  notion.brainwaves("powerByBand").subscribe((brainwaves) => {
    power_values.push(brainwaves)
  });

  const meta_data = {

    thcIndicator: false,
    thcDescription: '',
    yogaIndicator: false,
    yogaDescription: '',
    meditation: false,
    fastingIndicator: false,

  }


  const readline = require('readline');

  readline.emitKeypressEvents(process.stdin);
  process.stdin.setRawMode(true);

  process.stdin.on('keypress', (str, key) => {
    if (key === 'c' || str === 'c') {

      const session_data = {
        date: Date.now(),
        meta_data: meta_data,
        calm_values: calm_values,

        focus_values: focus_values,
        power_values: power_values,
        brain_values: brain_values
      }
      let data = JSON.stringify(session_data);
      console.log("hey")
      fs.writeFileSync(filePath, data);
      process.exit(1)
    }
  })
}

main();