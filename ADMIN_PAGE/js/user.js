  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCX3q_oJgMPwQ7qJKWsTaucToeMyJLyTTg",
    authDomain: "bvdatabase-8d2bd.firebaseapp.com",
    databaseURL: "https://bvdatabase-8d2bd-default-rtdb.firebaseio.com",
    projectId: "bvdatabase-8d2bd",
    storageBucket: "bvdatabase-8d2bd.appspot.com",
    messagingSenderId: "945711249581",
    appId: "1:945711249581:web:d090b1bd6577ed662cee24"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// This is for able to see chart. We are using Apex Chart. U can check the documentation of Apex Charts too..
var options = {
  series: [
    {
      name: "Donate",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66,60,61,63],
    },
    {
      name: "Revenue",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94,88,94,86],
    },
    {
      name: "Expenditure",
      data: [20, 24, 26, 28, 25, 28, 22, 30, 24,45,32,35],
    },
  ],
  chart: {
    type: "bar",
    height: 250, // make this 250
    sparkline: {
      enabled: true, // make this true
    },
  },    
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["Jan","Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Dec", "Nov",],
  },
  yaxis: {
    title: {
      text: "$ (thousands)",
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands";
      },
    },
  },
};

var chart = new ApexCharts(document.querySelector("#apex"), options);
chart.render();

// Sidebar Toggle Codes;

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");
var sidebarCloseIcon = document.getElementById("sidebarIcon");

function toggleSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add("sidebar_responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove("sidebar_responsive");
    sidebarOpen = false;
  }
}
function signout(){
    firebase.auth().signOut();
    alert("Logged Out!");

    location.assign("file:///C:/Users/ADMIN/Desktop/Du%20Lieu%20Cua%20Vuong/HTML_CSS_JS/form/form.html");
}
/*COUNT USER AND PET*/
function count_user_and_pet(){
  var task_array_admin=[];
  var task_array_volumteers=[];
  var task_array_adopters=[];
  var task_array_employees=[];
  var task_array_pet=[];


  firebase.database().ref("Admin").once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        task_array_admin.push(Object.values(childData));
      });
      var number_admin=task_array_admin.length;
      
        firebase.database().ref("Volumteers").once('value', function(snapshot) {
          snapshot.forEach(function(childSnapshot) {
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            task_array_volumteers.push(Object.values(childData));
          });
          var number_volumteers=task_array_volumteers.length;
      
            firebase.database().ref("Adopters").once('value', function(snapshot) {
              snapshot.forEach(function(childSnapshot) {
                var childKey = childSnapshot.key;
                var childData = childSnapshot.val();
                task_array_adopters.push(Object.values(childData));
              });
              var number_adopters=task_array_adopters.length;
      
                firebase.database().ref("Employees").once('value', function(snapshot) {
                  snapshot.forEach(function(childSnapshot) {
                    var childKey = childSnapshot.key;
                    var childData = childSnapshot.val();
                    task_array_employees.push(Object.values(childData));
                  });
                  var number_employees=task_array_employees.length;
      

                    firebase.database().ref("Pet").once('value', function(snapshot) {
                      snapshot.forEach(function(childSnapshot) {
                        var childKey = childSnapshot.key;
                        var childData = childSnapshot.val();
                        task_array_pet.push(Object.values(childData));
                      });
                      var number_pet=task_array_pet.length;
                      
                      document.getElementById("number_pet").innerHTML=task_array_pet.length;
                      document.getElementById("number_user").innerHTML=number_admin+number_volumteers+number_adopters+number_employees;
     
                    });
                }); 
            });   
        });
  });

}


/*ADMIN*/
function close_add_user_form(){
      document.getElementById("box-add-user").style.display = 'none';

}

function add_user(){
    
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var username = document.getElementById('username').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var birthday = document.getElementById('birthday').value;
    
    
      var type_user = document.getElementById('mySelect').value;
      if(email.length != 0 && password.length != 0 && username.length != 0 && phone.length != 0 && address.length != 0 && birthday.length != 0){
          // our boxes have data and we take database
          if (document.getElementById("check_user").checked==true) {
            // var email = document.getElementById('email').value;
            // var password = document.getElementById('password').value;
              const promise = firebase.auth().createUserWithEmailAndPassword(email, password);
              promise.catch(e => alert(e.message));
              promise.then(() => {
                    var key = firebase.database().ref().child(type_user).push().key;
                    var task = {
                      email: email,
                      password: password,
                      username: username,
                      phone: phone,
                      address: address,
                      birthday: birthday,
                      type_user: type_user,
                      key: key,
                    };

                    var updates = {};
                    updates["/"+type_user+"/" + username] = task;
                    firebase.database().ref().update(updates);
                    document.getElementById("box-add-user").style.display = 'none';
                    if (type_user=="Admin") {
                      count_user_and_pet();
                      list_admin();

                    };
                    if (type_user=="Volumteers") {
                      count_user_and_pet();
                      list_volumteers();
                    };
                    if (type_user=="Adopters") {
                      count_user_and_pet();
                      list_adopters();
                    };
                    if (type_user=="Employees") {
                      count_user_and_pet();
                      list_employees();
                    };
              });
          }else {
                  alert("Please do not leave any items blank!");
                }
      }else {
                alert("Please do not leave any items blank!");
            }
    
  }


function add_user_form(){

    document.getElementById("box-add-user").style.display = 'block';
}


