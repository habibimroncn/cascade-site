
<div class="node <?php print $classes; ?>" id="node-<?php print $node->nid; ?>">
    <div class="content">
			<?php print $field_picture_rendered; ?>
	    <?php if (!$page): ?>
	      <h4 class="title"><?php print $title; ?></h4>
				<?php print $field_job_title_rendered; ?>
	    <?php endif; ?>
			<?php print $group_cascade_contact_rendered; ?>
			<?php print $group_pa_contact_rendered; ?>
    </div>
</div>