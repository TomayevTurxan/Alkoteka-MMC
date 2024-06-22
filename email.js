// var nodemailer  = require("nodemailer")

// var transporter = nodemailer.createTransport({
//   serive: "gmail",
//   auth: {
//       user: "turxan.tomayev2003@gmail.com",
//       pass: "05.05.2003."
//   }
// })

// var mailOptions  = {
//   from: "turxan.tomayev2003@gmail.com",
//   to: "turxan.tomayev8@gmail.com",
//   subject: "gonder",
//   text: "ilk mail gonderme"
// }
// transporter.sendMail(mailOptions,function(error,info){
// if (error) {
//     console.log(error);
// }
// else{
//   console.log("mail gonderildi"+ info.response);
// }
// })

// const email = document.querySelector("#email");
// const subject = document.querySelector("#subject");
// const message = document.querySelector("#message");
// const submit = document.querySelector("#submit");

// submit.addEventListener("click", function (e) {
//   alert("dqw");
//   e.preventDefault();
 
//   var nodemailer = require("nodemailer");
//   var transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "turxan.tomayev2003@gmail.com",
//       pass: "05.05.2003.",
//     },
//   });
//   var mailOptions = {
//     from: "turxan.tomayev2003@gmail.com",
//     to: email.value,
//     subject: subject.value,
//     text: message.value,
//   };
//   console.log(email.value);

//   transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Email sent: " + info.response);
//       alert("ugurla gonderildi");
//     }
//   });
// });
