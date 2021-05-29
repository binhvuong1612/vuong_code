// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCX3q_oJgMPwQ7qJKWsTaucToeMyJLyTTg",
    authDomain: "bvdatabase-8d2bd.firebaseapp.com",
    projectId: "bvdatabase-8d2bd",
    storageBucket: "bvdatabase-8d2bd.appspot.com",
    messagingSenderId: "945711249581",
    appId: "1:945711249581:web:d090b1bd6577ed662cee24"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



function add_contact(){

    var name_contact = document.getElementById('name_contact').value;
    var email_contact = document.getElementById('email_contact').value;
    var status_contact = document.getElementById('status_contact').value;
    var content_contact = document.getElementById('content_contact').value;
      if(name_contact.length != 0 && email_contact.length != 0 && status_contact.length != 0 && content_contact.length != 0 ){
          // our boxes have data and we take database
          var key = firebase.database().ref().child('Contact').push().key;
          var task = {
            
            name_contact: name_contact,
            email_contact: email_contact,
            status_contact: status_contact,
            content_contact: content_contact,
            key: key,
          };

          var updates = {};
          updates["/Contact/" + name_contact] = task;
          firebase.database().ref().update(updates);

            alert("Gửi thành công!");
            var name_contact = document.getElementById('name_contact').value ="";
            var email_contact = document.getElementById('email_contact').value ="";
            var status_contact = document.getElementById('status_contact').value ="";
            var content_contact = document.getElementById('content_contact').value ="";
    }else {
            alert("Vui lòng không để trống bất kỳ mục nào!");
          } 
    
  }