function get_user(){

  show_list_user_find= document.getElementById('charts');
  show_list_user_find.innerHTML = "";

  var select_type_user_find = document.getElementById("select_type_user_find").value;
  var name_user_find= document.getElementById("name_user_find").value;
  if (name_user_find=="") {
    alert("Please do not leave any items blank!");
  };
  if (name_user_find!="" & select_type_user_find!="") {
      firebase.database().ref(select_type_user_find+'/'+name_user_find).once('value').then(function(snapshort){

    var task_email_user_find= snapshort.val().email;
    var task_name_user_find= snapshort.val().username;
    var task_password_user_find= snapshort.val().password;
    var task_birthday_user_find = snapshort.val().birthday;
    var task_phone_user_find = snapshort.val().phone;
    var task_address_user_find= snapshort.val().address;
    var type_user_find= snapshort.val().type_user;

    
        //tao TASK CONTAINER
        task_container = document.createElement("div");
        task_container.setAttribute("class", "task_container");
        
        task_img = document.createElement("div");
        task_img.setAttribute("class", "task_img");

        image_view = document.createElement('img');
        image_view.setAttribute('id', 'image_view');
        image_view.src = "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg";

        //tao TITLE DATA
        title_data = document.createElement("div");
        title_data.setAttribute("class", "title_data");

        title_email = document.createElement('p');
        title_email.setAttribute('id', 'task_title_email');
        title_email.setAttribute('contenteditable', false);
        title_email.innerHTML = "Email : ";

        title_username = document.createElement('p');
        title_username.setAttribute('id', 'task_title_username');
        title_username.setAttribute('contenteditable', false);
        title_username.innerHTML = "User Name : ";

        title_password = document.createElement('p');
        title_password.setAttribute('id', 'task_title_password');
        title_password.setAttribute('contenteditable', false);
        title_password.innerHTML = "Password : ";

        title_phone = document.createElement('p');
        title_phone.setAttribute('id', 'task_title_phone');
        title_phone.setAttribute('contenteditable', false);
        title_phone.innerHTML = "Phone : ";

        title_birthday = document.createElement('p');
        title_birthday.setAttribute('id', 'task_title_birthday');
        title_birthday.setAttribute('contenteditable', false);
        title_birthday.innerHTML = "Birthday : ";

        title_address = document.createElement('p');
        title_address.setAttribute('id', 'task_title_address');
        title_address.setAttribute('contenteditable', false);
        title_address.innerHTML = "Address : ";

        title_type_user = document.createElement('p');
        title_type_user.setAttribute('id', 'task_title_type_user');
        title_type_user.setAttribute('contenteditable', false);
        title_type_user.innerHTML = "Type User : ";

        
        //tạo TASK DATA 
        task_data = document.createElement('div');
        task_data.setAttribute('class', 'task_data');

        email = document.createElement('p');
        email.setAttribute('id', 'task_email_user_find');
        email.setAttribute('contenteditable', false);
        email.innerHTML = task_email_user_find; 

        username = document.createElement('p');
        username.setAttribute('id', 'task_username');
        username.setAttribute('contenteditable', false);
        username.innerHTML = task_name_user_find;

        password = document.createElement('p');
        password.setAttribute('id', 'task_password');
        password.setAttribute('contenteditable', false);
        password.innerHTML = task_password_user_find;

        birthday = document.createElement('p');
        birthday.setAttribute('id', 'task_birthday');
        birthday.setAttribute('contenteditable', false);
        birthday.innerHTML = task_birthday_user_find;

        phone = document.createElement('p');
        phone.setAttribute('id', 'task_phone');
        phone.setAttribute('contenteditable', false);
        phone.innerHTML = task_phone_user_find;

        address = document.createElement('p');
        address.setAttribute('id', 'task_address');
        address.setAttribute('contenteditable', false);
        address.innerHTML = task_address_user_find;

        type_user = document.createElement('p');
        type_user.setAttribute('id', 'task_type_user');
        type_user.setAttribute('contenteditable', false);
        type_user.innerHTML = type_user_find;

        //tạo TASK TOOLS
        task_tool = document.createElement('div');
        task_tool.setAttribute('class', 'task_tool');

        task_done_button = document.createElement('button');
        task_done_button.setAttribute('id', 'task_done_button');
        task_done_button.setAttribute('class', 'task_done_button');
        task_done_button.setAttribute('onclick', "task_done(this.parentElement.parentElement, this)");
        fa_done = document.createElement('i');
        fa_done.setAttribute('class', 'fa fa-check');

        task_edit_button = document.createElement('button');
        task_edit_button.setAttribute('id', 'task_edit_button');
        task_edit_button.setAttribute('class', 'task_edit_button');
        task_edit_button.setAttribute('onclick', "task_edit(this.parentElement.parentElement, this)");
        fa_edit = document.createElement('i');
        fa_edit.setAttribute('class', 'fa fa-pencil-alt');

        task_delete_button = document.createElement('button');
        task_delete_button.setAttribute('id', 'task_delete_button');
        task_delete_button.setAttribute('class', 'task_delete_button');
        task_delete_button.setAttribute('onclick', "task_delete(this.parentElement.parentElement)");
        fa_delete = document.createElement('i');
        fa_delete.setAttribute('class', 'fa fa-trash');


        show_list_user_find.append(task_container);

        task_container.append(task_img);
        task_img.append(image_view);

        task_container.append(title_data);
        title_data.append(title_email);
        title_data.append(title_username);
        title_data.append(title_password);
        title_data.append(title_birthday);
        title_data.append(title_phone);
        title_data.append(title_address);
        title_data.append(title_type_user);


        task_container.append(task_data);
        task_data.append(email);
        task_data.append(username);
        task_data.append(password);
        task_data.append(birthday);
        task_data.append(phone);
        task_data.append(address);
        task_data.append(type_user);


        task_container.append(task_tool);
        task_tool.append(task_done_button);
        task_done_button.append(fa_done);
        task_tool.append(task_edit_button);
        task_edit_button.append(fa_edit);
        task_tool.append(task_delete_button);
        task_delete_button.append(fa_delete);

    })
  };
}


