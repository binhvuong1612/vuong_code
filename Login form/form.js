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
  const auth = firebase.auth();

  var database=firebase.database();




  // sự kiện onchange của select
  // function select_type(obj){
  //               var options = obj.children;
  //               var type_user = '';
  //               for (var i = 0; i < options.length; i++){
  //                   if (options[i].selected){
  //                       type_user += options[i].value;
  //                   }
  //               }
                
            
  //     }


// function signup_form(){
//     signup_form= document.getElementById('login-box');
//     signup_form.innerHTML = "";
//     var html = '<div id="signup-box"><h1 id="header">Welcome</h1><input type="email" placeholder="Email" id="email" class="txtb"><input type="password" placeholder="Password" id="password" class="txtb"><input type="name" placeholder="User Name" id="username" class="txtb"><input type="text" placeholder="Phone" id="phone" class="txtb"><input type="text" placeholder="Address" id="address" class="txtb"><input type="date" id="birthday" placeholder="ngay sinh" class="txtb"><select multiple id="type_user"  class="txtb"><option value="Volumteers">Volumteers</option><option value="Employees">Employees</option><option value="Adopters">Adopters</option></select><button onclick="signup()" id="signup" class="btn">Sign Up</button><button onclick="signin_form()" id="signinform" class="btn" style="background-color: #C70039;">Sign In</button></div>';
//     document.getElementById('login-box').insertAdjacentHTML('afterbegin', html);
// }


// function signin_form(){
//     signup_form= document.getElementById('login-box');
//     signup_form.innerHTML = "";
//     var html = '<div id="signin-box"> <h1 id="header">Welcome</h1><input type="email" placeholder="Email" id="email" class="txtb"><input type="password" placeholder="Password" id="password" class="txtb"><button onclick="signin()" id="signin" class="btn" style="background-color: #C70039;">Sign In</button><button onclick="signup_form()" id="signupform" class="btn">Sign Up</button></div>';
//     document.getElementById('login-box').insertAdjacentHTML('afterbegin', html);
// }


  function signup(){
    document.getElementById("signup-box").style.display = 'block';
    document.getElementById("login-box").style.display = 'none';
    //khai báo biến và gán giá trị các ô input cho các biến
    var email_signup = document.getElementById('email_signup').value;
    var password_signup = document.getElementById('password_signup').value;
    // var image_view = document.getElementById('image_view');
    //phân loại user theo từng nhóm
    // if (type_user=="volumteers") {

    
        var type_user= document.getElementById("type_user").value;
        var email_signup = document.getElementById('email_signup').value;
        var password_signup = document.getElementById('password_signup').value;
        var username = document.getElementById('username').value;
        var phone = document.getElementById('phone').value;
        var address = document.getElementById('address').value;
        var birthday = document.getElementById('birthday').value;

      if(email_signup.length != 0 && password_signup.length != 0 && username.length != 0 && phone.length != 0 && address.length != 0 && birthday.length != 0){
          // our boxes have data and we take database
          const promise = auth.createUserWithEmailAndPassword(email_signup, password_signup);
          promise.catch(e => alert(e.message));
          promise.then(() => {
            var key = firebase.database().ref().child(type_user).push().key;
            var task = {
              email: email_signup,
              password: password_signup,
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

            alert("Sign Up Complete! "+ username +" "+ type_user );
            // list_admin();
          });



          auth.onAuthStateChanged(function(user){
                //thay đổi trang thái đăng nhập
                if (user) {

                  var email= user.email;
                  alert("Active "+ email );
                  var check_type_user = "user";
                  task_array = [];//khai bao bien

                  // check_type_user();
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


                          if (email == task_email) {
                            check_type_user = "admin";
                            alert("Open Display Admin");
                            window.location= "file:///C:/Users/ADMIN/Desktop/Du%20Lieu%20Cua%20Vuong/ADMIN_PAGE(24-4-2021)/ADMIN_PAGE/admin.html";
                            break;
                          }
                          
                        }
                        
                          if (check_type_user == "user") {
                            window.location = "file:///C:/Users/ADMIN/Desktop/User%20page/homepgae.html";
                            alert("Open Display User");
                          }
                        
                      
                      }); 
                  //admin_page();
                  //
                  // user dang signed 
                }else{
                  alert("No Active User!");
                  //dang k co user signed
                }

              });






      // }
      }
      else {
        alert("Please do not leave any items blank!");
      } 
  } 
 








  
  /*=== đây là đoạn nguyên mẫu Sign Up user

    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
     var e = document.getElementById("email").value;
    alert("Sign Up "+ e);


  */
 






