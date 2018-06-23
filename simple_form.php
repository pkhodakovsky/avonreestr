<?php

	
	$receplient = "info@avonreestr.com.ua";
	$sitename = "AVON";
	$subject = "Упрощенная форма";

	$s_first_name = trim($_POST["s_first_name"]);
	$s_last_name = trim($_POST["s_last_name"]);
	$s_e_mail = trim($_POST["s_e_mail"]);
	$s_phone = trim($_POST["s_phone"]);
	$s_reg_target = trim($_POST["s_reg_target"]);
	$date = date("d.n.Y");

	$message = "Имя: $s_first_name\nФамилия: $s_last_name\nЭлектронная почта: $s_e_mail\nНомер телефона: $s_phone\nЦель регистрации: $s_reg_target\nДата: $date";

	mail($receplient, $subject, $message, "Content-Type: text/plain; charset=\"UTF-8\" \nFrom: $sitename");

?>