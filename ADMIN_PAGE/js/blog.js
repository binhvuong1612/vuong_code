/*------------------------------------------------------------------------*/  
/*PET*/

function add_comment(task){
    var blog_NAME = task.childNodes[2].childNodes[0].innerHTML;
    var content_comment = task.childNodes[2].childNodes[5].value;
    var key_comment = firebase.database().ref().child('Comment/'+blog_NAME).push().key;
                var task_com = {
  
                  content_comment: content_comment,
                  key_comment: key_comment,
                  
                };
                var updates = {};
                updates["/Comment/" + blog_NAME +"/"+ content_comment] = task_com;
                firebase.database().ref().update(updates);


    show_list_comment= task.childNodes[2].childNodes[8];
    show_list_comment.innerHTML = "";
    task_array_comment = [];

    firebase.database().ref("Comment/"+blog_NAME).once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        task_array_comment.push(Object.values(childData));
      });
        for(var i, i = 0; i < task_array_comment.length; i++){
          task_content_comment = task_array_comment[i][0];
          task_key_comment = task_array_comment[i][1];

          /*Tao du lieu*/
          task_comment = document.createElement("div");
          task_comment.setAttribute("class", "task_comment");
          task_comment.setAttribute("data-key", task_key_comment);


          task_data_comment = document.createElement("div");
          task_data_comment.setAttribute("class", "task_data_comment");
          task_data_comment.setAttribute("title", blog_NAME);

          comment_data = document.createElement('p');
          comment_data.setAttribute('id', 'task_comment_data');
          comment_data.setAttribute('contenteditable', false);
          comment_data.innerHTML = task_content_comment;

          task_button_comment = document.createElement("div");
          task_button_comment.setAttribute("class", "task_button_comment");

          delete_comment_button = document.createElement('button');
          delete_comment_button.setAttribute('id', 'delete_comment_button');
          delete_comment_button.setAttribute('class', 'task_delete_button');
          delete_comment_button.setAttribute('onclick', "btn_delete_comment(this.parentElement)");
          btn_delete = document.createElement('i');
          btn_delete.setAttribute('class', 'fa fa-trash');

          /*SET du lieu len HTML*/
          show_list_comment.append(task_comment);

          task_comment.append(task_data_comment);
          task_data_comment.append(comment_data);

          task_comment.append(task_button_comment);
          task_comment.append(delete_comment_button);
          delete_comment_button.append(btn_delete);

        }
    });

}
function list_comment(task){
    var blog_NAME = task.childNodes[2].childNodes[0].innerHTML;
    var content_comment = task.childNodes[2].childNodes[5].value;
    show_list_comment= task.childNodes[2].childNodes[8];
    show_list_comment.innerHTML = "";
    task_array_comment = [];

    firebase.database().ref("Comment/"+blog_NAME).once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        task_array_comment.push(Object.values(childData));
      });
        for(var i, i = 0; i < task_array_comment.length; i++){
          task_content_comment = task_array_comment[i][0];
          task_key_comment = task_array_comment[i][1];

          /*Tao du lieu*/
          task_comment = document.createElement("div");
          task_comment.setAttribute("class", "task_comment");
          task_comment.setAttribute("data-key", task_key_comment);


          task_data_comment = document.createElement("div");
          task_data_comment.setAttribute("class", "task_data_comment");
          task_data_comment.setAttribute("title", blog_NAME);

          comment_data = document.createElement('p');
          comment_data.setAttribute('id', 'task_comment_data');
          comment_data.setAttribute('contenteditable', false);
          comment_data.innerHTML = task_content_comment;

          task_button_comment = document.createElement("div");
          task_button_comment.setAttribute("class", "task_button_comment");

          delete_comment_button = document.createElement('button');
          delete_comment_button.setAttribute('id', 'delete_comment_button');
          delete_comment_button.setAttribute('class', 'task_delete_button');
          delete_comment_button.setAttribute('onclick', "btn_delete_comment(this.parentElement)");
          btn_delete = document.createElement('i');
          btn_delete.setAttribute('class', 'fa fa-trash');

          /*SET du lieu len HTML*/
          show_list_comment.append(task_comment);

          task_comment.append(task_data_comment);
          task_data_comment.append(comment_data);

          task_comment.append(task_button_comment);
          task_comment.append(delete_comment_button);
          delete_comment_button.append(btn_delete);

        }
    });

}
  
