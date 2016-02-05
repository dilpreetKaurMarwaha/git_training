<?php
	if($_POST["value"]=="Punjab")
	{
		$states=array(
			"Amritsar" => "Amritsar",
			"Mohali" => "Mohali",
			"Moga" => "Moga"
		);
		
		echo json_encode($states);
		
	}
	if($_POST["value"]=="Haryana")
	{
		$states=array(
			"Ambala" => "Ambala",
			"Gurgaon" => "Gurgaon",
			"Karnal" => "Karnal"
		);
		
		echo json_encode($states);
		
	}
	if($_POST["value"]=="HimachalPradesh")
	{
		$states=array(
			"Baddi" => "Baddi",
			"Kalka" => "Kalka",
			"Pinjore" => "Pinjore"
		);
		
		echo json_encode($states);
		
	}
?>