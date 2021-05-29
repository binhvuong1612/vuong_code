/*DONATE*/
function close_add_donate_form(){
      document.getElementById("box-add-donate").style.display = 'none';

}

function add_donate(){
    

    var email_donate = document.getElementById('email_donate').value;
    var username_donate = document.getElementById('username_donate').value;
    var money_donate = document.getElementById('money_donate').value;
    var day_donate = document.getElementById('day_donate').value;
    
    
      if(email_donate.length != 0 && username_donate.length != 0 && day_donate.length != 0){
          // our boxes have data and we take database
          if (document.getElementById("check_donate").checked==true) {
          var key = firebase.database().ref().child('Statistical_Donate').push().key;
          var task = {
            
            username_donate: username_donate,
            email_donate: email_donate,
            money_donate: money_donate,
            day_donate: day_donate,
            key: key,
          };

          var updates = {};
          updates["/Statistical_Donate/" + username_donate] = task;
          firebase.database().ref().update(updates);
          document.getElementById("box-add-donate").style.display = 'none';
          

            list_donate();
          
      }else {
              alert("Please do not leave any items blank!");
            } 
    }else {
            alert("Please do not leave any items blank!");
          } 
    
  }


function add_donate_form(){

    document.getElementById("box-add-donate").style.display = 'block';
    // show_list_admin= document.getElementById('charts');
    // show_list_admin.innerHTML = "";
    // var html = '<div id="box-add-user" class="task_container"><div id="title_data"><p id="task_title_email" contenteditable="false">Email : </p><p id="task_title_username" contenteditable="false">User Name : </p><p id="task_title_password" contenteditable="false">Password : </p><p id="task_title_birthday" contenteditable="false">Birthday : </p><p id="task_title_phone" contenteditable="false">Phone : </p><p id="task_title_address" contenteditable="false">Address : </p></div><div id="task_data"><input type="email" id="email" class="txtb"><br><input type="name" id="username" class="txtb"><br><input type="password" id="password" class="txtb"><br><input type="date" id="birthday" class="txtb"><br><input type="text" id="phone" class="txtb"><br><input type="text" id="address" class="txtb"><br></div><div id="task_btn"><div id="type_user_box"><input type="checkbox" id="type_user" value="Admin"><label>I am sure of this decision!</label><br></div><div id="btn-box"><button onclick="add_admin()" id="signup-btn" class="">Sign Up</button><button onclick="list_admin()" id="cancel-btn" class="">Cancel</button></div></div></div>';
    // document.getElementById('charts').insertAdjacentHTML('afterbegin', html);
    
}