function list_admin(){
    
    var x= document.getElementById("btn_add_user").style.display;
    if (x!="block") {
        document.getElementById("btn_add_user").style.display='block';
        document.getElementById("box-find-user").style.display = 'block';
        };
    var y= document.getElementById("btn_add_donate").style.display;
    if (y!="none") {
      document.getElementById("btn_add_donate").style.display='none';
      document.getElementById("box-find-donate").style.display = 'none';
      document.getElementById("box-add-donate").style.display='none';
      };
    var z= document.getElementById("btn_add_pet").style.display;
    if (z!="none") {
      document.getElementById("box-find-pet").style.display = 'none';
      document.getElementById("btn_add_pet").style.display='none';
      document.getElementById("box-add-pet").style.display='none';
      };
    var j= document.getElementById("btn_add_video").style.display;
    if (j!="none") {
      document.getElementById("box-find-video").style.display = 'none';
      document.getElementById("btn_add_video").style.display='none';
      document.getElementById("box-add-video").style.display='none';
      };
    var k= document.getElementById("btn_add_news").style.display;
    if (k!="none") {
      document.getElementById("box-find-news").style.display = 'none';
      document.getElementById("btn_add_news").style.display='none';
      document.getElementById("box-add-news").style.display='none';
      };
    var l= document.getElementById("btn_add_blog").style.display;
    if (l!="none") {
      document.getElementById("box-find-blog").style.display = 'none';
      document.getElementById("btn_add_blog").style.display='none';
      document.getElementById("box-add-blog").style.display='none';
      };

    show_list_admin= document.getElementById('charts');
    show_list_admin.innerHTML = "";
  
    task_array = [];//khai bao bien
    //đưa dữ liệu vào id="container" trong
    
    
    firebase.database().ref("Admin").once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        task_array.push(Object.values(childData));
      });
      //tạo vòng lặp để tạo các task 
      for(var i, i = 0; i < task_array.length; i++){
        task_address = task_array[i][0];
        task_birthday = task_array[i][1];
        task_email = task_array[i][2];
        task_key = task_array[i][3];
        task_password = task_array[i][4];
        task_phone = task_array[i][5];
        task_type_user = task_array[i][6];
        task_username = task_array[i][7];


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

        title_email = document.createElement('p');
        title_email.setAttribute('id', 'task_title_email');
        title_email.setAttribute('contenteditable', false);
        title_email.innerHTML = "Email : ";

        title_username = document.createElement('p');
        title_username.setAttribute('id', 'task_title_username');
        title_username.setAttribute('contenteditable', false);
        title_username.innerHTML = "User Name : ";

        title_password = document.createElement('p');
        title_password.setAttribute('id', 'task_title_password');
        title_password.setAttribute('contenteditable', false);
        title_password.innerHTML = "Password : ";

        title_phone = document.createElement('p');
        title_phone.setAttribute('id', 'task_title_phone');
        title_phone.setAttribute('contenteditable', false);
        title_phone.innerHTML = "Phone : ";

        title_birthday = document.createElement('p');
        title_birthday.setAttribute('id', 'task_title_birthday');
        title_birthday.setAttribute('contenteditable', false);
        title_birthday.innerHTML = "Birthday : ";

        title_address = document.createElement('p');
        title_address.setAttribute('id', 'task_title_address');
        title_address.setAttribute('contenteditable', false);
        title_address.innerHTML = "Address : ";

        title_type_user = document.createElement('p');
        title_type_user.setAttribute('id', 'task_title_type_user');
        title_type_user.setAttribute('contenteditable', false);
        title_type_user.innerHTML = "Type User : ";

        
        //tạo TASK DATA 
        task_data = document.createElement('div');
        task_data.setAttribute('class', 'task_data');

        email = document.createElement('p');
        email.setAttribute('id', 'task_email');
        email.setAttribute('contenteditable', false);
        email.innerHTML = task_email; 

        username = document.createElement('p');
        username.setAttribute('id', 'task_username');
        username.setAttribute('contenteditable', false);
        username.innerHTML = task_username;

        password = document.createElement('p');
        password.setAttribute('id', 'task_password');
        password.setAttribute('contenteditable', false);
        password.innerHTML = task_password;

        birthday = document.createElement('p');
        birthday.setAttribute('id', 'task_birthday');
        birthday.setAttribute('contenteditable', false);
        birthday.innerHTML = task_birthday;

        phone = document.createElement('p');
        phone.setAttribute('id', 'task_phone');
        phone.setAttribute('contenteditable', false);
        phone.innerHTML = task_phone;

        address = document.createElement('p');
        address.setAttribute('id', 'task_address');
        address.setAttribute('contenteditable', false);
        address.innerHTML = task_address;

        type_user = document.createElement('p');
        type_user.setAttribute('id', 'task_type_user');
        type_user.setAttribute('contenteditable', false);
        type_user.innerHTML = task_type_user;

        //tạo TASK TOOLS
        task_tool = document.createElement('div');
        task_tool.setAttribute('class', 'task_tool');

        task_done_button = document.createElement('button');
        task_done_button.setAttribute('id', 'task_done_button');
        task_done_button.setAttribute('class', 'task_done_button');
        task_done_button.setAttribute('onclick', "task_done(this.parentElement.parentElement, this)");
        fa_done = document.createElement('i');
        fa_done.setAttribute('class', 'fa fa-check');

        task_edit_button = document.createElement('button');
        task_edit_button.setAttribute('id', 'task_edit_button');
        task_edit_button.setAttribute('class', 'task_edit_button');
        task_edit_button.setAttribute('onclick', "task_edit(this.parentElement.parentElement, this)");
        fa_edit = document.createElement('i');
        fa_edit.setAttribute('class', 'fa fa-pencil-alt');

        task_delete_button = document.createElement('button');
        task_delete_button.setAttribute('id', 'task_delete_button');
        task_delete_button.setAttribute('class', 'task_delete_button');
        task_delete_button.setAttribute('onclick', "task_delete(this.parentElement.parentElement)");
        fa_delete = document.createElement('i');
        fa_delete.setAttribute('class', 'fa fa-trash');


        show_list_admin.append(task_container);

        task_container.append(task_img);
        task_img.append(image_view);

        task_container.append(title_data);
        title_data.append(title_email);
        title_data.append(title_username);
        title_data.append(title_password);
        title_data.append(title_birthday);
        title_data.append(title_phone);
        title_data.append(title_address);
        title_data.append(title_type_user);


        task_container.append(task_data);
        task_data.append(email);
        task_data.append(username);
        task_data.append(password);
        task_data.append(birthday);
        task_data.append(phone);
        task_data.append(address);
        task_data.append(type_user);


        task_container.append(task_tool);
        task_tool.append(task_done_button);
        task_done_button.append(fa_done);
        task_tool.append(task_edit_button);
        task_edit_button.append(fa_edit);
        task_tool.append(task_delete_button);
        task_delete_button.append(fa_delete);
      }

    });
  }

