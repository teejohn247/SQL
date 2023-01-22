const express = require("express");

import createCategories from "../controllers/createCategories";
import createQuestions from "../controllers/createQuestions";
import createUser from "../controllers/createUser";
import fetchCategories from "../controllers/fetchCategories";
import fetchPosts from "../controllers/fetchCategories";
import fetchquestions from "../controllers/fetchQuestions";
import fetchRequests from "../controllers/fetchRequests";
import fetchUsers from "../controllers/fetchUsers";
import signin from "../controllers/signin";
import specificRequest from "../controllers/specificRequest";
import updateStatus from "../controllers/updateStatus";
import user from "../controllers/user";

const router = express.Router();

router.get('/fetchquestions', fetchquestions);
router.get('/fetchRequests', fetchRequests);
router.get('/fetchRequest/:id', specificRequest);


router.get('/fetch', fetchCategories);
router.get('/fetchUsers', fetchUsers);

router.post('/register', createUser);

router.post('/signin', signin);

router.get('/user/:email', user);

router.patch('/updateStatus', updateStatus);






router.post('/addCategories', createCategories);
router.post('/addQuestion', createQuestions);


export default router;