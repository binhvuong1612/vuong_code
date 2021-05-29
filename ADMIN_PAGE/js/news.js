/*------------------------------------------------------------------------*/  
/*PET*/
function close_add_news_form(){
      document.getElementById("box-add-news").style.display = 'none';

}

function chooseNews(e){
  fileNews = e.target.files[0];
}

function add_news(){
    

    var news_name = document.getElementById('news_name').value;
    var news_day = document.getElementById('news_day').value;
    var news_title = document.getElementById('news_title').value;
    var news_describe = document.getElementById('news_describe').value;
    // var image_view = document.getElementById('image_view');
    
    
      if(news_name.length != 0 && news_day.length != 0 && news_title.length != 0 && news_describe.length != 0){
          // our boxes have data and we take database
          if (document.getElementById("check_news").checked==true) {
            
              var uploadTask = firebase.storage().ref("/News/"+news_name+".jpg").put(fileNews);
              uploadTask.snapshot.ref.getDownloadURL().then((URL_img) => {
              news_url = URL_img;
                var key = firebase.database().ref().child('News').push().key;
                var task = {
                  
                  news_name: news_name,
                  news_day: news_day,
                  news_title: news_title,
                  news_describe: news_describe,
                  news_url: news_url,
                  key: key,
                };

                var updates = {};
                updates["/News/" + news_name] = task;
                firebase.database().ref().update(updates);

                document.getElementById("box-add-news").style.display = 'none';  
                list_news(); 
            }); 
                 
                                        
              
             
          }else {
                  alert("Please do not leave any items blank!");
                  } 
        }else {
                  alert("Please do not leave any items blank!");
                }

  }


function add_news_form(){

    document.getElementById("box-add-news").style.display = 'block';
    
}


function list_news(){
    
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
    var k= document.getElementById("btn_add_news").style.display;
    if (k!="block") {
      document.getElementById("btn_add_news").style.display='block';
      document.getElementById("box-find-news").style.display='block';
      
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
    var l= document.getElementById("btn_add_blog").style.display;
    if (l!="none") {
      document.getElementById("btn_add_blog").style.display='none';
      document.getElementById("box-add-blog").style.display='none';
      document.getElementById("box-find-blog").style.display='none';
      };
    

  
    show_list_news= document.getElementById('charts');
    show_list_news.innerHTML = "";
 
    task_array = [];//khai bao bien
    //đưa dữ liệu vào id="container" trong
    
    
    firebase.database().ref("News").once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        task_array.push(Object.values(childData));
      });


      //tạo vòng lặp để tạo các task 
      for(var i, i = 0; i < task_array.length; i++){
        task_key = task_array[i][0];
        task_news_day = task_array[i][1];
        task_news_describe = task_array[i][2];
        task_news_name = task_array[i][3];
        task_news_title = task_array[i][4];
        task_news_url = task_array[i][5];

        //tao TASK CONTAINER
        task_container = document.createElement("div");
        task_container.setAttribute("class", "task_container");
        task_container.setAttribute("data-key", task_key);

        task_img = document.createElement("div");
        task_img.setAttribute("class", "task_img");

        image_news_view = document.createElement("img");
        image_news_view.setAttribute("id", "image_news_view");
        image_news_view.setAttribute("controls", "");
        // video_view.setAttribute("autoplay", "");
        image_news_view.src = task_news_url;


        //tao TITLE DATA
        title_data = document.createElement("div");
        title_data.setAttribute("class", "title_data");

        title_news_name = document.createElement('p');
        title_news_name.setAttribute('id', 'task_title_news_name');
        title_news_name.setAttribute('contenteditable', false);
        title_news_name.innerHTML = "Name : ";

        title_news_title = document.createElement('p');
        title_news_title.setAttribute('id', 'task_title_news_title');
        title_news_title.setAttribute('contenteditable', false);
        title_news_title.innerHTML = "Title : ";

        title_news_day = document.createElement('p');
        title_news_day.setAttribute('id', 'task_title_news_day');
        title_news_day.setAttribute('contenteditable', false);
        title_news_day.innerHTML = "Day Up : ";


        title_news_describe = document.createElement('p');
        title_news_describe.setAttribute('id', 'task_title_news_describe');
        title_news_describe.setAttribute('contenteditable', false);
        title_news_describe.innerHTML = "Describe : ";

        
        //tạo TASK DATA 
        task_data = document.createElement('div');
        task_data.setAttribute('class', 'task_data');

        
        news_name = document.createElement('p');
        news_name.setAttribute('id', 'task_news_name');
        news_name.setAttribute('contenteditable', false);
        news_name.innerHTML = task_news_name;

        news_title = document.createElement('p');
        news_title.setAttribute('id', 'task_news_title');
        news_title.setAttribute('contenteditable', false);
        news_title.innerHTML = task_news_title;

        news_day = document.createElement('p');
        news_day.setAttribute('id', 'task_news_day');
        news_day.setAttribute('contenteditable', false);
        news_day.innerHTML = task_news_day; 

        news_describe = document.createElement('p');
        news_describe.setAttribute('id', 'task_news_describe');
        news_describe.setAttribute('contenteditable', false);
        news_describe.innerHTML = task_news_describe;

        //tạo TASK TOOLS
        
        task_tool= document.createElement('div');
        task_tool.setAttribute('class', 'task_tool');

        task_done_news_button = document.createElement('button');
        task_done_news_button.setAttribute('id', 'task_done_news_button');
        task_done_news_button.setAttribute('class', 'task_done_button');
        task_done_news_button.setAttribute('onclick', "task_done_news(this.parentElement.parentElement, this)");
        fa_done = document.createElement('i');
        fa_done.setAttribute('class', 'fa fa-check');


        task_edit_news_button = document.createElement('button');
        task_edit_news_button.setAttribute('id', 'task_edit_news_button');
        task_edit_news_button.setAttribute('class', 'task_edit_button');
        task_edit_news_button.setAttribute('onclick', "task_edit_news(this.parentElement.parentElement, this)");
        fa_edit = document.createElement('i');
        fa_edit.setAttribute('class', 'fa fa-pencil-alt');

        task_delete_news_button = document.createElement('button');
        task_delete_news_button.setAttribute('id', 'task_delete_news_button');
        task_delete_news_button.setAttribute('class', 'task_delete_button');
        task_delete_news_button.setAttribute('onclick', "task_delete_news(this.parentElement.parentElement)");
        fa_delete = document.createElement('i');
        fa_delete.setAttribute('class', 'fa fa-trash');


        show_list_news.append(task_container);

        task_container.append(task_img);
        task_img.append(image_news_view);

        task_container.append(title_data);
        title_data.append(title_news_name);
        title_data.append(title_news_title);
        title_data.append(title_news_day);
        title_data.append(title_news_describe);


        task_container.append(task_data);
        task_data.append(news_name);
        task_data.append(news_title);
        task_data.append(news_day);
        task_data.append(news_describe);


        task_container.append(task_tool);
        task_tool.append(task_done_news_button);
        task_done_news_button.append(fa_done);
        task_tool.append(task_edit_news_button);
        task_edit_news_button.append(fa_edit);
        task_tool.append(task_delete_news_button);
        task_delete_news_button.append(fa_delete);
      

      }

    });
}