/*------------------------------------------------------------------------*/

  /*VOLUMTEERS*/

function list_volumteers(){
    var x= document.getElementById("btn_add_user").style.display;
    if (x!="block") {
        document.getElementById("btn_add_user").style.display='block';
        document.getElementById("box-find-user").style.display = 'block';
        };
    var y= document.getElementById("btn_add_donate").style.display;
    if (y!="none") {
      document.getElementById("btn_add_donate").style.display='none';
      document.getElementById("box-find-donate").style.display = 'none';
      document.getElementById("box-add-donate").style.display='none';
      };
    var z= document.getElementById("btn_add_pet").style.display;
    if (z!="none") {
      document.getElementById("box-find-pet").style.display = 'none';
      document.getElementById("btn_add_pet").style.display='none';
      document.getElementById("box-add-pet").style.display='none';
      };
    show_list_volumteers= document.getElementById('charts');
    show_list_volumteers.innerHTML = "";
    
    task_array = [];//khai bao bien
    //đưa dữ liệu vào id="container" trong
    
    
    firebase.database().ref("Volumteers").once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        task_array.push(Object.values(childData));
      });
      //tạo vòng lặp để tạo các task 
      for(var i, i = 0; i < task_array.length; i++){
        task_address = task_array[i][0];
        task_birthday = task_array[i][1];
        task_email = task_array[i][2];
        task_key = task_array[i][3];
        task_password = task_array[i][4];
        task_phone = task_array[i][5];
        task_type_user = task_array[i][6];
        task_username = task_array[i][7];


        //tao TASK CONTAINER
        task_container = document.createElement("div");
        task_container.setAttribute("class", "task_container");
        task_container.setAttribute("data-key", task_key);

        task_img = document.createElement("div");
        task_img.setAttribute("class", "task_img");

        image_view = document.createElement('img');
        image_view.setAttribute('id', 'image_view');
        image_view.src = "https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg";
        
        //tao TITLE DATA
        title_data = document.createElement("div");
        title_data.setAttribute("class", "title_data");

        title_email = document.createElement('p');
        title_email.setAttribute('id', 'task_title_email');
        title_email.setAttribute('contenteditable', false);
        title_email.innerHTML = "Email : ";

        title_username = document.createElement('p');
        title_username.setAttribute('id', 'task_title_username');
        title_username.setAttribute('contenteditable', false);
        title_username.innerHTML = "User Name : ";

        title_password = document.createElement('p');
        title_password.setAttribute('id', 'task_title_password');
        title_password.setAttribute('contenteditable', false);
        title_password.innerHTML = "Password : ";

        title_phone = document.createElement('p');
        title_phone.setAttribute('id', 'task_title_phone');
        title_phone.setAttribute('contenteditable', false);
        title_phone.innerHTML = "Phone : ";

        title_birthday = document.createElement('p');
        title_birthday.setAttribute('id', 'task_title_birthday');
        title_birthday.setAttribute('contenteditable', false);
        title_birthday.innerHTML = "Birthday : ";

        title_address = document.createElement('p');
        title_address.setAttribute('id', 'task_title_address');
        title_address.setAttribute('contenteditable', false);
        title_address.innerHTML = "Address : ";

        title_type_user = document.createElement('p');
        title_type_user.setAttribute('id', 'task_title_type_user');
        title_type_user.setAttribute('contenteditable', false);
        title_type_user.innerHTML = "Type User : ";

        
        //tạo TASK DATA 
        task_data = document.createElement('div');
        task_data.setAttribute('class', 'task_data');

        email = document.createElement('p');
        email.setAttribute('id', 'task_email');
        email.setAttribute('contenteditable', false);
        email.innerHTML = task_email; 

        username = document.createElement('p');
        username.setAttribute('id', 'task_username');
        username.setAttribute('contenteditable', false);
        username.innerHTML = task_username;

        password = document.createElement('p');
        password.setAttribute('id', 'task_password');
        password.setAttribute('contenteditable', false);
        password.innerHTML = task_password;

        birthday = document.createElement('p');
        birthday.setAttribute('id', 'task_birthday');
        birthday.setAttribute('contenteditable', false);
        birthday.innerHTML = task_birthday;

        phone = document.createElement('p');
        phone.setAttribute('id', 'task_phone');
        phone.setAttribute('contenteditable', false);
        phone.innerHTML = task_phone;

        address = document.createElement('p');
        address.setAttribute('id', 'task_address');
        address.setAttribute('contenteditable', false);
        address.innerHTML = task_address;

        type_user = document.createElement('p');
        type_user.setAttribute('id', 'task_type_user');
        type_user.setAttribute('contenteditable', false);
        type_user.innerHTML = task_type_user;

        //tạo TASK TOOLS
        task_tool = document.createElement('div');
        task_tool.setAttribute('class', 'task_tool');

        task_done_button = document.createElement('button');
        task_done_button.setAttribute('id', 'task_done_button');
        task_done_button.setAttribute('class', 'task_done_button');
        task_done_button.setAttribute('onclick', "task_done(this.parentElement.parentElement, this)");
        fa_done = document.createElement('i');
        fa_done.setAttribute('class', 'fa fa-check');

        task_edit_button = document.createElement('button');
        task_edit_button.setAttribute('id', 'task_edit_button');
        task_edit_button.setAttribute('class', 'task_edit_button');
        task_edit_button.setAttribute('onclick', "task_edit(this.parentElement.parentElement, this)");
        fa_edit = document.createElement('i');
        fa_edit.setAttribute('class', 'fa fa-pencil-alt');

        task_delete_button = document.createElement('button');
        task_delete_button.setAttribute('id', 'task_delete_button');
        task_delete_button.setAttribute('class', 'task_delete_button');
        task_delete_button.setAttribute('onclick', "task_delete(this.parentElement.parentElement)");
        fa_delete = document.createElement('i');
        fa_delete.setAttribute('class', 'fa fa-trash');


        show_list_volumteers.append(task_container);

        task_container.append(task_img);
        task_img.append(image_view);

        task_container.append(title_data);
        title_data.append(title_email);
        title_data.append(title_username);
        title_data.append(title_password);
        title_data.append(title_birthday);
        title_data.append(title_phone);
        title_data.append(title_address);
        title_data.append(title_type_user);


        task_container.append(task_data);
        task_data.append(email);
        task_data.append(username);
        task_data.append(password);
        task_data.append(birthday);
        task_data.append(phone);
        task_data.append(address);
        task_data.append(type_user);


        task_container.append(task_tool);
        task_tool.append(task_done_button);
        task_done_button.append(fa_done);
        task_tool.append(task_edit_button);
        task_edit_button.append(fa_edit);
        task_tool.append(task_delete_button);
        task_delete_button.append(fa_delete);
      }

    });
  }


