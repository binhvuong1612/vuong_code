/*------------------------------------------------------------------------*/  
/*PET*/
function close_add_pet_form(){
      document.getElementById("box-add-pet").style.display = 'none';

}

function chooseFile(e){
  file = e.target.files[0];
}

function add_pet(){
    

    var pet_name = document.getElementById('pet_name').value;
    var pet_age = document.getElementById('pet_age').value;
    var select_sex = document.getElementById('select_sex').value;
    var pet_title = document.getElementById('pet_title').value;
    var pet_describe = document.getElementById('pet_describe').value;
    var image_view = document.getElementById('image_view');
    
    
      if(pet_name.length != 0 && pet_age.length != 0 && select_sex.length != 0 && pet_title.length != 0 && pet_describe.length != 0){
          // our boxes have data and we take database
          if (document.getElementById("check_pet").checked==true) {
            
              var uploadTask = firebase.storage().ref("/Pet/"+pet_name+".jpg").put(file);
              uploadTask.snapshot.ref.getDownloadURL().then((URL_img) => {
              pet_img = URL_img;
              alert(pet_img);
                var key = firebase.database().ref().child('Pet').push().key;
                var task = {
                  
                  pet_name: pet_name,
                  pet_age: pet_age,
                  select_sex: select_sex,
                  pet_title: pet_title,
                  pet_describe: pet_describe,
                  pet_img: pet_img,
                  key: key,
                };

                var updates = {};
                updates["/Pet/" + pet_name] = task;
                firebase.database().ref().update(updates);
                
                document.getElementById("box-add-pet").style.display = 'none';
                count_user_and_pet();
                list_pet();
              });
            
           }else {
                  alert("Please do not leave any items blank!");
                  } 
        }else {
                  alert("Please do not leave any items blank!");
                } 
    
  }


function add_pet_form(){

    document.getElementById("box-add-pet").style.display = 'block';
    
}