function get_news(){

  show_list_news_find= document.getElementById('charts');
  show_list_news_find.innerHTML = "";

  var name_news_find= document.getElementById("name_news_find").value;
  if (name_news_find!="") {
    firebase.database().ref('News/'+name_news_find).once('value').then(function(snapshort){


      var task_news_name_find= snapshort.val().news_name;
      var task_news_day_find = snapshort.val().news_day;
      var task_news_title_find = snapshort.val().news_title;
      var task_news_describe_find= snapshort.val().news_describe;
      var task_news_url_find= snapshort.val().news_url;

      
//tao TASK CONTAINER
        //tao TASK CONTAINER
        task_container = document.createElement("div");
        task_container.setAttribute("class", "task_container");
        task_container.setAttribute("data-key", task_key);

        task_img = document.createElement("div");
        task_img.setAttribute("class", "task_img");

        news_view = document.createElement("img");
        news_view.setAttribute("id", "news_view");
        news_view.src = task_news_url_find;


        //tao TITLE DATA
        title_data = document.createElement("div");
        title_data.setAttribute("class", "title_data");

        title_news_name = document.createElement('p');
        title_news_name.setAttribute('id', 'task_title_news_name');
        title_news_name.setAttribute('contenteditable', false);
        title_news_name.innerHTML = "Name : ";

        title_news_title = document.createElement('p');
        title_news_title.setAttribute('id', 'task_title_news_title');
        title_news_title.setAttribute('contenteditable', false);
        title_news_title.innerHTML = "Title : ";

        title_news_day = document.createElement('p');
        title_news_day.setAttribute('id', 'task_title_news_day');
        title_news_day.setAttribute('contenteditable', false);
        title_news_day.innerHTML = "Day Up : ";


        title_news_describe = document.createElement('p');
        title_news_describe.setAttribute('id', 'task_title_news_describe');
        title_news_describe.setAttribute('contenteditable', false);
        title_news_describe.innerHTML = "Describe : ";

        
        //tạo TASK DATA 
        task_data = document.createElement('div');
        task_data.setAttribute('class', 'task_data');

        
        news_name = document.createElement('p');
        news_name.setAttribute('id', 'task_news_name');
        news_name.setAttribute('contenteditable', false);
        news_name.innerHTML = task_news_name_find;

        news_title = document.createElement('p');
        news_title.setAttribute('id', 'task_news_title');
        news_title.setAttribute('contenteditable', false);
        news_title.innerHTML = task_news_title_find;

        news_day = document.createElement('p');
        news_day.setAttribute('id', 'task_news_day');
        news_day.setAttribute('contenteditable', false);
        news_day.innerHTML = task_news_day_find; 

        news_describe = document.createElement('p');
        news_describe.setAttribute('id', 'task_news_describe');
        news_describe.setAttribute('contenteditable', false);
        news_describe.innerHTML = task_news_describe_find;

        //tạo TASK TOOLS
        task_tool= document.createElement('div');
        task_tool.setAttribute('class', 'task_tool');

        task_done_news_button = document.createElement('button');
        task_done_news_button.setAttribute('id', 'task_done_news_button');
        task_done_news_button.setAttribute('class', 'task_done_button');
        task_done_news_button.setAttribute('onclick', "task_done_news(this.parentElement.parentElement, this)");
        fa_done = document.createElement('i');
        fa_done.setAttribute('class', 'fa fa-check');


        task_edit_news_button = document.createElement('button');
        task_edit_news_button.setAttribute('id', 'task_edit_news_button');
        task_edit_news_button.setAttribute('class', 'task_edit_button');
        task_edit_news_button.setAttribute('onclick', "task_edit_news(this.parentElement.parentElement, this)");
        fa_edit = document.createElement('i');
        fa_edit.setAttribute('class', 'fa fa-pencil-alt');

        task_delete_news_button = document.createElement('button');
        task_delete_news_button.setAttribute('id', 'task_delete_news_button');
        task_delete_news_button.setAttribute('class', 'task_delete_button');
        task_delete_news_button.setAttribute('onclick', "task_delete_news(this.parentElement.parentElement)");
        fa_delete = document.createElement('i');
        fa_delete.setAttribute('class', 'fa fa-trash');


        show_list_news_find.append(task_container);

        task_container.append(task_img);
        task_img.append(news_view);

        task_container.append(title_data);
        title_data.append(title_news_name);
        title_data.append(title_news_title);
        title_data.append(title_news_day);
        title_data.append(title_news_describe);


        task_container.append(task_data);
        task_data.append(news_name);
        task_data.append(news_title);
        task_data.append(news_day);
        task_data.append(news_describe);


        task_container.append(task_tool);
        task_tool.append(task_done_news_button);
        task_done_news_button.append(fa_done);
        task_tool.append(task_edit_news_button);
        task_edit_news_button.append(fa_edit);
        task_tool.append(task_delete_news_button);
        task_delete_news_button.append(fa_delete);

    })
  };
  if (name_news_find==""){
    alert("Please do not leave any items blank!");
    list_news();
  };
    

}

