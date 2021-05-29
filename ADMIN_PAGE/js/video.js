/*------------------------------------------------------------------------*/  
/*PET*/
function close_add_video_form(){
      document.getElementById("box-add-video").style.display = 'none';

}

function chooseVideo(e){
  fileVideo = e.target.files[0];
}

function add_video(){
    

    var video_name = document.getElementById('video_name').value;
    var video_day = document.getElementById('video_day').value;
    var video_title = document.getElementById('video_title').value;
    var video_describe = document.getElementById('video_describe').value;
    // var image_view = document.getElementById('image_view');
    
    
      if(video_name.length != 0 && video_day.length != 0 && video_title.length != 0 && video_describe.length != 0){
          // our boxes have data and we take database
          if (document.getElementById("check_video").checked==true) {
            
              var uploadTask = firebase.storage().ref("/Video/"+video_name+".mp4").put(fileVideo);
              uploadTask.snapshot.ref.getDownloadURL().then((URL_video) => {
              video_url = URL_video;
                var key = firebase.database().ref().child('Video').push().key;
                var task = {
                  
                  video_name: video_name,
                  video_day: video_day,
                  video_title: video_title,
                  video_describe: video_describe,
                  video_url: video_url,
                  key: key,
                };

                var updates = {};
                updates["/Video/" + video_name] = task;
                firebase.database().ref().update(updates);
                document.getElementById("box-add-video").style.display = 'none';
                
                  list_video();
              });
            
          }else {
                  alert("Please do not leave any items blank!");
                  } 
        }else {
                  alert("Please do not leave any items blank!");
                } 
  }


function add_video_form(){

    document.getElementById("box-add-video").style.display = 'block';
    
}


function list_video(){
    
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
    var j= document.getElementById("btn_add_video").style.display;
    if (j!="block") {
      document.getElementById("btn_add_video").style.display='block';
      document.getElementById("box-find-video").style.display='block';
      
      };
    var z= document.getElementById("btn_add_pet").style.display;
    if (z!="none") {
      document.getElementById("btn_add_pet").style.display='none';
      document.getElementById("box-add-pet").style.display='none';
      document.getElementById("box-find-pet").style.display='none';
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
    

  
    show_list_video= document.getElementById('charts');
    show_list_video.innerHTML = "";
 
    task_array = [];//khai bao bien
    //đưa dữ liệu vào id="container" trong
    
    
    firebase.database().ref("Video").once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        task_array.push(Object.values(childData));
      });
       
      
      //tạo vòng lặp để tạo các task 
      for(var i, i = 0; i < task_array.length; i++){
        task_key = task_array[i][0];
        task_video_day = task_array[i][1];
        task_video_describe = task_array[i][2];
        task_video_name = task_array[i][3];
        task_video_title = task_array[i][4];
        task_video_url = task_array[i][5];

        //tao TASK CONTAINER
        task_container = document.createElement("div");
        task_container.setAttribute("class", "task_container");
        task_container.setAttribute("data-key", task_key);

        task_img = document.createElement("div");
        task_img.setAttribute("class", "task_img");

        video_view = document.createElement("video");
        video_view.setAttribute("id", "video_view");
        video_view.setAttribute("controls", "");
        // video_view.setAttribute("autoplay", "");
        video_view.src = task_video_url;


        //tao TITLE DATA
        title_data = document.createElement("div");
        title_data.setAttribute("class", "title_data");

        title_video_name = document.createElement('p');
        title_video_name.setAttribute('id', 'task_title_video_name');
        title_video_name.setAttribute('contenteditable', false);
        title_video_name.innerHTML = "Name : ";

        title_video_title = document.createElement('p');
        title_video_title.setAttribute('id', 'task_title_video_title');
        title_video_title.setAttribute('contenteditable', false);
        title_video_title.innerHTML = "Title : ";

        title_video_day = document.createElement('p');
        title_video_day.setAttribute('id', 'task_title_video_day');
        title_video_day.setAttribute('contenteditable', false);
        title_video_day.innerHTML = "Day Up : ";


        title_video_describe = document.createElement('p');
        title_video_describe.setAttribute('id', 'task_title_video_describe');
        title_video_describe.setAttribute('contenteditable', false);
        title_video_describe.innerHTML = "Describe : ";

        
        //tạo TASK DATA 
        task_data = document.createElement('div');
        task_data.setAttribute('class', 'task_data');

        
        video_name = document.createElement('p');
        video_name.setAttribute('id', 'task_video_name');
        video_name.setAttribute('contenteditable', false);
        video_name.innerHTML = task_video_name;

        video_title = document.createElement('p');
        video_title.setAttribute('id', 'task_video_title');
        video_title.setAttribute('contenteditable', false);
        video_title.innerHTML = task_video_title;

        video_day = document.createElement('p');
        video_day.setAttribute('id', 'task_video_day');
        video_day.setAttribute('contenteditable', false);
        video_day.innerHTML = task_video_day; 

        video_describe = document.createElement('p');
        video_describe.setAttribute('id', 'task_video_describe');
        video_describe.setAttribute('contenteditable', false);
        video_describe.innerHTML = task_video_describe;

        //tạo TASK TOOLS
        
        task_tool= document.createElement('div');
        task_tool.setAttribute('class', 'task_tool');

        task_done_video_button = document.createElement('button');
        task_done_video_button.setAttribute('id', 'task_done_video_button');
        task_done_video_button.setAttribute('class', 'task_done_button');
        task_done_video_button.setAttribute('onclick', "task_done_video(this.parentElement.parentElement, this)");
        fa_done = document.createElement('i');
        fa_done.setAttribute('class', 'fa fa-check');


        task_edit_video_button = document.createElement('button');
        task_edit_video_button.setAttribute('id', 'task_edit_video_button');
        task_edit_video_button.setAttribute('class', 'task_edit_button');
        task_edit_video_button.setAttribute('onclick', "task_edit_video(this.parentElement.parentElement, this)");
        fa_edit = document.createElement('i');
        fa_edit.setAttribute('class', 'fa fa-pencil-alt');

        task_delete_video_button = document.createElement('button');
        task_delete_video_button.setAttribute('id', 'task_delete_video_button');
        task_delete_video_button.setAttribute('class', 'task_delete_button');
        task_delete_video_button.setAttribute('onclick', "task_delete_video(this.parentElement.parentElement)");
        fa_delete = document.createElement('i');
        fa_delete.setAttribute('class', 'fa fa-trash');


        show_list_video.append(task_container);

        task_container.append(task_img);
        task_img.append(video_view);

        task_container.append(title_data);
        title_data.append(title_video_name);
        title_data.append(title_video_title);
        title_data.append(title_video_day);
        title_data.append(title_video_describe);


        task_container.append(task_data);
        task_data.append(video_name);
        task_data.append(video_title);
        task_data.append(video_day);
        task_data.append(video_describe);


        task_container.append(task_tool);
        task_tool.append(task_done_video_button);
        task_done_video_button.append(fa_done);
        task_tool.append(task_edit_video_button);
        task_edit_video_button.append(fa_edit);
        task_tool.append(task_delete_video_button);
        task_delete_video_button.append(fa_delete);
      

      }

    });
  }