function signin(){
    document.getElementById("signup-box").style.display = 'none';
    document.getElementById("login-box").style.display = 'block';
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    // kiểm tra đăng nhập
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

              auth.onAuthStateChanged(function(user){
              //thay đổi trang thái đăng nhập
              if (user) {

                var email= user.email;
                alert("Active "+ email );
                var check_type_user = "user";
                task_array = [];//khai bao bien

                // check_type_user();
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


                        if (email == task_email) {
                          check_type_user = "admin";
                          alert("Open Display Admin");
                          window.location= "file:///C:/Users/ADMIN/Desktop/Du%20Lieu%20Cua%20Vuong/ADMIN_PAGE(24-4-2021)/ADMIN_PAGE/admin.html";
                          break;
                        }
                        
                      }
                      
                        if (check_type_user == "user") {
                          window.location = "file:///C:/Users/ADMIN/Desktop/User%20page/homepgae.html";
                          alert("Open Display User");
                        }
                      
                    
                    }); 
                //admin_page();
                //
                // user dang signed 
              }else{
                alert("No Active User!");
                //dang k co user signed
              }

            });

}

// auth.onAuthStateChanged(function(user){
//     //thay đổi trang thái đăng nhập
//     if (user) {

//       var email= user.email;
//       alert("Active "+ email );
//       var check_type_user = "user";
//       task_array = [];//khai bao bien

//       // check_type_user();
//             firebase.database().ref("Admin").once('value', function(snapshot) {
//             snapshot.forEach(function(childSnapshot) {
//               var childKey = childSnapshot.key;
//               var childData = childSnapshot.val();
//               task_array.push(Object.values(childData));
//             });
//             //tạo vòng lặp để tạo các task 
//             for(var i, i = 0; i < task_array.length; i++){
//               task_address = task_array[i][0];
//               task_birthday = task_array[i][1];
//               task_email = task_array[i][2];
//               task_key = task_array[i][3];
//               task_password = task_array[i][4];
//               task_phone = task_array[i][5];
//               task_type_user = task_array[i][6];
//               task_username = task_array[i][7];


//               if (email == task_email) {
//                 check_type_user = "admin";
//                 alert("Open Display Admin");
//                 window.location= "file:///C:/Users/ADMIN/Desktop/Du%20Lieu%20Cua%20Vuong/ADMIN_PAGE(24-4-2021)/ADMIN_PAGE/admin.html";
//                 break;
//               }
              
//             }
            
//               if (check_type_user == "user") {
//                 window.location = "file:///C:/Users/ADMIN/Desktop/User%20page/homepgae.html";
//                 alert("Open Display User");
//               }
            
          
//           }); 
//       //admin_page();
//       //
//       // user dang signed 
//     }else{
//       alert("No Active User!");
//       //dang k co user signed
//     }

//   });

// function check_type_user(){
//     task_array = [];//khai bao bien
//     //đưa dữ liệu vào id="container"
//     var email = document.getElementById('email').value;
//     var password = document.getElementById('password').value;
//     var check_type_user = "user"; 

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


