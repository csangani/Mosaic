/*

Mosaic Gallery
Dynamic Grid Gallery

Version 1.0 Beta

By Chirag Sangani	chiragsangani@live.com
www.chiragsangani.com

Installation:

1. Install Mosaic.

2. Add the following code to your header:
	<link href="mosaicgallery.css" rel="stylesheet" type="text/css">
	<link href="mosaicgallery-style.css" rel="stylesheet" type="text/css">
	<script src="mosaicgallery.js" type="text/javascript"></script>

3. Add the following code to your header:
	<script type="text/javascript">
		$(document).ready(function() {
			$('#mosaic-target').mosaicgallery();
		});
	</script>
	
Parameters:

Parameters passed to the $().mosaicgallery() function can contain the following values:

#	Parameter					Default						Description

1	image						'.mosaic-gallery-image'		Selector for <img> object to be used as thumbnail.
2	image_hd					'.mosaic-gallery-image-hd'	Selector for <a> object whose href value points to HD image.
3	title						'.mosaic-gallery-title'		Selector for object whose contents are the title.
4	desc						'.mosaic-gallery-desc'		Selector for object whose contents are the description.
5	url							'.mosaic-gallery-url'		Selector for <a> object whose href value points to the relevant page.
6	scale_image					true						Scale thumbnail to fit the cell.
7	on_click					'lightbox'					Select action on clicking thumbnail.
																Available options:
																	[lightbox] | [url]
8	overlay_style				'bottom'					Position of overlay on thumbnail.
																Available options:
																	[top] | [bottom] | [left] | [right] | [full]
9	popup_overlay				true						Show full overlay on mouseenter.
10	overlay_title				true						Always show the title, even if the overlay is hidden.
																Not valid for overlay_style: 'full' or 'left' or 'right'.
11	overlay_animation_speed		250							Speed of overlay pop / hide animation.
12	lightbox_overlay			true						Show image information in lightbox.
13	lightbox_overlay_style		'right'						Position of overlay in lightbox.
																Available options:
																	[right] | [left]
14	error_image					'images/error.gif'			Location of thumbnail error image.
15	error_image_hd				'images/error-hd.gif'		Location of lightbox error image.
16	lightbox_overlay_width		300							Width of lightbox overlay
17	lightbox_transition_speed	400							Soeed of lightbox transitions.

Sample Code:

<!DOCTYPE html>
<html>
	<head>
		<script src="jquery.js" type="text/javascript"></script>
		<script src="jquery.ui.js" type="text/javascript"></script>
		<script src="jquery.mousewheel.js" type="text/javascript"></script>
		<script src="mosaic.js" type="text/javascript"></script>
		<script src="mosaicgallery.js" type="text/javascript"></script>
		<link href="mosaic.css" rel="stylesheet" type="text/css">
		<link href="mosaic-style.css" rel="stylesheet" type="text/css">
		<link href="mosaicgallery.css" rel="stylesheet" type="text/css">
		<link href="mosaicgallery-style.css" rel="stylesheet" type="text/css">
		<script type="text/javascript">
			$(document).ready(function () {
				$('#mosaic-grid-target').mosaic({
					source: $('#mosaic-grid-source'),
					width: 1000,
					height: 800,
					min_rows: 1,
					max_rows: 2,
					columns: 3,
					speed: 500,
					interval: 2000,
					spacing: 1,
					remove_source: true,
					alternate_columns: true,
					orientation: 'horizontal',
					easing: 'easeInOutQuart',
					pause_animation: true,
					autoplay: true,
					loop_type: 'reverse',
					random_columns: true
				}).mosaicgallery({
					scale_image: true,
					overlay_style: 'top',
					on_click: 'lightbox',
					overlay_animation_speed: 250,
					lightbox_overlay: true,
					lightbox_overlay_style: 'left',
					lightbox_transition_speed: 250,
					popup_overlay: true,
					overlay_title: true
				});
			});
		</script>
	</head>
	<body>
		<div id="mosaic-grid-target"></div>
		<div id="mosaic-grid-source" style="display: none;">
			<div class="mosaic-cell">
				<img alt="Acura Concept" class="mosaic-gallery-image" src="images/1_thumb.jpg">
				<div class="mosaic-gallery-title">Acura Concept</div>
				<div class="mosaic-gallery-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at nulla
					ac leo elementum mollis. Suspendisse at orci felis. Nulla luctus mi vel
					sapien bibendum volutpat pretium magna cursus. Vestibulum urna sapien,
					porta sit amet tincidunt vehicula, congue nec sapien. In scelerisque nulla
					vitae enim vulputate sed venenatis lectus tincidunt. Nulla facilisi.</div>
				<a class="mosaic-gallery-url" href="http://www.chiragsangani.com"></a>
				<a class="mosaic-gallery-image-hd" href="images/1.jpg"></a>
			</div>
			<div class="mosaic-cell">
				<img alt="Acura Concept" class="mosaic-gallery-image" src="images/2_thumb.jpg">
				<div class="mosaic-gallery-title">Acura Concept</div>
				<a class="mosaic-gallery-url" href="#"></a>
				<a class="mosaic-gallery-image-hd" href="images/2.jpg"></a>
			</div>
			<div class="mosaic-cell">
				<img alt="Acura Concept" class="mosaic-gallery-image" src="images/3_thumb.jpg">
				<div class="mosaic-gallery-title">Acura Concept</div>
				<div class="mosaic-gallery-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at nulla
					ac leo elementum mollis. Suspendisse at orci felis. Nulla luctus mi vel
					sapien bibendum volutpat pretium magna cursus. Vestibulum urna sapien,
					porta sit amet tincidunt vehicula, congue nec sapien. In scelerisque nulla
					vitae enim vulputate sed venenatis lectus tincidunt. Nulla facilisi.</div>
				<a class="mosaic-gallery-url" href="http://www.chiragsangani.com"></a>
				<a class="mosaic-gallery-image-hd" href="images/3.jpg"></a>
			</div>
			<div class="mosaic-cell">
				<img alt="Acura Concept" class="mosaic-gallery-image" src="images/4_thumb.jpg">
				<a class="mosaic-gallery-url" href="http://www.chiragsangani.com"></a>
				<a class="mosaic-gallery-image-hd" href="images/4.jpg"></a>
			</div>
			<div class="mosaic-cell">
				<img alt="Acura Concept" class="mosaic-gallery-image" src="images/5_thumb.jpg">
				<div class="mosaic-gallery-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at nulla
					ac leo elementum mollis. Suspendisse at orci felis. Nulla luctus mi vel
					sapien bibendum volutpat pretium magna cursus. Vestibulum urna sapien,
					porta sit amet tincidunt vehicula, congue nec sapien. In scelerisque nulla
					vitae enim vulputate sed venenatis lectus tincidunt. Nulla facilisi.</div>
				<a class="mosaic-gallery-url" href="http://www.chiragsangani.com"></a>
				<a class="mosaic-gallery-image-hd" href="images/5.jpg"></a>
			</div>
		</div>
	</body>
</html>

*/

