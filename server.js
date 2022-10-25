const express = require("express");
const path = require("path");
const multer = require("multer");
const session = require("express-session");
const Swal = require("sweetalert2");

const upload = require("./upload");
const { Script } = require("vm");

let avatarName;
const uploadAvatar = multer.diskStorage({
  destination: (req, file, cbResult) => {
    cbResult(null, "./public/images");
  },
  filename: (req, file, cbResult) => {
    cbResult(null, file.originalname);
    avatarName = file.originalname;
  },
});

const uploadImg = multer({ storage: uploadAvatar });

// const upload = multer({ storage: uploadStorage });

const app = express();

app.use(
  session({
    secret: "streamingKey",
    resave: false,
    saveUninitialized: false,
  })
);

let initialPath = path.join(__dirname, "public");
app.use(express.static(initialPath));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(initialPath, "lua.html"));
});

app.post("/", uploadImg.single("avatar"), (req, res) => {
  upload.registerPic(
    req.body.name,
    req.body.description,
    avatarName,
    (dataPic) => {
      if (dataPic.confirm == false) {
        res.redirect("/?failed=false&message=Error");
      }
      res.redirect("/?success=true&message=Pic Successfully");
      console.log("ya esta");
    }
  );
});

app.listen(process.env.PORT || 4000, () => {
  console.log("servidor iniciado en puerto 4000...");
});
