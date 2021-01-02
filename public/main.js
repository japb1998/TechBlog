const logOutBtn = $('#logout');
const btnComment = $('.btnComment');
const displayCommentBtn = $('.displayComment')
function logOut(){
    
    $.post('/api/users/logout').then(()=>{
        document.location.href ='/login'
    })
    
};

function createComment(){
    console.log('click');
    if(!$(this).siblings('textarea').val()){
        alert('Comment body can not be empty');
        return
    }
$.post('/api/blog/comment',
{
    comment_body:$(this).siblings('textarea').val(),
    blog_id: $(this).attr('data-blog'),
})
}

function displayComment(){
    document.location.href = `/comment/${$(this).attr('data-comment')}`
}
logOutBtn.on('click',logOut);
btnComment.on('click',createComment);
displayCommentBtn.on('click',displayComment);