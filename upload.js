const mongoClient = require("mongodb-legacy").MongoClient;
const mongoUrl =
  "mongodb+srv://andresh:andresh@cluster0.xqgd0.mongodb.net/Lua?retryWrites=true&w=majority";
const mongoConfig = { useUnifiedTopology: true };

// const getPic = (avatarName, cbResult) => {
//   mongoClient.connect(mongoUrl, mongoConfig, (err, client) => {
//     if (err) {
//       cbResult({
//         confirm: false,
//       });
//     } else {
//       const dataBase = client.db("Lua");
//       const dataBaseCollection = dataBase.collection("selfies");
//       dataBaseCollection.findOne({ avatar: avatarName }, (err, reply) => {
//         if (err) {
//           cbResult({
//             confirm: false,
//           });
//         } else {
//           cbResult({
//             confirm: true,
//             name: reply,
//           });
//         }
//         client.close();
//       });
//     }
//   });
// };

const registerPic = (nameLua, description, avatarName, cbResult) => {
  mongoClient.connect(mongoUrl, mongoConfig, (err, client) => {
    //si hay error de conexion con la base de datos retorna false
    if (err) {
      cbResult({
        confirm: false,
      });
    } else {
      const dataBase = client.db("Lua");
      const dataBaseCollection = dataBase.collection("selfies");
      const newSelfie = {
        avatar: avatarName,
        name: nameLua,
        description: description,
      };
      dataBaseCollection.insertOne(newSelfie, (err, UpdateOk) => {
        if (err) {
          cbResult({
            UpdateOk: false,
          });
        } else {
          cbResult({
            UpdateOk: true,
          });
        }
        client.close();
      });
    }
  });
};

module.exports = {
  registerPic,
  // getPic,
};
