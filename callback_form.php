<?php

	
	$receplient = "info@avonreestr.com.ua";
	$sitename = "AVON";
	$subject = "Обратный звонок";

	$name = trim($_POST["name"]);
	$phone = trim($_POST["phone"]);
	$date = date("d.n.Y");

	$message = "Имя: $name\nНомер телефона: $phone\nДата: $date";

	mail($receplient, $subject, $message, "Content-Type: text/plain; charset=\"UTF-8\" \nFrom: $sitename");

?>