function get_donate(){

  show_list_donate_find= document.getElementById('charts');
  show_list_donate_find.innerHTML = "";

  var name_donate_find= document.getElementById("name_donate_find").value;
  if (name_donate_find!="") {
    firebase.database().ref('Statistical_Donate/'+name_donate_find).once('value').then(function(snapshort){


      var task_name_donate_find= snapshort.val().username_donate;
      var task_email_donate_find= snapshort.val().email_donate;
      var task_money_donate_find = snapshort.val().money_donate;
      var task_day_donate_find = snapshort.val().day_donate;



      
          //tao TASK CONTAINER
        task_container = document.createElement("div");
        task_container.setAttribute("class", "task_container");
        task_container.setAttribute("data-key", task_key);

        task_img = document.createElement("div");
        task_img.setAttribute("class", "task_img");

        image_view = document.createElement('img');
        image_view.setAttribute('id', 'image_view');
        image_view.src = "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg";

        //tao TITLE DATA
        title_data = document.createElement("div");
        title_data.setAttribute("class", "title_data");

        title_username_donate = document.createElement('p');
        title_username_donate.setAttribute('id', 'task_title_username_donate');
        title_username_donate.setAttribute('contenteditable', false);
        title_username_donate.innerHTML = "User Name : ";

        title_email_donate = document.createElement('p');
        title_email_donate.setAttribute('id', 'task_title_email_donate');
        title_email_donate.setAttribute('contenteditable', false);
        title_email_donate.innerHTML = "Email : ";

        

        title_money_donate = document.createElement('p');
        title_money_donate.setAttribute('id', 'task_title_money_donate');
        title_money_donate.setAttribute('contenteditable', false);
        title_money_donate.innerHTML = "Money(VNĐ): ";

        title_day_donate = document.createElement('p');
        title_day_donate.setAttribute('id', 'task_title_day_donate');
        title_day_donate.setAttribute('contenteditable', false);
        title_day_donate.innerHTML = "Day : ";

        

        
        //tạo TASK DATA 
        task_data = document.createElement('div');
        task_data.setAttribute('class', 'task_data');

        

        username_donate = document.createElement('p');
        username_donate.setAttribute('id', 'task_name_donate_find');
        username_donate.setAttribute('contenteditable', false);
        username_donate.innerHTML = task_name_donate_find;

        email_donate = document.createElement('p');
        email_donate.setAttribute('id', 'task_email_donate_find');
        email_donate.setAttribute('contenteditable', false);
        email_donate.innerHTML = task_email_donate_find; 

        money_donate = document.createElement('p');
        money_donate.setAttribute('id', 'task_money_donate_find');
        money_donate.setAttribute('contenteditable', false);
        money_donate.innerHTML = task_money_donate_find;

        day_donate = document.createElement('p');
        day_donate.setAttribute('id', 'task_day_donate_find');
        day_donate.setAttribute('contenteditable', false);
        day_donate.innerHTML = task_day_donate_find;


        //tạo TASK TOOLS
        
        task_tool= document.createElement('div');
        task_tool.setAttribute('class', 'task_tool');

        task_done_donate_button = document.createElement('button');
        task_done_donate_button.setAttribute('id', 'task_done_donate_button');
        task_done_donate_button.setAttribute('class', 'task_done_button');
        task_done_donate_button.setAttribute('onclick', "task_done_donate(this.parentElement.parentElement, this)");
        fa_done = document.createElement('i');
        fa_done.setAttribute('class', 'fa fa-check');


        task_edit_donate_button = document.createElement('button');
        task_edit_donate_button.setAttribute('id', 'task_edit_donate_button');
        task_edit_donate_button.setAttribute('class', 'task_edit_button');
        task_edit_donate_button.setAttribute('onclick', "task_edit_donate(this.parentElement.parentElement, this)");
        fa_edit = document.createElement('i');
        fa_edit.setAttribute('class', 'fa fa-pencil-alt');

        task_delete_donate_button = document.createElement('button');
        task_delete_donate_button.setAttribute('id', 'task_delete_donate_button');
        task_delete_donate_button.setAttribute('class', 'task_delete_button');
        task_delete_donate_button.setAttribute('onclick', "task_delete_donate(this.parentElement.parentElement)");
        fa_delete = document.createElement('i');
        fa_delete.setAttribute('class', 'fa fa-trash');


        show_list_donate.append(task_container);

        task_container.append(task_img);
        task_img.append(image_view);

        task_container.append(title_data);
        title_data.append(title_username_donate);
        title_data.append(title_email_donate);
        title_data.append(title_money_donate);
        title_data.append(title_day_donate);


        task_container.append(task_data);
        task_data.append(username_donate);
        task_data.append(email_donate);
        task_data.append(money_donate);
        task_data.append(day_donate);
 

        task_container.append(task_tool);
        task_tool.append(task_done_donate_button);
        task_done_donate_button.append(fa_done);
        task_tool.append(task_edit_donate_button);
        task_edit_donate_button.append(fa_edit);
        task_tool.append(task_delete_donate_button);
        task_delete_donate_button.append(fa_delete);
 
    })
  };
  if (name_donate_find==""){
    alert("Please do not leave any items blank!");
    list_donate();
  };
    

}

function total_donate(){
    task_array = [];//khai bao bien
    //đưa dữ liệu vào id="container" trong
    number_donate = 0;
    
    firebase.database().ref("Statistical_Donate").once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        task_array.push(Object.values(childData));
      });
      //tạo vòng lặp để tạo các task 
      for(var i, i = 0; i < task_array.length; i++){
        task_day_donate = task_array[i][0];
        task_email_donate = task_array[i][1];
        task_key = task_array[i][2];
        task_money_donate = task_array[i][3];
        task_username_donate = task_array[i][4];

        
        number_donate = Number(number_donate)  + Number(task_money_donate) ;
        
      }

      document.getElementById("number_donate").innerHTML=number_donate;
    });
    
}


