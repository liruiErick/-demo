<?php
$target = "files/" .iconv("utf-8","gbk",$_POST["name"]) . '-' . $_POST['index']; //接收文件名时进行转码，防止中文乱码。
move_uploaded_file($_FILES['file']['tmp_name'], $target);
sleep(1);