function get_pet(){

  show_list_pet_find= document.getElementById('charts');
  show_list_pet_find.innerHTML = "";

  var name_pet_find= document.getElementById("name_pet_find").value;
  if (name_pet_find!="") {
    firebase.database().ref('Pet/'+name_pet_find).once('value').then(function(snapshort){


      var task_name_pet_find= snapshort.val().pet_name;
      var task_age_pet_find= snapshort.val().pet_age;
      var task_sex_pet_find = snapshort.val().select_sex;
      var task_title_pet_find = snapshort.val().pet_title;
      var task_describe_pet_find= snapshort.val().pet_describe;
      var task_img_pet_find= snapshort.val().pet_img;

      
//tao TASK CONTAINER
        task_container = document.createElement("div");
        task_container.setAttribute("class", "task_container");
        task_container.setAttribute("data-key", task_key);

        task_img = document.createElement("div");
        task_img.setAttribute("class", "task_img");

        image_view = document.createElement("img");
        image_view.setAttribute("id", "image_view");
        image_view.src = task_img_pet_find;


        //tao TITLE DATA
        title_data = document.createElement("div");
        title_data.setAttribute("class", "title_data");

        title_pet_name = document.createElement('p');
        title_pet_name.setAttribute('id', 'task_title_pet_name');
        title_pet_name.setAttribute('contenteditable', false);
        title_pet_name.innerHTML = "Pet Name : ";

        title_pet_age = document.createElement('p');
        title_pet_age.setAttribute('id', 'task_title_pet_age');
        title_pet_age.setAttribute('contenteditable', false);
        title_pet_age.innerHTML = "Age : ";

        title_select_sex = document.createElement('p');
        title_select_sex.setAttribute('id', 'task_title_select_sex');
        title_select_sex.setAttribute('contenteditable', false);
        title_select_sex.innerHTML = "Sex : ";

        title_pet_title = document.createElement('p');
        title_pet_title.setAttribute('id', 'task_title_pet_title');
        title_pet_title.setAttribute('contenteditable', false);
        title_pet_title.innerHTML = "Title : ";

        title_pet_describe = document.createElement('p');
        title_pet_describe.setAttribute('id', 'task_title_pet_describe');
        title_pet_describe.setAttribute('contenteditable', false);
        title_pet_describe.innerHTML = "Describe : ";

        
        //tạo TASK DATA 
        task_data = document.createElement('div');
        task_data.setAttribute('class', 'task_data');

        

        pet_name = document.createElement('p');
        pet_name.setAttribute('id', 'task_pet_name');
        pet_name.setAttribute('contenteditable', false);
        pet_name.innerHTML = task_name_pet_find;

        pet_age = document.createElement('p');
        pet_age.setAttribute('id', 'task_pet_age');
        pet_age.setAttribute('contenteditable', false);
        pet_age.innerHTML = task_age_pet_find; 

        select_sex = document.createElement('p');
        select_sex.setAttribute('id', 'task_select_sex');
        select_sex.setAttribute('contenteditable', false);
        select_sex.innerHTML = task_sex_pet_find;

        pet_title = document.createElement('p');
        pet_title.setAttribute('id', 'task_pet_title');
        pet_title.setAttribute('contenteditable', false);
        pet_title.innerHTML = task_title_pet_find;

        pet_describe = document.createElement('p');
        pet_describe.setAttribute('id', 'task_pet_describe');
        pet_describe.setAttribute('contenteditable', false);
        pet_describe.innerHTML = task_describe_pet_find;

        //tạo TASK TOOLS
        
        task_tool= document.createElement('div');
        task_tool.setAttribute('class', 'task_tool');

        task_done_pet_button = document.createElement('button');
        task_done_pet_button.setAttribute('id', 'task_done_pet_button');
        task_done_pet_button.setAttribute('class', 'task_done_button');
        task_done_pet_button.setAttribute('onclick', "task_done_pet(this.parentElement.parentElement, this)");
        fa_done = document.createElement('i');
        fa_done.setAttribute('class', 'fa fa-check');


        task_edit_pet_button = document.createElement('button');
        task_edit_pet_button.setAttribute('id', 'task_edit_pet_button');
        task_edit_pet_button.setAttribute('class', 'task_edit_button');
        task_edit_pet_button.setAttribute('onclick', "task_edit_pet(this.parentElement.parentElement, this)");
        fa_edit = document.createElement('i');
        fa_edit.setAttribute('class', 'fa fa-pencil-alt');

        task_delete_pet_button = document.createElement('button');
        task_delete_pet_button.setAttribute('id', 'task_delete_pet_button');
        task_delete_pet_button.setAttribute('class', 'task_delete_button');
        task_delete_pet_button.setAttribute('onclick', "task_delete_pet(this.parentElement.parentElement)");
        fa_delete = document.createElement('i');
        fa_delete.setAttribute('class', 'fa fa-trash');


        show_list_pet_find.append(task_container);

        task_container.append(task_img);
        task_img.append(image_view);

        task_container.append(title_data);
        title_data.append(title_pet_name);
        title_data.append(title_pet_age);
        title_data.append(title_select_sex);
        title_data.append(title_pet_title);
        title_data.append(title_pet_describe);


        task_container.append(task_data);
        task_data.append(pet_name);
        task_data.append(pet_age);
        task_data.append(select_sex);
        task_data.append(pet_title);
        task_data.append(pet_describe);


        task_container.append(task_tool);
        task_tool.append(task_done_pet_button);
        task_done_pet_button.append(fa_done);
        task_tool.append(task_edit_pet_button);
        task_edit_pet_button.append(fa_edit);
        task_tool.append(task_delete_pet_button);
        task_delete_pet_button.append(fa_delete);
      

    })
  };
  if (name_pet_find==""){
    alert("Please do not leave any items blank!");
    list_pet();
  };
    

}

