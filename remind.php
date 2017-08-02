<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>littleReminder</title>
    <link rel="stylesheet" href="layout/layout.css">
</head>
<body>
    <a href="index.html"><img src="img/success.png"/></a>
</body>
</html>

<?php
    $content = $_POST['reminderContent'];
    $recipient = "oussayfi@gmail.com";
    $subject = $content;
    $from = "From: little reminder <admin@littleReminder.de>";
    $text = $content;

    mail($recipient, $subject, $text, $from);
?>

