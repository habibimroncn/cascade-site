<div class="node <?php print $classes; ?>" id="node-<?php print $node->nid; ?>">
    <?php if (!$page): ?>
      <h2 class="title"><a href="<?php print $node_url; ?>"><?php print $title; ?></a></h2>
    <?php endif; ?>
    <div class="content">
			<?php print $content; ?>      
    </div>
</div>