function list_pet(){
    
    var x= document.getElementById("btn_add_user").style.display;
    if (x!="none") {
        document.getElementById("btn_add_user").style.display='none';
        document.getElementById("box-add-user").style.display='none';
        document.getElementById("box-find-user").style.display='none';
        };
    var y= document.getElementById("btn_add_donate").style.display;
    if (y!="none") {
      document.getElementById("btn_add_donate").style.display='none';
      document.getElementById("box-add-donate").style.display='none';
      document.getElementById("box-find-donate").style.display='none';
      };
    var z= document.getElementById("btn_add_pet").style.display;
    if (z!="block") {
      document.getElementById("btn_add_pet").style.display='block';
      document.getElementById("box-find-pet").style.display='block';
      
      };
    var j= document.getElementById("btn_add_video").style.display;
    if (j!="none") {
      document.getElementById("btn_add_video").style.display='none';
      document.getElementById("box-add-video").style.display='none';
      document.getElementById("box-find-video").style.display='none';
      };
    var k= document.getElementById("btn_add_news").style.display;
    if (k!="none") {
      document.getElementById("btn_add_news").style.display='none';
      document.getElementById("box-add-news").style.display='none';
      document.getElementById("box-find-news").style.display='none';
      };
    var l= document.getElementById("btn_add_blog").style.display;
    if (l!="none") {
      document.getElementById("btn_add_blog").style.display='none';
      document.getElementById("box-add-blog").style.display='none';
      document.getElementById("box-find-blog").style.display='none';
      };
    

  
    show_list_pet= document.getElementById('charts');
    show_list_pet.innerHTML = "";
 
    task_array = [];//khai bao bien
    //đưa dữ liệu vào id="container" trong
    
    
    firebase.database().ref("Pet").once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        task_array.push(Object.values(childData));
      });
       
      
      //tạo vòng lặp để tạo các task 
      for(var i, i = 0; i < task_array.length; i++){
        task_key = task_array[i][0];
        task_pet_age = task_array[i][1];
        task_pet_describe = task_array[i][2];
        task_pet_img = task_array[i][3];
        task_pet_name = task_array[i][4];
        task_pet_title = task_array[i][5];
        task_select_sex = task_array[i][6];


        //tao TASK CONTAINER
        task_container = document.createElement("div");
        task_container.setAttribute("class", "task_container");
        task_container.setAttribute("data-key", task_key);

        task_img = document.createElement("div");
        task_img.setAttribute("class", "task_img");

        image_view = document.createElement("img");
        image_view.setAttribute("id", "image_view");
        image_view.src = task_pet_img;


        //tao TITLE DATA
        title_data = document.createElement("div");
        title_data.setAttribute("class", "title_data");

        title_pet_name = document.createElement('p');
        title_pet_name.setAttribute('id', 'task_title_pet_name');
        title_pet_name.setAttribute('contenteditable', false);
        title_pet_name.innerHTML = "Pet Name : ";

        title_pet_age = document.createElement('p');
        title_pet_age.setAttribute('id', 'task_title_pet_age');
        title_pet_age.setAttribute('contenteditable', false);
        title_pet_age.innerHTML = "Age : ";

        title_select_sex = document.createElement('p');
        title_select_sex.setAttribute('id', 'task_title_select_sex');
        title_select_sex.setAttribute('contenteditable', false);
        title_select_sex.innerHTML = "Sex : ";

        title_pet_title = document.createElement('p');
        title_pet_title.setAttribute('id', 'task_title_pet_title');
        title_pet_title.setAttribute('contenteditable', false);
        title_pet_title.innerHTML = "Title : ";

        title_pet_describe = document.createElement('p');
        title_pet_describe.setAttribute('id', 'task_title_pet_describe');
        title_pet_describe.setAttribute('contenteditable', false);
        title_pet_describe.innerHTML = "Describe : ";

        
        //tạo TASK DATA 
        task_data = document.createElement('div');
        task_data.setAttribute('class', 'task_data');

        

        pet_name = document.createElement('p');
        pet_name.setAttribute('id', 'task_pet_name');
        pet_name.setAttribute('contenteditable', false);
        pet_name.innerHTML = task_pet_name;

        pet_age = document.createElement('p');
        pet_age.setAttribute('id', 'task_pet_age');
        pet_age.setAttribute('contenteditable', false);
        pet_age.innerHTML = task_pet_age; 

        select_sex = document.createElement('p');
        select_sex.setAttribute('id', 'task_select_sex');
        select_sex.setAttribute('contenteditable', false);
        select_sex.innerHTML = task_select_sex;

        pet_title = document.createElement('p');
        pet_title.setAttribute('id', 'task_pet_title');
        pet_title.setAttribute('contenteditable', false);
        pet_title.innerHTML = task_pet_title;

        pet_describe = document.createElement('p');
        pet_describe.setAttribute('id', 'task_pet_describe');
        pet_describe.setAttribute('contenteditable', false);
        pet_describe.innerHTML = task_pet_describe;

        //tạo TASK TOOLS
        
        task_tool= document.createElement('div');
        task_tool.setAttribute('class', 'task_tool');

        task_done_pet_button = document.createElement('button');
        task_done_pet_button.setAttribute('id', 'task_done_pet_button');
        task_done_pet_button.setAttribute('class', 'task_done_button');
        task_done_pet_button.setAttribute('onclick', "task_done_pet(this.parentElement.parentElement, this)");
        fa_done = document.createElement('i');
        fa_done.setAttribute('class', 'fa fa-check');


        task_edit_pet_button = document.createElement('button');
        task_edit_pet_button.setAttribute('id', 'task_edit_pet_button');
        task_edit_pet_button.setAttribute('class', 'task_edit_button');
        task_edit_pet_button.setAttribute('onclick', "task_edit_pet(this.parentElement.parentElement, this)");
        fa_edit = document.createElement('i');
        fa_edit.setAttribute('class', 'fa fa-pencil-alt');

        task_delete_pet_button = document.createElement('button');
        task_delete_pet_button.setAttribute('id', 'task_delete_pet_button');
        task_delete_pet_button.setAttribute('class', 'task_delete_button');
        task_delete_pet_button.setAttribute('onclick', "task_delete_pet(this.parentElement.parentElement)");
        fa_delete = document.createElement('i');
        fa_delete.setAttribute('class', 'fa fa-trash');


        show_list_pet.append(task_container);

        task_container.append(task_img);
        task_img.append(image_view);

        task_container.append(title_data);
        title_data.append(title_pet_name);
        title_data.append(title_pet_age);
        title_data.append(title_select_sex);
        title_data.append(title_pet_title);
        title_data.append(title_pet_describe);


        task_container.append(task_data);
        task_data.append(pet_name);
        task_data.append(pet_age);
        task_data.append(select_sex);
        task_data.append(pet_title);
        task_data.append(pet_describe);


        task_container.append(task_tool);
        task_tool.append(task_done_pet_button);
        task_done_pet_button.append(fa_done);
        task_tool.append(task_edit_pet_button);
        task_edit_pet_button.append(fa_edit);
        task_tool.append(task_delete_pet_button);
        task_delete_pet_button.append(fa_delete);
      

      }

    });
  }
