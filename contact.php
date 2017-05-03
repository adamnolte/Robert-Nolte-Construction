<?php
	require('phpmailer/class.phpmailer.php');
	require('phpmailer/class.smtp.php');
	if(isset($_POST['email'])){
		$to = htmlspecialchars($_POST['email']);
		$from = 'robert@robertnolteconstruction.com';
		$name = htmlspecialchars($_POST['name']);
		$sub = htmlspecialchars($_POST['subject']);
		$msg = htmlspecialchars($_POST['message']);
	
		$mail = new PHPMailer();

		//Enable SMTP debugging. 
		//$mail->SMTPDebug = 3;                               
		//Set PHPMailer to use SMTP.
		$mail->isSMTP();            
		//Set SMTP host name                          
		$mail->Host = "mail.robertnolteconstruction.com";
		//Set this to true if SMTP host requires authentication to send email
		$mail->SMTPAuth = true;                          
		//Provide username and password     
		$mail->Username = "sender@robertnolteconstruction.com";                 
		$mail->Password = "";                           
		//If SMTP requires TLS encryption then set it
		//$mail->SMTPSecure = "tls";                           
		//Set TCP port to connect to 
		$mail->Port = 25;                                   

		$mail->From = $from;
		$mail->FromName = $name;

		$mail->addAddress("rdnolte@ctcis.net", 'Robert Nolte');

		$mail->isHTML(true);

		$mail->Subject = $sub;
		$mail->Body = $msg;
		$mail->AltBody = $msg;

		if($mail->send()){
			echo 'success';
		} 
		else{
			echo 'Error Sending Message, Please Contact rdnolte@ctcis.net. Error Code: 1';
		}
		
		
	}
	else{
		echo 'Error Sending Message, Please Contact rdnolte@ctcis.net. Error Code: 2';
	}
?>
