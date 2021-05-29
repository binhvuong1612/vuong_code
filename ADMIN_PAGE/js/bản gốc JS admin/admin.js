//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyCX3q_oJgMPwQ7qJKWsTaucToeMyJLyTTg",
//     authDomain: "bvdatabase-8d2bd.firebaseapp.com",
//     databaseURL: "https://bvdatabase-8d2bd-default-rtdb.firebaseio.com",
//     projectId: "bvdatabase-8d2bd",
//     storageBucket: "bvdatabase-8d2bd.appspot.com",
//     messagingSenderId: "945711249581",
//     appId: "1:945711249581:web:d090b1bd6577ed662cee24"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

// // This is for able to see chart. We are using Apex Chart. U can check the documentation of Apex Charts too..
// var options = {
//   series: [
//     {
//       name: "Donate",
//       data: [44, 55, 57, 56, 61, 58, 63, 60, 66,60,61,63],
//     },
//     {
//       name: "Revenue",
//       data: [76, 85, 101, 98, 87, 105, 91, 114, 94,88,94,86],
//     },
//     {
//       name: "Expenditure",
//       data: [20, 24, 26, 28, 25, 28, 22, 30, 24,45,32,35],
//     },
//   ],
//   chart: {
//     type: "bar",
//     height: 250, // make this 250
//     sparkline: {
//       enabled: true, // make this true
//     },
//   },    
//   plotOptions: {
//     bar: {
//       horizontal: false,
//       columnWidth: "55%",
//       endingShape: "rounded",
//     },
//   },
//   dataLabels: {
//     enabled: false,
//   },
//   stroke: {
//     show: true,
//     width: 2,
//     colors: ["transparent"],
//   },
//   xaxis: {
//     categories: ["Jan","Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Dec", "Nov",],
//   },
//   yaxis: {
//     title: {
//       text: "$ (thousands)",
//     },
//   },
//   fill: {
//     opacity: 1,
//   },
//   tooltip: {
//     y: {
//       formatter: function (val) {
//         return "$ " + val + " thousands";
//       },
//     },
//   },
// };

// var chart = new ApexCharts(document.querySelector("#apex"), options);
// chart.render();

// // Sidebar Toggle Codes;

// var sidebarOpen = false;
// var sidebar = document.getElementById("sidebar");
// var sidebarCloseIcon = document.getElementById("sidebarIcon");

// function toggleSidebar() {
//   if (!sidebarOpen) {
//     sidebar.classList.add("sidebar_responsive");
//     sidebarOpen = true;
//   }
// }

// function closeSidebar() {
//   if (sidebarOpen) {
//     sidebar.classList.remove("sidebar_responsive");
//     sidebarOpen = false;
//   }
// }
// function signout(){
//     firebase.auth().signOut();
//     alert("Logged Out!");

//     location.assign("file:///C:/Users/ADMIN/Desktop/Du%20Lieu%20Cua%20Vuong/HTML_CSS_JS/form/form.html");
// }
// /*COUNT USER AND PET*/
// function count_user_and_pet(){
//   var task_array_admin=[];
//   var task_array_volumteers=[];
//   var task_array_adopters=[];
//   var task_array_employees=[];
//   var task_array_pet=[];


//   firebase.database().ref("Admin").once('value', function(snapshot) {
//       snapshot.forEach(function(childSnapshot) {
//         var childKey = childSnapshot.key;
//         var childData = childSnapshot.val();
//         task_array_admin.push(Object.values(childData));
//       });
//       var number_admin=task_array_admin.length;
      
//         firebase.database().ref("Volumteers").once('value', function(snapshot) {
//           snapshot.forEach(function(childSnapshot) {
//             var childKey = childSnapshot.key;
//             var childData = childSnapshot.val();
//             task_array_volumteers.push(Object.values(childData));
//           });
//           var number_volumteers=task_array_volumteers.length;
      
//             firebase.database().ref("Adopters").once('value', function(snapshot) {
//               snapshot.forEach(function(childSnapshot) {
//                 var childKey = childSnapshot.key;
//                 var childData = childSnapshot.val();
//                 task_array_adopters.push(Object.values(childData));
//               });
//               var number_adopters=task_array_adopters.length;
      
//                 firebase.database().ref("Employees").once('value', function(snapshot) {
//                   snapshot.forEach(function(childSnapshot) {
//                     var childKey = childSnapshot.key;
//                     var childData = childSnapshot.val();
//                     task_array_employees.push(Object.values(childData));
//                   });
//                   var number_employees=task_array_employees.length;
      

//                     firebase.database().ref("Pet").once('value', function(snapshot) {
//                       snapshot.forEach(function(childSnapshot) {
//                         var childKey = childSnapshot.key;
//                         var childData = childSnapshot.val();
//                         task_array_pet.push(Object.values(childData));
//                       });
//                       var number_pet=task_array_pet.length;
                      
//                       document.getElementById("number_pet").innerHTML=task_array_pet.length;
//                       document.getElementById("number_user").innerHTML=number_admin+number_volumteers+number_adopters+number_employees;
     
//                     });
//                 }); 
//             });   
//         });
//   });

// }


// /*ADMIN*/
// function close_add_user_form(){
//       document.getElementById("box-add-user").style.display = 'none';

// }

// function add_user(){
    
//     var email = document.getElementById('email').value;
//     var password = document.getElementById('password').value;
//     var username = document.getElementById('username').value;
//     var phone = document.getElementById('phone').value;
//     var address = document.getElementById('address').value;
//     var birthday = document.getElementById('birthday').value;
    
    
//       var type_user = document.getElementById('mySelect').value;
//       if(email.length != 0 && password.length != 0 && username.length != 0 && phone.length != 0 && address.length != 0 && birthday.length != 0){
//           // our boxes have data and we take database
//           if (document.getElementById("check_user").checked==true) {
//             // var email = document.getElementById('email').value;
//             // var password = document.getElementById('password').value;
//               const promise = firebase.auth().createUserWithEmailAndPassword(email, password);
//               promise.catch(e => alert(e.message));
//               promise.then(() => {
//                     var key = firebase.database().ref().child(type_user).push().key;
//                     var task = {
//                       email: email,
//                       password: password,
//                       username: username,
//                       phone: phone,
//                       address: address,
//                       birthday: birthday,
//                       type_user: type_user,
//                       key: key,
//                     };

//                     var updates = {};
//                     updates["/"+type_user+"/" + username] = task;
//                     firebase.database().ref().update(updates);
//                     document.getElementById("box-add-user").style.display = 'none';
//                     if (type_user=="Admin") {
//                       list_admin();
//                     };
//                     if (type_user=="Volumteers") {
//                       list_volumteers();
//                     };
//                     if (type_user=="Adopters") {
//                       list_adopters();
//                     };
//                     if (type_user=="Employees") {
//                       list_employees();
//                     };
//               });
//           }else {
//                   alert("Please do not leave any items blank!");
//                 }
//       }else {
//                 alert("Please do not leave any items blank!");
//             }
//     count_user_and_pet();
//   }


// function add_user_form(){

//     document.getElementById("box-add-user").style.display = 'block';
// }


// function get_user(){

//   show_list_user_find= document.getElementById('charts');
//   show_list_user_find.innerHTML = "";

//   var select_type_user_find = document.getElementById("select_type_user_find").value;
//   var name_user_find= document.getElementById("name_user_find").value;
//   if (name_user_find=="") {
//     alert("Please do not leave any items blank!");
//   };
//   if (name_user_find!="" & select_type_user_find!="") {
//       firebase.database().ref(select_type_user_find+'/'+name_user_find).once('value').then(function(snapshort){

//     var task_email_user_find= snapshort.val().email;
//     var task_name_user_find= snapshort.val().username;
//     var task_password_user_find= snapshort.val().password;
//     var task_birthday_user_find = snapshort.val().birthday;
//     var task_phone_user_find = snapshort.val().phone;
//     var task_address_user_find= snapshort.val().address;
//     var type_user_find= snapshort.val().type_user;

    
//         //tao TASK CONTAINER
//         task_container = document.createElement("div");
//         task_container.setAttribute("class", "task_container");
        
//         task_img = document.createElement("div");
//         task_img.setAttribute("class", "task_img");

//         image_view = document.createElement('img');
//         image_view.setAttribute('id', 'image_view');
//         image_view.src = "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg";

//         //tao TITLE DATA
//         title_data = document.createElement("div");
//         title_data.setAttribute("class", "title_data");

//         title_email = document.createElement('p');
//         title_email.setAttribute('id', 'task_title_email');
//         title_email.setAttribute('contenteditable', false);
//         title_email.innerHTML = "Email : ";

//         title_username = document.createElement('p');
//         title_username.setAttribute('id', 'task_title_username');
//         title_username.setAttribute('contenteditable', false);
//         title_username.innerHTML = "User Name : ";

//         title_password = document.createElement('p');
//         title_password.setAttribute('id', 'task_title_password');
//         title_password.setAttribute('contenteditable', false);
//         title_password.innerHTML = "Password : ";

//         title_phone = document.createElement('p');
//         title_phone.setAttribute('id', 'task_title_phone');
//         title_phone.setAttribute('contenteditable', false);
//         title_phone.innerHTML = "Phone : ";

//         title_birthday = document.createElement('p');
//         title_birthday.setAttribute('id', 'task_title_birthday');
//         title_birthday.setAttribute('contenteditable', false);
//         title_birthday.innerHTML = "Birthday : ";

//         title_address = document.createElement('p');
//         title_address.setAttribute('id', 'task_title_address');
//         title_address.setAttribute('contenteditable', false);
//         title_address.innerHTML = "Address : ";

//         title_type_user = document.createElement('p');
//         title_type_user.setAttribute('id', 'task_title_type_user');
//         title_type_user.setAttribute('contenteditable', false);
//         title_type_user.innerHTML = "Type User : ";

        
//         //tạo TASK DATA 
//         task_data = document.createElement('div');
//         task_data.setAttribute('class', 'task_data');

//         email = document.createElement('p');
//         email.setAttribute('id', 'task_email_user_find');
//         email.setAttribute('contenteditable', false);
//         email.innerHTML = task_email_user_find; 

//         username = document.createElement('p');
//         username.setAttribute('id', 'task_username');
//         username.setAttribute('contenteditable', false);
//         username.innerHTML = task_name_user_find;

//         password = document.createElement('p');
//         password.setAttribute('id', 'task_password');
//         password.setAttribute('contenteditable', false);
//         password.innerHTML = task_password_user_find;

//         birthday = document.createElement('p');
//         birthday.setAttribute('id', 'task_birthday');
//         birthday.setAttribute('contenteditable', false);
//         birthday.innerHTML = task_birthday_user_find;

//         phone = document.createElement('p');
//         phone.setAttribute('id', 'task_phone');
//         phone.setAttribute('contenteditable', false);
//         phone.innerHTML = task_phone_user_find;

//         address = document.createElement('p');
//         address.setAttribute('id', 'task_address');
//         address.setAttribute('contenteditable', false);
//         address.innerHTML = task_address_user_find;

//         type_user = document.createElement('p');
//         type_user.setAttribute('id', 'task_type_user');
//         type_user.setAttribute('contenteditable', false);
//         type_user.innerHTML = type_user_find;

//         //tạo TASK TOOLS
//         task_tool = document.createElement('div');
//         task_tool.setAttribute('class', 'task_tool');

//         task_done_button = document.createElement('button');
//         task_done_button.setAttribute('id', 'task_done_button');
//         task_done_button.setAttribute('onclick', "task_done(this.parentElement.parentElement, this)");
//         fa_done = document.createElement('i');
//         fa_done.setAttribute('class', 'fa fa-check');

//         task_edit_button = document.createElement('button');
//         task_edit_button.setAttribute('id', 'task_edit_button');
//         task_edit_button.setAttribute('onclick', "task_edit(this.parentElement.parentElement, this)");
//         fa_edit = document.createElement('i');
//         fa_edit.setAttribute('class', 'fa fa-pencil-alt');

