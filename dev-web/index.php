<html>
	<head>
		<title>Meu primeiro site em PHP!</title>
		
		<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
		
		<style type="text/css">
			.linha {
				font-weight: bold;
				color: blue;
				padding-left: 10px;
				line-height: 20px;
			}
		</style>
	</head>
	
	<body>
		
		<?php
		
		$terms = array("404", "Algoritmo", "ALT", "Aplicação");
		$arrlength = count($terms);
		
		for($x = 0; $x < $arrlength; $x++) {
			print("<span class=\"linha\">" . $terms[$x] . "</span><br />");

		}
		
		?>
		
	</body>
	
	<script type="text/javascript">
		$(document).ready(function() {
			alert("document loaded");
		});
	</script>
</html>