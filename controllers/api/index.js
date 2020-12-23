const router = require('express').Router();
const blogRoutes = require('./blogPostapi');
const userRoutes = require('./userRoutes');
router.use('/blog',blogRoutes);
router.use('/user',userRoutes);

module.exports = router;