function get_video(){

  show_list_video_find= document.getElementById('charts');
  show_list_video_find.innerHTML = "";

  var name_video_find= document.getElementById("name_video_find").value;
  if (name_video_find!="") {
    firebase.database().ref('Video/'+name_video_find).once('value').then(function(snapshort){


      var task_video_name_find= snapshort.val().video_name;
      var task_video_day_find = snapshort.val().video_day;
      var task_video_title_find = snapshort.val().video_title;
      var task_video_describe_find= snapshort.val().video_describe;
      var task_video_url_find= snapshort.val().video_url;

      
//tao TASK CONTAINER
        //tao TASK CONTAINER
        task_container = document.createElement("div");
        task_container.setAttribute("class", "task_container");
        task_container.setAttribute("data-key", task_key);

        task_img = document.createElement("div");
        task_img.setAttribute("class", "task_img");

        video_view = document.createElement("video");
        video_view.setAttribute("id", "video_view");
        video_view.setAttribute("controls", "");
        // video_view.setAttribute("autoplay", "");
        video_view.src = task_video_url_find;


        //tao TITLE DATA
        title_data = document.createElement("div");
        title_data.setAttribute("class", "title_data");

        title_video_name = document.createElement('p');
        title_video_name.setAttribute('id', 'task_title_video_name');
        title_video_name.setAttribute('contenteditable', false);
        title_video_name.innerHTML = "Name : ";

        title_video_title = document.createElement('p');
        title_video_title.setAttribute('id', 'task_title_video_title');
        title_video_title.setAttribute('contenteditable', false);
        title_video_title.innerHTML = "Title : ";

        title_video_day = document.createElement('p');
        title_video_day.setAttribute('id', 'task_title_video_day');
        title_video_day.setAttribute('contenteditable', false);
        title_video_day.innerHTML = "Day Up : ";


        title_video_describe = document.createElement('p');
        title_video_describe.setAttribute('id', 'task_title_video_describe');
        title_video_describe.setAttribute('contenteditable', false);
        title_video_describe.innerHTML = "Describe : ";

        
        //tạo TASK DATA 
        task_data = document.createElement('div');
        task_data.setAttribute('class', 'task_data');

        
        video_name = document.createElement('p');
        video_name.setAttribute('id', 'task_video_name');
        video_name.setAttribute('contenteditable', false);
        video_name.innerHTML = task_video_name_find;

        video_title = document.createElement('p');
        video_title.setAttribute('id', 'task_video_title');
        video_title.setAttribute('contenteditable', false);
        video_title.innerHTML = task_video_title_find;

        video_day = document.createElement('p');
        video_day.setAttribute('id', 'task_video_day');
        video_day.setAttribute('contenteditable', false);
        video_day.innerHTML = task_video_day_find; 

        video_describe = document.createElement('p');
        video_describe.setAttribute('id', 'task_video_describe');
        video_describe.setAttribute('contenteditable', false);
        video_describe.innerHTML = task_video_describe_find;

        //tạo TASK TOOLS
        
        task_tool= document.createElement('div');
        task_tool.setAttribute('class', 'task_tool');

        task_done_video_button = document.createElement('button');
        task_done_video_button.setAttribute('id', 'task_done_video_button');
        task_done_video_button.setAttribute('class', 'task_done_button');
        task_done_video_button.setAttribute('onclick', "task_done_video(this.parentElement.parentElement, this)");
        fa_done = document.createElement('i');
        fa_done.setAttribute('class', 'fa fa-check');


        task_edit_video_button = document.createElement('button');
        task_edit_video_button.setAttribute('id', 'task_edit_video_button');
        task_edit_video_button.setAttribute('class', 'task_edit_button');
        task_edit_video_button.setAttribute('onclick', "task_edit_video(this.parentElement.parentElement, this)");
        fa_edit = document.createElement('i');
        fa_edit.setAttribute('class', 'fa fa-pencil-alt');

        task_delete_video_button = document.createElement('button');
        task_delete_video_button.setAttribute('id', 'task_delete_video_button');
        task_delete_video_button.setAttribute('class', 'task_delete_button');
        task_delete_video_button.setAttribute('onclick', "task_delete_video(this.parentElement.parentElement)");
        fa_delete = document.createElement('i');
        fa_delete.setAttribute('class', 'fa fa-trash');


        show_list_video_find.append(task_container);

        task_container.append(task_img);
        task_img.append(video_view);

        task_container.append(title_data);
        title_data.append(title_video_name);
        title_data.append(title_video_title);
        title_data.append(title_video_day);
        title_data.append(title_video_describe);


        task_container.append(task_data);
        task_data.append(video_name);
        task_data.append(video_title);
        task_data.append(video_day);
        task_data.append(video_describe);


        task_container.append(task_tool);
        task_tool.append(task_done_video_button);
        task_done_video_button.append(fa_done);
        task_tool.append(task_edit_video_button);
        task_edit_video_button.append(fa_edit);
        task_tool.append(task_delete_video_button);
        task_delete_video_button.append(fa_delete);

    })
  };
  if (name_video_find==""){
    alert("Please do not leave any items blank!");
    list_video();
  };
    

}

