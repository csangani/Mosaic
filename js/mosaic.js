/*

Mosaic
Dynamic Grid

Version 1.0 Beta
By Chirag Sangani	chiragsangani@live.com
www.chiragsangani.com

Installation:

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

Parameters:

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

Sample Code:

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

*/

(function ($) {
	$.fn.mosaic = function (parameters) {

		/* Set parameter defaults */
		var source = this,
			cell = '.mosaic-cell',
			width = null,
			height = 400,
			columns = 3,
			min_rows = 2,
			max_rows = 3,
			strict_grid = false,
			spacing = 1,
			interval = 2000,
			speed = 500,
			easing = 'swing',
			remove_source = true,
			alternate_columns = false,
			orientation = 'vertical',
			random_columns = true,
			pause_animation = false,
			navigation_buttons = 'proximity',
			autoplay = true,
			loop_type = 'reverse',
			column_scroll = true;

		/* Get parameter values */
		if (parameters) {
			source = (parameters.source != null) ? parameters.source : source;
			cell = (parameters.cell != null) ? source.find(parameters.cell) : source.find(cell);
			width = (parameters.width != null) ? parseInt(parameters.width) : width;
			height = (parameters.height != null) ? parseInt(parameters.height) : height;
			columns = (parameters.columns != null) ? parseInt(parameters.columns) : columns;
			min_rows = (parameters.min_rows != null) ? parseInt(parameters.min_rows) : min_rows;
			max_rows = (parameters.max_rows != null) ? parseInt(parameters.max_rows) : max_rows;
			strict_grid = (parameters.strict_grid != null) ? parameters.strict_grid : strict_grid;
			spacing = (parameters.spacing != null) ? parseInt(parameters.spacing) : spacing;
			interval = (parameters.interval != null) ? parseInt(parameters.interval) : interval;
			speed = (parameters.speed != null) ? parseInt(parameters.speed) : speed;
			easing = (parameters.easing != null) ? parameters.easing : easing;
			remove_source = (parameters.remove_source != null) ? parameters.remove_source : remove_source;
			alternate_columns = (parameters.alternate_columns != null) ? parameters.alternate_columns : alternate_columns;
			orientation = (parameters.orientation != null) ? parameters.orientation : orientation;
			random_columns = (parameters.random_columns != null) ? parameters.random_columns : random_columns;
			pause_animation = (parameters.pause_animation != null) ? parameters.pause_animation : pause_animation;
			navigation_buttons = (parameters.navigation_buttons != null) ? parameters.navigation_buttons : navigation_buttons;
			autoplay = (parameters.autoplay != null) ? parameters.autoplay : autoplay;
			loop_type = (parameters.loop_type != null) ? parameters.loop_type : loop_type;
			column_scroll = (parameters.column_scroll != null) ? parameters.column_scroll : column_scroll;
		}
		
		var parent = this;
		
		/* Create mosaic global layout function array */
		parent.get(0).mosaic_layout_function_array = new Array();
		
		/* Create wrapper */
		parent.get(0).target = $('<div class="mosaic-grid-wrapper"></div>').appendTo(parent);
		
		/* Set wrapper dimensions */
		if (width)
			parent.get(0).target.width(width);
		parent.get(0).target.height(height);

		/* Create column wrappers */
		parent.get(0).target.get(0).outercolumnwrappers = new Array();
		for (var i = 0; i < columns; i++) {
			parent.get(0).target.get(0).outercolumnwrappers[i] = $('<div class="mosaic-outer-columnwrapper"></div>').appendTo(parent.get(0).target);
			parent.get(0).target.get(0).outercolumnwrappers[i].get(0).innercolumnwrapper = $('<div class="mosaic-inner-columnwrapper mosaic-inner-columnwrapper-' + orientation + '"></div>').appendTo(parent.get(0).target.get(0).outercolumnwrappers[i]);
			if (orientation == 'horizontal') {
				parent.get(0).target.get(0).outercolumnwrappers[i].width(parent.get(0).target.width()).height(Math.floor(height / columns) - spacing);
			}
			else {
				parent.get(0).target.get(0).outercolumnwrappers[i].width(Math.floor(parent.get(0).target.width() / columns) - spacing).height(height);
			}
		}

		/* Create columns */
		for (var i = 0; i < columns; i++) {
			parent.get(0).target.get(0).outercolumnwrappers[i].get(0).innercolumnwrapper.get(0).column = $('<div class="mosaic-column" id="mosaic-column-' + i + '"></div>').appendTo(parent.get(0).target.get(0).outercolumnwrappers[i].get(0).innercolumnwrapper);
		}
		parent.get(0).target.append('<div style="clear:both"></div>');
		
		function column(col) {
			return parent.get(0).target.get(0).outercolumnwrappers[col].get(0).innercolumnwrapper.get(0).column;
		}

		/* Create cells */
		for(var i = 0; i < columns; i++) {
			column(i).get(0).cells = new Array();
		}	
		
		var col = 0, i = 0;
		while (i < cell.length) {
			column((col)%columns).get(0).cells[Math.floor(i / columns)] = $('<div class="mosaic-inner-cell" id="mosaic-inner-cell-' + ((col) % columns) + '-' + Math.floor(i / columns) + '">' + $(cell[i]).html() + '</div>').appendTo(column(col % columns));
			col++;
			i++;
		}
		
		/* Remove source */
		if (remove_source)
			cell.remove();
		
		cell = function(i,j) {
			return column(i).get(0).cells[j];
		}
		
		/* Set cell spacing */
		for (var i = 0; i < columns; i++) {
			for (var j = 0; j < column(i).get(0).cells.length - 1; j++) {
				if (orientation == 'horizontal') {
					cell(i,j).css('margin-right', spacing + 'px');
				} else {
					cell(i,j).css('margin-bottom', spacing + 'px');
				}
			}
		}

		/* Generate random rows */
		parent.get(0).rows = new Array();
		parent.get(0).rows[0] = Math.round((max_rows - min_rows) * Math.random()) + min_rows;
		for (var i = 1; i < columns; i++) {
			if (strict_grid)
				parent.get(0).rows[i] = parent.get(0).rows[0];
			else {
				do parent.get(0).rows[i] = Math.round((max_rows - min_rows) * Math.random()) + min_rows;
				while (parent.get(0).rows[i] == parent.get(0).rows[i - 1] && alternate_columns && max_rows != min_rows);
			}
		}

		/* Generate random heights (horizontal: widths) */
		parent.get(0).hw = new Array();
		for (var i = 0; i < columns; i++) {
			parent.get(0).hw[i] = new Array();
			var hwsum = 0;
			for (var j = 0; j < parent.get(0).rows[i] - 1; j++) {
				if (strict_grid) {
					if (orientation == 'horizontal')
						parent.get(0).hw[i][j] = Math.floor(parent.get(0).target.width() / parent.get(0).rows[i]) - spacing;
					else
						parent.get(0).hw[i][j] = (height - parseInt(parent.get(0).target.find('.mosaic-inner-columnwrapper').css('margin-top')) - parseInt(parent.get(0).target.find('.mosaic-inner-columnwrapper').css('margin-bottom')))/ parent.get(0).rows[i] - spacing;
				}
				else {
					if (orientation == 'horizontal')
						parent.get(0).hw[i][j] = Math.floor(((((parent.get(0).target.find('.mosaic-inner-columnwrapper').width() / parent.get(0).rows[i]) * 3) / 4) * (1 + Math.random() / 2)) / 10) * 10 - spacing;
					else
						parent.get(0).hw[i][j] = Math.floor((((((height - parseInt(parent.get(0).target.find('.mosaic-inner-columnwrapper').css('margin-top')) - parseInt(parent.get(0).target.find('.mosaic-inner-columnwrapper').css('margin-bottom')))/ parent.get(0).rows[i]) * 3) / 4) * (1 + Math.random() / 2)) / 10) * 10 - spacing;
				}
				hwsum += parent.get(0).hw[i][j] + spacing;
			}
			parent.get(0).hw[i][parent.get(0).rows[i] - 1] = ((orientation == 'horizontal') ? parent.get(0).target.find('.mosaic-inner-columnwrapper').width() : (height - parseInt(parent.get(0).target.find('.mosaic-inner-columnwrapper').css('margin-top')) - parseInt(parent.get(0).target.find('.mosaic-inner-columnwrapper').css('margin-bottom')))) - hwsum;
		}

		/* Assign cell dimensions */
		parent.get(0).columnWidths = new Array();
		function set_cell_dimensions() {
			for (var i = 0; i < columns; i++) {
				parent.get(0).columnWidths[i] = 0;
				for (var j = 0; j < column(i).get(0).cells.length; j++) {
					if (orientation == 'horizontal') {
						cell(i,j).width(parent.get(0).hw[i][j % parent.get(0).rows[i]]);
						cell(i,j).height(Math.floor((height - parseInt(parent.get(0).target.find('.mosaic-inner-columnwrapper').css('margin-top')) - parseInt(parent.get(0).target.find('.mosaic-inner-columnwrapper').css('margin-bottom')))/ columns - spacing));
						parent.get(0).columnWidths[i] += parent.get(0).hw[i][j % parent.get(0).rows[i]];
					} else {
						cell(i,j).height(parent.get(0).hw[i][j % parent.get(0).rows[i]]);
						cell(i,j).width(Math.floor(parent.get(0).target.width() / columns) - spacing);
					}
				}
			}
		}

		/* Set column height */
		for (var i = 0; i < columns; i++) {
			if (orientation == 'horizontal')
				column(i).height(Math.floor(height / columns - spacing));
			else
				column(i).height((height - parseInt(parent.get(0).target.find('.mosaic-inner-columnwrapper').css('margin-top')) - parseInt(parent.get(0).target.find('.mosaic-inner-columnwrapper').css('margin-bottom'))));
		}

		/* Set column spacing */
		for (var i = 0; i < columns - 1; i++) {
			if (orientation == 'horizontal')
				parent.get(0).target.get(0).outercolumnwrappers[i].css('margin-bottom', spacing + 'px');
			else
				parent.get(0).target.get(0).outercolumnwrappers[i].css('margin-right', spacing + 'px');
		}

		/* Set column width */
		function set_column_width() {
			if (orientation == 'horizontal') {
				for (var i = 0; i < columns; i++) {
					column(i).width(parent.get(0).columnWidths[i]*1.1);
				} 
			} else {
				for (var i = 0; i < columns; i++) {
				    column(i).width(Math.floor(parent.get(0).target.width() / columns) - spacing);
				    parent.get(0).target.get(0).outercolumnwrappers[i].width(Math.floor(parent.get(0).target.width() / columns) - spacing);
				}	
			}
		}
		
		parent.get(0).mosaic_layout_function_array.push(set_cell_dimensions);
		parent.get(0).mosaic_layout_function_array.push(set_column_width);

		/* Set up column mouseenter events */
		if (pause_animation) {
			for (var i = 0; i < columns; i++) {
				column(i).mouseenter(function() {
					this.columnPause = true;
				});
				column(i).mouseleave(function() {
					this.columnPause = false;
				});
			}
		}
		
		/* Animation function */
		for (var i = 0; i < columns; i++) {
			column(i).get(0).direction = 1;
			column(i).get(0).bottomMarker = parent.get(0).rows[i];
		}
		
		function generate_random_column (columns, column) {
			var new_column;
			do new_column = Math.floor(Math.random() * columns);
			while (new_column == column && columns != 1)
			return new_column;
		}
		
		function animation_complete(col) {
			if (column(col).get(0).bottomMarker == column(col).get(0).cells.length) {
				column(col).get(0).direction = 0;
				if (loop_type == 'none')
					column(col).get(0).direction = -1;
				if (navigation_buttons == 'proximity' || navigation_buttons == 'always') {
					parent.get(0).target.get(0).outercolumnwrappers[col].get(0).buttonN.fadeOut();
					parent.get(0).target.get(0).outercolumnwrappers[col].get(0).buttonP.fadeIn();
				}
			} else if (column(col).get(0).bottomMarker == parent.get(0).rows[col]) {
				column(col).get(0).direction = 1;
				if (navigation_buttons == 'proximity' || navigation_buttons == 'always') {
					parent.get(0).target.get(0).outercolumnwrappers[col].get(0).buttonP.fadeOut();
					parent.get(0).target.get(0).outercolumnwrappers[col].get(0).buttonN.fadeIn();
				}
			} else {
				if (navigation_buttons == 'proximity' || navigation_buttons == 'always') {
					parent.get(0).target.get(0).outercolumnwrappers[col].get(0).buttonN.fadeIn();
					parent.get(0).target.get(0).outercolumnwrappers[col].get(0).buttonP.fadeIn();
				}
			}
		}
		
		function column_next(col) {
			if (orientation == 'horizontal') {
				cell(col,column(col).get(0).bottomMarker - parent.get(0).rows[col]).stop(true).animate({
					'margin-left': -((cell(col,column(col).get(0).bottomMarker - parent.get(0).rows[col])).width() + spacing)
				}, speed, easing);
			} else {
				cell(col,column(col).get(0).bottomMarker - parent.get(0).rows[col]).stop(true).animate({
					'margin-top': -((cell(col,column(col).get(0).bottomMarker - parent.get(0).rows[col])).height() + spacing)
				}, speed, easing);
			}
			column(col).get(0).bottomMarker++;
			animation_complete(col);
		}
		
		function column_prev(col) {
			if (orientation == 'horizontal')
				cell(col,column(col).get(0).bottomMarker - parent.get(0).rows[col] - 1).stop(true).animate({
				'margin-left': '0px'
				}, speed, easing);
			else
				cell(col,column(col).get(0).bottomMarker - parent.get(0).rows[col] - 1).stop(true).animate({
				'margin-top': '0px'
				}, speed, easing);
			column(col).get(0).bottomMarker--;
			animation_complete(col);
		}
		
		parent.get(0).mosaic_pause_marker = false;
		
		function mosaic_animation(col, bitmask) {
			bitmask |= 1 << col;
			if (parent.get(0).mosaic_pause_marker) {
				window.setTimeout(function () {
					mosaic_animation((random_columns) ? generate_random_column(columns, 0) : 0);
				}, interval);
				return;
			}
			col %= columns;
			if (parent.get(0).rows[col] >= column(col).get(0).cells.length)
				column(col).get(0).direction = -1;
			if (loop_type == 'rewind') {
				if (column(col).get(0).direction >= 0 && !column(col).get(0).columnPause) {
					if(column(col).get(0).bottomMarker == column(col).get(0).cells.length) {
						for (var i = parent.get(0).rows[col]; i < column(col).get(0).cells.length; i++) {
							column_prev(col);
						}
						window.setTimeout(function () {
							mosaic_animation((random_columns) ? generate_random_column(columns, col) : col + 1);
						}, interval);
						return;
					}
				} else {
					if (bitmask != (1 << columns) -1)
						mosaic_animation((random_columns) ? generate_random_column(columns, col) : col + 1, bitmask);
					return;
				}
			}
			if (column(col).get(0).direction > 0 && !column(col).get(0).columnPause) {
				column_next(col);
			} else if (column(col).get(0).direction == 0 && !column(col).get(0).columnPause) {
				column_prev(col);
			} else {
				if (bitmask != (1 << columns) -1)
					mosaic_animation((random_columns) ? generate_random_column(columns, col) : col + 1, bitmask);
				return;
			}
			
			window.setTimeout(function () {
				mosaic_animation((random_columns) ? generate_random_column(columns, col) : col + 1);
			}, interval);
		}
		
		parent.get(0).mosaic_pause = function () {
			parent.get(0).mosaic_pause_marker = true;
		}
		
		parent.get(0).mosaic_unpause = function () {
			parent.get(0).mosaic_pause_marker = false;
		}

		/* Apply animations */
		if (autoplay) {
			window.setTimeout(function () {
				mosaic_animation((random_columns) ? generate_random_column(columns, 0) : 0);
			}, interval);
		}
		
		/* Set up navigation controls */
		if (navigation_buttons == 'proximity' || navigation_buttons == 'always') {
			for (var i = 0; i < columns; i++) {
				parent.get(0).target.get(0).outercolumnwrappers[i].get(0).buttonP = $('<div class="mosaic-column-button mosaic-column-button-' + ((orientation == 'horizontal') ? 'l' : 'u') + '"></div>').appendTo(parent.get(0).target.get(0).outercolumnwrappers[i]).hide();
				parent.get(0).target.get(0).outercolumnwrappers[i].get(0).buttonN = $('<div class="mosaic-column-button mosaic-column-button-' + ((orientation == 'horizontal') ? 'r' : 'd') + '"></div>').appendTo(parent.get(0).target.get(0).outercolumnwrappers[i]);
				if (parent.get(0).rows[i] >= column(i).get(0).cells.length)
					parent.get(0).target.get(0).outercolumnwrappers[i].get(0).buttonN.hide();
				parent.get(0).target.get(0).outercolumnwrappers[i].get(0).buttonP.get(0).col = i;
				parent.get(0).target.get(0).outercolumnwrappers[i].get(0).buttonN.get(0).col = i;
				parent.get(0).target.get(0).outercolumnwrappers[i].get(0).buttonP.click(function() {
					var col = this.col;
					if(column(col).get(0).bottomMarker > parent.get(0).rows[col]) {
						column_prev(col);
					}
				});
				parent.get(0).target.get(0).outercolumnwrappers[i].get(0).buttonN.click(function() {
					var col = this.col;
					if(column(col).get(0).bottomMarker < column(col).get(0).cells.length) {
						column_next(col);
					}
				});
				if (navigation_buttons == 'proximity') {
					parent.get(0).target.get(0).outercolumnwrappers[i].get(0).buttonP.mouseenter(function(){$(this).stop(true).animate({opacity:1},'fast');}).mouseleave(function(){$(this).stop(true).animate({opacity:0},'fast');}).css('opacity',0);
					parent.get(0).target.get(0).outercolumnwrappers[i].get(0).buttonN.mouseenter(function(){$(this).stop(true).animate({opacity:1},'fast');}).mouseleave(function(){$(this).stop(true).animate({opacity:0},'fast');}).css('opacity',0);
				}
			}
		}
		
		/* Add column scroll event handlers */
		if(column_scroll) {
			for (var i = 0; i < columns; i++) {
				column(i).get(0).index = i;
				column(i).mouseover(function() {
					$(this).mousewheel(function(e,d) {
						//e.preventDefault();
						var col = this.index;
						if (d > 0) {
							if(this.bottomMarker > parent.get(0).rows[col])
								column_prev(col);
						} else {
							if(this.bottomMarker < this.cells.length)
								column_next(col);
						}
					});
				});
				column(i).mouseout(function() {
					$(this).unbind('mousewheel')
				});
			}
		}
	
		/* Set up layout function calls */		
		function run_dependent_layout_functions() {
			for (var i = 0; i < parent.get(0).mosaic_layout_function_array.length; i++) {
				parent.get(0).mosaic_layout_function_array[i]();
			}
		}

		$(document).ready(function () {
			run_dependent_layout_functions();
		});
		$(window).resize(function () {
			run_dependent_layout_functions();
		});
		
		return this;
	};
})(jQuery);