require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cron = require('node-cron');
const workoutRoutes = require("./routes/workouts");
const userRoutes = require("./routes/user");
const adminRoutes = require("./routes/admin");
const docRoutes = require("./routes/docRoutes")
const clerkRoutes = require("./routes/clerk");
const Complain = require('./models/complainModel')

// const express = require("express");
// const mongoose = require("mongoose");
// // const workoutRoutes = require("./routes/workouts");
// const userRoutes = require("./routes/user");
const http = require("http");
const cors = require("cors");
const fileUpload = require("express-fileupload");
require("./models/userModel");
// app.use(cors());

// express app
const app = express();

// middleware
app.use(
  express.json({
    limit: "50mb",
  })
);
app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
// const server = http.createServer(app);

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
const server = http.createServer(app);
cron.schedule('0 0 1 * *', async () => {
  try {
    // Use Mongoose to delete all documents from the collection
    await Complain.deleteMany({});
    console.log('Collection emptied successfully!');
  } catch (err) {
    console.error(err);
  }
});
// routes
app.use('/', docRoutes);
// app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/clerk", clerkRoutes);
// app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);
``;

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  // .then(() => {
  //   // listen for requests
  //   app.listen(process.env.PORT, () => {
  //     console.log("connected to db & listening on port", process.env.PORT);
  //   });
  // })
  .catch((error) => {
    console.log(error);
  });

// const io = new Server(server, {
//   cors: {
//     //which url will be calling with our server i.e our react web
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST"],
//   },
// });

// io.on("connection", (socket) => {
//   //when someone connects(evrryone will have differnet socket id)to the server we console out socket id
//   console.log(`User connected ${socket.id}`);

//   //we want to join a room with room passed as a data
//   socket.on("join_room", (data) => {
//     socket.join(data);
//     console.log(`user with id :${socket.id} joined room:${data}`);
//   });
//   socket.on("send_message", (data) => {
//     console.log(data);

//     //emit data to only connected room peeps
//     io.in("0")
//       .fetchSockets()
//       .then((data) => {
//         console.log(data);
//         console.log(data.length);
//       });
//     socket.to(data.room).emit("receive_message", data);
//   });
//   socket.on("disconnect", () => {
//     // socket.leave(0);
//     console.log("user disconnected", socket.id);
//     io.disconnectSockets();
//   });
// });
const User = mongoose.model("User");
app.get("/allotment", (req, res) => {
  User.find((err, val) => {
    if (err) {
      console.log(err);
    } else {
      res.json(val);
    }
  });
});

//listening to server
server.listen(4000, () => {
  console.log("listening to 4000");
});
