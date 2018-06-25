<?php

header('Access-Control-Allow-Origin:*');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$file = $_FILES['file'];
$filename = $file['name'];
file_put_contents($filename, file_get_contents($file['tmp_name']), FILE_APPEND);