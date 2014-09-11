<?php

    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
      // Get the form fields and remove whitespace.
      $name = strip_tags(trim($_POST["name"]));
	    $name = str_replace(array("\r","\n"),array(" "," "),$name);
      $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
      $message = trim($_POST["message"]);

      // Check that data was sent to the mailer.
      if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        //http_response_code(400); // Set a 400 (bad request) response code and exit.
        echo "Looks like you need to fill out my form ;)";
        exit;
      }

      $recipient = "nickadkins.webdev@gmail.com"; // Set the recipient email address.
      
      $subject = "Portfolio email from: $name"; // Set the email subject.

      // Build the email content.
      $email_content = "Name: $name\n";
      $email_content .= "Email: $email\n\n";
      $email_content .= "Message:\n$message\n";

      $email_headers = "From: $name <$email>"; // Build the email headers.

      // Send the email.
      if (mail($recipient, $subject, $email_content, $email_headers)) {
        /*http_response_code(200); // Set a 200 (okay) response code. */
        echo "Thank You! I will get back to you as soon as possible!";
      } else {
        /*http_response_code(500); // Set a 500 (internal server error) response code.*/
        echo "WTF mate?! Something went wrong and your message couldn't be sent.";
      }

    } else {
      http_response_code(403); // Not a POST request, set a 403 (forbidden) response code.
      echo "There was a problem with your submission, please try again.";
    }

?>