/*------------------------------------------------------------------------*/  
  // button edit, button delete FOR DONATE
  

function task_edit_video(task, edit_button_video){
    

    video_name = task.childNodes[2].childNodes[0];
    video_name.setAttribute("contenteditable", false);
    video_name.setAttribute("class", "task_data_editing");
    video_name.setAttribute("id", "task_video_name");

    video_title = task.childNodes[2].childNodes[1];
    video_title.setAttribute("contenteditable", true);
    video_title.setAttribute("class", "task_data_editing");
    video_title.setAttribute("id", "task_video_title");

    video_day = task.childNodes[2].childNodes[2];
    video_day.setAttribute("contenteditable", true);
    video_day.setAttribute("class", "task_data_editing");
    video_day.setAttribute("id", "task_video_day");

    video_describe = task.childNodes[2].childNodes[3];
    video_describe.setAttribute("contenteditable", true);
    video_describe.setAttribute("class", "task_data_editing");
    video_describe.setAttribute("id", "task_video_describe");

}

function task_done_video(task, edit_button_video){
    

    video_name = task.childNodes[2].childNodes[0];
    video_name.setAttribute("contenteditable", false);
    video_name.setAttribute("class", "task_data_editing");
    video_name.setAttribute("id", "task_video_name");

    video_title = task.childNodes[2].childNodes[1];
    video_title.setAttribute("contenteditable", false);
    video_title.setAttribute("class", "task_data_editing");
    video_title.setAttribute("id", "task_video_title");

    video_day = task.childNodes[2].childNodes[2];
    video_day.setAttribute("contenteditable", false);
    video_day.setAttribute("class", "task_data_editing");
    video_day.setAttribute("id", "task_video_day");

    video_describe = task.childNodes[2].childNodes[3];
    video_describe.setAttribute("contenteditable", false);
    video_describe.setAttribute("class", "task_data_editing");
    video_describe.setAttribute("id", "task_video_describe");

    // change in firebase to
    var key = task.getAttribute("data-key");
    var video_url = task.childNodes[0].childNodes[0].src;
    var video_name = task.childNodes[2].childNodes[0].innerHTML;
    var video_title= task.childNodes[2].childNodes[1].innerHTML;
    var video_day = task.childNodes[2].childNodes[2].innerHTML;
    var video_describe = task.childNodes[2].childNodes[3].innerHTML;

    var task_obj = {
      
      video_name: video_name,
      video_title: video_title,
      video_day: video_day,
      video_describe: video_describe,
      video_url: video_url,

       key: key,
    };
    
    var updates = {};
    updates["/Video/" + video_name] = task_obj;
    firebase.database().ref().update(updates);
}


function task_delete_pet(task){
    key = task.getAttribute("data-key");
    var video_name = task.childNodes[2].childNodes[0].innerHTML;

    task_to_remove = firebase.database().ref( "Video/" + video_name);
    task_to_remove.remove();

    // remove from html view or whatevesss
    task.remove();
}

/*------------------------------------------------------------------------*/  
