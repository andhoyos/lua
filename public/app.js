AOS.init();
const selfiesContainer = document.querySelector(".selfies");

selfies.forEach((selfie) => {
  selfiesContainer.innerHTML += `
  <div class="selfie-card" data-aos="flip-left"
  data-aos-easing="ease-out-cubic"
  data-aos-duration="2000">
        <img src="${selfie.image}" alt="" />
          <div class="content">
            <h1 class="selfie-name">${selfie.title}${selfies.indexOf(
    selfie
  )}</h1>
            <span class="tags">${!selfie.description ? "" : selfie.description}
            </span>

          </div>
  </div>
  `;
  console.log(selfies.indexOf(selfie));
});

// const send = document.querySelector(".send");
// const nameLua = document.getElementById("nameLua");
// const descriptionPic = document.getElementById("descriptionPic");
// const avatarName = document.getElementById("avatarName");

// send.addEventListener("click", () => {
//   if (
//     nameLua.value.length &&
//     avatarName.value.length &&
//     descriptionPic.value.length
//   ) {
//     console.log(nameLua.value);
//     console.log(avatarName.value);
//     console.log(descriptionPic.value);
//     Swal.fire({
//       background: "bottom",
//       timerProgressBar: true,
//       didOpen: () => {
//         Swal.showLoading();
//         const b = Swal.getHtmlContainer().querySelector("b");
//       },
//     });
//     const loader = document.querySelector(".swal2-loader");
//     loader.style =
//       "width: 80px; height: 80px; border: 6px solid; border-color: #2778c4 transparent #2778c4 transparent;";
//     axios({
//       method: "post",
//       url: "/",
//       data: {
//         nameLua: nameLua.value,
//         avatarName: avatarName.value,
//         description: descriptionPic.value,
//         // body: JSON.stringify({}),
//       },
//     })
//       .then(function (res) {
//         console.log(res.data);
//         Swal.fire({
//           title: res.data,
//           padding: "3em",
//           color: "#560bad",
//         });
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }
// });

let message = "Buen trabajo Madre :)´";
var urlParams = new URLSearchParams(window.location.search);
if (urlParams.has("success") && urlParams.get("success")) {
  console.log("ready");
  Swal.fire({
    icon: "success",
    title: `${message}`,
    text: "You clicked the button!",
  }).then(() => {
    console.log(window.location.hostname);
    window.location.replace(window.location.origin + "/");
  });
} else if (urlParams.has("failed") && urlParams.get("failed")) {
  message = "Ha ocurrido un error inesperado :(";
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: `${message}`,
  }).then(() => {
    console.log(window.location.hostname);
    window.location.replace(window.location.origin + "/");
  });
}
