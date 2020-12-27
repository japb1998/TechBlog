const router = require('express').Router();
const User = require('../models/user');
const BlogPost = require('../models/blogPost');


router.get('/login',(req,res)=>{
try{
    if (req.session.loggedIn) {
        res.redirect("/");
        return;
    }
res.render('login');
} catch(err){
    console.log(err);
    res.status(500).json(err);
}
});
router.get('/sign-up',(req,res)=>{
    try{
   
        if (req.session.loggedIn) {
            res.redirect("/");
            return;
        }
    res.render('sign-up');
    } catch(err){
        console.log(err)
    }
})

module.exports = router;