/*------------------------------------------------------------------------*/ 

  /*ADOPTERS*/


function list_adopters(){
    var x= document.getElementById("btn_add_user").style.display;
    if (x!="block") {
        document.getElementById("btn_add_user").style.display='block';
        document.getElementById("box-find-user").style.display = 'block';
        };
    var y= document.getElementById("btn_add_donate").style.display;
    if (y!="none") {
      document.getElementById("btn_add_donate").style.display='none';
      document.getElementById("box-find-donate").style.display = 'none';
      document.getElementById("box-add-donate").style.display='none';
      };
    var z= document.getElementById("btn_add_pet").style.display;
    if (z!="none") {
      document.getElementById("box-find-pet").style.display = 'none';
      document.getElementById("btn_add_pet").style.display='none';
      document.getElementById("box-add-pet").style.display='none';
      };

    show_list_adopters= document.getElementById('charts');
    show_list_adopters.innerHTML = "";
    
    task_array = [];//khai bao bien
    //đưa dữ liệu vào id="container" trong
    
    
    firebase.database().ref("Adopters").once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        task_array.push(Object.values(childData));
      });
      //tạo vòng lặp để tạo các task 
      for(var i, i = 0; i < task_array.length; i++){
        task_address = task_array[i][0];
        task_birthday = task_array[i][1];
        task_email = task_array[i][2];
        task_key = task_array[i][3];
        task_password = task_array[i][4];
        task_phone = task_array[i][5];
        task_type_user = task_array[i][6];
        task_username = task_array[i][7];


        //tao TASK CONTAINER
        task_container = document.createElement("div");
        task_container.setAttribute("class", "task_container");
        task_container.setAttribute("data-key", task_key);

        task_img = document.createElement("div");
        task_img.setAttribute("class", "task_img");

        image_view = document.createElement('img');
        image_view.setAttribute('id', 'image_view');
        image_view.src = "https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg";
        

        //tao TITLE DATA
        title_data = document.createElement("div");
        title_data.setAttribute("class", "title_data");

        title_email = document.createElement('p');
        title_email.setAttribute('id', 'task_title_email');
        title_email.setAttribute('contenteditable', false);
        title_email.innerHTML = "Email : ";

        title_username = document.createElement('p');
        title_username.setAttribute('id', 'task_title_username');
        title_username.setAttribute('contenteditable', false);
        title_username.innerHTML = "User Name : ";

        title_password = document.createElement('p');
        title_password.setAttribute('id', 'task_title_password');
        title_password.setAttribute('contenteditable', false);
        title_password.innerHTML = "Password : ";

        title_phone = document.createElement('p');
        title_phone.setAttribute('id', 'task_title_phone');
        title_phone.setAttribute('contenteditable', false);
        title_phone.innerHTML = "Phone : ";

        title_birthday = document.createElement('p');
        title_birthday.setAttribute('id', 'task_title_birthday');
        title_birthday.setAttribute('contenteditable', false);
        title_birthday.innerHTML = "Birthday : ";

        title_address = document.createElement('p');
        title_address.setAttribute('id', 'task_title_address');
        title_address.setAttribute('contenteditable', false);
        title_address.innerHTML = "Address : ";

        title_type_user = document.createElement('p');
        title_type_user.setAttribute('id', 'task_title_type_user');
        title_type_user.setAttribute('contenteditable', false);
        title_type_user.innerHTML = "Type User : ";

        
        //tạo TASK DATA 
        task_data = document.createElement('div');
        task_data.setAttribute('class', 'task_data');

        email = document.createElement('p');
        email.setAttribute('id', 'task_email');
        email.setAttribute('contenteditable', false);
        email.innerHTML = task_email; 

        username = document.createElement('p');
        username.setAttribute('id', 'task_username');
        username.setAttribute('contenteditable', false);
        username.innerHTML = task_username;

        password = document.createElement('p');
        password.setAttribute('id', 'task_password');
        password.setAttribute('contenteditable', false);
        password.innerHTML = task_password;

        birthday = document.createElement('p');
        birthday.setAttribute('id', 'task_birthday');
        birthday.setAttribute('contenteditable', false);
        birthday.innerHTML = task_birthday;

        phone = document.createElement('p');
        phone.setAttribute('id', 'task_phone');
        phone.setAttribute('contenteditable', false);
        phone.innerHTML = task_phone;

        address = document.createElement('p');
        address.setAttribute('id', 'task_address');
        address.setAttribute('contenteditable', false);
        address.innerHTML = task_address;

        type_user = document.createElement('p');
        type_user.setAttribute('id', 'task_type_user');
        type_user.setAttribute('contenteditable', false);
        type_user.innerHTML = task_type_user;

        //tạo TASK TOOLS
        task_tool = document.createElement('div');
        task_tool.setAttribute('class', 'task_tool');

        task_done_button = document.createElement('button');
        task_done_button.setAttribute('id', 'task_done_button');
        task_done_button.setAttribute('class', 'task_done_button');
        task_done_button.setAttribute('onclick', "task_done(this.parentElement.parentElement, this)");
        fa_done = document.createElement('i');
        fa_done.setAttribute('class', 'fa fa-check');

        task_edit_button = document.createElement('button');
        task_edit_button.setAttribute('id', 'task_edit_button');
        task_edit_button.setAttribute('class', 'task_edit_button');
        task_edit_button.setAttribute('onclick', "task_edit(this.parentElement.parentElement, this)");
        fa_edit = document.createElement('i');
        fa_edit.setAttribute('class', 'fa fa-pencil-alt');

        task_delete_button = document.createElement('button');
        task_delete_button.setAttribute('id', 'task_delete_button');
        task_delete_button.setAttribute('class', 'task_delete_button');
        task_delete_button.setAttribute('onclick', "task_delete(this.parentElement.parentElement)");
        fa_delete = document.createElement('i');
        fa_delete.setAttribute('class', 'fa fa-trash');


        show_list_adopters.append(task_container);

        task_container.append(task_img);
        task_img.append(image_view);

        task_container.append(title_data);
        title_data.append(title_email);
        title_data.append(title_username);
        title_data.append(title_password);
        title_data.append(title_birthday);
        title_data.append(title_phone);
        title_data.append(title_address);
        title_data.append(title_type_user);


        task_container.append(task_data);
        task_data.append(email);
        task_data.append(username);
        task_data.append(password);
        task_data.append(birthday);
        task_data.append(phone);
        task_data.append(address);
        task_data.append(type_user);


        task_container.append(task_tool);
        task_tool.append(task_done_button);
        task_done_button.append(fa_done);
        task_tool.append(task_edit_button);
        task_edit_button.append(fa_edit);
        task_tool.append(task_delete_button);
        task_delete_button.append(fa_delete);
      }

    });
  }