function btn_delete_comment(task){
    var BLOG_NAME = task.childNodes[0].title;
    alert(BLOG_NAME);

    var comment_name = task.childNodes[0].childNodes[0].innerHTML;
    alert(comment_name);

    remove_comment = firebase.database().ref( "Comment/" + BLOG_NAME +"/"+ comment_name);
    remove_comment.remove();

    // remove from html view or whatevesss
    task.remove();
  }











function close_add_blog_form(){
      document.getElementById("box-add-blog").style.display = 'none';

}

function chooseBlog(e){
  fileBlog = e.target.files[0];
}

function add_blog(){
    

    var blog_name = document.getElementById('blog_name').value;
    var blog_day = document.getElementById('blog_day').value;
    var bloger = document.getElementById('bloger').value;
    var blog_status = document.getElementById('blog_status').value;
    
    // var image_view = document.getElementById('image_view');
    
    
      if(blog_name.length != 0 && blog_day.length != 0 && bloger.length != 0 && blog_status.length != 0){
          // our boxes have data and we take database
          if (document.getElementById("check_blog").checked==true) {
            
              var uploadTask = firebase.storage().ref("/Blog/"+blog_name+".jpg").put(fileBlog);
              uploadTask.snapshot.ref.getDownloadURL().then((URL_img) => {
              blog_url = URL_img;
                var key = firebase.database().ref().child('Blog').push().key;
                var task = {
                  
                  blog_name: blog_name,
                  blog_day: blog_day,
                  bloger: bloger,
                  blog_status: blog_status,
                  blog_url: blog_url,
                  key: key,
                };

                var updates = {};
                updates["/Blog/" + blog_name] = task;
                firebase.database().ref().update(updates);
                
                document.getElementById("box-add-blog").style.display = 'none';
                list_blog(); 
                 
            }); 
               
          }else {
                  alert("Please do not leave any items blank!");
                  } 
        }else {
                  alert("Please do not leave any items blank!");
                }

  }


function add_blog_form(){

    document.getElementById("box-add-blog").style.display = 'block';
    
}