//         task_delete_button = document.createElement('button');
//         task_delete_button.setAttribute('id', 'task_delete_button');
//         task_delete_button.setAttribute('onclick', "task_delete(this.parentElement.parentElement)");
//         fa_delete = document.createElement('i');
//         fa_delete.setAttribute('class', 'fa fa-trash');


//         show_list_user_find.append(task_container);

//         task_container.append(task_img);
//         task_img.append(image_view);

//         task_container.append(title_data);
//         title_data.append(title_email);
//         title_data.append(title_username);
//         title_data.append(title_password);
//         title_data.append(title_birthday);
//         title_data.append(title_phone);
//         title_data.append(title_address);
//         title_data.append(title_type_user);


//         task_container.append(task_data);
//         task_data.append(email);
//         task_data.append(username);
//         task_data.append(password);
//         task_data.append(birthday);
//         task_data.append(phone);
//         task_data.append(address);
//         task_data.append(type_user);


//         task_container.append(task_tool);
//         task_tool.append(task_done_button);
//         task_done_button.append(fa_done);
//         task_tool.append(task_edit_button);
//         task_edit_button.append(fa_edit);
//         task_tool.append(task_delete_button);
//         task_delete_button.append(fa_delete);

//     })
//   };
// }


// function list_admin(){
    
//     var x= document.getElementById("btn_add_user").style.display;
//     if (x!="block") {
//         document.getElementById("btn_add_user").style.display='block';
//         document.getElementById("box-find-user").style.display = 'block';
//         };
//     var y= document.getElementById("btn_add_donate").style.display;
//     if (y!="none") {
//       document.getElementById("btn_add_donate").style.display='none';
//       document.getElementById("box-find-donate").style.display = 'none';
//       document.getElementById("box-add-donate").style.display='none';
//       };
//     var z= document.getElementById("btn_add_pet").style.display;
//     if (z!="none") {
//       document.getElementById("box-find-pet").style.display = 'none';
//       document.getElementById("btn_add_pet").style.display='none';
//       document.getElementById("box-add-pet").style.display='none';
//       };

//     show_list_admin= document.getElementById('charts');
//     show_list_admin.innerHTML = "";
  
//     task_array = [];//khai bao bien
//     //đưa dữ liệu vào id="container" trong
    
    
//     firebase.database().ref("Admin").once('value', function(snapshot) {
//       snapshot.forEach(function(childSnapshot) {
//         var childKey = childSnapshot.key;
//         var childData = childSnapshot.val();
//         task_array.push(Object.values(childData));
//       });
//       //tạo vòng lặp để tạo các task 
//       for(var i, i = 0; i < task_array.length; i++){
//         task_address = task_array[i][0];
//         task_birthday = task_array[i][1];
//         task_email = task_array[i][2];
//         task_key = task_array[i][3];
//         task_password = task_array[i][4];
//         task_phone = task_array[i][5];
//         task_type_user = task_array[i][6];
//         task_username = task_array[i][7];


//         //tao TASK CONTAINER
//         task_container = document.createElement("div");
//         task_container.setAttribute("class", "task_container");
//         task_container.setAttribute("data-key", task_key);
        
//         task_img = document.createElement("div");
//         task_img.setAttribute("class", "task_img");

//         image_view = document.createElement('img');
//         image_view.setAttribute('id', 'image_view');
//         image_view.src = "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg";


//         //tao TITLE DATA
//         title_data = document.createElement("div");
//         title_data.setAttribute("class", "title_data");

//         title_email = document.createElement('p');
//         title_email.setAttribute('id', 'task_title_email');
//         title_email.setAttribute('contenteditable', false);
//         title_email.innerHTML = "Email : ";

//         title_username = document.createElement('p');
//         title_username.setAttribute('id', 'task_title_username');
//         title_username.setAttribute('contenteditable', false);
//         title_username.innerHTML = "User Name : ";

//         title_password = document.createElement('p');
//         title_password.setAttribute('id', 'task_title_password');
//         title_password.setAttribute('contenteditable', false);
//         title_password.innerHTML = "Password : ";

//         title_phone = document.createElement('p');
//         title_phone.setAttribute('id', 'task_title_phone');
//         title_phone.setAttribute('contenteditable', false);
//         title_phone.innerHTML = "Phone : ";

//         title_birthday = document.createElement('p');
//         title_birthday.setAttribute('id', 'task_title_birthday');
//         title_birthday.setAttribute('contenteditable', false);
//         title_birthday.innerHTML = "Birthday : ";

//         title_address = document.createElement('p');
//         title_address.setAttribute('id', 'task_title_address');
//         title_address.setAttribute('contenteditable', false);
//         title_address.innerHTML = "Address : ";

//         title_type_user = document.createElement('p');
//         title_type_user.setAttribute('id', 'task_title_type_user');
//         title_type_user.setAttribute('contenteditable', false);
//         title_type_user.innerHTML = "Type User : ";

        
//         //tạo TASK DATA 
//         task_data = document.createElement('div');
//         task_data.setAttribute('class', 'task_data');

//         email = document.createElement('p');
//         email.setAttribute('id', 'task_email');
//         email.setAttribute('contenteditable', false);
//         email.innerHTML = task_email; 

//         username = document.createElement('p');
//         username.setAttribute('id', 'task_username');
//         username.setAttribute('contenteditable', false);
//         username.innerHTML = task_username;

//         password = document.createElement('p');
//         password.setAttribute('id', 'task_password');
//         password.setAttribute('contenteditable', false);
//         password.innerHTML = task_password;

//         birthday = document.createElement('p');
//         birthday.setAttribute('id', 'task_birthday');
//         birthday.setAttribute('contenteditable', false);
//         birthday.innerHTML = task_birthday;

//         phone = document.createElement('p');
//         phone.setAttribute('id', 'task_phone');
//         phone.setAttribute('contenteditable', false);
//         phone.innerHTML = task_phone;

//         address = document.createElement('p');
//         address.setAttribute('id', 'task_address');
//         address.setAttribute('contenteditable', false);
//         address.innerHTML = task_address;

//         type_user = document.createElement('p');
//         type_user.setAttribute('id', 'task_type_user');
//         type_user.setAttribute('contenteditable', false);
//         type_user.innerHTML = task_type_user;

//         //tạo TASK TOOLS
//         task_tool = document.createElement('div');
//         task_tool.setAttribute('class', 'task_tool');

//         task_done_button = document.createElement('button');
//         task_done_button.setAttribute('id', 'task_done_button');
//         task_done_button.setAttribute('onclick', "task_done(this.parentElement.parentElement, this)");
//         fa_done = document.createElement('i');
//         fa_done.setAttribute('class', 'fa fa-check');

//         task_edit_button = document.createElement('button');
//         task_edit_button.setAttribute('id', 'task_edit_button');
//         task_edit_button.setAttribute('onclick', "task_edit(this.parentElement.parentElement, this)");
//         fa_edit = document.createElement('i');
//         fa_edit.setAttribute('class', 'fa fa-pencil-alt');

//         task_delete_button = document.createElement('button');
//         task_delete_button.setAttribute('id', 'task_delete_button');
//         task_delete_button.setAttribute('onclick', "task_delete(this.parentElement.parentElement)");
//         fa_delete = document.createElement('i');
//         fa_delete.setAttribute('class', 'fa fa-trash');


//         show_list_admin.append(task_container);

//         task_container.append(task_img);
//         task_img.append(image_view);

//         task_container.append(title_data);
//         title_data.append(title_email);
//         title_data.append(title_username);
//         title_data.append(title_password);
//         title_data.append(title_birthday);
//         title_data.append(title_phone);
//         title_data.append(title_address);
//         title_data.append(title_type_user);


//         task_container.append(task_data);
//         task_data.append(email);
//         task_data.append(username);
//         task_data.append(password);
//         task_data.append(birthday);
//         task_data.append(phone);
//         task_data.append(address);
//         task_data.append(type_user);


//         task_container.append(task_tool);
//         task_tool.append(task_done_button);
//         task_done_button.append(fa_done);
//         task_tool.append(task_edit_button);
//         task_edit_button.append(fa_edit);
//         task_tool.append(task_delete_button);
//         task_delete_button.append(fa_delete);
//       }

//     });
//   }

// /*------------------------------------------------------------------------*/

//   /*VOLUMTEERS*/

// function list_volumteers(){
//     var x= document.getElementById("btn_add_user").style.display;
//     if (x!="block") {
//         document.getElementById("btn_add_user").style.display='block';
//         document.getElementById("box-find-user").style.display = 'block';
//         };
//     var y= document.getElementById("btn_add_donate").style.display;
//     if (y!="none") {
//       document.getElementById("btn_add_donate").style.display='none';
//       document.getElementById("box-find-donate").style.display = 'none';
//       document.getElementById("box-add-donate").style.display='none';
//       };
//     var z= document.getElementById("btn_add_pet").style.display;
//     if (z!="none") {
//       document.getElementById("box-find-pet").style.display = 'none';
//       document.getElementById("btn_add_pet").style.display='none';
//       document.getElementById("box-add-pet").style.display='none';
//       };
//     show_list_volumteers= document.getElementById('charts');
//     show_list_volumteers.innerHTML = "";
    
//     task_array = [];//khai bao bien
//     //đưa dữ liệu vào id="container" trong
    
    
//     firebase.database().ref("Volumteers").once('value', function(snapshot) {
//       snapshot.forEach(function(childSnapshot) {
//         var childKey = childSnapshot.key;
//         var childData = childSnapshot.val();
//         task_array.push(Object.values(childData));
//       });
//       //tạo vòng lặp để tạo các task 
//       for(var i, i = 0; i < task_array.length; i++){
//         task_address = task_array[i][0];
//         task_birthday = task_array[i][1];
//         task_email = task_array[i][2];
//         task_key = task_array[i][3];
//         task_password = task_array[i][4];
//         task_phone = task_array[i][5];
//         task_type_user = task_array[i][6];
//         task_username = task_array[i][7];


//         //tao TASK CONTAINER
//         task_container = document.createElement("div");
//         task_container.setAttribute("class", "task_container");
//         task_container.setAttribute("data-key", task_key);

//         task_img = document.createElement("div");
//         task_img.setAttribute("class", "task_img");

//         image_view = document.createElement('img');
//         image_view.setAttribute('id', 'image_view');
//         image_view.src = "https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg";
        
//         //tao TITLE DATA
//         title_data = document.createElement("div");
//         title_data.setAttribute("class", "title_data");

//         title_email = document.createElement('p');
//         title_email.setAttribute('id', 'task_title_email');
//         title_email.setAttribute('contenteditable', false);
//         title_email.innerHTML = "Email : ";

//         title_username = document.createElement('p');
//         title_username.setAttribute('id', 'task_title_username');
//         title_username.setAttribute('contenteditable', false);
//         title_username.innerHTML = "User Name : ";

//         title_password = document.createElement('p');
//         title_password.setAttribute('id', 'task_title_password');
//         title_password.setAttribute('contenteditable', false);
//         title_password.innerHTML = "Password : ";

//         title_phone = document.createElement('p');
//         title_phone.setAttribute('id', 'task_title_phone');
//         title_phone.setAttribute('contenteditable', false);
//         title_phone.innerHTML = "Phone : ";

//         title_birthday = document.createElement('p');
//         title_birthday.setAttribute('id', 'task_title_birthday');
//         title_birthday.setAttribute('contenteditable', false);
//         title_birthday.innerHTML = "Birthday : ";

//         title_address = document.createElement('p');
//         title_address.setAttribute('id', 'task_title_address');
//         title_address.setAttribute('contenteditable', false);
//         title_address.innerHTML = "Address : ";

