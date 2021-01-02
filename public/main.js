

const logOutBtn = $('#logout');
const btnComment = $('.btnComment');
const displayCommentBtn = $('.displayComment');
const deleteBtn = $('.delete-btn');
function logOut(){
    
    $.post('/api/users/logout').then(()=>{
        document.location.href ='/login'
    })
    
};

function createComment(){
    console.log('click');
    if(!$(this).siblings('textarea').val()){
        alert('Comment body can not be empty');
        return;
    }
$.post('/api/blog/comment',
{
    comment_body:$(this).siblings('textarea').val(),
    blog_id: $(this).attr('data-blog'),
})
}

function displayComment(){
    document.location.href = `/comment/${$(this).attr('data-comment')}`
};

function deletePost(){
    $.ajax({
       url: `/api/blog/${$(this).attr('data-id')}`,
       method: 'DELETE'
    }).then(()=>{
        document.location.href = '/dashboard'
    })
}
logOutBtn.on('click',logOut);
btnComment.on('click',createComment);
displayCommentBtn.on('click',displayComment);
deleteBtn.on('click',deletePost);