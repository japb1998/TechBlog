const title = $('#title');
const description = $('#description');
const submitBtn = $('#submitBtn');



const postBlog = () => {
    const newPost = {
        title: title.val().trim(),
        description: description.val().trim()
    }
    if(!title.val()){
        alert('title needed');
        return
    }
    if(!description.val()){
        alert('Description needed');
        return
    }


console.log(newPost)

$.ajax({
type:"POST",
url: '/api/blog',
data: newPost,
}).then((res)=>{

    if(res.ok){
        document.location.replace('/')
    }
})
}

submitBtn.on('click',postBlog)