//         title_type_user = document.createElement('p');
//         title_type_user.setAttribute('id', 'task_title_type_user');
//         title_type_user.setAttribute('contenteditable', false);
//         title_type_user.innerHTML = "Type User : ";

        
//         //tạo TASK DATA 
//         task_data = document.createElement('div');
//         task_data.setAttribute('class', 'task_data');

//         email = document.createElement('p');
//         email.setAttribute('id', 'task_email');
//         email.setAttribute('contenteditable', false);
//         email.innerHTML = task_email; 

//         username = document.createElement('p');
//         username.setAttribute('id', 'task_username');
//         username.setAttribute('contenteditable', false);
//         username.innerHTML = task_username;

//         password = document.createElement('p');
//         password.setAttribute('id', 'task_password');
//         password.setAttribute('contenteditable', false);
//         password.innerHTML = task_password;

//         birthday = document.createElement('p');
//         birthday.setAttribute('id', 'task_birthday');
//         birthday.setAttribute('contenteditable', false);
//         birthday.innerHTML = task_birthday;

//         phone = document.createElement('p');
//         phone.setAttribute('id', 'task_phone');
//         phone.setAttribute('contenteditable', false);
//         phone.innerHTML = task_phone;

//         address = document.createElement('p');
//         address.setAttribute('id', 'task_address');
//         address.setAttribute('contenteditable', false);
//         address.innerHTML = task_address;

//         type_user = document.createElement('p');
//         type_user.setAttribute('id', 'task_type_user');
//         type_user.setAttribute('contenteditable', false);
//         type_user.innerHTML = task_type_user;

//         //tạo TASK TOOLS
//         task_tool = document.createElement('div');
//         task_tool.setAttribute('class', 'task_tool');

//         task_done_button = document.createElement('button');
//         task_done_button.setAttribute('id', 'task_done_button');
//         task_done_button.setAttribute('onclick', "task_done(this.parentElement.parentElement, this)");
//         fa_done = document.createElement('i');
//         fa_done.setAttribute('class', 'fa fa-check');

//         task_edit_button = document.createElement('button');
//         task_edit_button.setAttribute('id', 'task_edit_button');
//         task_edit_button.setAttribute('onclick', "task_edit(this.parentElement.parentElement, this)");
//         fa_edit = document.createElement('i');
//         fa_edit.setAttribute('class', 'fa fa-pencil-alt');

//         task_delete_button = document.createElement('button');
//         task_delete_button.setAttribute('id', 'task_delete_button');
//         task_delete_button.setAttribute('onclick', "task_delete(this.parentElement.parentElement)");
//         fa_delete = document.createElement('i');
//         fa_delete.setAttribute('class', 'fa fa-trash');


//         show_list_volumteers.append(task_container);

//         task_container.append(task_img);
//         task_img.append(image_view);

//         task_container.append(title_data);
//         title_data.append(title_email);
//         title_data.append(title_username);
//         title_data.append(title_password);
//         title_data.append(title_birthday);
//         title_data.append(title_phone);
//         title_data.append(title_address);
//         title_data.append(title_type_user);


//         task_container.append(task_data);
//         task_data.append(email);
//         task_data.append(username);
//         task_data.append(password);
//         task_data.append(birthday);
//         task_data.append(phone);
//         task_data.append(address);
//         task_data.append(type_user);


//         task_container.append(task_tool);
//         task_tool.append(task_done_button);
//         task_done_button.append(fa_done);
//         task_tool.append(task_edit_button);
//         task_edit_button.append(fa_edit);
//         task_tool.append(task_delete_button);
//         task_delete_button.append(fa_delete);
//       }

//     });
//   }


// /*------------------------------------------------------------------------*/ 

//   /*ADOPTERS*/


// function list_adopters(){
//     var x= document.getElementById("btn_add_user").style.display;
//     if (x!="block") {
//         document.getElementById("btn_add_user").style.display='block';
//         document.getElementById("box-find-user").style.display = 'block';
//         };
//     var y= document.getElementById("btn_add_donate").style.display;
//     if (y!="none") {
//       document.getElementById("btn_add_donate").style.display='none';
//       document.getElementById("box-find-donate").style.display = 'none';
//       document.getElementById("box-add-donate").style.display='none';
//       };
//     var z= document.getElementById("btn_add_pet").style.display;
//     if (z!="none") {
//       document.getElementById("box-find-pet").style.display = 'none';
//       document.getElementById("btn_add_pet").style.display='none';
//       document.getElementById("box-add-pet").style.display='none';
//       };

//     show_list_adopters= document.getElementById('charts');
//     show_list_adopters.innerHTML = "";
    
//     task_array = [];//khai bao bien
//     //đưa dữ liệu vào id="container" trong
    
    
//     firebase.database().ref("Adopters").once('value', function(snapshot) {
//       snapshot.forEach(function(childSnapshot) {
//         var childKey = childSnapshot.key;
//         var childData = childSnapshot.val();
//         task_array.push(Object.values(childData));
//       });
//       //tạo vòng lặp để tạo các task 
//       for(var i, i = 0; i < task_array.length; i++){
//         task_address = task_array[i][0];
//         task_birthday = task_array[i][1];
//         task_email = task_array[i][2];
//         task_key = task_array[i][3];
//         task_password = task_array[i][4];
//         task_phone = task_array[i][5];
//         task_type_user = task_array[i][6];
//         task_username = task_array[i][7];


//         //tao TASK CONTAINER
//         task_container = document.createElement("div");
//         task_container.setAttribute("class", "task_container");
//         task_container.setAttribute("data-key", task_key);

//         task_img = document.createElement("div");
//         task_img.setAttribute("class", "task_img");

//         image_view = document.createElement('img');
//         image_view.setAttribute('id', 'image_view');
//         image_view.src = "https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg";
        

//         //tao TITLE DATA
//         title_data = document.createElement("div");
//         title_data.setAttribute("class", "title_data");

//         title_email = document.createElement('p');
//         title_email.setAttribute('id', 'task_title_email');
//         title_email.setAttribute('contenteditable', false);
//         title_email.innerHTML = "Email : ";

//         title_username = document.createElement('p');
//         title_username.setAttribute('id', 'task_title_username');
//         title_username.setAttribute('contenteditable', false);
//         title_username.innerHTML = "User Name : ";

//         title_password = document.createElement('p');
//         title_password.setAttribute('id', 'task_title_password');
//         title_password.setAttribute('contenteditable', false);
//         title_password.innerHTML = "Password : ";

//         title_phone = document.createElement('p');
//         title_phone.setAttribute('id', 'task_title_phone');
//         title_phone.setAttribute('contenteditable', false);
//         title_phone.innerHTML = "Phone : ";

//         title_birthday = document.createElement('p');
//         title_birthday.setAttribute('id', 'task_title_birthday');
//         title_birthday.setAttribute('contenteditable', false);
//         title_birthday.innerHTML = "Birthday : ";

//         title_address = document.createElement('p');
//         title_address.setAttribute('id', 'task_title_address');
//         title_address.setAttribute('contenteditable', false);
//         title_address.innerHTML = "Address : ";

//         title_type_user = document.createElement('p');
//         title_type_user.setAttribute('id', 'task_title_type_user');
//         title_type_user.setAttribute('contenteditable', false);
//         title_type_user.innerHTML = "Type User : ";

        
//         //tạo TASK DATA 
//         task_data = document.createElement('div');
//         task_data.setAttribute('class', 'task_data');

//         email = document.createElement('p');
//         email.setAttribute('id', 'task_email');
//         email.setAttribute('contenteditable', false);
//         email.innerHTML = task_email; 

//         username = document.createElement('p');
//         username.setAttribute('id', 'task_username');
//         username.setAttribute('contenteditable', false);
//         username.innerHTML = task_username;

//         password = document.createElement('p');
//         password.setAttribute('id', 'task_password');
//         password.setAttribute('contenteditable', false);
//         password.innerHTML = task_password;

//         birthday = document.createElement('p');
//         birthday.setAttribute('id', 'task_birthday');
//         birthday.setAttribute('contenteditable', false);
//         birthday.innerHTML = task_birthday;

//         phone = document.createElement('p');
//         phone.setAttribute('id', 'task_phone');
//         phone.setAttribute('contenteditable', false);
//         phone.innerHTML = task_phone;

//         address = document.createElement('p');
//         address.setAttribute('id', 'task_address');
//         address.setAttribute('contenteditable', false);
//         address.innerHTML = task_address;

//         type_user = document.createElement('p');
//         type_user.setAttribute('id', 'task_type_user');
//         type_user.setAttribute('contenteditable', false);
//         type_user.innerHTML = task_type_user;

//         //tạo TASK TOOLS
//         task_tool = document.createElement('div');
//         task_tool.setAttribute('class', 'task_tool');

//         task_done_button = document.createElement('button');
//         task_done_button.setAttribute('id', 'task_done_button');
//         task_done_button.setAttribute('onclick', "task_done(this.parentElement.parentElement, this)");
//         fa_done = document.createElement('i');
//         fa_done.setAttribute('class', 'fa fa-check');

//         task_edit_button = document.createElement('button');
//         task_edit_button.setAttribute('id', 'task_edit_button');
//         task_edit_button.setAttribute('onclick', "task_edit(this.parentElement.parentElement, this)");
//         fa_edit = document.createElement('i');
//         fa_edit.setAttribute('class', 'fa fa-pencil-alt');

//         task_delete_button = document.createElement('button');
//         task_delete_button.setAttribute('id', 'task_delete_button');
//         task_delete_button.setAttribute('onclick', "task_delete(this.parentElement.parentElement)");
//         fa_delete = document.createElement('i');
//         fa_delete.setAttribute('class', 'fa fa-trash');


//         show_list_adopters.append(task_container);

//         task_container.append(task_img);
//         task_img.append(image_view);

//         task_container.append(title_data);
//         title_data.append(title_email);
//         title_data.append(title_username);
//         title_data.append(title_password);
//         title_data.append(title_birthday);
//         title_data.append(title_phone);
//         title_data.append(title_address);
//         title_data.append(title_type_user);


//         task_container.append(task_data);
//         task_data.append(email);
//         task_data.append(username);
//         task_data.append(password);
//         task_data.append(birthday);
//         task_data.append(phone);
//         task_data.append(address);
//         task_data.append(type_user);


//         task_container.append(task_tool);
//         task_tool.append(task_done_button);
//         task_done_button.append(fa_done);
//         task_tool.append(task_edit_button);
//         task_edit_button.append(fa_edit);
//         task_tool.append(task_delete_button);
//         task_delete_button.append(fa_delete);
//       }

//     });
//   }


// /*------------------------------------------------------------------------*/ 

//   /* EMPLOYEES*/


// function list_employees(){
//     // show_btn_add_employees= document.getElementById('box');
//     // show_btn_add_employees.innerHTML = "";
//     var x= document.getElementById("btn_add_user").style.display;
//     if (x!="block") {
//         document.getElementById("btn_add_user").style.display='block';
//         document.getElementById("box-find-user").style.display = 'block';
//         };
//     var y= document.getElementById("btn_add_donate").style.display;
//     if (y!="none") {
//       document.getElementById("btn_add_donate").style.display='none';
//       document.getElementById("box-find-donate").style.display = 'none';
//       document.getElementById("box-add-donate").style.display='none';
//       };
//     var z= document.getElementById("btn_add_pet").style.display;
//     if (z!="none") {
//       document.getElementById("box-find-pet").style.display = 'none';
//       document.getElementById("btn_add_pet").style.display='none';
//       document.getElementById("box-add-pet").style.display='none';
//       };

//     show_list_employees= document.getElementById('charts');
//     show_list_employees.innerHTML = "";
 