(function ($) {
	$.fn.mosaicgallery = function (parameters) {
		var image = '.mosaic-gallery-image',
			image_hd = '.mosaic-gallery-image-hd',
			title = '.mosaic-gallery-title',
			desc = '.mosaic-gallery-desc',
			url = '.mosaic-gallery-url',
			scale_image = true,
			on_click = 'lightbox',
			overlay_style = 'bottom',
			popup_overlay = true,
			overlay_title = true,
			overlay_animation_speed = 250,
			error_image = 'assets/images/error.gif',
			error_image_hd = 'assets/images/error-hd.gif',
			blank_image = 'assets/images/blank.gif',
			lightbox_overlay = true,
			lightbox_overlay_style = 'right',
			lightbox_overlay_width = 300,
			lightbox_transition_speed = 400;

		/* Get parameter values */
		if (parameters) {
			image = (parameters.image != null) ? parameters.image : image;
			image_hd = (parameters.image_hd != null) ? parameters.image_hd : image_hd;
			title = (parameters.title != null) ? parameters.title : title;
			desc = (parameters.desc != null) ? parameters.desc : desc;
			url = (parameters.url != null) ? parameters.url : url;
			scale_image = (parameters.scale_image != null) ? parameters.scale_image : scale_image;
			on_click = (parameters.on_click != null) ? parameters.on_click : on_click;
			overlay_style = (parameters.overlay_style != null) ? parameters.overlay_style : overlay_style;
			popup_overlay = (parameters.popup_overlay != null) ? parameters.popup_overlay : popup_overlay;
			overlay_title = (parameters.overlay_title != null) ? parameters.overlay_title : overlay_title;
			overlay_animation_speed = (parameters.overlay_animation_speed != null) ? parameters.overlay_animation_speed : overlay_animation_speed;
			error_image = (parameters.error_image != null) ? parameters.error_image : error_image;
			error_image_hd = (parameters.error_image_hd != null) ? parameters.error_image_hd : error_image_hd;
			blank_image = (parameters.blank_image != null) ? parameters.blank_image : blank_image;
			lightbox_overlay = (parameters.lightbox_overlay != null) ? parameters.lightbox_overlay : lightbox_overlay;
			lightbox_overlay_style = (parameters.lightbox_overlay_style != null) ? parameters.lightbox_overlay_style : lightbox_overlay_style;
			lightbox_overlay_width = (parameters.lightbox_overlay_width != null) ? parameters.lightbox_overlay_width : lightbox_overlay_width;
			lightbox_transition_speed = (parameters.lightbox_transition_speed != null) ? parameters.lightbox_transition_speed : lightbox_transition_speed;
		}

		var parent = this;

		var cells = this.find('.mosaic-inner-cell');

		for (var i = 0; i < cells.length; i++) {
			var cell = cells[i];
			var imageObj = $(cell).find(image);

			if (imageObj.length == 0)
				imageObj = $('<img alt="" src="' + error_image + '" class="' + image.substr(1) + '">').appendTo($(cell));

			/* Create image wrapper */
			imageObj.wrap('<div class="mosaic-gallery-image-wrapper"/>');

			/* Create overlay */
			var overlayObj = $('<div class="mosaic-gallery-overlay mosaic-gallery-overlay-' + overlay_style + '"></div>').appendTo($(cell));

			/* Create overlay title */
			overlayObj.append('<div class="mosaic-gallery-overlay-otitle">' + (($(cell).find(title).length == 0) ? '' : ((overlay_title && (overlay_style == 'top' || overlay_style == 'bottom')) ? $(cell).find(title).html() : '')) + '</div>');
			overlayObj.find('.mosaic-gallery-overlay-otitle').css((overlay_style == 'top') ? 'bottom' : 'top', 0);

			/* Create title, content, scrollbar */
			overlayObj.append('<div class="mosaic-gallery-overlay-contentwrapper"><div class="mosaic-gallery-overlay-content">' + ((overlay_style == 'top') ? '<div class="mosaic-gallery-overlay-desc mosaic-gallery-overlay-desc-top">' + (($(cell).find(desc).length == 0) ? '' : $(cell).find(desc).html()) + '</div>' : '') + '<div class="mosaic-gallery-overlay-title"><a class="mosaic-gallery-overlay-title-link" href="' + $(cell).find(url).attr('href') + '">' + (($(cell).find(title).length == 0) ? '' : $(cell).find(title).html()) + '</a></div>' + ((overlay_style == 'top') ? '' : '<div class="mosaic-gallery-overlay-desc">' + (($(cell).find(desc).length == 0) ? '' : $(cell).find(desc).html()) + '</div>') + '</div><div class="mosaic-gallery-overlay-scrollbar"></div></div>');
			if ($(cell).find(title + ',' + desc).length == 0) overlayObj.hide();
			$(cell).find(title + ',' + desc).remove();
			overlayObj.find('.mosaic-gallery-overlay-contentwrapper, .mosaic-gallery-overlay-scrollbar').css({
				'opacity': 0
			});

			/* Create image click handler */
			if ($(cell).find(url).length > 0) {
				imageObj.get(0).destination = $(cell).find(url).attr('href');
				$(cell).find(url).hide();
				if (on_click == 'url') {
					imageObj.css('cursor', 'pointer').click(function (e) {
						switch (e.which) {
							case 1:
								window.open(this.destination, '_self');
								break;
							case 2:
								window.open(this.destination, '_blank');
								break;
							case 3:
							default:
								break;
						}
					});
				}
			}

			/* Set image loading animation */
			overlayObj.addClass('mosaic-gallery-overlay-hidden');
			imageObj.hide().load(function () {
				$(this).fadeIn(function () {
					var overlayObj = $(this).parent().parent().find('.mosaic-gallery-overlay');
					if (overlay_style == 'full') {
						$(this).parent().parent().mouseenter(function () {
							show_overlay(overlayObj);
						});
					} else {
						if (popup_overlay) {
							overlayObj.switchClass('mosaic-gallery-overlay-hidden', 'mosaic-gallery-overlay-pressed');
							overlayObj.mouseenter(function () {
								show_overlay(overlayObj);
							});
						} else {
							show_overlay(overlayObj);
						}
					}
					if (popup_overlay) overlayObj.mouseleave(function () {
						hide_overlay(overlayObj);
					});
				});
			});
		}

		function set_image_dimensions() {
			var imageObj = $(this).removeAttr('width height').css({
				'width': '',
				'height': ''
			}),
				imageWidth = imageObj.width(),
				imageHeight = imageObj.height(),
				imageResolution = imageWidth / imageHeight,
				cellWidth = $(this).parent().parent().width(),
				cellHeight = $(this).parent().parent().height(),
				cellResolution = cellWidth / cellHeight;

			if (scale_image) {
				if (imageResolution > cellResolution) {
					imageObj.height(cellHeight).width(Math.ceil(cellHeight * imageResolution));
				} else {
					imageObj.width(cellWidth).height(Math.ceil(cellWidth / imageResolution));
				}
			}

			/* Center image */
			imageObj.css('margin-left', -(imageObj.width() - cellWidth) / 2);
			imageObj.css('margin-top', -(imageObj.height() - cellHeight) / 2);
		}

		function set_image_error() {
			$(this).removeAttr('width height').css({
				'width': '',
				'height': ''
			}).attr('src', error_image);
			if ($(this).parent().parent().find(image_hd).length == 0) $(this).parent().parent().append('<a class="' + image_hd.substr(1) + '" href="' + error_image_hd + '"></a>');
		}

		function set_layout() {
			for (var i = 0; i < cells.length; i++) {
				var cell = cells[i];
				var imageObj = $(cell).find(image).removeAttr('width height').load(set_image_dimensions).error(set_image_error),
					cellWidth = $(cell).width(),
					cellHeight = $(cell).height(),
					cellResolution = cellWidth / cellHeight;

				imageObj.each(set_image_dimensions);

				/* Reset overlay position */
				var overlayObj = $(cell).find('.mosaic-gallery-overlay');
				var overlayBarHeight = overlayObj.find('.mosaic-gallery-overlay-otitle').outerHeight(true);
				switch (overlay_style) {
					case 'top':
						overlayObj.css({
							'top': overlayBarHeight - overlayObj.height()
						});
						break;
					case 'bottom':
						overlayObj.css({
							'bottom': overlayBarHeight - overlayObj.height()
						});
						break;
					case 'left':
						overlayObj.css({
							'left': 50 - overlayObj.width()
						});
						break;
					case 'right':
						overlayObj.css({
							'right': 50 - overlayObj.width()
						});
						break;
				}

				/* Set overlay scroll mode */
				var contentwrapperObj = overlayObj.find('.mosaic-gallery-overlay-contentwrapper'),
					scrollbarObj = overlayObj.find('.mosaic-gallery-overlay-scrollbar').css('height', ''),
					contentHeight = contentwrapperObj.find('.mosaic-gallery-overlay-content').outerHeight(true);
				if (cellHeight < contentHeight) {

					/* Set scrollbar height */
					scrollbarObj.height(cellHeight * cellHeight / contentHeight);

					/* Set scrollbar animations */
					contentwrapperObj.scroll(function () {
						var cell = $(this).parent().parent();
						var scrollbarObj = $(this).find('.mosaic-gallery-overlay-scrollbar');
						scrollbarObj.css({
							'top': (cell.height() - scrollbarObj.height()) / ($(this).find('.mosaic-gallery-overlay-content').height() - cell.height()) * $(this).scrollTop()
						});
					});
					/* Set content box styles */
					contentwrapperObj.css('max-height', overlayObj.height());
				}
			}
		}

		/* Set overlay popup animations */
		function hide_overlay(overlayObj) {
			overlayObj.find('.mosaic-gallery-overlay-contentwrapper, .mosaic-gallery-overlay-scrollbar').stop(true).animate({
				opacity: 0
			}, overlay_animation_speed);
			overlayObj.find('.mosaic-gallery-overlay-otitle').stop(true).show().animate({
				opacity: 1
			}, overlay_animation_speed);
			var overlayBarHeight = overlayObj.find('.mosaic-gallery-overlay-otitle').outerHeight(true);
			overlayObj.stop(true).css('opacity', '');
			switch (overlay_style) {
				case 'top':
					overlayObj.animate({
						top: overlayBarHeight - overlayObj.height()
					}, overlay_animation_speed);
					break;
				case 'bottom':
					overlayObj.animate({
						bottom: overlayBarHeight - overlayObj.height()
					}, overlay_animation_speed);
					break;
				case 'left':
					overlayObj.animate({
						left: 50 - overlayObj.width()
					}, overlay_animation_speed);
					break;
				case 'right':
					overlayObj.animate({
						right: 50 - overlayObj.width()
					}, overlay_animation_speed);
					break;
				case 'full':
					overlayObj.animate({
						opacity: 0
					}, overlay_animation_speed);
					break;
			}
			overlayObj.switchClass('mosaic-gallery-overlay-popped', 'mosaic-gallery-overlay-pressed', overlay_animation_speed);
		}

		function show_overlay(overlayObj) {
			overlayObj.find('.mosaic-gallery-overlay-contentwrapper, .mosaic-gallery-overlay-scrollbar').stop(true).animate({
				opacity: 1
			}, overlay_animation_speed);
			overlayObj.find('.mosaic-gallery-overlay-otitle').stop(true).animate({
				opacity: 0
			}, overlay_animation_speed, function () {
				$(this).hide();
			});
			overlayObj.stop(true).css('opacity', '').switchClass('mosaic-gallery-overlay-pressed', 'mosaic-gallery-overlay-popped', overlay_animation_speed);
			switch (overlay_style) {
				case 'top':
					overlayObj.animate({
						top: 0
					}, overlay_animation_speed);
					break;
				case 'bottom':
					overlayObj.animate({
						bottom: 0
					}, overlay_animation_speed);
					break;
				case 'left':
					overlayObj.animate({
						left: 0
					}, overlay_animation_speed);
					break;
				case 'right':
					overlayObj.animate({
						right: 0
					}, overlay_animation_speed);
					break;
				case 'full':
					break;
			}
		}

		/* Set up gallery events */
		parent.get(0).mosaic_layout_function_array.push(set_layout);

		/* Set up lightbox */
		var lightbox_wrapper = $('<div class="mosaic-gallery-lightbox-wrapper"></div>').appendTo('body');

		/* Set up backdrop */
		var lightbox_backdrop = $('<div class="mosaic-gallery-lightbox-backdrop"></div>').appendTo(lightbox_wrapper);

		/* Set up content wrapper */
		var lightbox_contentwrapper = $('<div class="mosaic-gallery-lightbox-contentwrapper"></div>').appendTo(lightbox_wrapper);

		/* Set up lightbox image */
		var lightbox_imagewrapper = $('<div class="mosaic-gallery-lightbox-imagewrapper mosaic-gallery-lightbox-imagewrapper-' + lightbox_overlay_style + '"></div>').appendTo(lightbox_contentwrapper);
		var lightbox_image = $('<img class="mosaic-gallery-lightbox-image" src="' + blank_image + '" alt="">').appendTo(lightbox_imagewrapper).css('opacity', 0);

		/* Set up lightbox content */
		var lightbox_content = $('<div class="mosaic-gallery-lightbox-content mosaic-gallery-lightbox-content-' + lightbox_overlay_style + '"></div>').prependTo(lightbox_contentwrapper);
		lightbox_content.append('<div class="mosaic-gallery-lightbox-content-innerwrapper"><div class="mosaic-gallery-lightbox-content-title"></div><div class="mosaic-gallery-lightbox-content-desc"></div></div>');
		var lightbox_content_innerwrapper = lightbox_content.find('.mosaic-gallery-lightbox-content-innerwrapper');
		var lightbox_title = lightbox_content.find('.mosaic-gallery-lightbox-content-title');
		var lightbox_desc = lightbox_content.find('.mosaic-gallery-lightbox-content-desc');

		var margin_factor = 0.9;

		var lightbox_overlay_width = 300;
		if (!lightbox_overlay) {
			lightbox_overlay_width = 0;
			lightbox_content.hide();
		}
		var overlay_current_width = 0;

		/* Set up close button */
		var lightbox_close_button = $('<div class="mosaic-gallery-lightbox-close"></div>').appendTo(lightbox_contentwrapper).click(function () {
			lightbox_close();
		});

		/* Set up navigation */
		var lightbox_button_p = $('<div class="mosaic-gallery-lightbox-button mosaic-gallery-lightbox-button-p"></div>').appendTo(lightbox_wrapper).click(function () {
			lightbox_setImage(get_prev_imageID(lightbox_image.get(0).imageID));
		});
		var lightbox_button_n = $('<div class="mosaic-gallery-lightbox-button mosaic-gallery-lightbox-button-n"></div>').appendTo(lightbox_wrapper).click(function () {
			lightbox_setImage(get_next_imageID(lightbox_image.get(0).imageID));
		});

		/* Called when lightbox is opened */
		function lightbox_contentwrapper_reset() {
			lightbox_image.unbind('load').attr('src', blank_image).css({
				height: 225,
				width: 400
			});
			lightbox_contentwrapper.css({
				height: 225,
				width: 400
			}).css({
				left: ($(window).width() - lightbox_contentwrapper.width()) / 2,
				top: ($(window).height() - lightbox_contentwrapper.height()) / 2
			});
			lightbox_content.css('right', -lightbox_overlay_width);
		}

		/* Called to close the lightbox */
		function lightbox_close() {
			$(window).unbind('keydown');
			lightbox_image.unbind('mousewheel');
			lightbox_wrapper.fadeOut(lightbox_transition_speed);
			parent.get(0).mosaic_unpause();
		}

		/* Called on window resize and initial deployment */
		function set_lightbox_backdrop_layout() {
			lightbox_backdrop.width($(window).width()).height($(window).height());
			lightbox_wrapper.width($(window).width()).height($(window).height());
		}

		/* Called when a new lightbox_image is loaded */
		function set_lightbox_contentwrapper_layout() {
			lightbox_image.removeAttr('width height').css({
				height: '',
				width: ''
			});
			var imageResolution = lightbox_image.width() / lightbox_image.height();
			if (lightbox_image.height() > margin_factor * $(window).height()) {
				lightbox_image.height($(window).height() * margin_factor).width(lightbox_image.height() * imageResolution);
			}
			if (lightbox_image.width() + overlay_current_width > margin_factor * $(window).width()) {
				lightbox_image.width($(window).width() * margin_factor - overlay_current_width).height(lightbox_image.width() / imageResolution);
			}
			lightbox_contentwrapper.stop(true).animate({
				left: ($(window).width() - lightbox_image.width() - overlay_current_width) / 2,
				top: ($(window).height() - lightbox_image.height()) / 2,
				height: lightbox_image.height(),
				width: lightbox_image.width() + overlay_current_width
			}, lightbox_transition_speed, function () {
				lightbox_image.animate({
					opacity: 1
				}, 'fast');
				lightbox_content_innerwrapper.animate({
					opacity: 1
				}, 'fast');
			});
		}

		/* Called to set a new lightbox image */
		function lightbox_setImage(imageID) {
			lightbox_wrapper.stop(true).fadeIn(lightbox_transition_speed, function () {
				lightbox_image.get(0).imageID = imageID;
				lightbox_content_innerwrapper.animate({
					opacity: 0
				}, 'fast');
				lightbox_image.stop(true).animate({
					opacity: 0
				}, 'fast', function () {
					lightbox_imagewrapper.addClass('mosaic-gallery-lightbox-imagewrapper-loading');
					var cell = $(cells[this.imageID % cells.length]);
					var imageObj = cell.find(image);
					var imagehdObj = cell.find(image_hd);
					var titleObj = cell.find('.mosaic-gallery-overlay-title');
					var descObj = cell.find('.mosaic-gallery-overlay-desc');
					var href = cell.find(url).attr('href');

					if (titleObj.text() == '' && descObj.text() == '') {
						overlay_current_width = 0;
						lightbox_content.animate({
							right: -(lightbox_overlay_width)
						});
					} else {
						overlay_current_width = lightbox_overlay_width;
						lightbox_content.animate({
							right: 0
						});
						lightbox_title.html(titleObj.html());
						lightbox_desc.html(descObj.html());
					}
					lightbox_image.height(lightbox_image.height()).width(lightbox_image.width());
					lightbox_image.unbind('load').load(function () {
						lightbox_imagewrapper.removeClass('mosaic-gallery-lightbox-imagewrapper-loading');
						set_lightbox_contentwrapper_layout();
					});
					if (imagehdObj.length > 0 && imagehdObj.attr('href') != null) lightbox_image.attr('src', imagehdObj.attr('href'));
					else lightbox_image.attr('src', imageObj.attr('src'));
				});
			});
		}

		/* Function to get correct next imageID */
		function get_next_imageID(imageID) {
			var columns = parent.find('.mosaic-column').length
			var columnLengths = new Array();
			for (var i = 0; i < columns; i++) {
				columnLengths[i] = $(parent.find('.mosaic-column')[i]).find('.mosaic-inner-cell').length;
			}
			var columnID = 0;
			while (imageID >= columnLengths[columnID])
				imageID -= columnLengths[columnID++];
			var rowID = imageID;
			var nextColumnID = (columnID + 1) % columns;
			var nextRowID = rowID;
			if (columnID == columns - 1) nextRowID++;
			if (nextRowID >= columnLengths[nextColumnID]) {
				nextRowID = 0;
				nextColumnID = 0;
			}
			var nextID = nextRowID;
			for (var i = 0; i < nextColumnID; i++) {
				nextID += columnLengths[i];
			}
			return nextID;
		}

		/* Function to get correct previous imageID */
		function get_prev_imageID(imageID) {
			var columns = parent.find('.mosaic-column').length
			var columnLengths = new Array();
			for (var i = 0; i < columns; i++) {
				columnLengths[i] = $(parent.find('.mosaic-column')[i]).find('.mosaic-inner-cell').length;
			}
			var columnID = 0;
			while (imageID >= columnLengths[columnID])
				imageID -= columnLengths[columnID++];
			var rowID = imageID;
			var nextColumnID = ((columnID - 1) % columns + columns) % columns;
			var nextRowID = rowID;
			if (columnID == 0) nextRowID--;
			if (nextRowID < 0) {
				var lastColumn = 0;
				for (var i = 0; i < columns; i++) {
					if (columnLengths[i] >= columnLengths[lastColumn])
						lastColumn = i;
				}
				nextColumnID = lastColumn;
				nextRowID = columnLengths[lastColumn] - 1;
			}
			var nextID = nextRowID;
			for (var i = 0; i < nextColumnID; i++) {
				nextID += columnLengths[i];
			}
			return nextID;
		}

		/* Set up lightbox events */
		if (on_click == 'lightbox') {
			for (var i = 0; i < cells.length; i++) {
				$(cells[i]).find(image).get(0).imageID = i;
				$(cells[i]).find(image).css('cursor', 'pointer').click(function () {
					lightbox_image.css('opacity', 0);
					lightbox_contentwrapper_reset();
					lightbox_setImage(this.imageID);
					lightbox_image.mousewheel(function (e, d) {
						e.preventDefault();
						if (d > 0) {
							lightbox_setImage(get_prev_imageID(this.imageID));
						}
						else {
							lightbox_setImage(get_next_imageID(this.imageID));
						}
					});

					parent.get(0).mosaic_pause();
					$(window).keydown(function (e) {
						if (e.which == 27) {
							lightbox_close();
						} else if (e.which == 39) {
							lightbox_setImage(get_next_imageID(lightbox_image.get(0).imageID));
						} else if (e.which == 37) {
							lightbox_setImage(get_prev_imageID(lightbox_image.get(0).imageID));
						}

					});
				});
			}
		}



		lightbox_content.width(lightbox_overlay_width);

		lightbox_backdrop.click(function () {
			lightbox_close();
		});

		lightbox_image.click(function () {
			lightbox_setImage(get_next_imageID(this.imageID));
		});

		lightbox_image.error(function () {
			lightbox_wrapper.stop(true).fadeIn(function () {
				lightbox_image.attr('src', error_image_hd);
			});
		});


		lightbox_contentwrapper_reset();

		lightbox_wrapper.hide();

		parent.get(0).mosaic_layout_function_array.push(set_lightbox_contentwrapper_layout);

		parent.get(0).mosaic_layout_function_array.push(set_lightbox_backdrop_layout);

		return this;
	};
})(jQuery);