jQuery(document).ready(function($) {

	if ($('div.grade-selector-filters')[0]) {
		_initGradeSelector();
	} else {
		// badge hover
		$('a#badge').hover(
			function() {
				$(this).stop().animate({'top':-5}, 200);
			},
			function() {
				$(this).stop().animate({'top':-10}, 125);			
			}
		);			
	}
	
	if ($('body').hasClass('node-type-grade')) {
		_initGradePage();
	}


	if ($('ul#primary li.active')[0]) {
		if (!$.browser.msie) {	_initHeroNav();	}
	}


	// need to call persistently to work with tab switchers
	_buildProductContentTabs();
	//_zoom();
	_initVideos();		
	
		
});


function _initVideos() {
	$('a.video').click(function(e) {
		e.preventDefault();
		_addVideo($(this).attr('href'));
		return false;
	});
	
	/*
	$('div.video-clips').each(function() {
		var numRand = Math.floor(Math.random()*6)-3;
		$(this).css({
			'-webkit-backface-visibility':'hidden',
			'-ms-transform':'rotate('+numRand+'deg)',
			'-webkit-transform-style': 'preserve-3d', 
			'-webkit-transform': 'rotateZ('+numRand+'deg)'});
	});
	*/
	
	$('div.video-clips video').mediaelementplayer({
	    // initial volume when the player starts
	    startVolume: 0.8,
	    enableAutosize: true,
	    features: ['playpause','progress'],
			alwaysShowControls: false,
			pauseOtherPlayers: false,
			pluginPath: '/sites/all/themes/cascadegroup/player/'
	});
	
	$('div.video-clips .mejs-overlay-loading').hide();
	
}





function _initGradeSelector() {
	$('div.grade-selector-filters input[type=checkbox], div.grade-selector-filters input[type=radio]').click(_filterGrades);
	$('input.filter-reset').click(function() {
		$('.grade-selector-filters input:checked').attr('checked','');
		_filterGrades();
	});
	$('li.views-row').css('cursor','pointer').click(function() {
		window.location = $(this).find('a').attr('href');
		return false;
	});

	// setup collapsed filters in sidebar
	$('div.grade-selector-filters div.collapsible h4').each(function() {
		//prepend('<span style="font-size:80%">&#9658;</span> ')
		$(this).addClass('tipdown').next().hide().css('padding-left','20px');
		$(this).css('cursor','pointer').click(function() {
			$(this).toggleClass("tipdown-open").next().stop(true,true).slideToggle(250);
		});
		// check for values and show if there is one checked
		var v = $(this).next().find('input:checked').val(); 
		if (v && v != 'All') {
			$(this).click();
		}
	});

	_filterGrades();
}




function _filterGrades() {
	var nodes = Drupal.settings.nodes;
	var node;
	
	// handle radio groups first
	var Species = $('input[name=Species]:checked').val();
	var Category = $('input[name=Category]:checked').val();
	
	// checkboxes and their values 
	// Note although "Rons_category" is a radio button, it has the option of multiple values
	var Rons_Category = _getCheckboxValues('Rons_Category');
	var Thickness = _getCheckboxValues('Thickness');
	var Length = _getCheckboxValues('Length');
	var Width = _getCheckboxValues('Width');
	var Defects = _getCheckboxValues('Defects');
	var Face = _getCheckboxValues('Cutting Face');
	
	// loop through and set a show variable on each JSON node object
	// start with True, then progressively set items to false and continue to the next node
	for (var i in nodes) {
		node = nodes[i].node;
		node.show = true;
		if (Species && Species != 'All') {
			if (node.Species !== Species) {
				node.show = false;
				continue;
			} 			
		}
		/*
		if (Category && Category != 'All') {
			if (node.Category !== Category) {
				node.show = false;
				continue;
			} 			
		}
		*/
		if (Rons_Category && Rons_Category != 'All') {
			if (!_checkForFilterValue(node.Rons_Category, Rons_Category)) {
				node.show = false;
				continue;
			} 			
		}
		
		
		if (Width.length) {
			if (!_checkForFilterValue(node.Width, Width)) {
				node.show = false;
				continue;
			}
		}

		if (Defects.length) {
			if (!_checkForFilterValue(node['Possible Defects'], Defects)) {
				node.show = false;
				continue;
			}
		}

		if (Face.length && Face != 'All') {
				if (!_checkForFilterValue(node['Cutting Face'], Face)) {
				node.show = false;
				continue;
			}
		}
	
		// Now handle Thickness and Length Pairings
		// Edge case, only one selected
		if (Thickness.length || Length.length) {
			if (Thickness.length && !Length.length) {
				// check thickness only
				if (!_checkForFilterValue(node.Matrix, Thickness)) {
					node.show = false;
					continue;
				}
				
			} else if (Length.length && !Thickness.length) {
				if (!_checkForLengths(node.Matrix, Length)) {
					node.show = false;
					continue;
				}

			} else {
				// handle combination
				// start with thickness, and loop through to check each length is in each thickness
				for (var t in Thickness) {
					if (!_checkForFilterValue(node.Matrix[Thickness[t]], Length)) {
						node.show = false;
						continue;
					}
				}				
			}
			
		}
		
	}
	
	
	// loop through Nodes JSON object and set item to show or hide
	var $tiles = $('div.view-grade-selector li.views-row');	
	
	for (var n in nodes) {
		node = nodes[n].node;
		var p = unescape(node.Path);
		// todo replace with ID selector, right now, rely on linking the Path/URL
		var $tile = $tiles.find('a[href='+p+']').parents('li.views-row');
		
		if (node.show == true) {
			$tile.addClass('show').stop(true,true).show(333);			
		} else {
			$tile.removeClass('show').stop(true,true).hide(250);			
		}
	}

	// check for h2s that have no results
	$('div.species-group').each(function() {
		var $li = $(this).find('li.show');
		if ($li[0]) {
			$(this).find('h2').stop(true,true).show(333);
		} else {
			$(this).find('h2').stop(true,true).hide(250);
		}
		
	});	

	_countTiles();
}

