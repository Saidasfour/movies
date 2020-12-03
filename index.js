fetch('https://trainingsaid.herokuapp.com/')
  .then(response => response.json())
  .then(json => {
    for(let i=0;i<json.length;i++){
var x=document.createElement('div');
var content=`<div class="col-lg-4 ">
<div class="card" style="width:400px">
<img class="card-img-top" src="xxx" alt="Card image">
<div class="card-body">
  <h4 class="card-title">yyy</h4>
  <a href="#" class="btn btn-primary">Watch movie</a>
  <a href="#" class="btn btn-dark" style="margin-left:22%">Download movie</a>
</div>
</div>
</div>`
var test = content.replace("xxx", json[i].image);
var test = test.replace("yyy", json[i].name)
x.innerHTML=test;
//document.getElementById('Myul').appendChild(x);
document.getElementById('row').appendChild(x);
    }})
  