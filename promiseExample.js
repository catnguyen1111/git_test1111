// var users = [
//   {
//     id: 1,
//     name:'Văn Cát'
//   },
//   {
//     id: 2,
//     name:'Văn Khánh'
//   },
  
// ]
// var comments = [
//   {
//     id: 1,
//     user_id:1,
//     content:'My name is Cat'
//   },
//   {
//     id: 2,
//     user_id:2,
//     content:'My name is Khanh'
//   }
// ]
// // lấy ra comment -> lấy ra danh sách user_id-> lấy ra user tương ứng
// function getUsersByIds(userIds){
//   return new Promise(function(resolve, reject){
//     var result = users.filter(function(user){
      
//       return userIds.includes(user.id)
//     });
//     setTimeout(function(){
//       resolve(result)
//     },1000)
//     console.log("result",result);
//   })
// }


// function getComments(){
//   return new Promise(function(resolve, reject){
//     setTimeout(function(){
//       resolve(comments)
//     })
//   },1000)
// }
// getComments()
//   .then(function(comments){
//     var userIds = comments.map(function(comment){
//       return comment.user_id;
//     })
//     console.log(userIds)

//     return getUsersByIds(userIds)
//       .then(function(users){
//         return {
//           users: users,
//           comments: comments
//         };

//       })
// })
//   .then(function(data){
//     console.log(data)
//     var commentsBlock = document.getElementById('comments-block')
//     var html = '';
//     data.comments.forEach(function(comment){
//       console.log("comment",comment)
//       var user = data.users.find(function(user){
//         console.log("user_d",user)
//         return user.id === comment.user_id;
//       }) 
//       html +=`<li>${user.name} : ${comment.content}</li>`
//       console.log(html)
//     })
//     commentsBlock.innerHTML = html;
//   })


$(document).ready(function(){
  $('.tableList').click(function(){
   $('.btn').click(function(){
    let name = $('input[name = "email"]').val();
    let check = $('input[type = "checkbox"]:checked');
    if(check.length > 0){
      alert(check.val());
    }
    else
    {
      alert('no enter ')
    }
    alert(name)
   })
  })
})