function list_donate(){
    
    var x= document.getElementById("btn_add_user").style.display;
    if (x!="none") {
        document.getElementById("btn_add_user").style.display='none';
        document.getElementById("box-add-user").style.display='none';
        document.getElementById("box-find-user").style.display='none';
        };
    var y= document.getElementById("btn_add_donate").style.display;
    if (y!="block") {
      document.getElementById("btn_add_donate").style.display='block';
      document.getElementById("box-find-donate").style.display='block';
      
      };
    var z= document.getElementById("btn_add_pet").style.display;
    if (z!="none") {
      document.getElementById("btn_add_pet").style.display='none';
      document.getElementById("box-add-pet").style.display='none';
      document.getElementById("box-find-pet").style.display='none';
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


    show_list_donate= document.getElementById('charts');
    show_list_donate.innerHTML = "";

    task_array = [];//khai bao bien
    //đưa dữ liệu vào id="container" trong
    
    
    firebase.database().ref("Statistical_Donate").once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        task_array.push(Object.values(childData));
      });


        task_container = document.createElement("div");
        task_container.setAttribute("class", "task_container");
        
      
        title_data = document.createElement("div");
        title_data.setAttribute("class", "title_data");

        title_number_money_donate = document.createElement('p');
        title_number_money_donate.setAttribute('id', 'title_number_money_donate');
        title_number_money_donate.setAttribute('contenteditable', false);
        title_number_money_donate.innerHTML = "Total Donate($): ";

        task_data = document.createElement("div");
        task_data.setAttribute("class", "task_data");

        data_number_money_donate = document.createElement('p');
        data_number_money_donate.setAttribute('id', 'number_donate');
        data_number_money_donate.setAttribute('contenteditable', false);
        data_number_money_donate.innerHTML = "--";


        show_list_donate.append(task_container);
        task_container.append(title_data);
        title_data.append(title_number_money_donate);

        task_container.append(task_data);
        task_data.append(data_number_money_donate);


      //tạo vòng lặp để tạo các task 
      for(var i, i = 0; i < task_array.length; i++){
        task_day_donate = task_array[i][0];
        task_email_donate = task_array[i][1];
        task_key = task_array[i][2];
        task_money_donate = task_array[i][3];
        task_username_donate = task_array[i][4];



        //tao TASK CONTAINER
        task_container = document.createElement("div");
        task_container.setAttribute("class", "task_container");
        task_container.setAttribute("data-key", task_key);


        task_img = document.createElement("div");
        task_img.setAttribute("class", "task_img");

        image_view = document.createElement('img');
        image_view.setAttribute('id', 'image_view');
        image_view.src = "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg";


        //tao TITLE DATA
        title_data = document.createElement("div");
        title_data.setAttribute("class", "title_data");

        title_username_donate = document.createElement('p');
        title_username_donate.setAttribute('id', 'task_title_username_donate');
        title_username_donate.setAttribute('contenteditable', false);
        title_username_donate.innerHTML = "User Name : ";

        title_email_donate = document.createElement('p');
        title_email_donate.setAttribute('id', 'task_title_email_donate');
        title_email_donate.setAttribute('contenteditable', false);
        title_email_donate.innerHTML = "Email : ";

        

        title_money_donate = document.createElement('p');
        title_money_donate.setAttribute('id', 'task_title_money_donate');
        title_money_donate.setAttribute('contenteditable', false);
        title_money_donate.innerHTML = "Money ($): ";

        title_day_donate = document.createElement('p');
        title_day_donate.setAttribute('id', 'task_title_day_donate');
        title_day_donate.setAttribute('contenteditable', false);
        title_day_donate.innerHTML = "Day : ";

        
        //tạo TASK DATA 
        task_data = document.createElement('div');
        task_data.setAttribute('class', 'task_data');

        username_donate = document.createElement('p');
        username_donate.setAttribute('id', 'task_username_donate');
        username_donate.setAttribute('contenteditable', false);
        username_donate.innerHTML = task_username_donate;

        email_donate = document.createElement('p');
        email_donate.setAttribute('id', 'task_email_donate');
        email_donate.setAttribute('contenteditable', false);
        email_donate.innerHTML = task_email_donate; 

        money_donate = document.createElement('p');
        money_donate.setAttribute('id', 'task_money_donate');
        money_donate.setAttribute('contenteditable', false);
        money_donate.innerHTML = task_money_donate;

        day_donate = document.createElement('p');
        day_donate.setAttribute('id', 'task_day_donate');
        day_donate.setAttribute('contenteditable', false);
        day_donate.innerHTML = task_day_donate;


        //tạo TASK TOOLS
        
        task_tool= document.createElement('div');
        task_tool.setAttribute('class', 'task_tool');

        task_done_donate_button = document.createElement('button');
        task_done_donate_button.setAttribute('id', 'task_done_donate_button');
        task_done_donate_button.setAttribute('class', 'task_done_button');
        task_done_donate_button.setAttribute('onclick', "task_done_donate(this.parentElement.parentElement, this)");
        fa_done = document.createElement('i');
        fa_done.setAttribute('class', 'fa fa-check');


        task_edit_donate_button = document.createElement('button');
        task_edit_donate_button.setAttribute('id', 'task_edit_donate_button');
        task_edit_donate_button.setAttribute('class', 'task_edit_button');
        task_edit_donate_button.setAttribute('onclick', "task_edit_donate(this.parentElement.parentElement, this)");
        fa_edit = document.createElement('i');
        fa_edit.setAttribute('class', 'fa fa-pencil-alt');

        task_delete_donate_button = document.createElement('button');
        task_delete_donate_button.setAttribute('id', 'task_delete_donate_button');
        task_delete_donate_button.setAttribute('class', 'task_delete_button');
        task_delete_donate_button.setAttribute('onclick', "task_delete_donate(this.parentElement.parentElement)");
        fa_delete = document.createElement('i');
        fa_delete.setAttribute('class', 'fa fa-trash');


        show_list_donate.append(task_container);

        task_container.append(task_img);
        task_img.append(image_view);

        task_container.append(title_data);
        title_data.append(title_username_donate);
        title_data.append(title_email_donate);
        title_data.append(title_money_donate);
        title_data.append(title_day_donate);


        task_container.append(task_data);
        task_data.append(username_donate);
        task_data.append(email_donate);
        task_data.append(money_donate);
        task_data.append(day_donate);


        task_container.append(task_tool);
        task_tool.append(task_done_donate_button);
        task_done_donate_button.append(fa_done);
        task_tool.append(task_edit_donate_button);
        task_edit_donate_button.append(fa_edit);
        task_tool.append(task_delete_donate_button);
        task_delete_donate_button.append(fa_delete);

      }
       total_donate();
    });
     
  }