// count the tiles, if no tiles show no product div
function _countTiles() {
	if ($('li.show').length == 0) {
		$('div.nothing').show(333);
	} else {
		$('div.nothing').hide(250);
	}
}


function _getCheckboxValues(name) {
	var vals = [];
	$('input[name='+name+']:checked').each(
		function() {
			vals.push($(this).val());
		}
	);
	return vals;
}


function _checkForFilterValue(obj, arr) {
	if (obj === undefined) {
		return false;
	}
	else if (typeof obj == 'string') {
		for (var i in arr) {
			if (arr[i] !== obj) {
				return false;
			}
		}
	} 
	else {
		for (var o in arr) {
			if (!_objectContains(obj, arr[o])) {
				return false;
			}
		}
	}	
	return true;
}



function _objectContains(obj, val) {
    for (var i in obj) {
       if (obj[i] == val || i == val) {
           return true;
       }
    }
    return false;
}


// NEED TO RETURN TRUE INSTEAD OF FALSE HERE, since this is only a "one off" filter
function _checkForLengths(matrix, lengths) {
	// check for an existence of each length. If the length does not exist in any width, return false
	var len;
	
	for (var l in lengths) {
		len = lengths[l];
		var lenpresent = false;

		// check all thickness for existence of this length
		for (var i in matrix) {			
			if (matrix[i][len]) {
				lenpresent = true;				
			}
		}
		
		if (!lenpresent) {
			return false;
		}
	}
	return true;		
}



function _initGradePage() {
	$('div.node div.content div.info').each(function() {
		var t = $(this);
		$(this).hide().prev().addClass('tipdown').click(function() {
			$(this).toggleClass('tipdown-open');
			t.stop(true,true).slideToggle(333);
			/*
			if ($(this).hasClass('tipdown-open')) {				
				$(this).removeClass('tipdown-open');
				t.stop(true,true).slideUp(333);
			} else {
				$(this).addClass('tipdown-open');
				t.stop(true,true).slideDown(333);				
			}
			*/
		});
	});
	
	$('div.photo a').click(function() {
		return false;
	});
	
	// view controls for grade page
	$('div#front a').click(function() {
	
		$('div#front a').addClass('selected');
		$('div#back a').removeClass('selected');
		$('div#cuts a').removeClass('selected');
		
		$('div.photo-front').removeClass('hide');
		$('div.photo-back').addClass('hide');
		$('div.photo-cuts').addClass('hide');	
			
		return false;
	});
	
	$('div#back a').click(function() {
		$('div#back a').addClass('selected');
		$('div#front a').removeClass('selected');
		$('div#cuts a').removeClass('selected');
		
		$('div.photo-front').addClass('hide');
		$('div.photo-back').removeClass('hide');
		$('div.photo-cuts').addClass('hide');
			
		return false;
	});
	
	$('div#cuts a').click(function() {
	
		$('div#cuts a').toggleClass('selected');
		$('div#front a').addClass('selected');
		$('div#back a').removeClass('selected');
		
		$('div.photo-cuts').toggleClass('hide');
		$('div.photo-front').addClass('hide');
		$('div.photo-back').addClass('hide');
		
		if ($("div.photo-cuts").hasClass('hide')) {
			$("div.photo-front").removeClass('hide');
		}
		
		return false;
	});
	
	// make control panel follow scroll
	
	$('div.view-controls').scrollFollow();

}