//     task_array = [];//khai bao bien
//     //đưa dữ liệu vào id="container" trong
    
    
//     firebase.database().ref("Employees").once('value', function(snapshot) {
//       snapshot.forEach(function(childSnapshot) {
//         var childKey = childSnapshot.key;
//         var childData = childSnapshot.val();
//         task_array.push(Object.values(childData));
//       });
      
//       //tạo vòng lặp để tạo các task 
//       for(var i, i = 0; i < task_array.length; i++){
//         task_address = task_array[i][0];
//         task_birthday = task_array[i][1];
//         task_email = task_array[i][2];
//         task_key = task_array[i][3];
//         task_password = task_array[i][4];
//         task_phone = task_array[i][5];
//         task_type_user = task_array[i][6];
//         task_username = task_array[i][7];


//         //tao TASK CONTAINER
//         task_container = document.createElement("div");
//         task_container.setAttribute("class", "task_container");
//         task_container.setAttribute("data-key", task_key);

//         task_img = document.createElement("div");
//         task_img.setAttribute("class", "task_img");

//         image_view = document.createElement('img');
//         image_view.setAttribute('id', 'image_view');
//         image_view.src = "https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg";
        

//         //tao TITLE DATA
//         title_data = document.createElement("div");
//         title_data.setAttribute("class", "title_data");

//         title_email = document.createElement('p');
//         title_email.setAttribute('id', 'task_title_email');
//         title_email.setAttribute('contenteditable', false);
//         title_email.innerHTML = "Email : ";

//         title_username = document.createElement('p');
//         title_username.setAttribute('id', 'task_title_username');
//         title_username.setAttribute('contenteditable', false);
//         title_username.innerHTML = "User Name : ";

//         title_password = document.createElement('p');
//         title_password.setAttribute('id', 'task_title_password');
//         title_password.setAttribute('contenteditable', false);
//         title_password.innerHTML = "Password : ";

//         title_phone = document.createElement('p');
//         title_phone.setAttribute('id', 'task_title_phone');
//         title_phone.setAttribute('contenteditable', false);
//         title_phone.innerHTML = "Phone : ";

//         title_birthday = document.createElement('p');
//         title_birthday.setAttribute('id', 'task_title_birthday');
//         title_birthday.setAttribute('contenteditable', false);
//         title_birthday.innerHTML = "Birthday : ";

//         title_address = document.createElement('p');
//         title_address.setAttribute('id', 'task_title_address');
//         title_address.setAttribute('contenteditable', false);
//         title_address.innerHTML = "Address : ";

//         title_type_user = document.createElement('p');
//         title_type_user.setAttribute('id', 'task_title_type_user');
//         title_type_user.setAttribute('contenteditable', false);
//         title_type_user.innerHTML = "Type User : ";

        
//         //tạo TASK DATA 
//         task_data = document.createElement('div');
//         task_data.setAttribute('class', 'task_data');

//         email = document.createElement('p');
//         email.setAttribute('id', 'task_email');
//         email.setAttribute('contenteditable', false);
//         email.innerHTML = task_email; 

//         username = document.createElement('p');
//         username.setAttribute('id', 'task_username');
//         username.setAttribute('contenteditable', false);
//         username.innerHTML = task_username;

//         password = document.createElement('p');
//         password.setAttribute('id', 'task_password');
//         password.setAttribute('contenteditable', false);
//         password.innerHTML = task_password;

//         birthday = document.createElement('p');
//         birthday.setAttribute('id', 'task_birthday');
//         birthday.setAttribute('contenteditable', false);
//         birthday.innerHTML = task_birthday;

//         phone = document.createElement('p');
//         phone.setAttribute('id', 'task_phone');
//         phone.setAttribute('contenteditable', false);
//         phone.innerHTML = task_phone;

//         address = document.createElement('p');
//         address.setAttribute('id', 'task_address');
//         address.setAttribute('contenteditable', false);
//         address.innerHTML = task_address;

//         type_user = document.createElement('p');
//         type_user.setAttribute('id', 'task_type_user');
//         type_user.setAttribute('contenteditable', false);
//         type_user.innerHTML = task_type_user;

//         //tạo TASK TOOLS
//         task_tool = document.createElement('div');
//         task_tool.setAttribute('class', 'task_tool');

//         task_done_button = document.createElement('button');
//         task_done_button.setAttribute('id', 'task_done_button');
//         task_done_button.setAttribute('onclick', "task_done(this.parentElement.parentElement, this)");
//         fa_done = document.createElement('i');
//         fa_done.setAttribute('class', 'fa fa-check');

//         task_edit_button = document.createElement('button');
//         task_edit_button.setAttribute('id', 'task_edit_button');
//         task_edit_button.setAttribute('onclick', "task_edit(this.parentElement.parentElement, this)");
//         fa_edit = document.createElement('i');
//         fa_edit.setAttribute('class', 'fa fa-pencil-alt');

//         task_delete_button = document.createElement('button');
//         task_delete_button.setAttribute('id', 'task_delete_button');
//         task_delete_button.setAttribute('onclick', "task_delete(this.parentElement.parentElement)");
//         fa_delete = document.createElement('i');
//         fa_delete.setAttribute('class', 'fa fa-trash');


//         show_list_employees.append(task_container);

//         task_container.append(task_img);
//         task_img.append(image_view);

//         task_container.append(title_data);
//         title_data.append(title_email);
//         title_data.append(title_username);
//         title_data.append(title_password);
//         title_data.append(title_birthday);
//         title_data.append(title_phone);
//         title_data.append(title_address);
//         title_data.append(title_type_user);


//         task_container.append(task_data);
//         task_data.append(email);
//         task_data.append(username);
//         task_data.append(password);
//         task_data.append(birthday);
//         task_data.append(phone);
//         task_data.append(address);
//         task_data.append(type_user);


//         task_container.append(task_tool);
//         task_tool.append(task_done_button);
//         task_done_button.append(fa_done);
//         task_tool.append(task_edit_button);
//         task_edit_button.append(fa_edit);
//         task_tool.append(task_delete_button);
//         task_delete_button.append(fa_delete);
//       }

//     });
//   }
// /*------------------------------------------------------------------------*/  
//   // button edit, button delete
  

//   function task_edit(task, edit_button){
    

//     email = task.childNodes[2].childNodes[0];
//     email.setAttribute("contenteditable", false);
//     email.setAttribute("class", "task_data_editing");
//     email.setAttribute("id", "task_email");
//     email.focus();

//     username = task.childNodes[2].childNodes[1];
//     username.setAttribute("contenteditable", false);
//     username.setAttribute("class", "task_data_editing");
//     username.setAttribute("id", "task_username");

//     password = task.childNodes[2].childNodes[2];
//     password.setAttribute("contenteditable", true);
//     password.setAttribute("class", "task_data_editing");
//     password.setAttribute("id", "task_password");

//     birthday = task.childNodes[2].childNodes[3];
//     birthday.setAttribute("contenteditable", true);
//     birthday.setAttribute("class", "task_data_editing");
//     birthday.setAttribute("id", "task_birthday");

//     phone = task.childNodes[2].childNodes[4];
//     phone.setAttribute("contenteditable", true);
//     phone.setAttribute("class", "task_data_editing");
//     phone.setAttribute("id", "task_phone");

//     address = task.childNodes[2].childNodes[5];
//     address.setAttribute("contenteditable", true);
//     address.setAttribute("class", "task_data_editing");
//     address.setAttribute("id", "task_address");

//     type_user = task.childNodes[2].childNodes[6];
//     type_user.setAttribute("contenteditable", false);
//     type_user.setAttribute("class", "task_data_editing");
//     type_user.setAttribute("id", "task_type_user");

//   }

//   function task_done(task, edit_button){
    
//     email = task.childNodes[2].childNodes[0];
//     email.setAttribute("contenteditable", false);
//     email.setAttribute("class", "task_data_done");
//     email.setAttribute("id", "task_email");

//     username = task.childNodes[2].childNodes[1];
//     username.setAttribute("contenteditable", false);
//     username.setAttribute("class", "task_data_done");
//     username.setAttribute("id", "task_username");

//     password = task.childNodes[2].childNodes[2];
//     password.setAttribute("contenteditable", false);
//     password.setAttribute("class", "task_data_done");
//     password.setAttribute("id", "task_password");

//     birthday = task.childNodes[2].childNodes[3];
//     birthday.setAttribute("contenteditable", false);
//     birthday.setAttribute("class", "task_data_done");
//     birthday.setAttribute("id", "task_birthday");

//     phone = task.childNodes[2].childNodes[4];
//     phone.setAttribute("contenteditable", false);
//     phone.setAttribute("class", "task_data_done");
//     phone.setAttribute("id", "task_phone");

//     address = task.childNodes[2].childNodes[5];
//     address.setAttribute("contenteditable", false);
//     address.setAttribute("class", "task_data_done");
//     address.setAttribute("id", "task_address");

//     type_user = task.childNodes[2].childNodes[6];
//     type_user.setAttribute("class", "task_data_done");
//     type_user.setAttribute("id", "task_type_user");

//     // change in firebase to
//     var key = task.getAttribute("data-key");
//     var type_user = task.childNodes[2].childNodes[6].innerHTML;
//     var email= task.childNodes[2].childNodes[0].innerHTML;
//     var username = task.childNodes[2].childNodes[1].innerHTML;
//     var task_obj = {
//       email: email,
//       username: username,
//       password: task.childNodes[2].childNodes[2].innerHTML ,
//       birthday: task.childNodes[2].childNodes[3].innerHTML,
//       phone: task.childNodes[2].childNodes[4].innerHTML,
//       address: task.childNodes[2].childNodes[5].innerHTML,
//       type_user: type_user,

//        key: key,
//     };
  
//     var updates = {};
//     updates["/" + type_user + "/" + username] = task_obj;
//     firebase.database().ref().update(updates);

//   }

  
//   function task_delete(task){
//     key = task.getAttribute("data-key");
//     var type_user = task.childNodes[2].childNodes[6].innerHTML;
//     var username = task.childNodes[2].childNodes[1].innerHTML;
//     task_to_remove = firebase.database().ref( type_user +"/" + username);
//     task_to_remove.remove();

//     // remove from html view or whatevesss
//     task.remove();
//     count_user_and_pet();
//   }

// /*------------------------------------------------------------------------*/  

// /*SERVICES*/

//   // function list_services(){
//   //   show_btn_add_services= document.getElementById('box');
//   //   show_btn_add_services.innerHTML = "";
//   //   show_list_services= document.getElementById('charts');
//   //   show_list_services.innerHTML = "";
    
    
//   //   var html = '<button onclick="add_services_form()" class="btn_add" id="btn_add_services"><i class="fas fa-plus-circle"></i><label>Add Services</label></button>';
    
//   //   document.getElementById('box').insertAdjacentHTML('afterbegin', html);
//   //   // clear div id="container"- tao o trong
//   //   task_array = [];//khai bao bien
//   //   // //đưa dữ liệu vào id="container" trong
    
    
//   //   firebase.database().ref("Services").once('value', function(snapshot) {
//   //     snapshot.forEach(function(childSnapshot) {
//   //       var childKey = childSnapshot.key;
//   //       var childData = childSnapshot.val();
//   //       task_array.push(Object.values(childData));
//   //     });
//   //     //tạo vòng lặp để tạo các task 
//   //     for(var i, i = 0; i < task_array.length; i++){
//   //       task_describeService = task_array[i][0];
//   //       task_key = task_array[i][1];
//   //       task_link = task_array[i][2];
//   //       task_nameService = task_array[i][3];
//   //       task_priceService = task_array[i][4];
 
//   //       //tao TASK CONTAINER
//   //       task_container_services = document.createElement("div");
//   //       task_container_services.setAttribute("class", "task_container_services");
//   //       task_container_services.setAttribute("data-key", task_key);

 
//   //       //tạo TASK DATA 
//   //       task_data = document.createElement('div');
//   //       task_data.setAttribute('id', 'task_data');