//         if (email == task_email) {
//           check_type_user = "admin";
//           alert("Open Display Admin");
//           window.location= "file:///C:/Users/ADMIN/Desktop/Du%20Lieu%20Cua%20Vuong/ADMIN_PAGE(24-4-2021)/ADMIN_PAGE/admin.html";
//           break;
//         }
        
//       }
//       if(email.length != 0 && password.length != 0 ){
//         if (check_type_user == "user") {
//           window.location = "file:///C:/Users/ADMIN/Desktop/User%20page/homepgae.html";
//           alert("Open Display User");
//         }
//       }
    
//     });   
// }


function admin_page(){
      location.assign("file:///C:/Users/Administrator/Desktop/ADMIN_PAGE(24-4-2021)/ADMIN_PAGE/admin.html#");
}

function signout(){
    auth.signOut();
    alert("Logged Out!");

    document.getElementById("signup-box").style.display = 'none';
    document.getElementById("login-box").style.display = 'block';
}

  // function get() {

  //   var username = document.getElementById('username').value
  //   var user_ref = database.ref('users/'+ username)

  //   //lấy dữ liệu từ database
  //   user_ref.on('value', function(snapshot) {
  //       // body...
  //       var data= snapshot.val()

  //       alert(data.email+" "+data.address+" "+data.phone+" "+data.address+" "+data.birthday)
  //   });

  // }



  // function updates(){
  //  var password = document.getElementById('password').value
  //  var username = document.getElementById('username').value
  //  var phone = document.getElementById('phone').value
  //  var address = document.getElementById('address').value
  //  var birthday = document.getElementById('birthday').value

  //  var updates = {

  //     password: password,
  //     username: username,
  //     phone: phone,
  //     address: address,
  //     birthday: birthday,
  //  }
  //  // cập nhật dữ liệu lên database
  //  database.ref('users/'+ username).update(updates)
  //  alert('Updated')

  // }




  // function remove(){
  //   //khai báo biến và gán giá trị các ô input cho các biến
  //   var type_user= document.getElementById("type_user").value;
  //   var email = document.getElementById('email').value;
  //   var password = document.getElementById('password').value;
  //   var username = document.getElementById('username').value;
  //   var phone = document.getElementById('phone').value;
  //   var address = document.getElementById('address').value;
  //   var birthday = document.getElementById('birthday').value;
  //   //xóa user trong danh sách user trên database , nhưng vấn đề là vẫn còn trên danh sách users 
  //   if (type_user=="tinh_nguyen_vien") {
  //     database.ref('Tinh_nguyen_vien/' + username).remove();

  //   }else{
  //      if (type_user=="nhan_vien") {
  //         database.ref('Nhan_vien/' + username).remove();
  //       }else{
  //         database.ref('Nguoi_nhan_nuoi/' + username).remove();
  //       }
  //   }
    
    

  //   alert('Removed');
  // }

  // 
  // 
  // 
  // 
  // 
  // 
  // 
  







//   function chooseFile(e){
      
//       file = e.target.files[0];


//       // var input =document.createElement('input');
//       // input.type='file';
//       // input.onchange = e =>{
//       //  files = e.target.files;
//       //  reader = new FileReader();
//       //  reader.onload = function(){
//       //    document.getElementById("myimg").src = reader.result;
//       //  }
//       //  reader.readAsDataURL(files[0]);
//       // }
//       // input.click();
//     }


// var image_view = document.getElementById('image_view');
//  function add_img(){
//   uploaded();
//  }
//   function uploaded(){
//         var username = document.getElementById('username').value;

//     var uploadTask = firebase.storage().ref("/users/"+username+".jpg").put(file);
//     uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
//       console.log(downloadURL);
//       image_view.src = downloadURL;
//     });
//     downloaded();

//   }
//   function downloaded(){
//        var username = document.getElementById('username').value;

//     var uploadTask = firebase.storage().ref("/users/"+username+".jpg").put(file);
//     uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
//       console.log(downloadURL);
//       image_view.src = downloadURL;
//     });
//   }
//   
//   