/*------------------------------------------------------------------------*/ 

  /* EMPLOYEES*/


function list_employees(){
    // show_btn_add_employees= document.getElementById('box');
    // show_btn_add_employees.innerHTML = "";
    var x= document.getElementById("btn_add_user").style.display;
    if (x!="block") {
        document.getElementById("btn_add_user").style.display='block';
        document.getElementById("box-find-user").style.display = 'block';
        };
    var y= document.getElementById("btn_add_donate").style.display;
    if (y!="none") {
      document.getElementById("btn_add_donate").style.display='none';
      document.getElementById("box-find-donate").style.display = 'none';
      document.getElementById("box-add-donate").style.display='none';
      };
    var z= document.getElementById("btn_add_pet").style.display;
    if (z!="none") {
      document.getElementById("box-find-pet").style.display = 'none';
      document.getElementById("btn_add_pet").style.display='none';
      document.getElementById("box-add-pet").style.display='none';
      };

    show_list_employees= document.getElementById('charts');
    show_list_employees.innerHTML = "";
 
    task_array = [];//khai bao bien
    //đưa dữ liệu vào id="container" trong
    
    
    firebase.database().ref("Employees").once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        task_array.push(Object.values(childData));
      });
      
      //tạo vòng lặp để tạo các task 
      for(var i, i = 0; i < task_array.length; i++){
        task_address = task_array[i][0];
        task_birthday = task_array[i][1];
        task_email = task_array[i][2];
        task_key = task_array[i][3];
        task_password = task_array[i][4];
        task_phone = task_array[i][5];
        task_type_user = task_array[i][6];
        task_username = task_array[i][7];


        //tao TASK CONTAINER
        task_container = document.createElement("div");
        task_container.setAttribute("class", "task_container");
        task_container.setAttribute("data-key", task_key);

        task_img = document.createElement("div");
        task_img.setAttribute("class", "task_img");

        image_view = document.createElement('img');
        image_view.setAttribute('id', 'image_view');
        image_view.src = "https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg";
        

        //tao TITLE DATA
        title_data = document.createElement("div");
        title_data.setAttribute("class", "title_data");

        title_email = document.createElement('p');
        title_email.setAttribute('id', 'task_title_email');
        title_email.setAttribute('contenteditable', false);
        title_email.innerHTML = "Email : ";

        title_username = document.createElement('p');
        title_username.setAttribute('id', 'task_title_username');
        title_username.setAttribute('contenteditable', false);
        title_username.innerHTML = "User Name : ";

        title_password = document.createElement('p');
        title_password.setAttribute('id', 'task_title_password');
        title_password.setAttribute('contenteditable', false);
        title_password.innerHTML = "Password : ";

        title_phone = document.createElement('p');
        title_phone.setAttribute('id', 'task_title_phone');
        title_phone.setAttribute('contenteditable', false);
        title_phone.innerHTML = "Phone : ";

        title_birthday = document.createElement('p');
        title_birthday.setAttribute('id', 'task_title_birthday');
        title_birthday.setAttribute('contenteditable', false);
        title_birthday.innerHTML = "Birthday : ";

        title_address = document.createElement('p');
        title_address.setAttribute('id', 'task_title_address');
        title_address.setAttribute('contenteditable', false);
        title_address.innerHTML = "Address : ";

        title_type_user = document.createElement('p');
        title_type_user.setAttribute('id', 'task_title_type_user');
        title_type_user.setAttribute('contenteditable', false);
        title_type_user.innerHTML = "Type User : ";

        
        //tạo TASK DATA 
        task_data = document.createElement('div');
        task_data.setAttribute('class', 'task_data');

        email = document.createElement('p');
        email.setAttribute('id', 'task_email');
        email.setAttribute('contenteditable', false);
        email.innerHTML = task_email; 

        username = document.createElement('p');
        username.setAttribute('id', 'task_username');
        username.setAttribute('contenteditable', false);
        username.innerHTML = task_username;

        password = document.createElement('p');
        password.setAttribute('id', 'task_password');
        password.setAttribute('contenteditable', false);
        password.innerHTML = task_password;

        birthday = document.createElement('p');
        birthday.setAttribute('id', 'task_birthday');
        birthday.setAttribute('contenteditable', false);
        birthday.innerHTML = task_birthday;

        phone = document.createElement('p');
        phone.setAttribute('id', 'task_phone');
        phone.setAttribute('contenteditable', false);
        phone.innerHTML = task_phone;

        address = document.createElement('p');
        address.setAttribute('id', 'task_address');
        address.setAttribute('contenteditable', false);
        address.innerHTML = task_address;

        type_user = document.createElement('p');
        type_user.setAttribute('id', 'task_type_user');
        type_user.setAttribute('contenteditable', false);
        type_user.innerHTML = task_type_user;

        //tạo TASK TOOLS
        task_tool = document.createElement('div');
        task_tool.setAttribute('class', 'task_tool');

        task_done_button = document.createElement('button');
        task_done_button.setAttribute('id', 'task_done_button');
        task_done_button.setAttribute('class', 'task_done_button');
        task_done_button.setAttribute('onclick', "task_done(this.parentElement.parentElement, this)");
        fa_done = document.createElement('i');
        fa_done.setAttribute('class', 'fa fa-check');

        task_edit_button = document.createElement('button');
        task_edit_button.setAttribute('id', 'task_edit_button');
        task_edit_button.setAttribute('class', 'task_edit_button');
        task_edit_button.setAttribute('onclick', "task_edit(this.parentElement.parentElement, this)");
        fa_edit = document.createElement('i');
        fa_edit.setAttribute('class', 'fa fa-pencil-alt');

        task_delete_button = document.createElement('button');
        task_delete_button.setAttribute('id', 'task_delete_button');
        task_delete_button.setAttribute('class', 'task_delete_button');
        task_delete_button.setAttribute('onclick', "task_delete(this.parentElement.parentElement)");
        fa_delete = document.createElement('i');
        fa_delete.setAttribute('class', 'fa fa-trash');


        show_list_employees.append(task_container);

        task_container.append(task_img);
        task_img.append(image_view);

        task_container.append(title_data);
        title_data.append(title_email);
        title_data.append(title_username);
        title_data.append(title_password);
        title_data.append(title_birthday);
        title_data.append(title_phone);
        title_data.append(title_address);
        title_data.append(title_type_user);


        task_container.append(task_data);
        task_data.append(email);
        task_data.append(username);
        task_data.append(password);
        task_data.append(birthday);
        task_data.append(phone);
        task_data.append(address);
        task_data.append(type_user);


        task_container.append(task_tool);
        task_tool.append(task_done_button);
        task_done_button.append(fa_done);
        task_tool.append(task_edit_button);
        task_edit_button.append(fa_edit);
        task_tool.append(task_delete_button);
        task_delete_button.append(fa_delete);
      }

    });
  }