//   //       image_view = document.createElement('img');
//   //       image_view.setAttribute('id', 'task_image_view');
//   //       image_view.setAttribute('contenteditable', false);
//   //       image_view.src = task_link;

//   //       nameService = document.createElement('p');
//   //       nameService.setAttribute('id', 'task_nameService');
//   //       nameService.setAttribute('contenteditable', false);
//   //       nameService.innerHTML = task_nameService;

//   //       priceService = document.createElement('p');
//   //       priceService.setAttribute('id', 'task_priceService');
//   //       priceService.setAttribute('contenteditable', false);
//   //       priceService.innerHTML = task_priceService;

//   //       describeService = document.createElement('p');
//   //       describeService.setAttribute('id', 'task_describeService');
//   //       describeService.setAttribute('contenteditable', false);
//   //       describeService.innerHTML = task_describeService;

        

//   //       // tạo TASK TOOLS
//   //       task_tool= document.createElement('div');
//   //       task_tool.setAttribute('id', 'task_tool');

//   //       task_done_services_button = document.createElement('button');
//   //       task_done_services_button.setAttribute('id', 'task_done_services_button');
//   //       task_done_services_button.setAttribute('class', 'task_services_button');
//   //       task_done_services_button.setAttribute('onclick', "task_done_services(this.parentElement.parentElement, this)");
//   //       fa_done = document.createElement('i');
//   //       fa_done.setAttribute('class', 'fa fa-check');


//   //       task_edit_services_button = document.createElement('button');
//   //       task_edit_services_button.setAttribute('id', 'task_edit_services_button');
//   //       task_edit_services_button.setAttribute('class', 'task_services_button');
//   //       task_edit_services_button.setAttribute('onclick', "task_edit_services(this.parentElement.parentElement, this)");
//   //       fa_edit = document.createElement('i');
//   //       fa_edit.setAttribute('class', 'fa fa-pencil-alt');

//   //       task_delete_services_button = document.createElement('button');
//   //       task_delete_services_button.setAttribute('id', 'task_delete_services_button');
//   //       task_delete_services_button.setAttribute('class', 'task_services_button');
//   //       task_delete_services_button.setAttribute('onclick', "task_delete_services(this.parentElement.parentElement)");
//   //       fa_delete = document.createElement('i');
//   //       fa_delete.setAttribute('class', 'fa fa-trash');


//   //       show_list_services.append(task_container_services);
//   //       // task_container.append(title_data);
//   //       // title_data.append(title_keyService);
//   //       // title_data.append(title_nameService);
//   //       // title_data.append(title_priceService);
//   //       // title_data.append(title_pictureService);
//   //       // title_data.append(title_phone);
//   //       // title_data.append(title_address);
//   //       // title_data.append(title_type_user);


//   //       task_container_services.append(task_data);
//   //       task_data.append(image_view);
//   //       task_data.append(nameService);
//   //       task_data.append(priceService);
//   //       task_data.append(describeService);
//         // task_data.append(phone);
//         // task_data.append(address);
// //         // task_data.append(type_user);


// //         task_container_services.append(task_tool);
// //         task_tool.append(task_done_services_button);
// //         task_done_services_button.append(fa_done);
// //         task_tool.append(task_edit_services_button);
// //         task_edit_services_button.append(fa_edit);
// //         task_tool.append(task_delete_services_button);
// //         task_delete_services_button.append(fa_delete);
// //       }

// //     });
// //   }

    
// // function add_services_form(){
// //       show_form_services= document.getElementById('charts');
// //       show_form_services.innerHTML = "";
// //       var html = '<div><input type="name" placeholder="nameService" id="nameService" class="txtb"><input type="number" placeholder="priceService" id="priceService" class="txtb"><input type="text" placeholder="describeService" id="describeService" class="txtb"><input type="file" onchange="chooseFile(event)"><img id="image_view" ></div><button onclick="add_img()" id="uploaded" class="btn-third">uploaded</button>';
// //       document.getElementById('charts').insertAdjacentHTML('afterbegin', html);
// //   }


// // function chooseFile(e){
      
// //       file = e.target.files[0];
// //     }


// // function add_img(){
// //   uploaded();
// //  }


// // function uploaded(){
// //     var image_view = document.getElementById('image_view');
// //     var nameService = document.getElementById('nameService').value;
// //     var priceService = document.getElementById('priceService').value;
// //     var describeService = document.getElementById('describeService').value;

// //     var uploadTask = firebase.storage().ref("/Services-picture/"+nameService+".jpg").put(file);
// //     uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
// //       image_view.src = downloadURL;
// //       alert(downloadURL);
// //     });

// //     downloaded();
// //   }


// //   function downloaded(){
// //       var image_view = document.getElementById('image_view');
// //       var nameService = document.getElementById('nameService').value;
// //       var priceService = document.getElementById('priceService').value;
// //       var describeService = document.getElementById('describeService').value;

// //       var uploadTask = firebase.storage().ref("/Services-picture/"+nameService+".jpg").put(file);
// //       uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
// //         console.log(downloadURL);
// //         image_view.src = downloadURL;
// //         var link = downloadURL;
// //        // var email = document.getElementById('email').value;
// //     // var password = document.getElementById('password').value;
// //       var nameService = document.getElementById('nameService').value;
// //       var priceService = document.getElementById('priceService').value;
// //       var describeService = document.getElementById('describeService').value;
// //     // var phone = document.getElementById('phone').value;
// //     // var address = document.getElementById('address').value;
// //     // var birthday = document.getElementById('birthday').value;
// //     // if (document.getElementById("type_user").checked==true) {
// //     //   var type_user = document.getElementById('type_user').value;
// //       // if(email.length != 0 && password.length != 0 && username.length != 0 && phone.length != 0 && address.length != 0 && birthday.length != 0){
// //           // our boxes have data and we take database
// //           var key = firebase.database().ref().child('Services').push().key;
// //           var task = {
// //             // email: email,
// //             // password: password,
// //             nameService: nameService,
// //             priceService: priceService,
// //             describeService: describeService,
// //             // phone: phone,
// //             // address: address,
// //             // birthday: birthday,
// //             // type_user: type_user,
// //             link: link,
// //             key: key,
// //           };

// //           var updates = {};
// //           updates["/Services/" + nameService] = task;
// //           firebase.database().ref().update(updates);
// //           list_services();
// //     //   }
// //     // }else {
// //     //   alert("Please do not leave any items blank!");
// //     // } 

// //     });

    
// //   }


// // /*------------------------------------------------------------------------*/  
// //   // button edit, button delete FOR SERVICES
  

// //   function task_edit_services(task, edit_button_services){
    

// //     image_view = task.childNodes[0].childNodes[0];
// //     image_view.setAttribute("contenteditable", true);
// //     image_view.setAttribute("class", "task_data_editing");
// //     image_view.setAttribute("id", "task_image_view");

// //     nameService = task.childNodes[0].childNodes[1];
// //     nameService.setAttribute("contenteditable", true);
// //     nameService.setAttribute("class", "task_data_editing");
// //     nameService.setAttribute("id", "task_nameService");

// //     priceService = task.childNodes[0].childNodes[2];
// //     priceService.setAttribute("contenteditable", true);
// //     priceService.setAttribute("class", "task_data_editing");
// //     priceService.setAttribute("id", "task_priceService");

// //     describeService = task.childNodes[0].childNodes[3];
// //     describeService.setAttribute("contenteditable", true);
// //     describeService.setAttribute("class", "task_data_editing");
// //     describeService.setAttribute("id", "task_describeService");


// //   }

// //   function task_done_services(task, edit_button_services){
    


// //     image_view = task.childNodes[0].childNodes[0];
// //     image_view.setAttribute("contenteditable", false);
// //     image_view.setAttribute("class", "task_data_done");
// //     image_view.setAttribute("id", "task_image_view");

// //     nameService = task.childNodes[0].childNodes[1];
// //     nameService.setAttribute("contenteditable", false);
// //     nameService.setAttribute("class", "task_data_done");
// //     nameService.setAttribute("id", "task_nameService");

// //     priceService = task.childNodes[0].childNodes[2];
// //     priceService.setAttribute("contenteditable", false);
// //     priceService.setAttribute("class", "task_data_done");
// //     priceService.setAttribute("id", "task_priceService");

// //     describeService = task.childNodes[0].childNodes[3];
// //     describeService.setAttribute("contenteditable", false);
// //     describeService.setAttribute("class", "task_data_done");
// //     describeService.setAttribute("id", "task_describeService");


// //     // change in firebase to
// //     var key = task.getAttribute("data-key");
// //     var nameService = task.childNodes[0].childNodes[1].innerHTML;
// //     var link = task.childNodes[0].childNodes[0].innerHTML ;
// //     var task_obj = {
// //       nameService: nameService,
// //       priceService: task.childNodes[0].childNodes[2].innerHTML,
// //       describeService: task.childNodes[0].childNodes[3].innerHTML,
// //       link: link ,

// //        key: key,
// //     };

// //     var updates = {};
// //     updates["/Services/" + nameService] = task_obj;
// //     firebase.database().ref().update(updates);

// //   }

  

// //   function task_delete_services(task){
// //     key = task.getAttribute("data-key");
    
// //     var nameService = task.childNodes[0].childNodes[1].innerHTML;

// //     task_to_remove = firebase.database().ref( "Services/" + nameService);
// //     task_to_remove.remove();

// //     // remove from html view or whatevesss
// //     task.remove();

// //   }
// /*------------------------------------------------------------------------*/  
// /*DONATE*/
// function close_add_donate_form(){
//       document.getElementById("box-add-donate").style.display = 'none';

// }

// function add_donate(){
    

//     var email_donate = document.getElementById('email_donate').value;
//     var username_donate = document.getElementById('username_donate').value;
//     var money_donate = document.getElementById('money_donate').value;
//     var day_donate = document.getElementById('day_donate').value;
    
    
//       if(email_donate.length != 0 && username_donate.length != 0 && day_donate.length != 0){
//           // our boxes have data and we take database
//           if (document.getElementById("check_donate").checked==true) {
//           var key = firebase.database().ref().child('Statistical_Donate').push().key;
//           var task = {
            
//             username_donate: username_donate,
//             email_donate: email_donate,
//             money_donate: money_donate,
//             day_donate: day_donate,
//             key: key,
//           };

//           var updates = {};
//           updates["/Statistical_Donate/" + username_donate] = task;
//           firebase.database().ref().update(updates);
//           document.getElementById("box-add-donate").style.display = 'none';
          

//             list_donate();
          
//       }else {
//               alert("Please do not leave any items blank!");
//             } 
//     }else {
//             alert("Please do not leave any items blank!");
//           } 
    
//   }


// function add_donate_form(){

//     document.getElementById("box-add-donate").style.display = 'block';
//     // show_list_admin= document.getElementById('charts');
//     // show_list_admin.innerHTML = "";
//     // var html = '<div id="box-add-user" class="task_container"><div id="title_data"><p id="task_title_email" contenteditable="false">Email : </p><p id="task_title_username" contenteditable="false">User Name : </p><p id="task_title_password" contenteditable="false">Password : </p><p id="task_title_birthday" contenteditable="false">Birthday : </p><p id="task_title_phone" contenteditable="false">Phone : </p><p id="task_title_address" contenteditable="false">Address : </p></div><div id="task_data"><input type="email" id="email" class="txtb"><br><input type="name" id="username" class="txtb"><br><input type="password" id="password" class="txtb"><br><input type="date" id="birthday" class="txtb"><br><input type="text" id="phone" class="txtb"><br><input type="text" id="address" class="txtb"><br></div><div id="task_btn"><div id="type_user_box"><input type="checkbox" id="type_user" value="Admin"><label>I am sure of this decision!</label><br></div><div id="btn-box"><button onclick="add_admin()" id="signup-btn" class="">Sign Up</button><button onclick="list_admin()" id="cancel-btn" class="">Cancel</button></div></div></div>';
//     // document.getElementById('charts').insertAdjacentHTML('afterbegin', html);
    
