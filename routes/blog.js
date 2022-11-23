const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");
const {
    SampleCode
} = require("../controllers/blog")

router.get("/test", SampleCode);
//TODO  Router Implement 
// router.get("/posts", SampleCode);
// router.get("/post/:id", SampleCode);

// router.get("/post/manage", SampleCode);
// router.post("/post/create/:id", SampleCode);
// router.delete("/post/delete/:id", SampleCode);
// router.edit("/post/edit/:id", SampleCode);

// router.get("/comment/:postid", SampleCode);
// router.put("/comment/create/:postid", SampleCode);
// router.put("/comment/edit/:id", SampleCode); // Comment can only be deleted so might be depercated  
// router.delete("/comment/delete/:id", SampleCode);
// router.post("/comment/reply/:id", SampleCode);

// router.post("/leading/create/", SampleCode);
// router.put("/leading/edit/", SampleCode);


module.exports = router;