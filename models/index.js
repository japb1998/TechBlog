const User = require('./user.js');
const BlogPost = require('./blogPost');

// BlogPost.belongsTo(User,{
//     foreignKey:'user_id'
// });

// User.hasMany(BlogPost,{
//     foreignKey:'user_id',
//     onDelete: 'CASCADE'
// })
module.exports = {
    User,
    BlogPost
}