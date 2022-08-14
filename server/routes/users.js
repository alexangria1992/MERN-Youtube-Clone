import express from "express";
import {
  update,
  deleteUser,
  getUser,
  subscribe,
  unsubscribe,
  like,
  dislike,
} from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//Update User
router.put("/:id", verifyToken, update);

// Delete User
router.delete("/:id", verifyToken, deleteUser);

//Get A User
router.get("/find/:id", getUser);

//Subscribe A User
router.put("/sub/:id", verifyToken, subscribe);

//Unsubscribe A User
router.put("/unsub/:id", verifyToken, unsubscribe);

// Like a Video
router.put("/like/:videoId", verifyToken, like);

// dislike a Video
router.put("/dislike/:videoId", verifyToken, dislike);

export default router;
