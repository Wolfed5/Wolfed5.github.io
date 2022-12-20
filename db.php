<?php

// Построение SQL-оператора
   $name= mysql_escape_string($_POST['name']);
   $phone = mysql_escape_string($_POST['phone']);
   $email= mysql_escape_string($_POST['email']);
   $lesson= mysql_escape_string($_POST['lesson']);
   $daterog= mysql_escape_string($_POST['daterog']);
   $doclad= mysql_escape_string($_POST['doclad']);

   $strSQL = "INSERT INTO person_main(name, phone, email, lesson, daterog, doclad) values ('$name','$phone','$email','$lesson','$daterog','$doclad') ";
   
   // SQL-оператор выполняется
   mysql_query($strSQL) or die (mysql_error());

   // Закрытие соединения
   mysql_close();
   ?>