// }

// function get_donate(){

//   show_list_donate_find= document.getElementById('charts');
//   show_list_donate_find.innerHTML = "";

//   var name_donate_find= document.getElementById("name_donate_find").value;
//   if (name_donate_find!="") {
//     firebase.database().ref('Statistical_Donate/'+name_donate_find).once('value').then(function(snapshort){


//       var task_name_donate_find= snapshort.val().username_donate;
//       var task_email_donate_find= snapshort.val().email_donate;
//       var task_money_donate_find = snapshort.val().money_donate;
//       var task_day_donate_find = snapshort.val().day_donate;



      
//           //tao TASK CONTAINER
//         task_container = document.createElement("div");
//         task_container.setAttribute("class", "task_container");
//         task_container.setAttribute("data-key", task_key);

//         task_img = document.createElement("div");
//         task_img.setAttribute("class", "task_img");

//         image_view = document.createElement('img');
//         image_view.setAttribute('id', 'image_view');
//         image_view.src = "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg";

//         //tao TITLE DATA
//         title_data = document.createElement("div");
//         title_data.setAttribute("class", "title_data");

//         title_username_donate = document.createElement('p');
//         title_username_donate.setAttribute('id', 'task_title_username_donate');
//         title_username_donate.setAttribute('contenteditable', false);
//         title_username_donate.innerHTML = "User Name : ";

//         title_email_donate = document.createElement('p');
//         title_email_donate.setAttribute('id', 'task_title_email_donate');
//         title_email_donate.setAttribute('contenteditable', false);
//         title_email_donate.innerHTML = "Email : ";

        

//         title_money_donate = document.createElement('p');
//         title_money_donate.setAttribute('id', 'task_title_money_donate');
//         title_money_donate.setAttribute('contenteditable', false);
//         title_money_donate.innerHTML = "Money(VNĐ): ";

//         title_day_donate = document.createElement('p');
//         title_day_donate.setAttribute('id', 'task_title_day_donate');
//         title_day_donate.setAttribute('contenteditable', false);
//         title_day_donate.innerHTML = "Day Donate : ";

        

        
//         //tạo TASK DATA 
//         task_data = document.createElement('div');
//         task_data.setAttribute('class', 'task_data');

        

//         username_donate = document.createElement('p');
//         username_donate.setAttribute('id', 'task_name_donate_find');
//         username_donate.setAttribute('contenteditable', false);
//         username_donate.innerHTML = task_name_donate_find;

//         email_donate = document.createElement('p');
//         email_donate.setAttribute('id', 'task_email_donate_find');
//         email_donate.setAttribute('contenteditable', false);
//         email_donate.innerHTML = task_email_donate_find; 

//         money_donate = document.createElement('p');
//         money_donate.setAttribute('id', 'task_money_donate_find');
//         money_donate.setAttribute('contenteditable', false);
//         money_donate.innerHTML = task_money_donate_find;

//         day_donate = document.createElement('p');
//         day_donate.setAttribute('id', 'task_day_donate_find');
//         day_donate.setAttribute('contenteditable', false);
//         day_donate.innerHTML = task_day_donate_find;


//         //tạo TASK TOOLS
        
//         task_tool= document.createElement('div');
//         task_tool.setAttribute('class', 'task_tool');

//         task_done_donate_button = document.createElement('button');
//         task_done_donate_button.setAttribute('id', 'task_done_donate_button');
//         task_done_donate_button.setAttribute('class', 'task_services_button');
//         task_done_donate_button.setAttribute('onclick', "task_done_donate(this.parentElement.parentElement, this)");
//         fa_done = document.createElement('i');
//         fa_done.setAttribute('class', 'fa fa-check');


//         task_edit_donate_button = document.createElement('button');
//         task_edit_donate_button.setAttribute('id', 'task_edit_donate_button');
//         task_edit_donate_button.setAttribute('class', 'task_services_button');
//         task_edit_donate_button.setAttribute('onclick', "task_edit_donate(this.parentElement.parentElement, this)");
//         fa_edit = document.createElement('i');
//         fa_edit.setAttribute('class', 'fa fa-pencil-alt');

//         task_delete_donate_button = document.createElement('button');
//         task_delete_donate_button.setAttribute('id', 'task_delete_donate_button');
//         task_delete_donate_button.setAttribute('class', 'task_services_button');
//         task_delete_donate_button.setAttribute('onclick', "task_delete_donate(this.parentElement.parentElement)");
//         fa_delete = document.createElement('i');
//         fa_delete.setAttribute('class', 'fa fa-trash');


//         show_list_donate.append(task_container);

//         task_container.append(task_img);
//         task_img.append(image_view);

//         task_container.append(title_data);
//         title_data.append(title_username_donate);
//         title_data.append(title_email_donate);
//         title_data.append(title_money_donate);
//         title_data.append(title_day_donate);


//         task_container.append(task_data);
//         task_data.append(username_donate);
//         task_data.append(email_donate);
//         task_data.append(money_donate);
//         task_data.append(day_donate);
 

//         task_container.append(task_tool);
//         task_tool.append(task_done_donate_button);
//         task_done_donate_button.append(fa_done);
//         task_tool.append(task_edit_donate_button);
//         task_edit_donate_button.append(fa_edit);
//         task_tool.append(task_delete_donate_button);
//         task_delete_donate_button.append(fa_delete);
 
//     })
//   };
//   if (name_donate_find==""){
//     alert("Please do not leave any items blank!");
//     list_donate();
//   };
    

// }

// function total_donate(){
//     task_array = [];//khai bao bien
//     //đưa dữ liệu vào id="container" trong
//     number_donate = 0;
    
//     firebase.database().ref("Statistical_Donate").once('value', function(snapshot) {
//       snapshot.forEach(function(childSnapshot) {
//         var childKey = childSnapshot.key;
//         var childData = childSnapshot.val();
//         task_array.push(Object.values(childData));
//       });
//       //tạo vòng lặp để tạo các task 
//       for(var i, i = 0; i < task_array.length; i++){
//         task_day_donate = task_array[i][0];
//         task_email_donate = task_array[i][1];
//         task_key = task_array[i][2];
//         task_money_donate = task_array[i][3];
//         task_username_donate = task_array[i][4];

        
//         number_donate = Number(number_donate)  + Number(task_money_donate) ;
        
//       }

//       document.getElementById("number_donate").innerHTML=number_donate;
//     });
    
// }


// function list_donate(){
    
//     var x= document.getElementById("btn_add_user").style.display;
//     if (x!="none") {
//         document.getElementById("btn_add_user").style.display='none';
//         document.getElementById("box-add-user").style.display='none';
//         document.getElementById("box-find-user").style.display='none';
//         };
//     var y= document.getElementById("btn_add_donate").style.display;
//     if (y!="block") {
//       document.getElementById("btn_add_donate").style.display='block';
//       document.getElementById("box-find-donate").style.display='block';
      
//       };
//     var z= document.getElementById("btn_add_pet").style.display;
//     if (z!="none") {
//       document.getElementById("btn_add_pet").style.display='none';
//       document.getElementById("box-add-pet").style.display='none';
//       document.getElementById("box-find-pet").style.display='none';
//       };


//     show_list_donate= document.getElementById('charts');
//     show_list_donate.innerHTML = "";

//     task_array = [];//khai bao bien
//     //đưa dữ liệu vào id="container" trong
    
    
//     firebase.database().ref("Statistical_Donate").once('value', function(snapshot) {
//       snapshot.forEach(function(childSnapshot) {
//         var childKey = childSnapshot.key;
//         var childData = childSnapshot.val();
//         task_array.push(Object.values(childData));
//       });


//         task_container = document.createElement("div");
//         task_container.setAttribute("class", "task_container");
        
      
//         title_data = document.createElement("div");
//         title_data.setAttribute("class", "title_data");

//         title_number_money_donate = document.createElement('p');
//         title_number_money_donate.setAttribute('id', 'title_number_money_donate');
//         title_number_money_donate.setAttribute('contenteditable', false);
//         title_number_money_donate.innerHTML = "Total Donate($): ";

//         task_data = document.createElement("div");
//         task_data.setAttribute("class", "task_data");

//         data_number_money_donate = document.createElement('p');
//         data_number_money_donate.setAttribute('id', 'number_donate');
//         data_number_money_donate.setAttribute('contenteditable', false);
//         data_number_money_donate.innerHTML = "--";


//         show_list_donate.append(task_container);
//         task_container.append(title_data);
//         title_data.append(title_number_money_donate);

//         task_container.append(task_data);
//         task_data.append(data_number_money_donate);


//       //tạo vòng lặp để tạo các task 
//       for(var i, i = 0; i < task_array.length; i++){
//         task_day_donate = task_array[i][0];
//         task_email_donate = task_array[i][1];
//         task_key = task_array[i][2];
//         task_money_donate = task_array[i][3];
//         task_username_donate = task_array[i][4];



//         //tao TASK CONTAINER
//         task_container = document.createElement("div");
//         task_container.setAttribute("class", "task_container");
//         task_container.setAttribute("data-key", task_key);


//         task_img = document.createElement("div");
//         task_img.setAttribute("class", "task_img");

//         image_view = document.createElement('img');
//         image_view.setAttribute('id', 'image_view');
//         image_view.src = "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg";


//         //tao TITLE DATA
//         title_data = document.createElement("div");
//         title_data.setAttribute("class", "title_data");

//         title_username_donate = document.createElement('p');
//         title_username_donate.setAttribute('id', 'task_title_username_donate');
//         title_username_donate.setAttribute('contenteditable', false);
//         title_username_donate.innerHTML = "User Name : ";

//         title_email_donate = document.createElement('p');
//         title_email_donate.setAttribute('id', 'task_title_email_donate');
//         title_email_donate.setAttribute('contenteditable', false);
//         title_email_donate.innerHTML = "Email : ";

        

//         title_money_donate = document.createElement('p');
//         title_money_donate.setAttribute('id', 'task_title_money_donate');
//         title_money_donate.setAttribute('contenteditable', false);
//         title_money_donate.innerHTML = "Money ($): ";

//         title_day_donate = document.createElement('p');
//         title_day_donate.setAttribute('id', 'task_title_day_donate');
//         title_day_donate.setAttribute('contenteditable', false);
//         title_day_donate.innerHTML = "Day Donate : ";

        
//         //tạo TASK DATA 
//         task_data = document.createElement('div');
//         task_data.setAttribute('class', 'task_data');

//         username_donate = document.createElement('p');
//         username_donate.setAttribute('id', 'task_username_donate');
//         username_donate.setAttribute('contenteditable', false);
//         username_donate.innerHTML = task_username_donate;

//         email_donate = document.createElement('p');
//         email_donate.setAttribute('id', 'task_email_donate');
//         email_donate.setAttribute('contenteditable', false);
//         email_donate.innerHTML = task_email_donate; 

//         money_donate = document.createElement('p');
//         money_donate.setAttribute('id', 'task_money_donate');
//         money_donate.setAttribute('contenteditable', false);
//         money_donate.innerHTML = task_money_donate;

//         day_donate = document.createElement('p');
//         day_donate.setAttribute('id', 'task_day_donate');
//         day_donate.setAttribute('contenteditable', false);
//         day_donate.innerHTML = task_day_donate;


//         //tạo TASK TOOLS
        
//         task_tool= document.createElement('div');
//         task_tool.setAttribute('class', 'task_tool');

//         task_done_donate_button = document.createElement('button');
//         task_done_donate_button.setAttribute('id', 'task_done_donate_button');
//         task_done_donate_button.setAttribute('class', 'task_services_button');
//         task_done_donate_button.setAttribute('onclick', "task_done_donate(this.parentElement.parentElement, this)");
//         fa_done = document.createElement('i');
//         fa_done.setAttribute('class', 'fa fa-check');


