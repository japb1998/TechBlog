const {BlogPost,User} = require('../../models');
const withAuth = require('../../utils/withAuth');
const router = require('express').Router();


router.get('/',withAuth,async (req,res)=>{

let blogData= await BlogPost.findAll({include:[{model:User,
as:'User'}]},{where:{
    user_id:req.session.user_id
}});

return blogData

});

router.post('/',withAuth,async(req,res)=>{
try{
    const newData = await BlogPost.create({
    title: req.body.title,
    content:req.body.content,
    user_id: req.body.user_id
    });

    res.status(200).json(newData);
}catch (err) {
    res.status(400).json(err);
  }

})
router.delete('/:id',withAuth,async(req,res)=>{
    try{
const delData = await BlogPost.destroy({
    where: {
      id: req.params.id,
      user_id: req.session.user_id,
    },
  })

  res.status(200).json(delData)
} catch(err){
    throw err
}

})

module.exports = router