/*------------------------------------------------------------------------*/  
  // button edit, button delete FOR DONATE
  

  function task_edit_donate(task, edit_button_donate){
    

    username_donate = task.childNodes[2].childNodes[0];
    username_donate.setAttribute("contenteditable", false);
    username_donate.setAttribute("class", "task_data_editing");
    username_donate.setAttribute("id", "task_username_donate");

    email_donate = task.childNodes[2].childNodes[1];
    email_donate.setAttribute("contenteditable", false);
    email_donate.setAttribute("class", "task_data_editing");
    email_donate.setAttribute("id", "task_email_donate");

    money_donate = task.childNodes[2].childNodes[2];
    money_donate.setAttribute("contenteditable", true);
    money_donate.setAttribute("class", "task_data_editing");
    money_donate.setAttribute("id", "task_money_donate");

    day_donate = task.childNodes[2].childNodes[3];
    day_donate.setAttribute("contenteditable", true);
    day_donate.setAttribute("class", "task_data_editing");
    day_donate.setAttribute("id", "task_day_donate");


  }

  function task_done_donate(task, edit_button_donate){
    

    username_donate = task.childNodes[2].childNodes[0];
    username_donate.setAttribute("contenteditable", false);
    username_donate.setAttribute("class", "task_data_done");
    username_donate.setAttribute("id", "task_username_donate");
    
    email_donate = task.childNodes[2].childNodes[1];
    email_donate.setAttribute("contenteditable", false);
    email_donate.setAttribute("class", "task_data_done");
    email_donate.setAttribute("id", "task_email_donate");


    money_donate = task.childNodes[2].childNodes[2];
    money_donate.setAttribute("contenteditable", false);
    money_donate.setAttribute("class", "task_data_done");
    money_donate.setAttribute("id", "task_money_donate");

    day_donate = task.childNodes[2].childNodes[3];
    day_donate.setAttribute("contenteditable", false);
    day_donate.setAttribute("class", "task_data_done");
    day_donate.setAttribute("id", "task_day_donate");

    // change in firebase to
    var key = task.getAttribute("data-key");
    var username_donate = task.childNodes[2].childNodes[0].innerHTML;
    var email_donate= task.childNodes[2].childNodes[1].innerHTML;
    var money_donate = task.childNodes[2].childNodes[2].innerHTML;
    var day_donate = task.childNodes[2].childNodes[3].innerHTML;
    var task_obj = {
      
      username_donate: username_donate,
      email_donate: email_donate,
      money_donate: money_donate,
      day_donate: day_donate,

       key: key,
    };
    
    
    var updates = {};
    updates["/Statistical_Donate/" + username_donate] = task_obj;
    firebase.database().ref().update(updates);

  }

  

  function task_delete_donate(task){
    key = task.getAttribute("data-key");
    
    var username_donate = task.childNodes[2].childNodes[0].innerHTML;

    task_to_remove = firebase.database().ref( "Statistical_Donate/" + username_donate);
    task_to_remove.remove();

    // remove from html view or whatevesss
    task.remove();

  }
 
/*------------------------------------------------------------------------*/  