//         task_edit_donate_button = document.createElement('button');
//         task_edit_donate_button.setAttribute('id', 'task_edit_donate_button');
//         task_edit_donate_button.setAttribute('class', 'task_services_button');
//         task_edit_donate_button.setAttribute('onclick', "task_edit_donate(this.parentElement.parentElement, this)");
//         fa_edit = document.createElement('i');
//         fa_edit.setAttribute('class', 'fa fa-pencil-alt');

//         task_delete_donate_button = document.createElement('button');
//         task_delete_donate_button.setAttribute('id', 'task_delete_donate_button');
//         task_delete_donate_button.setAttribute('class', 'task_services_button');
//         task_delete_donate_button.setAttribute('onclick', "task_delete_donate(this.parentElement.parentElement)");
//         fa_delete = document.createElement('i');
//         fa_delete.setAttribute('class', 'fa fa-trash');


//         show_list_donate.append(task_container);

//         task_container.append(task_img);
//         task_img.append(image_view);

//         task_container.append(title_data);
//         title_data.append(title_username_donate);
//         title_data.append(title_email_donate);
//         title_data.append(title_money_donate);
//         title_data.append(title_day_donate);


//         task_container.append(task_data);
//         task_data.append(username_donate);
//         task_data.append(email_donate);
//         task_data.append(money_donate);
//         task_data.append(day_donate);


//         task_container.append(task_tool);
//         task_tool.append(task_done_donate_button);
//         task_done_donate_button.append(fa_done);
//         task_tool.append(task_edit_donate_button);
//         task_edit_donate_button.append(fa_edit);
//         task_tool.append(task_delete_donate_button);
//         task_delete_donate_button.append(fa_delete);

//       }
//        total_donate();
//     });
     
//   }
// /*------------------------------------------------------------------------*/  
//   // button edit, button delete FOR DONATE
  

//   function task_edit_donate(task, edit_button_donate){
    

//     username_donate = task.childNodes[2].childNodes[0];
//     username_donate.setAttribute("contenteditable", false);
//     username_donate.setAttribute("class", "task_data_editing");
//     username_donate.setAttribute("id", "task_username_donate");

//     email_donate = task.childNodes[2].childNodes[1];
//     email_donate.setAttribute("contenteditable", false);
//     email_donate.setAttribute("class", "task_data_editing");
//     email_donate.setAttribute("id", "task_email_donate");

//     money_donate = task.childNodes[2].childNodes[2];
//     money_donate.setAttribute("contenteditable", true);
//     money_donate.setAttribute("class", "task_data_editing");
//     money_donate.setAttribute("id", "task_money_donate");

//     day_donate = task.childNodes[2].childNodes[3];
//     day_donate.setAttribute("contenteditable", true);
//     day_donate.setAttribute("class", "task_data_editing");
//     day_donate.setAttribute("id", "task_day_donate");


//   }

//   function task_done_donate(task, edit_button_donate){
    

//     username_donate = task.childNodes[2].childNodes[0];
//     username_donate.setAttribute("contenteditable", false);
//     username_donate.setAttribute("class", "task_data_done");
//     username_donate.setAttribute("id", "task_username_donate");
    
//     email_donate = task.childNodes[2].childNodes[1];
//     email_donate.setAttribute("contenteditable", false);
//     email_donate.setAttribute("class", "task_data_done");
//     email_donate.setAttribute("id", "task_email_donate");


//     money_donate = task.childNodes[2].childNodes[2];
//     money_donate.setAttribute("contenteditable", false);
//     money_donate.setAttribute("class", "task_data_done");
//     money_donate.setAttribute("id", "task_money_donate");

//     day_donate = task.childNodes[2].childNodes[3];
//     day_donate.setAttribute("contenteditable", false);
//     day_donate.setAttribute("class", "task_data_done");
//     day_donate.setAttribute("id", "task_day_donate");

//     // change in firebase to
//     var key = task.getAttribute("data-key");
//     var username_donate = task.childNodes[2].childNodes[0].innerHTML;
//     var email_donate= task.childNodes[2].childNodes[1].innerHTML;
//     var money_donate = task.childNodes[2].childNodes[2].innerHTML;
//     var day_donate = task.childNodes[2].childNodes[3].innerHTML;
//     var task_obj = {
      
//       username_donate: username_donate,
//       email_donate: email_donate,
//       money_donate: money_donate,
//       day_donate: day_donate,

//        key: key,
//     };
    
    
//     var updates = {};
//     updates["/Statistical_Donate/" + username_donate] = task_obj;
//     firebase.database().ref().update(updates);

//   }

  

//   function task_delete_donate(task){
//     key = task.getAttribute("data-key");
    
//     var username_donate = task.childNodes[2].childNodes[0].innerHTML;

//     task_to_remove = firebase.database().ref( "Statistical_Donate/" + username_donate);
//     task_to_remove.remove();

//     // remove from html view or whatevesss
//     task.remove();

//   }
 
// /*------------------------------------------------------------------------*/  
// /*PET*/
// function close_add_pet_form(){
//       document.getElementById("box-add-pet").style.display = 'none';

// }

// function chooseFile(e){
//   file = e.target.files[0];
// }

// function add_pet(){
    

//     var pet_name = document.getElementById('pet_name').value;
//     var pet_age = document.getElementById('pet_age').value;
//     var select_sex = document.getElementById('select_sex').value;
//     var pet_title = document.getElementById('pet_title').value;
//     var pet_describe = document.getElementById('pet_describe').value;
//     var image_view = document.getElementById('image_view');
    
    
//       if(pet_name.length != 0 && pet_age.length != 0 && select_sex.length != 0 && pet_title.length != 0 && pet_describe.length != 0){
//           // our boxes have data and we take database
//           if (document.getElementById("check_pet").checked==true) {

//               var uploadTask = firebase.storage().ref("/Pet/"+pet_name+".jpg").put(file);
//               uploadTask.snapshot.ref.getDownloadURL().then((URL_img) => {
//               pet_img = URL_img;
//                 var key = firebase.database().ref().child('Pet').push().key;
//                 var task = {
                  
//                   pet_name: pet_name,
//                   pet_age: pet_age,
//                   select_sex: select_sex,
//                   pet_title: pet_title,
//                   pet_describe: pet_describe,
//                   pet_img: pet_img,
//                   key: key,
//                 };

//                 var updates = {};
//                 updates["/Pet/" + pet_name] = task;
//                 firebase.database().ref().update(updates);
//                 document.getElementById("box-add-pet").style.display = 'none';
                
//                   list_pet();
//               });
//               }else {
//                   alert("Please do not leave any items blank!");
//                   } 
//           }else {
//                   alert("Please do not leave any items blank!");
//                 } 
//     count_user_and_pet();
//   }


// function add_pet_form(){

//     document.getElementById("box-add-pet").style.display = 'block';
    
// }

// function get_pet(){

//   show_list_pet_find= document.getElementById('charts');
//   show_list_pet_find.innerHTML = "";

//   var name_pet_find= document.getElementById("name_pet_find").value;
//   if (name_pet_find!="") {
//     firebase.database().ref('Pet/'+name_pet_find).once('value').then(function(snapshort){


//       var task_name_pet_find= snapshort.val().pet_name;
//       var task_age_pet_find= snapshort.val().pet_age;
//       var task_sex_pet_find = snapshort.val().select_sex;
//       var task_title_pet_find = snapshort.val().pet_title;
//       var task_describe_pet_find= snapshort.val().pet_describe;
//       var task_img_pet_find= snapshort.val().pet_img;

      
// //tao TASK CONTAINER
//         task_container = document.createElement("div");
//         task_container.setAttribute("class", "task_container");
//         task_container.setAttribute("data-key", task_key);

//         task_img = document.createElement("div");
//         task_img.setAttribute("class", "task_img");

//         image_view = document.createElement("img");
//         image_view.setAttribute("id", "image_view");
//         image_view.src = task_img_pet_find;


//         //tao TITLE DATA
//         title_data = document.createElement("div");
//         title_data.setAttribute("class", "title_data");

//         title_pet_name = document.createElement('p');
//         title_pet_name.setAttribute('id', 'task_title_pet_name');
//         title_pet_name.setAttribute('contenteditable', false);
//         title_pet_name.innerHTML = "Pet Name : ";

//         title_pet_age = document.createElement('p');
//         title_pet_age.setAttribute('id', 'task_title_pet_age');
//         title_pet_age.setAttribute('contenteditable', false);
//         title_pet_age.innerHTML = "Age : ";

//         title_select_sex = document.createElement('p');
//         title_select_sex.setAttribute('id', 'task_title_select_sex');
//         title_select_sex.setAttribute('contenteditable', false);
//         title_select_sex.innerHTML = "Sex : ";

//         title_pet_title = document.createElement('p');
//         title_pet_title.setAttribute('id', 'task_title_pet_title');
//         title_pet_title.setAttribute('contenteditable', false);
//         title_pet_title.innerHTML = "Title : ";

//         title_pet_describe = document.createElement('p');
//         title_pet_describe.setAttribute('id', 'task_title_pet_describe');
//         title_pet_describe.setAttribute('contenteditable', false);
//         title_pet_describe.innerHTML = "Describe : ";

        
//         //tạo TASK DATA 
//         task_data = document.createElement('div');
//         task_data.setAttribute('class', 'task_data');

        

//         pet_name = document.createElement('p');
//         pet_name.setAttribute('id', 'task_pet_name');
//         pet_name.setAttribute('contenteditable', false);
//         pet_name.innerHTML = task_name_pet_find;

//         pet_age = document.createElement('p');
//         pet_age.setAttribute('id', 'task_pet_age');
//         pet_age.setAttribute('contenteditable', false);
//         pet_age.innerHTML = task_age_pet_find; 

//         select_sex = document.createElement('p');
//         select_sex.setAttribute('id', 'task_select_sex');
//         select_sex.setAttribute('contenteditable', false);
//         select_sex.innerHTML = task_sex_pet_find;

//         pet_title = document.createElement('p');
//         pet_title.setAttribute('id', 'task_pet_title');
//         pet_title.setAttribute('contenteditable', false);
//         pet_title.innerHTML = task_title_pet_find;

//         pet_describe = document.createElement('p');
//         pet_describe.setAttribute('id', 'task_pet_describe');
//         pet_describe.setAttribute('contenteditable', false);
//         pet_describe.innerHTML = task_describe_pet_find;

//         //tạo TASK TOOLS
        
//         task_tool= document.createElement('div');
//         task_tool.setAttribute('class', 'task_tool');

//         task_done_pet_button = document.createElement('button');
//         task_done_pet_button.setAttribute('id', 'task_done_pet_button');
//         task_done_pet_button.setAttribute('class', 'task_services_button');
//         task_done_pet_button.setAttribute('onclick', "task_done_pet(this.parentElement.parentElement, this)");
//         fa_done = document.createElement('i');
//         fa_done.setAttribute('class', 'fa fa-check');


//         task_edit_pet_button = document.createElement('button');
//         task_edit_pet_button.setAttribute('id', 'task_edit_pet_button');
//         task_edit_pet_button.setAttribute('class', 'task_services_button');
//         task_edit_pet_button.setAttribute('onclick', "task_edit_pet(this.parentElement.parentElement, this)");
//         fa_edit = document.createElement('i');
//         fa_edit.setAttribute('class', 'fa fa-pencil-alt');

//         task_delete_pet_button = document.createElement('button');
//         task_delete_pet_button.setAttribute('id', 'task_delete_pet_button');
//         task_delete_pet_button.setAttribute('class', 'task_services_button');
//         task_delete_pet_button.setAttribute('onclick', "task_delete_pet(this.parentElement.parentElement)");
//         fa_delete = document.createElement('i');
//         fa_delete.setAttribute('class', 'fa fa-trash');


