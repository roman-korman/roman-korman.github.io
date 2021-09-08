<?
$msg=''; 
$name='';
$phone='';
$mail='';
$status=0;

$name = $_POST['username']; 
$phone = $_POST['userphone']; 
$mail = $_POST['usermail'];
	
	
$msg.="
КЛИЕНТСКАЯ ЗАЯВКА
Потенциальный клиент: ".$name."
Телефон: ".$phone."
E-mail: ".$mail;
$res=mail('sales@scanpal.ru','Заказ товара',$msg,"Content-type: text/plain; charset=utf-8");

echo $msg;

?>