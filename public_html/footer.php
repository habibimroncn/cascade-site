


<!-- footer -->
<div id="footer">
	<div class="wrap">
	<div id="footer-left">
	<ul>
		<li class="first">
			<a href="/lumber-sales">Lumber Sales</a>
		</li>
		<li class="">
			<a href="/products">Grade Selector</a>
		</li>
		<li>
			<a href="/log-procurement">Log Procurement</a>
		</li>
		<!-- <li>
			<a href="#">Pallet Stock</a>
		</li> -->
	</ul>
	<ul>
		<li class="first">
			<a href="/our-mills">Our Mills</a>
		</li>
		<li>
			<a href="/cascade-hardwood">Cascade Hardwood</a>
		</li>
		<li>
			<a href="/port-angeles-hardwood">Port Angeles Hardwood</a>
		</li>
	</ul>	
	<ul>
		<li class="first">
			<a href="/our-resources">Our Resources</a>
		</li>
		<li>
			<a href="/our-resources">Alder</a>
		</li>
		<li>
			<a href="/maple">Maple</a>
		</li>
		<li>
			<a href="/ash">Ash</a>
		</li>
	</ul>
	<ul>
		<li class="first">
			<a href="/contact-us">Contact Us</a>
		</li>
	</ul>
	</div>
	
	<div id="footer-right">
		<div id="questions">Question? Call <span>800-228-3065</span></div>
		<div id="made-in-the-usa"></div>
		<div id="footer-logos">
			<div id="footer-logo-cascade"></div>
			<div id="footer-logo-fsc"></div>
			<div id="footer-logo-nhla"></div>
		<div id="copyright">
			<span>&copy; Copyright 2011 Cascade Hardwood Group LLC. All rights reserved.</span>
		</div>
		</div>
		
	</div>
				
	</div>
	
</div>


    <script type="text/javascript">
<!--//--><![CDATA[//><!--
var _gaq = _gaq || [];_gaq.push(["_setAccount", "UA-37329135-1"]);_gaq.push(["_trackPageview"]);(function() {var ga = document.createElement("script");ga.type = "text/javascript";ga.async = true;ga.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(ga, s);})();
//--><!]]>
	jQuery(document).ready(function($) {
		// spam protection for email addresses using jQuery
		$('span.spamspan a').each(function() {
			var $email = $(this);
			var address = $email.text()
			.replace('@', ' [at] ')
			.replace('.', ' [dot] ');
			$email.html(''+ address +'');
		});
		// Change text color
		$('a[href^="mailto:"]').css('color','#000000');
});
</script>
  </body>
</html>