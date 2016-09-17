jQuery(document).ready(function($) {
	setTimeout(glossaryOnClick,3000);
	function glossaryOnClick() {
		$('a.glossaryTerm').click(function(){
			if ($('div#glossaryTip').css('display') == 'none') {
				console.log('glossary not active');
			} else {
				$('div#cover').css('display','block');
				$('body.section-products a#back').css('z-index','9');
				$('div.view-controls').css('z-index','10');
			}

			$('div#glossaryClose, div#glossaryContent').click(function(){
			  	$('div#cover').css('display','none');
			  	$('div.view-controls').css('z-index','999');
			});
		});
	}

	// insert html code on file 
	var html = '<div id="popup" class="modal-box">';
	    html += '<header><a href="#" class="js-modal-close close">×</a><h2 class="title-box">Want to know more?</h2></header>';
	    html += '<div class="modal-body">';
	    html += '<div class="contact-phone"><a href="tel:1-800-228-3065"><div class="icon-contact-phone"></div><label>Give us a ring:<br />800-228-3065</label></a></div><div class="contact-email"><a href="mailto:info@CHGsales.com"><div class="icon-contact-email"></div><label>Drop us an email</label></a></div><div class="visit-website"><a href="http://www.cascadehardwood.com" target="_system"><div class="icon-visit-website"></div><label>Visit our website</label></a></div>';
	    html += '</div></div>';
	    if (typeof WinJS !== "undefined") {
	    		$('div#content').append(window.toStaticHTML(html));
			} else {
			    $('div#content').append(html);
			}
	
	var overlay_glossary = '<div id="cover"></div>';
	if (typeof WinJS !== "undefined") {
    	$('div#content').append(window.toStaticHTML(overlay_glossary));
	} else {
	    $('div#content').append(overlay_glossary);
	}

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


	// header back button
	$('a#back').click(function(){
        parent.history.back();
        return false;
    });
	// Change url about contact us for all product page.
	if ($($('div#contact a').last()).length != 0) {
    	$($('div#contact a').last()).attr("href", "http://cascadehardwood.com/contact-us").attr('target','_blank');
	}
	// Change url cascadeharwood.com.
	if ($($('div#contact a').first()).length != 0) {
    	$($('div#contact a').first()).attr("href", "http://cascadehardwood.com").attr('target','_blank');
	}
	// Change url if WinJs loaded
	if (typeof WinJS !== "undefined") {
		if ($($('a.notes-header__link').first()).length != 0) {
    		$($('a.notes-header__link').first()).attr('target','_self');
		}
	} else {
		if ($($('a.notes-header__link').first()).length != 0) {
    		$($('a.notes-header__link').first()).attr('target','_blank');
		}
	}

	// if ($('div.homepage').length == 0  && $('div.glossary').length == 0) {
		// Change url homepage icon for all product page.
		if ($('a#logo').length != 0) {
	    	$('a#logo').attr("href", "#").attr('class','js-open-modal').attr('data-modal-id','popup');
		} 
	// }

	window.addEventListener('load', function () {    
    $(document).on('click', 'div#contact a[target="_blank"],a#logo[target="_blank"]', function (e) {
            e.preventDefault();
            var url = this.href;
            window.open(url,"_system");           
    });
    //}
	}, false);

	function add_emailto(){
		// Adding mailto
		if ($('div.side-cta p a').length != 0) {
	    	$('div.side-cta p a').attr("href", "mailto:info@chgsales.com");
		}
	}
	setTimeout(add_emailto, 3000);
    // Hide back button on index and show on sub page
	if ($('div.homepage').length > 0) {
		$('#back').css('display','none');
	};
	// End Hide back button on index and show on sub page

	// Hide Contact on glossary
	if ($('div.glossary').length > 0) {
		$('#logo').css('display','none');
	};

	var length_div = $('.species-group ul').length;
	for (var i = 0; i < length_div; i++) {
		var t = $($('.species-group ul')[i]).find('li.views-row.views-row-last.show').length;
		if (t !== 0) {
			// Adding margin on last tile
			$($("li.views-row.views-row-last.show")[i]).last().css('margin-bottom','50px');
		} else {
			$("li:last-child.views-row.views-row-first.show").css('margin-bottom','50px');
		};
	};
	function add_line() {
	    // Run line to bottom on product homepage
		var length_row_last  = $("li.views-row.views-row-last.show").last().position();
		var length_row_first = $("li.views-row.views-row-first.show").last().position();
		if(jQuery.type(length_row_last) !== 'undefined' && jQuery.type(length_row_first) !== 'undefined') {
			if (length_row_last.top > length_row_first.top ) {
				$("div#content-area div.page-content div.wrap.clearfix div.view div.attachment").css('min-height',length_row_last.top+150+'px');
			} else {
				$("div#content-area div.page-content div.wrap.clearfix div.view div.attachment").css('min-height',length_row_first.top+150+'px');
			};
		}
	}
    setTimeout(add_line, 3000);

	// Remove all category on page product
	$(".category").remove();

	if ($('body').hasClass('node-type-grade')) {
		_initGradePage();
	}


	/* hero nav
if ($('ul#primary li.active')[0]) {
		if (!$.browser.msie) {	_initHeroNav();	}
	}
*/

	/**** open/close grade details ****/

	$('div.node-type-grade').prepend('<div class="hider"></div>');
	$('div.view-grade-selector').prepend('<div class="hider"></div>');

	$('div.node-type-grade div.content').prepend('<div class="opener"></div>');
	$('div.attachment').prepend('<div class="opener-main"></div>');
	//$('div.node-type-grade div.content').append('<div class="opener"></div>');

	(function() {

		$('.opener-main').click(function() {
			toggleSidebar( $('.opener-main') );
		});
		$('.opener').click(function() {
			toggleSidebar( $( '.opener' ) );
		});

		closeMobileSidebar();
		$( window ).resize( closeMobileSidebar );

		function closeMobileSidebar() {
			if (document.documentElement.clientWidth < 900) {
				$( '.opener-main' ).parents( '.view' ).addClass( 'closed' );
				$( '.opener'      ).parents( '.node' ).addClass( 'closed' );
			}
		}
		function toggleSidebar( $button ) {
			$button.parents( '.view, .node' ).toggleClass( 'closed' );
		}

	})();


	// need to call persistently to work with tab switchers
	_buildProductContentTabs();
	//_zoom();

	//alder popup
	$('a#alder-popup-link').click(function() {
		$('div#alder-or-maple').fadeIn();
		return false;

	})

	$('div#alder-or-maple').click(function() {
		$(this).fadeOut();
	})

	$('body').click(function() {
		$('div#alder-or-maple').fadeOut();
	})

	$("p#talk-to-buyer").click(function() {
    	$('html, body').animate({
        	scrollTop: $("div#block-views-staff-block_2").offset().top
		}, 1500);
	})


	// create value array
	valueArray = [];

	// create messages

	v1 = 'We might not be the right fit, but we probably know someone who is, call anytime for references.'
	v2 = 'Your value may not be at its peak, but we are able to help you get there... shoot us a call.'
	v3 = 'Sounds like the start of something great, lets talk about your options.'
	v4 = 'You have a nice amount of value possibly, we would love to help you maximize your return.'
	v5 = 'Boy, that sounds like you are ready to make some money, lets talk.'
	v6 = 'College fund or new fishing boat? You have some great value here.'
	v7 = 'Hold the phones, I can be there tomorrow. You have prime value in your stand.'
	v8 = 'Wow! What kind of magic beans did you find? Double check your survey answers.'
	v9 = 'Bummer, you might need a truckload of manure to fix that soil problem... might want to check your survey answers.'

	// deactivate all buttons
	$('div.sec ul li').addClass('inactive');

	//
	$('div#sec-1 ul li a').click(function() {
		$(this).parent().siblings().addClass('inactive');
		$(this).parent().removeClass('inactive');

		// get values from ids
		var value = $(this).parent().attr('id');

		valueArray[ 0 ] = value;

		_checkArray(valueArray);

		return false;
	})

	$('div#sec-2 ul li a').click(function() {
		$(this).parent().siblings().addClass('inactive');
		$(this).parent().removeClass('inactive');

		// get values from ids
		var value = $(this).parent().attr('id');

		valueArray[ 1 ] = value;

		_checkArray(valueArray);

		return false;
	})

	$('div#sec-3 ul li a').click(function() {
		$(this).parent().siblings().addClass('inactive');
		$(this).parent().removeClass('inactive');

		// get values from ids
		var value = $(this).parent().attr('id');

		valueArray[ 2 ] = value;

		_checkArray(valueArray);

		return false;
	})

	// move log buyer guys above chainsaw/info
	$('div#block-views-staff-block_2').prependTo("#buyers-go-here");

	//add h3s to profiles

	//$('div#block-views-staff-block_2 div#node-53').prepend('<h3>Contact me if your trees are in this region:</h3>');
	//$('div#block-views-staff-block_2 div#node-51').prepend('<h3>Contact me if your trees are in this region:</h3>');


	//$('div#block-views-staff-block_2 div#node-98').prepend('<h3 class="border-white">Log buying staff</h3>');

	$('<div id="buyers-header"></div>').prependTo('#buyers-go-here');
	$('<h3>Contact the Log Buyer below that services your area:</h3>').prependTo('#buyers-header');
	$('<h2>Ready to talk?</h2>').prependTo('#buyers-header');


	// create cash money div
	cashMoney = $('<div id="cash-money"></div>');
	if (typeof WinJS !== "undefined") {
    	$('div#pro-side').append(window.toStaticHTML(cashMoney));
	} else {
	    $('div#pro-side').append(cashMoney);
	}
	
	// Desktop only
	(function() {
		if ( $( window ).width() < 900 ) {
			// Trigger zoom lense on touchscreen
		// $( "a img.imagecache" ).load(function() {
		// 	// Only enable zoom if the native image width is larger than the screen image width
		// 	var $screenImage = $( this );
		// 		$screenImage.mlens({
		// 			lensShape: "circle",
		// 			lensSize:["150px","150px"],
		// 			borderSize: 4,
		// 			borderColor: "#fff",
		// 			borderRadius: 0,
		// 			zoomLevel: 1,
		// 			responsive: true,
		// 		});

		// 	$screenImage.on("touchend", function(e){
		//        $('[id^=mlens_target]').css('display','block');
		// 	});
		// 	});

		
			
		}

		// Trigger zoom lense
		$( "a img.imagecache" ).load(function() {

			// Only enable zoom if the native image width is larger than the screen image width
			var $screenImage = $( this );
			var nativeImage  = new Image();
			nativeImage.src  = $screenImage.attr( "src" );
			if ( nativeImage.width < $screenImage.width() ) {
				return;
			}

			var state_active = false;

			$( '#zoomer' ).click(function() {
				if (state_active == false) {
					$screenImage.okzoom({
					width: 200,
					height: 200,
					border: "5px solid #fff",
					shadow: "0 0 5px #000"
				});
					return state_active = true;
				} else {
					$screenImage.okzoom().off();
					return state_active = false;
				}
				return false;
			});


			$(document).keyup(function(e) {
  					if (e.keyCode == 27) {
  						if (state_active == true) {
  							$screenImage.okzoom().off();
							return state_active = false;
  						} else {
  							console.log('Zoom have disabled');
  						}

  					} 
			});// disabled using esc

			// Run line to bottom on subpage
			var wood_length = $(".imagecache").height();
			$("div#content-area div.page-content div.wrap.clearfix div.node div.content").css('min-height',wood_length+'px');

		});


	})();

});

