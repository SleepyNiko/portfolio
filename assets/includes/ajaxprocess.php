<?php 
$toEmail 		= "sleepyniko@gmail.com"; //Replace it recipient email address
$subject 		= 'Request for Franchisee info - Generic'; //Subject line for emails

//Let's clean harmful characters from raw POST data using PHP Sanitize filters.
$postFName 		= filter_var($_POST["postFName"], FILTER_SANITIZE_STRING);
$postLName 		= filter_var($_POST["postLName"], FILTER_SANITIZE_STRING); 
$postEmail 		= filter_var($_POST["postEmail"], FILTER_SANITIZE_EMAIL);
$postPhone 		= filter_var($_POST["postPhone"], FILTER_SANITIZE_STRING);
$postProvince	= filter_var($_POST["postProvince"], FILTER_SANITIZE_EMAIL);
$postInvest		= filter_var($_POST["postInvest"], FILTER_SANITIZE_EMAIL);

//Finally we can proceed with PHP email.
$headers = 'From: '.$postEmail.'' . "\r\n" .
    'Reply-To: '.$postEmail.'' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
	
@$sentMail = mail($toEmail, $subject, 'First Name: '.$postFName."\r\n".'Last Name: '.$postLName."\r\n".'Email: '.$postEmail."\r\n".'Phone: '.$postPhone."\r\n".'Province selected: '.$postProvince."\r\n".'Investment choice: '.$postInvest, $headers);

/*
if(!$sentMail)
	{
		header('HTTP/1.1 500 Could not send mail! Sorry..'); 
		exit();
	}else{
		echo '<h3>Hi '.$postFName.'!</h3><p>Thank you for subscribing!</p>';
	}
*/

?>