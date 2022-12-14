const express = require("express");

import createCategories from "../controllers/createCategories";
import createQuestions from "../controllers/createQuestions";
import fetchPosts from "../controllers/fetchCategories";
import fetchquestions from "../controllers/fetchQuestions";

const router = express.Router();

router.get('/fetchquestions', fetchquestions);
router.post('/addCategories', createCategories);
router.post('/addQuestion', createQuestions);





export default router;