/*------------------------------------------------------------------------*/  
  // button edit, button delete
  

  function task_edit(task, edit_button){
    

    email = task.childNodes[2].childNodes[0];
    email.setAttribute("contenteditable", false);
    email.setAttribute("class", "task_data_editing");
    email.setAttribute("id", "task_email");
    email.focus();

    username = task.childNodes[2].childNodes[1];
    username.setAttribute("contenteditable", false);
    username.setAttribute("class", "task_data_editing");
    username.setAttribute("id", "task_username");

    password = task.childNodes[2].childNodes[2];
    password.setAttribute("contenteditable", true);
    password.setAttribute("class", "task_data_editing");
    password.setAttribute("id", "task_password");

    birthday = task.childNodes[2].childNodes[3];
    birthday.setAttribute("contenteditable", true);
    birthday.setAttribute("class", "task_data_editing");
    birthday.setAttribute("id", "task_birthday");

    phone = task.childNodes[2].childNodes[4];
    phone.setAttribute("contenteditable", true);
    phone.setAttribute("class", "task_data_editing");
    phone.setAttribute("id", "task_phone");

    address = task.childNodes[2].childNodes[5];
    address.setAttribute("contenteditable", true);
    address.setAttribute("class", "task_data_editing");
    address.setAttribute("id", "task_address");

    type_user = task.childNodes[2].childNodes[6];
    type_user.setAttribute("contenteditable", false);
    type_user.setAttribute("class", "task_data_editing");
    type_user.setAttribute("id", "task_type_user");

  }

  function task_done(task, edit_button){
    
    email = task.childNodes[2].childNodes[0];
    email.setAttribute("contenteditable", false);
    email.setAttribute("class", "task_data_done");
    email.setAttribute("id", "task_email");

    username = task.childNodes[2].childNodes[1];
    username.setAttribute("contenteditable", false);
    username.setAttribute("class", "task_data_done");
    username.setAttribute("id", "task_username");

    password = task.childNodes[2].childNodes[2];
    password.setAttribute("contenteditable", false);
    password.setAttribute("class", "task_data_done");
    password.setAttribute("id", "task_password");

    birthday = task.childNodes[2].childNodes[3];
    birthday.setAttribute("contenteditable", false);
    birthday.setAttribute("class", "task_data_done");
    birthday.setAttribute("id", "task_birthday");

    phone = task.childNodes[2].childNodes[4];
    phone.setAttribute("contenteditable", false);
    phone.setAttribute("class", "task_data_done");
    phone.setAttribute("id", "task_phone");

    address = task.childNodes[2].childNodes[5];
    address.setAttribute("contenteditable", false);
    address.setAttribute("class", "task_data_done");
    address.setAttribute("id", "task_address");

    type_user = task.childNodes[2].childNodes[6];
    type_user.setAttribute("class", "task_data_done");
    type_user.setAttribute("id", "task_type_user");

    // change in firebase to
    var key = task.getAttribute("data-key");
    var type_user = task.childNodes[2].childNodes[6].innerHTML;
    var email= task.childNodes[2].childNodes[0].innerHTML;
    var username = task.childNodes[2].childNodes[1].innerHTML;
    var task_obj = {
      email: email,
      username: username,
      password: task.childNodes[2].childNodes[2].innerHTML ,
      birthday: task.childNodes[2].childNodes[3].innerHTML,
      phone: task.childNodes[2].childNodes[4].innerHTML,
      address: task.childNodes[2].childNodes[5].innerHTML,
      type_user: type_user,

       key: key,
    };
  
    var updates = {};
    updates["/" + type_user + "/" + username] = task_obj;
    firebase.database().ref().update(updates);

  }

  
  function task_delete(task){
    key = task.getAttribute("data-key");
    var type_user = task.childNodes[2].childNodes[6].innerHTML;
    var username = task.childNodes[2].childNodes[1].innerHTML;
    task_to_remove = firebase.database().ref( type_user +"/" + username);
    task_to_remove.remove();

    // remove from html view or whatevesss
    task.remove();
    count_user_and_pet();
  }

/*------------------------------------------------------------------------*/ 