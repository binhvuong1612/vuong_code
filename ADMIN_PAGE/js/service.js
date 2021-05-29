/*SERVICES*/

  // function list_services(){
  //   show_btn_add_services= document.getElementById('box');
  //   show_btn_add_services.innerHTML = "";
  //   show_list_services= document.getElementById('charts');
  //   show_list_services.innerHTML = "";
    
    
  //   var html = '<button onclick="add_services_form()" class="btn_add" id="btn_add_services"><i class="fas fa-plus-circle"></i><label>Add Services</label></button>';
    
  //   document.getElementById('box').insertAdjacentHTML('afterbegin', html);
  //   // clear div id="container"- tao o trong
  //   task_array = [];//khai bao bien
  //   // //đưa dữ liệu vào id="container" trong
    
    
  //   firebase.database().ref("Services").once('value', function(snapshot) {
  //     snapshot.forEach(function(childSnapshot) {
  //       var childKey = childSnapshot.key;
  //       var childData = childSnapshot.val();
  //       task_array.push(Object.values(childData));
  //     });
  //     //tạo vòng lặp để tạo các task 
  //     for(var i, i = 0; i < task_array.length; i++){
  //       task_describeService = task_array[i][0];
  //       task_key = task_array[i][1];
  //       task_link = task_array[i][2];
  //       task_nameService = task_array[i][3];
  //       task_priceService = task_array[i][4];
 
  //       //tao TASK CONTAINER
  //       task_container_services = document.createElement("div");
  //       task_container_services.setAttribute("class", "task_container_services");
  //       task_container_services.setAttribute("data-key", task_key);

 
  //       //tạo TASK DATA 
  //       task_data = document.createElement('div');
  //       task_data.setAttribute('id', 'task_data');

  //       image_view = document.createElement('img');
  //       image_view.setAttribute('id', 'task_image_view');
  //       image_view.setAttribute('contenteditable', false);
  //       image_view.src = task_link;

  //       nameService = document.createElement('p');
  //       nameService.setAttribute('id', 'task_nameService');
  //       nameService.setAttribute('contenteditable', false);
  //       nameService.innerHTML = task_nameService;

  //       priceService = document.createElement('p');
  //       priceService.setAttribute('id', 'task_priceService');
  //       priceService.setAttribute('contenteditable', false);
  //       priceService.innerHTML = task_priceService;

  //       describeService = document.createElement('p');
  //       describeService.setAttribute('id', 'task_describeService');
  //       describeService.setAttribute('contenteditable', false);
  //       describeService.innerHTML = task_describeService;

        

  //       // tạo TASK TOOLS
  //       task_tool= document.createElement('div');
  //       task_tool.setAttribute('id', 'task_tool');

  //       task_done_services_button = document.createElement('button');
  //       task_done_services_button.setAttribute('id', 'task_done_services_button');
  //       task_done_services_button.setAttribute('class', 'task_services_button');
  //       task_done_services_button.setAttribute('onclick', "task_done_services(this.parentElement.parentElement, this)");
  //       fa_done = document.createElement('i');
  //       fa_done.setAttribute('class', 'fa fa-check');


  //       task_edit_services_button = document.createElement('button');
  //       task_edit_services_button.setAttribute('id', 'task_edit_services_button');
  //       task_edit_services_button.setAttribute('class', 'task_services_button');
  //       task_edit_services_button.setAttribute('onclick', "task_edit_services(this.parentElement.parentElement, this)");
  //       fa_edit = document.createElement('i');
  //       fa_edit.setAttribute('class', 'fa fa-pencil-alt');

  //       task_delete_services_button = document.createElement('button');
  //       task_delete_services_button.setAttribute('id', 'task_delete_services_button');
  //       task_delete_services_button.setAttribute('class', 'task_services_button');
  //       task_delete_services_button.setAttribute('onclick', "task_delete_services(this.parentElement.parentElement)");
  //       fa_delete = document.createElement('i');
  //       fa_delete.setAttribute('class', 'fa fa-trash');


  //       show_list_services.append(task_container_services);
  //       // task_container.append(title_data);
  //       // title_data.append(title_keyService);
  //       // title_data.append(title_nameService);
  //       // title_data.append(title_priceService);
  //       // title_data.append(title_pictureService);
  //       // title_data.append(title_phone);
  //       // title_data.append(title_address);
  //       // title_data.append(title_type_user);


  //       task_container_services.append(task_data);
  //       task_data.append(image_view);
  //       task_data.append(nameService);
  //       task_data.append(priceService);
  //       task_data.append(describeService);
        // task_data.append(phone);
        // task_data.append(address);
//         // task_data.append(type_user);


//         task_container_services.append(task_tool);
//         task_tool.append(task_done_services_button);
//         task_done_services_button.append(fa_done);
//         task_tool.append(task_edit_services_button);
//         task_edit_services_button.append(fa_edit);
//         task_tool.append(task_delete_services_button);
//         task_delete_services_button.append(fa_delete);
//       }

//     });
//   }

    
// function add_services_form(){
//       show_form_services= document.getElementById('charts');
//       show_form_services.innerHTML = "";
//       var html = '<div><input type="name" placeholder="nameService" id="nameService" class="txtb"><input type="number" placeholder="priceService" id="priceService" class="txtb"><input type="text" placeholder="describeService" id="describeService" class="txtb"><input type="file" onchange="chooseFile(event)"><img id="image_view" ></div><button onclick="add_img()" id="uploaded" class="btn-third">uploaded</button>';
//       document.getElementById('charts').insertAdjacentHTML('afterbegin', html);
//   }


