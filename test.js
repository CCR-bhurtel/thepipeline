const axios = require("axios").default;

// axios
//   .post("https://shishirs-newsletter.beehiiv.com/create", {
//     redirect_path: "/",
//     double_opt: false,

//     origin: "/subscribe",
//     visit_token: "d88af11f-f966-43c9-a363-574296c4528f",
//     email: "jayshreeram@gmail.com",
//   })
//   .then((respone) => {})
//   .catch((err) => {
//     console.log(err.response);
//   });

fetch("https://api.beehiiv.com/v1/endpoint/subscribers", {
  headers: {
    "content-type": "application/json",
    origin: "https://embeds.beehiiv.com",

    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    mode: "no-cors",
  },
  method: "POST",

  body: JSON.stringify({
    email: "ram@gmail.com",
    external_embed_id: "80bf0c42-dc7f-49cc-a7ae-451c6dc72855",
    publication_id: "dca62dea-e706-45a1-8eca-9b4dc6b02c3d",
    reactivate_existing: true,
    send_welcome_email: true,
  }),
})
  .then((response) => {
    console.log(response);
  })
  .catch((err) => console.log(err));
