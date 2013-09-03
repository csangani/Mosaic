Mosaic
======

Mosaic is a flexible javascript framework for creating dynamic and interactive content galleries. 

Installation
------------

1. Copy the following files and folders to your website root directory:
	a. mosaic.js
	b. mosaic.css
	c. mosaic-style.css
	d. jquery.mousewheel.js
	e. images
	
2. Include jQuery and jQuery UI in your website. For more information, visit http://www.jquery.com.

3. Add the following code to your header:
	<script src="jquery.mousewheel.js" type="text/javascript"></script>
	<script src="mosaic.js" type="text/javascript"></script>
	<link href="mosaic.css" rel="stylesheet" type="text/css">
	<link href="mosaic-style.css" rel="stylesheet" type="text/css">
	
4. Set up your content in the following manner:
	<div id="mosaic-target"></div>
	<ul id="mosaic-source">
		<li class="mosaic-cell">..</li>
		<li class="mosaic-cell">..</li>
		<li class="mosaic-cell">..</li>
		<li class="mosaic-cell">..</li>
		.
		.
	</ul>
5. Insert the following JavaScript in your header:
	<script type="text/javascript">
	$(document).ready(function() {
		$('#mosaic-target').mosaic({
			source: $('#mosaic-source'),
		});
	});


Parameters
----------

Parameters passed to the $().mosaic() function can contain the following values:


#	Parameter			Default			Description


1	source				this			Use this jQuery object as a context to find cells.
2	cell				'.mosaic-cell'	Use this selector to search for cells in the source object.	
3	width				null			Width of grid in pixels, or null for auto-width.
4	height				400				Height of grid in pixels.
5	columns				3				Number of columns in grid.
6	min_rows			2				Minimum visible rows in grid per column.
7	max_rows			3				Maximum visible rows in grid per column.
8	strict_grid			false			true, if height of all rows should be equal.
9	spacing				1				Space between cells, in pixels.
10	interval			2000			Interval between animations, in milliseconds.
11	speed				500				Duration of animations, in milliseconds.
12	easing				'swing'			Animation easing. Include jquery.ui to use option.
											Available options:
												[linear] | [swing] | [ease] [In|Out|InOut] [Quad|Cubic|Quart|Quint|Expo|Sine|Circ|Elastic|Back|Bounce]
13	remove_source		true			Remove source cells from DOM after grid initialization.
14	alternate_columns	false			true, if consecutive columns cannot have the same number of visible rows.
15	orientation			'vertical'		Direction of animation.
											Available options:
												[vertical] | [horizontal]
16	random_columns		true			Select a random column for next animation cycle.
17	pause_animation		false			Pause a column's animation on mouseenter.
18 	navigation_buttons	'proximity'		Display column navigation buttons.
											Available options:
												[always] | [proximity] | [never]
19	autoplay			true			Play animation on deployment.
20	loop_type			'reverse'		Select whether to reverse the loop on reaching the end, or rewind. None if no looping.
											Available options:
												[reverse] | [rewind] | [none]
21	column_scroll		true			Navigate columns using the scroll wheel.

Sample Code
-----------

<!DOCTYPE html>
<html>
	<head>
		<script src="jquery.js" type="text/javascript"></script>
		<script src="jquery.ui.js" type="text/javascript"></script>
		<script src="jquery.mousewheel.js" type="text/javascript"></script>
		<script src="mosaic.js" type="text/javascript"></script>
		<link href="mosaic.css" rel="stylesheet" type="text/css">
		<link href="mosaic-style.css" rel="stylesheet" type="text/css">
		<script type="text/javascript">
			$(document).ready(function() {
				$('#mosaic-target').mosaic({
					source: $('#mosaic-source'),
					width: 900,
					height: 400,
					columns: 3,
					min_rows: 1,
					max_rows: 2,
					speed: 500,
					alternate_columns: true,
					easing: 'easeInOutQuart',
					pause_animation: true,
					loop_type: 'rewind',
					navigation_buttons: 'always'
				});
			});
		</script>
	</head>
	<body>
		<div id="mosaic-target"></div>
		<ul id="mosaic-source" style="display:none">
			<li class="mosaic-cell">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</li>
			<li class="mosaic-cell">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</li>
			<li class="mosaic-cell">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</li>
			<li class="mosaic-cell">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</li>
			<li class="mosaic-cell">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</li>
			<li class="mosaic-cell">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</li>
			<li class="mosaic-cell">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</li>
			<li class="mosaic-cell">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</li>
		</ul>
	</body>
</html>

