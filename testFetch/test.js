var coursesApi  = 'http://localhost:3000/courses'
function Start(){
  getCourses(renderCourse);
  handleCreateForm();
}
Start();
function getCourses(callback) {
  fetch(coursesApi)
  .then(response => response.json())
  .then(callback)
}
function createCourse(data,callback){
  const options = {
    method:'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  fetch(coursesApi,options)
    .then((respone) => respone.json())
    .then(callback);
}
function handleDeleteCourse(id){
  console.log(id)
  const options = {
    method:'DELETE',
    headers:{
      'Content-Type': 'application/json'
    },
    
  }
  fetch(coursesApi + '/' + id,options)
    .then((respone) => respone.json())
    .then(()=>{
      var courseItem = document.querySelector('.course-item-'+id);
      if(courseItem){
        courseItem.remove();
      }
    });
}
function renderCourse(data){
  var elementsBox = document.querySelector('#post-demo');
  var html = data.map((course)=>{
    return `
    <li class = "course-item-${course.id }">
      <h4>${course.name}</h4>
      <p>${course.description}</p>
      <button onClick={handleDeleteCourse(${course.id})}>Xóa</button>
    </li>
    `
  })
  elementsBox.innerHTML = html.join('');
}
function handleCreateForm(){
  var createBtn = document.querySelector('#create');
  createBtn.onclick = function(){
    var name = document.querySelector('input[name="name"]').value;
    var desc = document.querySelector('input[name="description"]').value;
    console.log("name",name);
    console.log("desc",desc);
    var formData = {
      name: name,
      description: desc,
    }
    createCourse(formData,function(){
      getCourses(renderCourse);
    });
  }
}
