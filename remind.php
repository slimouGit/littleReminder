<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>littleReminder</title>
    <link rel="stylesheet" href="layout/layout.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <div id="littleReminderForm">
        <a href="index.html"><img class="success" src="img/littleReminderSuccess.png"/></a>
    </div>
</body>
</html>

<?php
    $content = $_POST['reminderContent'];
    $recipient = $_POST['reminderRecipient'];
    $subject = $content;
    $from = "From: little reminder <admin@littleReminder.de>";
    $text = "littlereminder.slimou.org";

    mail($recipient, $subject, $text, $from);
?>

