<?php

	
	$receplient = "info@avonreestr.com.ua";
	$sitename = "AVON";
	$subject = "Регистрация представителя";

	$f_fio = trim($_POST["f_fio"]);
	$f_dob = trim($_POST["f_dob"]);
	$f_phone = trim($_POST["f_phone"]);
	$f_email = trim($_POST["f_email"]);
	$f_pass_s_n = trim($_POST["f_pass_s_n"]);
	$f_pass_d = trim($_POST["f_pass_d"]);
	$f_kod = trim($_POST["f_kod"]);
	$f_addr_lv = trim($_POST["f_addr_lv"]);
	$f_index = trim($_POST["f_index"]);

	$date = date("d.n.Y");

	$message = "ФИО: $f_fio\nДата рождения: $f_dob\nНомер телефона: $f_phone\nЭлектронная почта: $f_email\nСерия и номер паспорта: $f_pass_s_n\nДата выдачи паспорта: $f_pass_d\nИдентификационный код: $f_kod\nАдрес фактического проживания: $f_addr_lv\nИндекс: $f_index\nДата: $date";

	mail($receplient, $subject, $message, "Content-Type: text/plain; charset=\"UTF-8\" \nFrom: $sitename");

?>