//         show_list_pet_find.append(task_container);

//         task_container.append(task_img);
//         task_img.append(image_view);

//         task_container.append(title_data);
//         title_data.append(title_pet_name);
//         title_data.append(title_pet_age);
//         title_data.append(title_select_sex);
//         title_data.append(title_pet_title);
//         title_data.append(title_pet_describe);


//         task_container.append(task_data);
//         task_data.append(pet_name);
//         task_data.append(pet_age);
//         task_data.append(select_sex);
//         task_data.append(pet_title);
//         task_data.append(pet_describe);


//         task_container.append(task_tool);
//         task_tool.append(task_done_pet_button);
//         task_done_pet_button.append(fa_done);
//         task_tool.append(task_edit_pet_button);
//         task_edit_pet_button.append(fa_edit);
//         task_tool.append(task_delete_pet_button);
//         task_delete_pet_button.append(fa_delete);
      

//     })
//   };
//   if (name_pet_find==""){
//     alert("Please do not leave any items blank!");
//     list_pet();
//   };
    

// }

// function list_pet(){
    
//     var x= document.getElementById("btn_add_user").style.display;
//     if (x!="none") {
//         document.getElementById("btn_add_user").style.display='none';
//         document.getElementById("box-add-user").style.display='none';
//         document.getElementById("box-find-user").style.display='none';
//         };
//     var y= document.getElementById("btn_add_donate").style.display;
//     if (y!="none") {
//       document.getElementById("btn_add_donate").style.display='none';
//       document.getElementById("box-add-donate").style.display='none';
//       document.getElementById("box-find-donate").style.display='none';
//       };
//     var z= document.getElementById("btn_add_pet").style.display;
//     if (z!="block") {
//       document.getElementById("btn_add_pet").style.display='block';
//       document.getElementById("box-find-pet").style.display='block';
      
//       };

  
//     show_list_pet= document.getElementById('charts');
//     show_list_pet.innerHTML = "";
 
//     task_array = [];//khai bao bien
//     //đưa dữ liệu vào id="container" trong
    
    
//     firebase.database().ref("Pet").once('value', function(snapshot) {
//       snapshot.forEach(function(childSnapshot) {
//         var childKey = childSnapshot.key;
//         var childData = childSnapshot.val();
//         task_array.push(Object.values(childData));
//       });
       
      
//       //tạo vòng lặp để tạo các task 
//       for(var i, i = 0; i < task_array.length; i++){
//         task_key = task_array[i][0];
//         task_pet_age = task_array[i][1];
//         task_pet_describe = task_array[i][2];
//         task_pet_img = task_array[i][3];
//         task_pet_name = task_array[i][4];
//         task_pet_title = task_array[i][5];
//         task_select_sex = task_array[i][6];


//         //tao TASK CONTAINER
//         task_container = document.createElement("div");
//         task_container.setAttribute("class", "task_container");
//         task_container.setAttribute("data-key", task_key);

//         task_img = document.createElement("div");
//         task_img.setAttribute("class", "task_img");

//         image_view = document.createElement("img");
//         image_view.setAttribute("id", "image_view");
//         image_view.src = task_pet_img;


//         //tao TITLE DATA
//         title_data = document.createElement("div");
//         title_data.setAttribute("class", "title_data");

//         title_pet_name = document.createElement('p');
//         title_pet_name.setAttribute('id', 'task_title_pet_name');
//         title_pet_name.setAttribute('contenteditable', false);
//         title_pet_name.innerHTML = "Pet Name : ";

//         title_pet_age = document.createElement('p');
//         title_pet_age.setAttribute('id', 'task_title_pet_age');
//         title_pet_age.setAttribute('contenteditable', false);
//         title_pet_age.innerHTML = "Age : ";

//         title_select_sex = document.createElement('p');
//         title_select_sex.setAttribute('id', 'task_title_select_sex');
//         title_select_sex.setAttribute('contenteditable', false);
//         title_select_sex.innerHTML = "Sex : ";

//         title_pet_title = document.createElement('p');
//         title_pet_title.setAttribute('id', 'task_title_pet_title');
//         title_pet_title.setAttribute('contenteditable', false);
//         title_pet_title.innerHTML = "Title : ";

//         title_pet_describe = document.createElement('p');
//         title_pet_describe.setAttribute('id', 'task_title_pet_describe');
//         title_pet_describe.setAttribute('contenteditable', false);
//         title_pet_describe.innerHTML = "Describe : ";

        
//         //tạo TASK DATA 
//         task_data = document.createElement('div');
//         task_data.setAttribute('class', 'task_data');

        

//         pet_name = document.createElement('p');
//         pet_name.setAttribute('id', 'task_pet_name');
//         pet_name.setAttribute('contenteditable', false);
//         pet_name.innerHTML = task_pet_name;

//         pet_age = document.createElement('p');
//         pet_age.setAttribute('id', 'task_pet_age');
//         pet_age.setAttribute('contenteditable', false);
//         pet_age.innerHTML = task_pet_age; 

//         select_sex = document.createElement('p');
//         select_sex.setAttribute('id', 'task_select_sex');
//         select_sex.setAttribute('contenteditable', false);
//         select_sex.innerHTML = task_select_sex;

//         pet_title = document.createElement('p');
//         pet_title.setAttribute('id', 'task_pet_title');
//         pet_title.setAttribute('contenteditable', false);
//         pet_title.innerHTML = task_pet_title;

//         pet_describe = document.createElement('p');
//         pet_describe.setAttribute('id', 'task_pet_describe');
//         pet_describe.setAttribute('contenteditable', false);
//         pet_describe.innerHTML = task_pet_describe;

//         //tạo TASK TOOLS
        
//         task_tool= document.createElement('div');
//         task_tool.setAttribute('class', 'task_tool');

//         task_done_pet_button = document.createElement('button');
//         task_done_pet_button.setAttribute('id', 'task_done_pet_button');
//         task_done_pet_button.setAttribute('class', 'task_services_button');
//         task_done_pet_button.setAttribute('onclick', "task_done_pet(this.parentElement.parentElement, this)");
//         fa_done = document.createElement('i');
//         fa_done.setAttribute('class', 'fa fa-check');


//         task_edit_pet_button = document.createElement('button');
//         task_edit_pet_button.setAttribute('id', 'task_edit_pet_button');
//         task_edit_pet_button.setAttribute('class', 'task_services_button');
//         task_edit_pet_button.setAttribute('onclick', "task_edit_pet(this.parentElement.parentElement, this)");
//         fa_edit = document.createElement('i');
//         fa_edit.setAttribute('class', 'fa fa-pencil-alt');

//         task_delete_pet_button = document.createElement('button');
//         task_delete_pet_button.setAttribute('id', 'task_delete_pet_button');
//         task_delete_pet_button.setAttribute('class', 'task_services_button');
//         task_delete_pet_button.setAttribute('onclick', "task_delete_pet(this.parentElement.parentElement)");
//         fa_delete = document.createElement('i');
//         fa_delete.setAttribute('class', 'fa fa-trash');


//         show_list_pet.append(task_container);

//         task_container.append(task_img);
//         task_img.append(image_view);

//         task_container.append(title_data);
//         title_data.append(title_pet_name);
//         title_data.append(title_pet_age);
//         title_data.append(title_select_sex);
//         title_data.append(title_pet_title);
//         title_data.append(title_pet_describe);


//         task_container.append(task_data);
//         task_data.append(pet_name);
//         task_data.append(pet_age);
//         task_data.append(select_sex);
//         task_data.append(pet_title);
//         task_data.append(pet_describe);


//         task_container.append(task_tool);
//         task_tool.append(task_done_pet_button);
//         task_done_pet_button.append(fa_done);
//         task_tool.append(task_edit_pet_button);
//         task_edit_pet_button.append(fa_edit);
//         task_tool.append(task_delete_pet_button);
//         task_delete_pet_button.append(fa_delete);
      

//       }

//     });
//   }
// /*------------------------------------------------------------------------*/  
//   // button edit, button delete FOR DONATE
  

//   function task_edit_pet(task, edit_button_pet){
    

//     pet_name = task.childNodes[2].childNodes[0];
//     pet_name.setAttribute("contenteditable", false);
//     pet_name.setAttribute("class", "task_data_editing");
//     pet_name.setAttribute("id", "task_pet_name");

//     pet_age = task.childNodes[2].childNodes[1];
//     pet_age.setAttribute("contenteditable", true);
//     pet_age.setAttribute("class", "task_data_editing");
//     pet_age.setAttribute("id", "task_pet_age");

//     select_sex = task.childNodes[2].childNodes[2];
//     select_sex.setAttribute("contenteditable", true);
//     select_sex.setAttribute("class", "task_data_editing");
//     select_sex.setAttribute("id", "task_select_sex");

//     pet_title = task.childNodes[2].childNodes[3];
//     pet_title.setAttribute("contenteditable", true);
//     pet_title.setAttribute("class", "task_data_editing");
//     pet_title.setAttribute("id", "task_pet_title");

//     pet_describe = task.childNodes[2].childNodes[4];
//     pet_describe.setAttribute("contenteditable", true);
//     pet_describe.setAttribute("class", "task_data_editing");
//     pet_describe.setAttribute("id", "task_pet_describe");
//   }

//   function task_done_pet(task, edit_button_pet){
    

//     pet_name = task.childNodes[2].childNodes[0];
//     pet_name.setAttribute("contenteditable", false);
//     pet_name.setAttribute("class", "task_data_done");
//     pet_name.setAttribute("id", "task_pet_name");
    
//     pet_age = task.childNodes[2].childNodes[1];
//     pet_age.setAttribute("contenteditable", false);
//     pet_age.setAttribute("class", "task_data_done");
//     pet_age.setAttribute("id", "task_pet_age");


//     select_sex = task.childNodes[2].childNodes[2];
//     select_sex.setAttribute("contenteditable", true);
//     select_sex.setAttribute("class", "task_data_done");
//     select_sex.setAttribute("id", "task_select_sex");

//     pet_title = task.childNodes[2].childNodes[3];
//     pet_title.setAttribute("contenteditable", true);
//     pet_title.setAttribute("class", "task_data_done");
//     pet_title.setAttribute("id", "task_pet_title");

//     pet_describe = task.childNodes[2].childNodes[4];
//     pet_describe.setAttribute("contenteditable", true);
//     pet_describe.setAttribute("class", "task_data_done");
//     pet_describe.setAttribute("id", "task_pet_describe");

//     // change in firebase to
//     var key = task.getAttribute("data-key");
//     var pet_img = task.childNodes[0].childNodes[0].src;
//     var pet_name = task.childNodes[2].childNodes[0].innerHTML;
//     var pet_age= task.childNodes[2].childNodes[1].innerHTML;
//     var select_sex = task.childNodes[2].childNodes[2].innerHTML;
//     var pet_title = task.childNodes[2].childNodes[3].innerHTML;
//     var pet_describe = task.childNodes[2].childNodes[4].innerHTML;
//     var task_obj = {
      
//       pet_name: pet_name,
//       pet_age: pet_age,
//       select_sex: select_sex,
//       pet_title: pet_title,
//       pet_describe: pet_describe,
//       pet_img: pet_img,
//        key: key,
//     };
    
//     var updates = {};
//     updates["/Pet/" + pet_name] = task_obj;
//     firebase.database().ref().update(updates);

//   }

  

//   function task_delete_pet(task){
//     key = task.getAttribute("data-key");
    
//     var pet_name = task.childNodes[2].childNodes[0].innerHTML;

//     task_to_remove = firebase.database().ref( "Pet/" + pet_name);
//     task_to_remove.remove();

//     // remove from html view or whatevesss
//     task.remove();
//     count_user_and_pet();

//   }

// /*------------------------------------------------------------------------*/  


  


  