/*------------------------------------------------------------------------*/  
  // button edit, button delete FOR DONATE
  

  function task_edit_pet(task, edit_button_pet){
    

    pet_name = task.childNodes[2].childNodes[0];
    pet_name.setAttribute("contenteditable", false);
    pet_name.setAttribute("class", "task_data_editing");
    pet_name.setAttribute("id", "task_pet_name");

    pet_age = task.childNodes[2].childNodes[1];
    pet_age.setAttribute("contenteditable", true);
    pet_age.setAttribute("class", "task_data_editing");
    pet_age.setAttribute("id", "task_pet_age");

    select_sex = task.childNodes[2].childNodes[2];
    select_sex.setAttribute("contenteditable", true);
    select_sex.setAttribute("class", "task_data_editing");
    select_sex.setAttribute("id", "task_select_sex");

    pet_title = task.childNodes[2].childNodes[3];
    pet_title.setAttribute("contenteditable", true);
    pet_title.setAttribute("class", "task_data_editing");
    pet_title.setAttribute("id", "task_pet_title");

    pet_describe = task.childNodes[2].childNodes[4];
    pet_describe.setAttribute("contenteditable", true);
    pet_describe.setAttribute("class", "task_data_editing");
    pet_describe.setAttribute("id", "task_pet_describe");
  }

  function task_done_pet(task, edit_button_pet){
    

    pet_name = task.childNodes[2].childNodes[0];
    pet_name.setAttribute("contenteditable", false);
    pet_name.setAttribute("class", "task_data_done");
    pet_name.setAttribute("id", "task_pet_name");
    
    pet_age = task.childNodes[2].childNodes[1];
    pet_age.setAttribute("contenteditable", false);
    pet_age.setAttribute("class", "task_data_done");
    pet_age.setAttribute("id", "task_pet_age");


    select_sex = task.childNodes[2].childNodes[2];
    select_sex.setAttribute("contenteditable", true);
    select_sex.setAttribute("class", "task_data_done");
    select_sex.setAttribute("id", "task_select_sex");

    pet_title = task.childNodes[2].childNodes[3];
    pet_title.setAttribute("contenteditable", true);
    pet_title.setAttribute("class", "task_data_done");
    pet_title.setAttribute("id", "task_pet_title");

    pet_describe = task.childNodes[2].childNodes[4];
    pet_describe.setAttribute("contenteditable", true);
    pet_describe.setAttribute("class", "task_data_done");
    pet_describe.setAttribute("id", "task_pet_describe");

    // change in firebase to
    var key = task.getAttribute("data-key");
    var pet_img = task.childNodes[0].childNodes[0].src;
    var pet_name = task.childNodes[2].childNodes[0].innerHTML;
    var pet_age= task.childNodes[2].childNodes[1].innerHTML;
    var select_sex = task.childNodes[2].childNodes[2].innerHTML;
    var pet_title = task.childNodes[2].childNodes[3].innerHTML;
    var pet_describe = task.childNodes[2].childNodes[4].innerHTML;
    var task_obj = {
      
      pet_name: pet_name,
      pet_age: pet_age,
      select_sex: select_sex,
      pet_title: pet_title,
      pet_describe: pet_describe,
      pet_img: pet_img,
       key: key,
    };
    
    var updates = {};
    updates["/Pet/" + pet_name] = task_obj;
    firebase.database().ref().update(updates);

  }

  

  function task_delete_pet(task){
    key = task.getAttribute("data-key");
    
    var pet_name = task.childNodes[2].childNodes[0].innerHTML;

    task_to_remove = firebase.database().ref( "Pet/" + pet_name);
    task_to_remove.remove();

    // remove from html view or whatevesss
    task.remove();
    count_user_and_pet();

  }

/*------------------------------------------------------------------------*/  
