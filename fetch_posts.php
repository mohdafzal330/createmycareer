<?php
	$con = mysqli_connect('localhost','root');
	mysqli_select_db($con,'createmycareer');
	$query = "select * from post";
	$result = mysqli_query($con,$query);
	$row_count = mysqli_num_rows($result);
	
?>