function list_blog(){
    
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
    var l= document.getElementById("btn_add_blog").style.display;
    if (l!="block") {
      document.getElementById("btn_add_blog").style.display='block';
      document.getElementById("box-find-blog").style.display='block';
      
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

  
    show_list_blog= document.getElementById('charts');
    show_list_blog.innerHTML = "";
 
    task_array = [];//khai bao bien
    //đưa dữ liệu vào id="container" trong
    
    
    firebase.database().ref("Blog").once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        task_array.push(Object.values(childData));
      });


      //tạo vòng lặp để tạo các task 
      for(var i, i = 0; i < task_array.length; i++){
        task_blog_day = task_array[i][0];
        task_blog_name = task_array[i][1];
        task_blog_status = task_array[i][2];
        task_blog_url = task_array[i][3];
        task_bloger = task_array[i][4];
        task_key = task_array[i][5];

        //tao TASK CONTAINER
        task_container = document.createElement("div");
        task_container.setAttribute("class", "task_container");
        task_container.setAttribute("data-key", task_key);
        task_container.setAttribute('onload', "add_comment(this.parentElement.parentElement)");

        task_img = document.createElement("div");
        task_img.setAttribute("class", "task_img");

        image_blog_view = document.createElement("img");
        image_blog_view.setAttribute("id", "image_blog_view");
        image_blog_view.setAttribute("controls", "");
        // video_view.setAttribute("autoplay", "");
        image_blog_view.src = task_blog_url;


        //tao TITLE DATA
        title_data = document.createElement("div");
        title_data.setAttribute("class", "title_data");

        title_blog_name = document.createElement('p');
        title_blog_name.setAttribute('id', 'task_title_blog_name');
        title_blog_name.setAttribute('contenteditable', false);
        title_blog_name.innerHTML = "Name Blog : ";

        title_blog_day = document.createElement('p');
        title_blog_day.setAttribute('id', 'task_title_blog_day');
        title_blog_day.setAttribute('contenteditable', false);
        title_blog_day.innerHTML = "Day : ";

        title_bloger = document.createElement('p');
        title_bloger.setAttribute('id', 'task_title_bloger');
        title_bloger.setAttribute('contenteditable', false);
        title_bloger.innerHTML = "Bloger : ";


        title_blog_status = document.createElement('p');
        title_blog_status.setAttribute('id', 'task_title_blog_status');
        title_blog_status.setAttribute('contenteditable', false);
        title_blog_status.innerHTML = "Status : ";

        
        //tạo TASK DATA 
        task_data = document.createElement('div');
        task_data.setAttribute('class', 'task_data');

        blog_name = document.createElement('p');  
        blog_name.setAttribute('id', 'task_blog_name');
        blog_name.setAttribute('contenteditable', false);
        blog_name.innerHTML = task_blog_name;

        blog_day = document.createElement('p');
        blog_day.setAttribute('id', 'task_blog_day');
        blog_day.setAttribute('contenteditable', false);
        blog_day.innerHTML = task_blog_day;

        bloger = document.createElement('p');
        bloger.setAttribute('id', 'task_bloger');
        bloger.setAttribute('contenteditable', false);
        bloger.innerHTML = task_bloger; 

        blog_status = document.createElement('p');
        blog_status.setAttribute('id', 'task_blog_status');
        blog_status.setAttribute('contenteditable', false);
        blog_status.innerHTML = task_blog_status;

        title_comment = document.createElement('span');
        title_comment.setAttribute('id', 'title_comment');
        title_comment.setAttribute('contenteditable', false);
        title_comment.innerHTML = "Your Comment ";

        content_comment = document.createElement('input');
        content_comment.setAttribute('id', 'content_comment');
        content_comment.setAttribute('placeholder', 'Write your comment...');
        content_comment.setAttribute('type', 'text');

        btn_comment = document.createElement('button');
        btn_comment.setAttribute('id', 'btn_comment');
        btn_comment.setAttribute('onclick', "add_comment(this.parentElement.parentElement)");
        btn_comment.innerHTML = "Comment";

        load_comment = document.createElement('a');
        load_comment.setAttribute('id', 'load_comment');
        load_comment.setAttribute('onclick', "list_comment(this.parentElement.parentElement)");
        load_comment.innerHTML = "Show more comment";

        data_comment = document.createElement('div');
        data_comment.setAttribute('id', 'data_comment');
        


        
        //tạo TASK TOOLS
        
        task_tool= document.createElement('div');
        task_tool.setAttribute('class', 'task_tool');

        task_done_blog_button = document.createElement('button');
        task_done_blog_button.setAttribute('id', 'task_done_blog_button');
        task_done_blog_button.setAttribute('class', 'task_done_button');
        task_done_blog_button.setAttribute('onclick', "task_done_blog(this.parentElement.parentElement, this)");
        fa_done = document.createElement('i');
        fa_done.setAttribute('class', 'fa fa-check');


        task_edit_blog_button = document.createElement('button');
        task_edit_blog_button.setAttribute('id', 'task_edit_blog_button');
        task_edit_blog_button.setAttribute('class', 'task_edit_button');
        task_edit_blog_button.setAttribute('onclick', "task_edit_blog(this.parentElement.parentElement, this)");
        fa_edit = document.createElement('i');
        fa_edit.setAttribute('class', 'fa fa-pencil-alt');

        task_delete_blog_button = document.createElement('button');
        task_delete_blog_button.setAttribute('id', 'task_delete_blog_button');
        task_delete_blog_button.setAttribute('class', 'task_delete_button');
        task_delete_blog_button.setAttribute('onclick', "task_delete_blog(this.parentElement.parentElement)");
        fa_delete = document.createElement('i');
        fa_delete.setAttribute('class', 'fa fa-trash');


        show_list_blog.append(task_container);

        task_container.append(task_img);
        task_img.append(image_blog_view);

        task_container.append(title_data);
        title_data.append(title_blog_name);
        title_data.append(title_blog_day);
        title_data.append(title_bloger);
        title_data.append(title_blog_status);


        task_container.append(task_data);

        task_data.append(blog_name);
        task_data.append(blog_day);
        task_data.append(bloger);
        task_data.append(blog_status);
        task_data.append(title_comment);
        task_data.append(content_comment);
        task_data.append(btn_comment);
        task_data.append(load_comment);
        task_data.append(data_comment);


        task_container.append(task_tool);
        task_tool.append(task_done_blog_button);
        task_done_blog_button.append(fa_done);
        task_tool.append(task_edit_blog_button);
        task_edit_blog_button.append(fa_edit);
        task_tool.append(task_delete_blog_button);
        task_delete_blog_button.append(fa_delete);
      

      }
      // x= task.childNodes[2].childNodes[0];
      // alert(x);
    });
    

}