function _cashBar(e) {

switch(e) {
	case 'd1':
		$('div#value').animate({height: 238});
		$('div#cash-money').fadeOut();
		break;
	case 'd2':
		$('div#value').animate({height: 288});
		$('div#cash-money').fadeOut();
		break;
	case 'd3':
		$('div#value').animate({height: 368});
		$('div#cash-money').fadeOut();
		break;
	case 'd4':
		$('div#value').animate({height: 398});
		$('div#cash-money').fadeOut();
		break;
	case 'd5':
		$('div#value').animate({height: 458}, {
			complete: function(){ $('div#cash-money').fadeIn(); }
		});
		break;
	}

}

function _checkArray(e) {



if (e == "a1,b1,c1") {
		_changeMessage(v1);
		_cashBar('d1');
	} else if (e == "a1,b1,c2") {
		_changeMessage(v1);
		_cashBar('d1');
	} else if (e == "a1,b1,c3") {
		_changeMessage(v9);
		_cashBar('d1');
	} else if (e == "a1,b1,c3") {
		_changeMessage(v9);
		_cashBar('d1');
	} else if (e == "a1,b1,c4") {
		_changeMessage(v9);
		_cashBar('d1');
	} else if (e == "a1,b2,c1") {
		_changeMessage(v3);
		_cashBar('d2');
	} else if (e == "a1,b2,c3") {
		_changeMessage(v4);
		_cashBar('d2');
	} else if (e == "a1,b2,c4") {
		_changeMessage(v4);
		_cashBar('d2');
	} else if (e == "a1,b3,c1") {
		_changeMessage(v8);
		_cashBar('d2');
	} else if (e == "a1,b3,c1") {
		_changeMessage(v8);
		_cashBar('d2');
	} else if (e == "a1,b3,c2") {
		_changeMessage(v4);
		_cashBar('d2');
	} else if (e == "a1,b3,c3") {
		_changeMessage(v5);
		_cashBar('d2');
	} else if (e == "a1,b3,c4") {
		_changeMessage(v5);
		_cashBar('d2');
	} else if (e == "a1,b4,c1") {
		_changeMessage(v8);
		_cashBar('d2');
	} else if (e == "a1,b4,c2") {
		_changeMessage(v4);
		_cashBar('d2');
	} else if (e == "a1,b4,c3") {
		_changeMessage(v4);
		_cashBar('d2');
	} else if (e == "a1,b4,c4") {
		_changeMessage(v4);
		_cashBar('d2');
	} else if (e == "a2,b1,c1") {
		_changeMessage(v1);
		_cashBar('d1');
	} else if (e == "a2,b1,c2") {
		_changeMessage(v1);
		_cashBar('d1');
	} else if (e == "a2,b1,c3") {
		_changeMessage(v9);
		_cashBar('d2');
	} else if (e == "a2,b1,c4") {
		_changeMessage(v9);
		_cashBar('d2');
	} else if (e == "a2,b2,c1") {
		_changeMessage(v3);
		_cashBar('d2');
	} else if (e == "a2,b2,c2") {
		_changeMessage(v4);
		_cashBar('d2');
	} else if (e == "a2,b2,c3") {
		_changeMessage(v4);
		_cashBar('d2');
	} else if (e == "a2,b2,c4") {
		_changeMessage(v4);
		_cashBar('d2');
	} else if (e == "a2,b3,c1") {
		_changeMessage(v8);
		_cashBar('d1');
	} else if (e == "a2,b3,c2") {
		_changeMessage(v4);
		_cashBar('d3');
	} else if (e == "a2,b3,c3") {
		_changeMessage(v5);
		_cashBar('d3');
	} else if (e == "a2,b3,c4") {
		_changeMessage(v5);
		_cashBar('d3');
	} else if (e == "a2,b4,c1") {
		_changeMessage(v8);
		_cashBar('d1');
	} else if (e == "a2,b4,c2") {
		_changeMessage(v4);
		_cashBar('d3');
	} else if (e == "a2,b4,c3") {
		_changeMessage(v4);
		_cashBar('d3');
	} else if (e == "a2,b4,c4") {
		_changeMessage(v4);
		_cashBar('d3');
	} else if (e == "a3,b1,c1") {
		_changeMessage(v3);
		_cashBar('d1');
	} else if (e == "a3,b1,c2") {
		_changeMessage(v3);
		_cashBar('d1');
	} else if (e == "a3,b1,c3") {
		_changeMessage(v9);
		_cashBar('d1');
	} else if (e == "a3,b1,c4") {
		_changeMessage(v9);
		_cashBar('d1');
	} else if (e == "a3,b2,c1") {
		_changeMessage(v3);
		_cashBar('d2');
	} else if (e == "a3,b2,c2") {
		_changeMessage(v4);
		_cashBar('d2');
	} else if (e == "a3,b2,c3") {
		_changeMessage(v4);
		_cashBar('d2');
	} else if (e == "a3,b2,c4") {
		_changeMessage(v4);
		_cashBar('d2');
	} else if (e == "a3,b3,c1") {
		_changeMessage(v8);
		_cashBar('d1');
	} else if (e == "a3,b3,c2") {
		_changeMessage(v5);
		_cashBar('d4');
	} else if (e == "a3,b3,c3") {
		_changeMessage(v6);
		_cashBar('d4');
	} else if (e == "a3,b3,c4") {
		_changeMessage(v6);
		_cashBar('d4');
	} else if (e == "a3,b4,c1") {
		_changeMessage(v8);
		_cashBar('d1');
	} else if (e == "a3,b4,c2") {
		_changeMessage(v5);
		_cashBar('d4');
	} else if (e == "a3,b4,c3") {
		_changeMessage(v5);
		_cashBar('d4');
	} else if (e == "a3,b4,c4") {
		_changeMessage(v5);
		_cashBar('d4');
	} else if (e == "a4,b1,c1") {
		_changeMessage(v3);
		_cashBar('d2');
	} else if (e == "a4,b1,c2") {
		_changeMessage(v3);
		_cashBar('d2');
	} else if (e == "a4,b1,c3") {
		_changeMessage(v9);
		_cashBar('d2');
	} else if (e == "a2,b2,c2") {
		_changeMessage(v4);
		_cashBar('d2');
	} else if (e == "a4,b1,c4") {
		_changeMessage(v9);
		_cashBar('d1');
	} else if (e == "a4,b2,c1") {
		_changeMessage(v3);
		_cashBar('d4');
	} else if (e == "a4,b2,c2") {
		_changeMessage(v7);
		_cashBar('d4');
	} else if (e == "a4,b2,c3") {
		_changeMessage(v7);
		_cashBar('d4');
	} else if (e == "a4,b2,c4") {
		_changeMessage(v4);
		_cashBar('d4');
	} else if (e == "a4,b3,c1") {
		_changeMessage(v8);
		_cashBar('d1');
	} else if (e == "a4,b3,c2") {
		_changeMessage(v5);
		_cashBar('d5');
	} else if (e == "a4,b3,c3") {
		_changeMessage(v6);
		_cashBar('d5');
	} else if (e == "a4,b3,c4") {
		_changeMessage(v6);
		_cashBar('d5');
	} else if (e == "a4,b4,c1") {
		_changeMessage(v8);
		_cashBar('d1');
	} else if (e == "a4,b4,c2") {
		_changeMessage(v5);
		_cashBar('d5');
	} else if (e == "a4,b4,c3") {
		_changeMessage(v7);
		_cashBar('d5');
	} else if (e == "a4,b4,c4") {
		_changeMessage(v4);
		_cashBar('d5');
	} else {
		// nothing else
	}


}


