
<div class="node <?php print $classes; ?>" id="node-<?php print $node->nid; ?>">

	<?php #die(print_r($variables)); ?>

    <?php if (!$page): ?>
      <h2 class="title"><a href="<?php print $node_url; ?>"><?php print $title; ?></a></h2>
		<?php endif;?>

    <div class="content species-<?php print $node->field_species[0]['value']; ?>">
      <?php 
			global $user;
			if ($user->uid == 1) {
				#die(print_r($node));
			}
			
				echo $field_species_rendered;
				echo '<h2 class="title">' . $node->title . ' <span>Grade '.$node->field_species[0]['safe'].' Hardwood Lumber</span></h2>';
				echo '<div class="grade-meta"><div class="category">'.$field_rons_category_rendered;
				echo $field_cutting_face_rendered.'</div>';
				echo $field_grade_mark_rendered.'</div>';
				echo '<div class="node-body">'.$node->content['body']['#value'].'</div>';
				echo '<p><a class="button" href="/contact-us">Contact Sales For More Info</a></p>';
				echo '<div class="print-contact" style="display: none;"><h4>Contact Sales For More Info</h4><br/><strong>Phone:</strong> 800-228-3065 <br/> <strong>Email:</strong> info@CHGsales.com</div>';
				echo $field_cuttings_rendered;
				echo $field_defects_rendered;

			?>
			
			<h4>Widths, Lengths &amp; Cuttings</h4>
			<div class="info">
				<?php				
					echo $field_width_specs_rendered;
					echo $field_length_specs_rendered;
					echo $field_cutting_specs_rendered;
				?>
			</div>

			<h4>Grade Notes</h4>
			<div class="info info-notes">
				<?php
					echo $field_grade_notes_rendered;
				?>
			</div>

    </div>
		
		<div class="photo-box">
			<div class="view-controls">
				<div id="front">
					<a class="front selected" href="#">
						<span>front</span>
					</a>
				</div>
				<div id="back">
					<a class="back" href="#">
						<span>back</span>
					</a>
				</div>
				<?php if ($field_cut_marks_rendered): ?>
				<div id="cuts">
					<a href="#"><span>cuts</span></a>
				</div>
				<?php endif; ?>
				<div id="zoomer">
				</div>
			</div>
			
			<div class="photo photo-front embiggen ">
				<?php echo $field_front_picture_rendered; ?>
			</div>
			
			<div class="photo photo-back hide embiggen">
				<?php echo $field_back_picture_rendered; ?>
			</div>
			
			<?php if ($field_cut_marks_rendered): ?>
			<div class="photo photo-cuts hide">
				<?php echo $field_cut_marks_rendered; ?>
			</div>
			<?php endif; ?>
			
		</div>

</div> <!-- /node-->