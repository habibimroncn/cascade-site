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
  <body class="<?php print $body_classes; ?>">
    <div id="content" class="clearfix">
          <div id="content-area">
		        <?php if ($tabs): ?>
		          <div class="tabs"><?php print $tabs; ?></div>
		        <?php endif; ?>
	          <?php print $messages; ?>
	          <?php print $help; ?> 
	
           	<?php print $content; ?>
	          <?php if (!empty($secondary_links)): ?> 
								<div class="nav-wrap">
			          	<?php print theme('links', $secondary_links, array('id' => 'secondary', 'class' => 'links sub-menu')); ?>
			        	</div>
						<?php endif; ?>
          </div>
            <div id="content-bottom">
		          <?php if ($content_bottom): ?>
							<div class="wrap">
              	<?php print $content_bottom; ?>
							</div>
	          <?php endif; ?>
            </div>
            <div id="content-bottom-full-width">
            	<?php
            	if ($content_bottom_full_width) {
            		echo $content_bottom_full_width;
            	} ?>
            </div>
				</div>
      </div>
			<?php include 'header_footer.inc'; ?>
    <?php print $closure; ?>
  </body>
</html>