function _changeMessage(e) {
		// change message
		$('p#value-message').fadeOut(300, function() {
        	$(this).text(e).fadeIn(300);
		});
}


function _initGradeSelector() {

	$('div.grade-selector-filters input[type="checkbox"], div.grade-selector-filters input[type="radio"]').click(_filterGrades);

	$('input.filter-reset').click(function() {
		$('.grade-selector-filters input:checked').removeAttr('checked');

		_filterGrades();
	});
	$('li.views-row').css('cursor','pointer').click(function() {
		window.location = $(this).find('a').attr('href');
		return false;
	});

	// setup collapsed filters in sidebar
	/*
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
*/

	_filterGrades();
}




function _filterGrades() {
	var nodes = Drupal.settings.nodes;
	var node;

	// handle radio groups first
	var Species = $('input[name="Species"]:checked').val();
	var Category = $('input[name="Category"]:checked').val();

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
		var $tile = $tiles.find('a[href="'+p+'"]').parents('li.views-row');

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
	$('input[name="'+name+'"]:checked').each(
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
   /*
 $('div.node div.content div.info').each(function () {
        var t = $(this);
        $(this).hide().prev().addClass('tipdown').click(function () {
            $(this).toggleClass('tipdown-open');
            t.stop(true, true).slideToggle(333);
        });
    });
*/

    if ($('div#cuts').length == 0) {
 		$('div.view-controls').addClass('no-cuts');
	}

    $('div.photo a').click(function () {
        return false;
    });
    $('div.photo-front div.field-items div.field-item.odd').addClass('pinch');
    $('div.photo-back div.field-items div.field-item.odd').addClass('pinch');
    $('div.photo-cuts div.field-items div.field-item.odd').addClass('pinch');
    $('meta[name=viewport]').remove();
    if (typeof WinJS !== "undefined") {
    	$('head').append( window.toStaticHTML('<meta name="viewport" content="user-scalable=no, initial-scale=1, minimum-scale=1, maximum-scale=3.0, width=device-width, height=device-height" />' ));
	    $( window.toStaticHTML('<script type="text/javascript" src="../js/hammer.min.js"></script>' )).appendTo( "body" );
	    $( window.toStaticHTML('<script type="text/javascript" src="../js/cascade-pinch.js"></script>' )).appendTo( "body" );
	} else {
	    $('head').append( '<meta name="viewport" content="user-scalable=no, initial-scale=1, minimum-scale=1, maximum-scale=3.0, width=device-width, height=device-height" />' );
	    $( '<script type="text/javascript" src="../js/hammer.min.js"></script>' ).appendTo( "body" );
	    $( '<script type="text/javascript" src="../js/cascade-pinch.js"></script>' ).appendTo( "body" );
	}
    
    // $( '<script type="text/javascript" src="../js/touch-emulator.js"></script>' ).appendTo( "body" );
    $('div#front a').click(function () {
    	console.log('front');
        $('div#front a').addClass('selected');
        $('div#back a').removeClass('selected');
        $('div#cuts a').removeClass('selected');
        $('div.photo-front').removeClass('hide');
        $('div.photo-back').addClass('hide');
        $('div.photo-cuts').addClass('hide');
        return false;
    });
    $('div#back a').click(function () {
    	console.log('back');
        $('div#back a').addClass('selected');
        $('div#front a').removeClass('selected');
        $('div#cuts a').removeClass('selected');
        $('div.photo-front').addClass('hide');
        $('div.photo-back').removeClass('hide');
        $('div.photo-cuts').addClass('hide');
        return false;
    });
    $('div#cuts a').click(function () {
    	console.log('cuts');
        $('div#cuts a').toggleClass('selected');
        $('div#front a').removeClass('selected');
        $('div#back a').removeClass('selected');
        $('div.photo-cuts').toggleClass('hide');
        $('div.photo-front').addClass('hide');
        $('div.photo-back').addClass('hide');
        if ($("div.photo-cuts").hasClass('hide')) {
            $("div.photo-front").removeClass('hide');
        }
        return false;
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
			if (typeof WinJS !== "undefined") {
	    	MSApp.execUnsafeLocalFunction(function() {
	    		$div.append($(this));
	    	});
			} else {
			    $div.append($(this));
			}
			
		});
		if (typeof WinJS !== "undefined") {
	    	MSApp.execUnsafeLocalFunction(function() {
	    		$newcontent.append($div);
	    	});
			} else {
			    $newcontent.append($div);
			}
		

		// remove h2 from text
		$(this).remove();

		// add tab link and setup click action
		if (typeof WinJS !== "undefined") {
	    	MSApp.execUnsafeLocalFunction(function() {
	    		$menu.find('ul').append($link);
	    	});
			} else {
			    $menu.find('ul').append($link);
			}
		
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


// Modal box script
	$(function(){

	var appendthis =  ("<div class='modal-overlay js-modal-close'></div>");

	  $('a[data-modal-id]').click(function(e) {
	  	$('body.section-products a#back').css('z-index','9');
	  	$('div.view-controls').css('z-index','10');
	    e.preventDefault();
		    if (typeof WinJS !== "undefined") {
	    		$("body").append(window.toStaticHTML(appendthis));
			} else {
			    $("body").append(appendthis);
			}
	    
	    $(".modal-overlay").fadeTo(500, 0.7);
	    //$(".js-modalbox").fadeIn(500);
	    var modalBox = $(this).attr('data-modal-id');
	    $('#'+modalBox).fadeIn($(this).data());
	  });  
	  
	  
	$(".js-modal-close, .modal-overlay").click(function() {
		$('div.view-controls').css('z-index','999');
	  $(".modal-box, .modal-overlay").fadeOut(500, function() {
	    $(".modal-overlay").remove();
	  });
	});
	 
	$(window).resize(function() {
	  $(".modal-box").css({
	    top: ($(window).height() - $(".modal-box").outerHeight()) / 2,
	    left: ($(window).width() - $(".modal-box").outerWidth()) / 2
	  });
	});
	 
	$(window).resize();
	 
	});
	// End Modal Box script
	window.addEventListener('load', function () {    
    $(document).on('click', 'a[target="_system"]', function (e) {
            e.preventDefault();
            var url = this.href;
            window.open(url,"_system");                    
    });
	}, false);