function _initHeroNav() {
	if ($('div#content a.hero-prev')[0]) {
		return;
	}
	$('div#content').append('<a href="#" class="hero-prev">◀</a><a href="#" class="hero-next">▶</a>');
	$('div#content a.hero-prev').click(_prevHero);
	$('div#content a.hero-next').click(_nextHero);
}

function _nextHero() {
	$li = $('ul#primary li.active').next();
	if (!$li[0]) {
		$li = $('ul#primary li:first-child');
	}
	_animateHero($li.find('a').attr('href'), 1);
	return false;
}

function _prevHero() {
	$li = $('ul#primary li.active').prev();
	if (!$li[0]) {
		$li = $('ul#primary li:last-child');
	}
	_animateHero($li.find('a').attr('href'), 0);
	return false;
}

// array of background colors
var bg = new Array('#CF6300','#AB3600','#956900','#726653','#739600','#53799A');


function _animateHero(url, dir) {
	player = null;
	
	//window.location = url;
	var	sl = '-98%';
	var el = '99.5%';
	
	var $li = $('ul#primary li');
	var index = $li.index($li.filter('.active'));
	var nextIndex = index-1;
	if (nextIndex == -1) {nextIndex = $li.length-1;}
	
	if (dir == 1) {
		nextIndex = index+1;
		if (nextIndex == $li.length) {
			nextIndex = 0;
		}
		sl = '98%';
		el = '-99.5%';
	} 

	var bg1 = bg[index];
	var bg2 = bg[nextIndex];
		
	$('div.node div.content').stop(true,true).hide();
	$('div#content-bottom, div#footer').hide();
	
	// lock y position of subnav
	var $subnav = $('div.nav-wrap').hide();
	/*
	if ($subnav[0]) {
		$subnav.css('top',$subnav.position().top);		
	}
	*/

	
	$.ajax({
	  url: url,
	  success: function(data) {
			data = data.replace('<body', '<div id="body"');
			data = data.replace('</body>', '</div>');
			$data = $("<div>").html(data);//.find('div#body');

			// change body classes and header
			var classes = $data.find('div#body').attr('class');
			$('body').attr('class', classes);

			$('div#header ul#primary').html($data.find('div#header ul#primary').html());
			$('div#content-bottom').html($data.find('div#content-bottom').html());
			$('div#header').css('background-color',bg1).stop(true,true).animate({'backgroundColor':bg2}, 500);			

			// animate out old div
			$('div#content').height($('div#content').height());
			$('div#content').find('#content-area:first-child').css({'position':'absolute','width':'100%'}).stop(true,true).animate({'left':el}, 665, function() {
				$(this).remove();
			});

			//flag new div			
			$('div#content').prepend($data.find('div#content-area'));
			$newDiv = $('div#content div#content-area:first-child').css({'position':'absolute','width':'100%','left':sl,'z-index':1});
			$('div.nav-wrap', $newDiv).hide();
			$('div.product-tabs').hide();
			$newDiv.find('div.content').stop(true,true).hide(0);
			$newDiv.find('div.field-field-intro').stop(true,true).hide(0);
			$newDiv.find('div.field-field-intro-side').stop(true,true).hide(0);
			
			$newDiv.stop(true,true).animate({'left':'0%'}, 665, function() {
				$('div#content').height('auto');
				$(this).css('position','relative');
				$newDiv.find('div.field-field-intro').stop(true,true).slideDown(333, function() {
					$('div.nav-wrap').stop(true,true).fadeIn(333);
					_buildProductContentTabs();
					_initVideos();		
										
					$newDiv.find('div.content').stop(true,true).fadeIn(333);
					$('div#content-bottom, div#footer').show();
					Drupal.behaviors.spamspan('div#content-bottom');
					$newDiv.find('div.field-field-intro-side').stop(true,true).fadeIn(333);
										
				});
				
				// todo update url
				// window.history.pushState('', '', url);
			});

	  }
	});
}

