<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php print $language->language ?>" lang="<?php print $language->language ?>" dir="<?php print $language->dir ?>">
  <head>
    <title><?php print $head_title; ?></title>
		<meta name="viewport" content="width=1200"/>
    <?php print $head; ?>
    <?php print $styles; ?>
    <!--[if IE]><style type="text/css" media="all">@import "<?php print $base_path . path_to_theme() ?>/css/ie7.css"</style><![endif]-->
    <?php print $scripts; ?>
		<!-- Site by Gravit Digital -->
  </head>
  <body class="<?php print $body_classes; ?>" onload="window.print();">
		<?php if ($tabs): ?><div class="tabs"><?php print $tabs; ?></div><?php endif; ?>

		<div id="grade-guide">
			<a href="/products"><img id="logo" src="/sites/all/themes/cascadegroup/images/logo-black.png" alt="logo" width="129" height="72" /></a>		
			<h1 class="title"><?php print $title; ?></h1>	
  		<?php print $content; ?>
			<div class="logos">
				<div class="info">
					<img id="qr-print" src="/sites/all/themes/cascadegroup/images/cascade-qr-code.png" alt="cascadehardwood.com" width="75" height="75" />
					<p><strong>Contact our sales team for more information.</strong> <br/>800-228-3065 <br/> cascadehardwood.com</p>
				</div>
				<img id="fsc-print" class="logo" src="/sites/all/themes/cascadegroup/images/fsc_print.jpeg" alt="fsc" width="70" height="72" />
				<img id="nhla-print" class="logo" src="/sites/all/themes/cascadegroup/images/nhla-print.jpeg" alt="fsc" width="50" height="60" />
			</div>
		</div>    

    <?php print $closure; ?>
  </body>
</html>