function get_blog(){

  show_list_blog_find= document.getElementById('charts');
  show_list_blog_find.innerHTML="";

  var name_blog_find= document.getElementById("name_blog_find").value;
  if (name_blog_find!="") {
    firebase.database().ref('Blog/'+name_blog_find).once('value').then(function(snapshort){


      var task_blog_name_find= snapshort.val().blog_name;
      var task_blog_day_find = snapshort.val().blog_day;
      var task_bloger_find = snapshort.val().bloger;
      var task_blog_status_find= snapshort.val().blog_status;
      var task_blog_url_find= snapshort.val().blog_url;

      
//tao TASK CONTAINER
        //tao TASK CONTAINER
        task_container = document.createElement("div");
        task_container.setAttribute("class", "task_container");
        task_container.setAttribute("data-key", task_key);

        task_img = document.createElement("div");
        task_img.setAttribute("class", "task_img");

        blog_view = document.createElement("img");
        blog_view.setAttribute("id", "blog_view");
        blog_view.src = task_blog_url_find;


        //tao TITLE DATA
        title_data = document.createElement("div");
        title_data.setAttribute("class", "title_data");

        title_blog_name = document.createElement('p');
        title_blog_name.setAttribute('id', 'task_title_blog_name');
        title_blog_name.setAttribute('contenteditable', false);
        title_blog_name.innerHTML = "Name Blog : ";

        title_blog_day = document.createElement('p');
        title_blog_day.setAttribute('id', 'task_title_title_blog_day');
        title_blog_day.setAttribute('contenteditable', false);
        title_blog_day.innerHTML = "Day : ";

        title_blog_status = document.createElement('p');
        title_blog_status.setAttribute('id', 'task_title_title_blog_status');
        title_blog_status.setAttribute('contenteditable', false);
        title_blog_status.innerHTML = "Status : ";
        
        //tạo TASK DATA 
        task_data = document.createElement('div');
        task_data.setAttribute('class', 'task_data');

        
        blog_name = document.createElement('p');
        blog_name.setAttribute('id', 'task_blog_name');
        blog_name.setAttribute('contenteditable', false);
        blog_name.innerHTML = task_blog_name_find;

        blog_day = document.createElement('p');
        blog_day.setAttribute('id', 'task_blog_day');
        blog_day.setAttribute('contenteditable', false);
        blog_day.innerHTML = task_blog_day_find;

        bloger = document.createElement('p');
        bloger.setAttribute('id', 'task_bloger');
        bloger.setAttribute('contenteditable', false);
        bloger.innerHTML = task_bloger_find; 

        blog_status = document.createElement('p');
        blog_status.setAttribute('id', 'task_blog_status');
        blog_status.setAttribute('contenteditable', false);
        blog_status.innerHTML = task_blog_status_find;

        //tạo TASK TOOLS
        task_tool= document.createElement('div');
        task_tool.setAttribute('class', 'task_tool');

        task_done_blog_button = document.createElement('button');
        task_done_blog_button.setAttribute('id', 'task_done_blog_button');
        task_done_blog_button.setAttribute('class', 'task_done_button');
        task_done_blog_button.setAttribute('onclick', "task_done_blog(this.parentElement.parentElement, this)");
        fa_done = document.createElement('i');
        fa_done.setAttribute('class', 'fa fa-check');


        task_edit_blog_button = document.createElement('button');
        task_edit_blog_button.setAttribute('id', 'task_edit_blog_button');
        task_edit_blog_button.setAttribute('class', 'task_edit_button');
        task_edit_blog_button.setAttribute('onclick', "task_edit_blog(this.parentElement.parentElement, this)");
        fa_edit = document.createElement('i');
        fa_edit.setAttribute('class', 'fa fa-pencil-alt');

        task_delete_blog_button = document.createElement('button');
        task_delete_blog_button.setAttribute('id', 'task_delete_blog_button');
        task_delete_blog_button.setAttribute('class', 'task_delete_button');
        task_delete_blog_button.setAttribute('onclick', "task_delete_blog(this.parentElement.parentElement)");
        fa_delete = document.createElement('i');
        fa_delete.setAttribute('class', 'fa fa-trash');


        show_list_blog_find.append(task_container);

        task_container.append(task_img);
        task_img.append(blog_view);

        task_container.append(title_data);
        title_data.append(title_blog_name);
        title_data.append(title_blog_day);
        title_data.append(title_bloger);
        title_data.append(title_blog_status);


        task_container.append(task_data);
        task_data.append(blog_name);
        task_data.append(blog_day);
        task_data.append(bloger);
        task_data.append(blog_status);


        task_container.append(task_tool);
        task_tool.append(task_done_blog_button);
        task_done_blog_button.append(fa_done);
        task_tool.append(task_edit_blog_button);
        task_edit_blog_button.append(fa_edit);
        task_tool.append(task_delete_blog_button);
        task_delete_blog_button.append(fa_delete);

    })
  };
  if (name_blog_find==""){
    alert("Please do not leave any items blank!");
    list_blog();
  };
    

}

