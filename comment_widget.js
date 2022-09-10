class Comment{
    constructor(comment,author,children){
        this.comment=comment;
        this.author= author;
        this.children=children;
    }

}
document.getElementById('addComment').addEventListener('click',(e)=>{
    add(e);
});
function add(e){
    let commentText, wrapDiv;
    commentText = document.getElementById("newComment").value;
    let allCommentsContainer = document.getElementById("allComments");    

    const textBox = document.createElement('div');
    textBox.style.padding='10px';

    const likeButton = document.createElement('button');
    likeButton.innerHTML = 'Like';
    likeButton.className = 'likeComment';
    likeButton.style.backgroundColor='rgb(158 255 190)';
    
    const replyButton = document.createElement('button');
    replyButton.className = 'reply';
    replyButton.innerHTML = 'Reply';
    replyButton.style.background='mintcream';
    
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.className = 'deleteComment';
    deleteButton.style.background='#ef8282';

    let noOfLikes=0;
    likeButton.innerText= 'like'+ `${noOfLikes}`;
    likeButton.addEventListener('click',()=>{
        noOfLikes++;
        likeButton.innerText= 'like'+ `${noOfLikes}`;
    });
    
    const reply = document.createElement('button');
    reply.innerText='reply';

    console.log(e.target.className);
    if(e.target.className=='addReply'){
        wrapDiv = e.target.parentElement;
        commentText = e.target.parentElement.firstElementChild.value;
        textBox.style.backgroundColor='#d0eded';
        textBox.innerHTML = commentText;
        wrapDiv.innerHTML = '';
        wrapDiv.append(textBox, replyButton, likeButton, deleteButton);
    }else{
        wrapDiv = document.createElement('div');
    wrapDiv.className = 'wrapper';
    wrapDiv.style.marginLeft = 0;
        textBox.innerText=commentText;
        textBox.style.backgroundColor='#d0ebbe';
        document.getElementById('newComment').value = '';
    wrapDiv.append(textBox, replyButton, likeButton, deleteButton);
    allCommentsContainer.appendChild(wrapDiv);
    }
    
   
}

document.getElementById('allComments').addEventListener('click',(e)=>{
    console.log(e.target.className)
    console.log(e.target.parentElement);
    if(e.target.className=='reply'){
       let parentElement = e.target.parentElement;
       let wrapDiv = document.createElement('div');
       wrapDiv.style.marginLeft = (Number.parseInt(parentElement.style.marginLeft) + 15).toString() + 'px';
       wrapDiv.className = 'wrapper';
       //create textArea
       let textArea = document.createElement('textarea');
       textArea.style.marginRight='20px';
       textArea.className= "replyComment";

       //create add button to write reply comment
       let addButton = document.createElement('button');
       addButton.className= 'addReply';
       addButton.innerHTML= 'add';

       //create a cancel button to cancel the reply on comment;
       let cancelButton = document.createElement('button');
       cancelButton.className= 'cancelReply';
       cancelButton.innerHTML= 'Cancel';

       wrapDiv.append(textArea,addButton,cancelButton);

       parentElement.appendChild(wrapDiv);
    }else if(e.target.className=='deleteComment'){
        e.target.parentElement.remove();
    }else if(e.target.className=='cancelReply'){
        e.target.parentElement.innerHTML='';
    }else if(e.target.className=='addReply'){
        add(e);
    }
})