/*------------------------------------------------------------------------*/  
  // button edit, button delete FOR DONATE
  

function task_edit_news(task, edit_button_news){
    

    news_name = task.childNodes[2].childNodes[0];
    news_name.setAttribute("contenteditable", false);
    news_name.setAttribute("class", "task_data_editing");
    news_name.setAttribute("id", "task_news_name");

    news_title = task.childNodes[2].childNodes[1];
    news_title.setAttribute("contenteditable", true);
    news_title.setAttribute("class", "task_data_editing");
    news_title.setAttribute("id", "task_news_title");

    news_day = task.childNodes[2].childNodes[2];
    news_day.setAttribute("contenteditable", true);
    news_day.setAttribute("class", "task_data_editing");
    news_day.setAttribute("id", "task_news_day");

    news_describe = task.childNodes[2].childNodes[3];
    news_describe.setAttribute("contenteditable", true);
    news_describe.setAttribute("class", "task_data_editing");
    news_describe.setAttribute("id", "task_news_describe");

}

function task_done_news(task, edit_button_news){
    

    news_name = task.childNodes[2].childNodes[0];
    news_name.setAttribute("contenteditable", false);
    news_name.setAttribute("class", "task_data_editing");
    news_name.setAttribute("id", "task_video_name");

    news_title = task.childNodes[2].childNodes[1];
    news_title.setAttribute("contenteditable", false);
    news_title.setAttribute("class", "task_data_editing");
    news_title.setAttribute("id", "task_news_title");

    news_day = task.childNodes[2].childNodes[2];
    news_day.setAttribute("contenteditable", false);
    news_day.setAttribute("class", "task_data_editing");
    news_day.setAttribute("id", "task_news_day");

    news_describe = task.childNodes[2].childNodes[3];
    news_describe.setAttribute("contenteditable", false);
    news_describe.setAttribute("class", "task_data_editing");
    news_describe.setAttribute("id", "task_news_describe");

    // change in firebase to
    var key = task.getAttribute("data-key");
    var news_url = task.childNodes[0].childNodes[0].src;
    var news_name = task.childNodes[2].childNodes[0].innerHTML;
    var news_title= task.childNodes[2].childNodes[1].innerHTML;
    var news_day = task.childNodes[2].childNodes[2].innerHTML;
    var news_describe = task.childNodes[2].childNodes[3].innerHTML;

    var task_obj = {
      
      news_name: news_name,
      news_title: news_title,
      news_day: news_day,
      news_describe: news_describe,
      news_url: news_url,

       key: key,
    };
    
    var updates = {};
    updates["/News/" + news_name] = task_obj;
    firebase.database().ref().update(updates);
}


function task_delete_news(task){
    key = task.getAttribute("data-key");
    var news_name = task.childNodes[2].childNodes[0].innerHTML;

    task_to_remove = firebase.database().ref( "News/" + news_name);
    task_to_remove.remove();

    // remove from html view or whatevesss
    task.remove();
}

/*------------------------------------------------------------------------*/  
