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


function newspage(){


/*CONTENT 6 -----SHOW LIST NEWS*/
    show_list_news= document.getElementById('content_2_col1');
    show_list_news.innerHTML = "";
 
    task_array_news = [];//khai bao bien
    //đưa dữ liệu vào id="container" trong
    
    
    firebase.database().ref("News").once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        task_array_news.push(Object.values(childData));
      });
      
      
      //tạo vòng lặp để tạo các task 
      for(var i, i = 0; i < task_array_news.length; i++){
        task_key = task_array_news[i][0];
        task_news_day = task_array_news[i][1];
        task_news_describe = task_array_news[i][2];
        task_news_name = task_array_news[i][3];
        task_news_title = task_array_news[i][4];
        task_news_url = task_array_news[i][5];


        //tao TASK CONTAINER
        task_container_news = document.createElement("div");
        task_container_news.setAttribute("class", "task_container_news");
        task_container_news.setAttribute("data-key", task_key);

        task_news = document.createElement("div");
        task_news.setAttribute("class", "task_news");

        news_view = document.createElement("img");
        news_view.setAttribute("id", "news_view");
        news_view.setAttribute("controls", "");
        news_view.src = task_news_url;


        //tao TITLE DATA
        task_data = document.createElement('div');
        task_data.setAttribute('class', 'task_data');

        news_day = document.createElement('span');
        news_day.setAttribute('class', 'news_day');
        news_day.setAttribute('contenteditable', false);
        news_day.innerHTML = task_news_day;

        data_title_news = document.createElement('div');
        data_title_news.setAttribute('class', 'data_title_news');

        news_title = document.createElement('a');
        news_title.setAttribute('id', 'task_news_title');
        news_title.setAttribute('href', '#');
        news_title.setAttribute('contenteditable', false);
        news_title.innerHTML = task_news_title;


        data_describle_news = document.createElement('div');
        data_describle_news.setAttribute('class', 'data_describle_news');

        news_describe = document.createElement('span');
        news_describe.setAttribute('class', 'news_describe');
        news_describe.setAttribute('contenteditable', false);
        news_describe.innerHTML = task_news_describe;


        show_list_news.append(task_container_news);

        task_container_news.append(task_news);
        task_news.append(news_view);

        task_container_news.append(task_data);
        
        task_data.append(news_day);

        task_data.append(data_title_news);
        data_title_news.append(news_title);

        task_data.append(data_describle_news);
        data_describle_news.append(news_describe);
      

      }

    });
    /*End CONTENT 6 -----SHOW LIST NEWS*/
}