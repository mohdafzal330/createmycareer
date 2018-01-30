<?php
	if(isset($_POST['submit'])){
		$con = mysqli_connect('localhost','root');
		mysqli_select_db($con,'createmycareer');
		$post = $_POST['post'];
		$query = "insert into post values('$post')";
		mysqli_query($con,$query);
		header('location:profile.php');
	}
?>