<!DOCTYPE html>
<html>
<head>
	<title>Bar Volume</title>
	<link rel="stylesheet" type="text/css" href="main.css">
</head>
<body>
	<div>
		<h1>Bar Volume</h1>

		<form name="bar_Volume">
			Panjang<br>
			<input type="number" name="length" <?php isLength(); ?> required><br>
			Lebar<br>
			<input type="number" name="width"  <?php isWidth(); ?> required><br>
			Tinggi<br>
			<input type="number" name="height" <?php isHeight(); ?> required><br><br>

			<input class="btn" type="submit" value="Hitung">
		</form>

		<h3>
			<b id="result">
				<?php
					function isLength() {
						if (isset($_GET["length"])) {
							echo "value = " . $_GET["length"];
						}
					}

					function isWidth() {
						if (isset($_GET["width"])) {
							echo "value = " . $_GET["width"];
						}
					}

					function isHeight() {
						if (isset($_GET["height"])) {
							echo "value = " . $_GET["height"];
						}
					}

					if ($_GET) {
						$length = $_GET["length"];
						$width  = $_GET["width"];
						$height = $_GET["height"];
						$result = $length * $width * $height;
						echo $result;
					} else {
						echo "Hasil";
					}

					function dump($var){
						echo "<pre>";
						var_dump($var);
						echo "</pre>";
					}
				?>
			</b>
		</h3>
		
	</div>
</body>
</html>