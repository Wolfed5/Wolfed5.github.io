function clockTimer()
{
  var today = new Date();
  
  var time = [today.getHours(),today.getMinutes(),today.getSeconds()]; // |[0] = Hours| |[1] = Minutes| |[2] = Seconds|

  
  if(time[0] < 10){time[0] = "0"+ time[0];}
  if(time[1] < 10){time[1] = "0"+ time[1];}
  if(time[2] < 10){time[2] = "0"+ time[2];}
  
  var current_time = [time[0],time[1],time[2]].join(':');
  var clock = document.getElementById("clock");
  var day = document.getElementById("dayOfWeek");
  
  clock.innerHTML = current_time;
  
  
  setTimeout("clockTimer()", 1000);

};




function DocumentLoad()
{
    var days = [
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота',
        'Воскресенье'
      ];


   var today = new Date();
   var dd = String(today.getDate()).padStart(2, '0');
   var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
   var yyyy = today.getFullYear();
   var Day = today.getDay()-1;
   var date = new Date(document.lastModified);
   today = dd + '/' + mm + '/' + yyyy;
   document.write("Сегодня: "+today +" "+days[Day]+
   "<br \/>Последнее изменение:"+date);
   

};

function Aforizm()
{
    var days = [
        'Работать начну во вторник',
        'День трудоголика начался',
        'Половина минала',
        'Запара идет к своему нелогичному концу',
        'Домой пора',
        'Спим днем',
        'Не спим ночью'
      ];
      var rand = Math.floor(Math.random() * days.length);

   document.write("Афоризм: "+days[rand]);
   

}

function info()
{
  const navigatorObj = window.navigator;
  document.write("Характеристики браузера"+
                 "<br \/>Имя:" +navigatorObj.appName+
                 "<br \/>Версия:"+navigatorObj.appVersion+
                 "<br \/>Заголовок:"+navigatorObj.userAgent);

}




