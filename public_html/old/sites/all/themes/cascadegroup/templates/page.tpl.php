<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php print $language->language ?>" lang="<?php print $language->language ?>" dir="<?php print $language->dir ?>">
  <head>
    <title><?php print $head_title; ?></title>
		<meta name="viewport" content="width=1200"/>
    <?php print $head; ?>
    <?php print $styles; ?>
    <!--[lt IE 9]><style type="text/css" media="all">@import "<?php print $base_path . path_to_theme() ?>/css/ie7.css"</style><![endif]-->
    <?php print $scripts; ?>
		<!-- Site by Gravit Digital -->
  </head>
  <body class="<?php print $body_classes; ?>">
    <div id="content" class="clearfix">
          <div id="content-area">
							<div class="page-header">
								<div class="wrap">
					        <?php if ($tabs): ?>
					          <div class="tabs"><?php print $tabs; ?></div>
					        <?php endif; ?>
				          <?php print $messages; ?>
				          <?php print $help; ?> 
									<h1 class="title"><?php print $title; ?></h1>
								</div>
							</div>
						<div class="page-content">
							<div class="wrap clearfix">
            	<?php print $content; ?>
		          <?php if (!empty($secondary_links)): ?> 
									<div class="nav-wrap">
				          	<?php print theme('links', $secondary_links, array('id' => 'secondary', 'class' => 'links sub-menu')); ?>
				        	</div>
							<?php endif; ?>
							</div>
						</div>
          </div>
          <?php if ($content_bottom): ?>
            <div id="content-bottom">
							<div class="wrap">
              	<?php print $content_bottom; ?>
							</div>
            </div>
          <?php endif; ?>
				</div>
      </div>
			<?php include 'header_footer.inc'; ?>
    <?php print $closure; ?>
  </body>
</html>