// function chooseFile(e){
      
//       file = e.target.files[0];
//     }


// function add_img(){
//   uploaded();
//  }


// function uploaded(){
//     var image_view = document.getElementById('image_view');
//     var nameService = document.getElementById('nameService').value;
//     var priceService = document.getElementById('priceService').value;
//     var describeService = document.getElementById('describeService').value;

//     var uploadTask = firebase.storage().ref("/Services-picture/"+nameService+".jpg").put(file);
//     uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
//       image_view.src = downloadURL;
//       alert(downloadURL);
//     });

//     downloaded();
//   }


//   function downloaded(){
//       var image_view = document.getElementById('image_view');
//       var nameService = document.getElementById('nameService').value;
//       var priceService = document.getElementById('priceService').value;
//       var describeService = document.getElementById('describeService').value;

//       var uploadTask = firebase.storage().ref("/Services-picture/"+nameService+".jpg").put(file);
//       uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
//         console.log(downloadURL);
//         image_view.src = downloadURL;
//         var link = downloadURL;
//        // var email = document.getElementById('email').value;
//     // var password = document.getElementById('password').value;
//       var nameService = document.getElementById('nameService').value;
//       var priceService = document.getElementById('priceService').value;
//       var describeService = document.getElementById('describeService').value;
//     // var phone = document.getElementById('phone').value;
//     // var address = document.getElementById('address').value;
//     // var birthday = document.getElementById('birthday').value;
//     // if (document.getElementById("type_user").checked==true) {
//     //   var type_user = document.getElementById('type_user').value;
//       // if(email.length != 0 && password.length != 0 && username.length != 0 && phone.length != 0 && address.length != 0 && birthday.length != 0){
//           // our boxes have data and we take database
//           var key = firebase.database().ref().child('Services').push().key;
//           var task = {
//             // email: email,
//             // password: password,
//             nameService: nameService,
//             priceService: priceService,
//             describeService: describeService,
//             // phone: phone,
//             // address: address,
//             // birthday: birthday,
//             // type_user: type_user,
//             link: link,
//             key: key,
//           };

//           var updates = {};
//           updates["/Services/" + nameService] = task;
//           firebase.database().ref().update(updates);
//           list_services();
//     //   }
//     // }else {
//     //   alert("Please do not leave any items blank!");
//     // } 

//     });

    
//   }


// /*------------------------------------------------------------------------*/  
//   // button edit, button delete FOR SERVICES
  

//   function task_edit_services(task, edit_button_services){
    

//     image_view = task.childNodes[0].childNodes[0];
//     image_view.setAttribute("contenteditable", true);
//     image_view.setAttribute("class", "task_data_editing");
//     image_view.setAttribute("id", "task_image_view");

//     nameService = task.childNodes[0].childNodes[1];
//     nameService.setAttribute("contenteditable", true);
//     nameService.setAttribute("class", "task_data_editing");
//     nameService.setAttribute("id", "task_nameService");

//     priceService = task.childNodes[0].childNodes[2];
//     priceService.setAttribute("contenteditable", true);
//     priceService.setAttribute("class", "task_data_editing");
//     priceService.setAttribute("id", "task_priceService");

//     describeService = task.childNodes[0].childNodes[3];
//     describeService.setAttribute("contenteditable", true);
//     describeService.setAttribute("class", "task_data_editing");
//     describeService.setAttribute("id", "task_describeService");


//   }

//   function task_done_services(task, edit_button_services){
    


//     image_view = task.childNodes[0].childNodes[0];
//     image_view.setAttribute("contenteditable", false);
//     image_view.setAttribute("class", "task_data_done");
//     image_view.setAttribute("id", "task_image_view");

//     nameService = task.childNodes[0].childNodes[1];
//     nameService.setAttribute("contenteditable", false);
//     nameService.setAttribute("class", "task_data_done");
//     nameService.setAttribute("id", "task_nameService");

//     priceService = task.childNodes[0].childNodes[2];
//     priceService.setAttribute("contenteditable", false);
//     priceService.setAttribute("class", "task_data_done");
//     priceService.setAttribute("id", "task_priceService");

//     describeService = task.childNodes[0].childNodes[3];
//     describeService.setAttribute("contenteditable", false);
//     describeService.setAttribute("class", "task_data_done");
//     describeService.setAttribute("id", "task_describeService");


//     // change in firebase to
//     var key = task.getAttribute("data-key");
//     var nameService = task.childNodes[0].childNodes[1].innerHTML;
//     var link = task.childNodes[0].childNodes[0].innerHTML ;
//     var task_obj = {
//       nameService: nameService,
//       priceService: task.childNodes[0].childNodes[2].innerHTML,
//       describeService: task.childNodes[0].childNodes[3].innerHTML,
//       link: link ,

//        key: key,
//     };

//     var updates = {};
//     updates["/Services/" + nameService] = task_obj;
//     firebase.database().ref().update(updates);

//   }

  

//   function task_delete_services(task){
//     key = task.getAttribute("data-key");
    
//     var nameService = task.childNodes[0].childNodes[1].innerHTML;

//     task_to_remove = firebase.database().ref( "Services/" + nameService);
//     task_to_remove.remove();

//     // remove from html view or whatevesss
//     task.remove();

//   }
/*------------------------------------------------------------------------*/  