// /*------------------------------------------------------------------------*/  
//   // button edit, button delete FOR DONATE
  

function task_edit_blog(task, edit_button_blog){
    

    blog_name = task.childNodes[2].childNodes[0];
    blog_name.setAttribute("contenteditable", false);
    blog_name.setAttribute("class", "task_data_editing");
    blog_name.setAttribute("id", "task_blog_name");

    blog_day = task.childNodes[2].childNodes[1];
    blog_day.setAttribute("contenteditable", true);
    blog_day.setAttribute("class", "task_data_editing");
    blog_day.setAttribute("id", "task_blog_day");

    bloger = task.childNodes[2].childNodes[2];
    bloger.setAttribute("contenteditable", true);
    bloger.setAttribute("class", "task_data_editing");
    bloger.setAttribute("id", "task_bloger");

    blog_status = task.childNodes[2].childNodes[3];
    blog_status.setAttribute("contenteditable", true);
    blog_status.setAttribute("class", "task_data_editing");
    blog_status.setAttribute("id", "task_blog_status");

}

function task_done_blog(task, edit_button_blog){
    

    blog_name = task.childNodes[2].childNodes[0];
    blog_name.setAttribute("contenteditable", false);
    blog_name.setAttribute("class", "task_data_editing");
    blog_name.setAttribute("id", "task_blog_name");

    blog_day = task.childNodes[2].childNodes[1];
    blog_day.setAttribute("contenteditable", false);
    blog_day.setAttribute("class", "task_data_editing");
    blog_day.setAttribute("id", "task_blog_day");

    bloger = task.childNodes[2].childNodes[2];
    bloger.setAttribute("contenteditable", false);
    bloger.setAttribute("class", "task_data_editing");
    bloger.setAttribute("id", "task_bloger");

    blog_status = task.childNodes[2].childNodes[3];
    blog_status.setAttribute("contenteditable", false);
    blog_status.setAttribute("class", "task_data_editing");
    blog_status.setAttribute("id", "task_blog_status");

    // change in firebase to
    var key = task.getAttribute("data-key");
    var blog_url = task.childNodes[0].childNodes[0].src;
    var blog_name = task.childNodes[2].childNodes[0].innerHTML;
    var blog_day= task.childNodes[2].childNodes[1].innerHTML;
    var bloger = task.childNodes[2].childNodes[2].innerHTML;
    var blog_status = task.childNodes[2].childNodes[3].innerHTML;

    var task_obj = {
      
      blog_name: blog_name,
      blog_day: blog_day,
      bloger: bloger,
      blog_status: blog_status,
      blog_url: blog_url,

       key: key,
    };
    
    var updates = {};
    updates["/Blog/" + blog_name] = task_obj;
    firebase.database().ref().update(updates);
}


function task_delete_blog(task){
    // key = task.getAttribute("data-key");
    var blog_name = task.childNodes[2].childNodes[0].innerHTML;
    alert(blog_name);
    task_to_remove_blog = firebase.database().ref( "Blog/" + blog_name);
    task_to_remove_blog.remove();

    task_to_remove_comment = firebase.database().ref( "Comment/" + blog_name);
    task_to_remove_comment.remove();

    // remove from html view or whatevesss
    task.remove();
}

// /*------------------------------------------------------------------------*/  