function _buildProductContentTabs() {
	var $content = $('div#node-93 div.content');
	$menu = $('<div class="product-tabs"><div class="wrap"><ul></ul></div></div>').insertBefore($('div#node-93'));

	var $link;
	var $label;
	var l = '';
	var $newcontent = $('<div class="tabbed-content"></div>');
	
	// assuming body is the first field here.
	$('div#node-93 div.content h2').each(function() {
		
		$link = $('<li><a href="#">'+$(this).text()+'</a></li>');		
		var $div = $('<div class="tab clearfix"></div>');

		// loop through siblings and add content until we hit an h2
		$(this).nextAll().each(function() {
			if ($(this).tagName == 'h2') return;
			$div.append($(this));
		});
		$newcontent.append($div);

		// remove h2 from text
		$(this).remove();

		// add tab link and setup click action
		$menu.find('ul').append($link);
		$link.click(function() { 
			var index = $(this).parent().find('li').index($(this));
			$(this).addClass('active');
			_showProductContentIndex(index); 
			return false;
		});
	});
	
	$('div#node-93 div.content').html($newcontent);
	_showProductContentIndex(0, false);	
}


function _showProductContentIndex(i, fade) {
	$('div#node-93 div.tabbed-content div.tab:eq(0), div.node-type-page div.tabbed-content div.tab:eq(1)').hide();
	if (fade == false) {
		$('div#node-93 div.tabbed-content div.tab:eq('+i+')').stop().show(0); 
	} else {
		$('div#node-93 div.tabbed-content div.tab:eq('+i+')').stop().fadeIn(500, function() {
		}); 		
	}
	
	//show().fadeTo(0, 0.01).stop(true,true).fadeTo(500,1);
	$('div.product-tabs li').removeClass('active');
	$('div.product-tabs li:eq('+i+')').addClass('active');
	//Cufon.refresh();
}

function _zoom() {
	 var options = {  
            zoomType: 'innerzoom',  
            lens:true,  
            preloadImages: true,  
            alwaysOn:false,  
            zoomWidth: 250,  
            zoomHeight: 250,  
            xOffset:90,  
            yOffset:30,  
            position:'left'  
            //...MORE OPTIONS  
    };  
    $('a.imagecache-imagelink').jqzoom(options);  
}


var player;
var $headline;

function _addVideo(url) {
		if (player) {
			$('div#video div.wrap').slideDown(500, function() {
				player.play();
			});
			return;
		}
		
		$('div#video').css('display','block').find('video').attr('src',url).attr('autoplay', 'autoplay');

		player = new MediaElementPlayer('div#video video', {
			defaultVideoWidth:864,
			defaultVideoHeight:400, 
			alwaysShowControls: true,
			pauseOtherPlayers: true,
			pluginPath: '/sites/all/themes/cascadegroup/player/', features: ['playpause', 'progress', 'current', 'duration', 'volume'],
		success: function (mediaElement, domObject) { 
	        	// add event listener
						$headline = $('div.field-field-headline h1');
						//$headline.text(_getHeadlineString(0));
						
	        	mediaElement.addEventListener('ended', _completeCallback, false);
						//mediaElement.addEventListener('timeupdate', _timeUpdate, false);
						//$('div#video div.wrap').hide().css('visibility','visible').slideDown(333);
						$('div#video div.wrap').slideDown(500);
				}
		});
		
		player.play();			
}

function _completeCallback(e) {
	$('div#video div.wrap').slideUp(500, function() {
		$headline.text('From logs to lumber.');		
	});
	
}

function _timeUpdate(e) {
	$headline.text(_getHeadlineString(e.target.currentTime));
}

function _getHeadlineString(t) {
	if (t>300) {
		
	}	
	else if (t > 87) {
		return "100 Million Board Feet.";
	} 
	else if (t > 86.5) {
		return "100 Million Board";
	} 
	else if (t > 86) {
		return "100 Million";
	} 
	else if (t > 85.5) {
		return "100";
	} 
	else if (t > 35) {
		return "Human care";
	} 
	else if (t > 28) {
		return "150 truckloads per day.";
	} 
	else if (t > 27.5) {
		return "150 truckloads per";
	} 
	else if (t > 27) {
		return "150 truckloads";
	} 
	else if (t > 26.5) {
		return "150";
	} 
	else if (t > 14) {
		return "Logs are the foundation.";
	} 
	else if (t > 11) {
		return '...And hold on for the ride.';		
	} else if (t>0.01) {
		return 'Put on your seatbelt...';		
	}
	return 'From logs to lumber.';
}