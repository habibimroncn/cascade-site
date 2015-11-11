<div class="node <?php print $classes; ?>" id="node-<?php print $node->nid; ?>">
    <?php if (!$page): ?>
      <h2 class="title"><a href="<?php print $node_url; ?>"><?php print $title; ?></a></h2>
    <?php endif; ?>
		<div class="header">
			<div class="wrap">
				<?php #print $field_headline_top_rendered; ?>
				<?php print $field_headline_rendered; ?>
				<?php print $field_intro_rendered; ?>
				<?php print $field_intro_side_rendered; ?>
			</div>
		</div>
    <div class="content">
			<h2>Lumber Sales</h2>
			<?php print views_embed_view('staff', 'block_1'); ?>
			<h2>Log Buyers</h2>
			<?php print views_embed_view('staff', 'block_2'); ?>
			<?php print $node->content['body']['#value']; ?>
    </div>
</div>