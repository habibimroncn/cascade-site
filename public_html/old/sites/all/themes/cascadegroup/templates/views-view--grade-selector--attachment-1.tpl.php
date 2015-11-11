<div id="grade-selector-buttons">
	<a id="print-me" class="button" href="/products/grade-guide">Print Friendly</a>
	<a class="button" href="http://itunes.apple.com/us/app/grade-selector/id549368039?mt=8&amp;uo=4" target="itunes_store">Download for iPad</a>
</div>

<div class="nothing" style="display: none;">
	<p>Sorry, there are no products available that match your requirements. Please change your filters or contact our sales department for more 	information.
	</p>
	<div class="filter reset">
		<input id="edit-reset" type="button" value="View All" class="filter-reset form-submit">
	</div>
</div>

  <?php if ($rows): ?>
      <?php print $rows; ?>
  <?php endif; ?>
	<div class="grade-selector-filters">

<div class="filters-form">
	<div class="reset">
		<p>FILTER BY:</p>
		<input id="edit-reset" type="button" value="View All" class="filter-reset form-submit">
	</div>
	<div id="species" class="filter">
		<h4>Species</h4>
		<div class="form-radios">
			<div class="species" id="edit-field-species-value-many-to-one-Alder-wrapper">
				<label class="option" for="Alder">
					Alder<input type="radio" id="Alder" name="Species" value="Alder" class="form-radio"></label>
			</div>
			<div class="species" id="edit-field-species-value-many-to-one-Ash-wrapper">
				<label class="option" for="Ash">
					Ash<input type="radio" id="Ash" name="Species" value="Ash" class="form-radio"></label>
			</div>
			<div class="species" id="edit-field-species-value-many-to-one-Maple-wrapper">
				<label class="option" for="Maple">
					Maple<input type="radio" id="Maple" name="Species" value="Maple" class="form-radio"></label>
			</div>
		</div>
	</div>
	<div class="filter usage">
		<h4>Board Type</h4>
		<div class="form-radios">
			<div>
					<label class="option" for="Rons_Category-All">
						<input type="radio" id="Rons_Category-All" name="Rons_Category" value="All" checked="checked" class="form-radio">- All -</label>
				</div>
				<div id="clear-wrapper">
					<label class="option" for="clear">
						<input type="radio" id="clear" name="Rons_Category" value="clear" class="form-radio">Clear Appearance</label>
				</div>
				<div id="clear_cutting-wrapper">
					<label class="option" for="clear_cutting">
						<input type="radio" id="clear_cutting" name="Rons_Category" value="clear_cutting" class="form-radio">Clear Cutting Boards</label>
				</div>
				<div id="knotty-wrapper">
					<label class="option" for="knotty">
						<input type="radio" id="knotty" name="Rons_Category" value="knotty" class="form-radio">Knotty Appearance</label>
				</div>
				<div id="structural-wrapper">
					<label class="option" for="structural">
						<input type="radio" id="structural" name="Rons_Category" value="structural" class="form-radio">Structural &amp; Sound Cutting</label>
				</div>
				<div id="crating-wrapper">
					<label class="option" for="crating">
						<input type="radio" id="crating" name="Rons_Category" value="crating" class="form-radio">Crating</label>
				</div>
		</div>
	</div>
<!-- <div class="filter appearance">
	<h4>Appearance</h4>
	<div class="form-radios">
		<div>
				<label class="option" for="Category-All">
					<input type="radio" id="Category-All" name="Category" value="All" checked="checked" class="form-radio">- All -</label>
			</div>
			<div id="clear-wrapper">
				<label class="option" for="clear">
					<input type="radio" id="clear" name="Category" value="clear" class="form-radio">Clear</label>
			</div>
			<div id="rustic-wrapper">
				<label class="option" for="rustic">
					<input type="radio" id="rustic" name="Category" value="rustic" class="form-radio">Rustic</label>
			</div>
			<div id="utility-wrapper">
				<label class="option" for="utility">
					<input type="radio" id="utility" name="Category" value="utility" class="form-radio">Utility</label>
			</div>
	</div>
</div> -->
<div class="filter thickness">
	<h4>Thickness</h4>
	<div class="form-checkboxes">
		<div>
			<label class="option" for="thickness-13-16">
				<input type="checkbox" name="Thickness" id="thickness-13-16" value="13-16">13/16</label>
		</div>
		<div>
			<label class="option" for="thickness-4-4">
				<input type="checkbox" name="Thickness" id="thickness-4-4" value="4-4">4/4</label>
		</div>
		<div>
			<label class="option" for="thickness-5-4">
				<input type="checkbox" name="Thickness" id="thickness-5-4" value="5-4">5/4</label>
		</div>
		<div>
			<label class="option" for="thickness-6-4">
				<input type="checkbox" name="Thickness" id="thickness-6-4" value="6-4">6/4</label>
		</div>
		<div>
			<label class="option" for="thickness-8-4">
				<input type="checkbox" name="Thickness" id="thickness-8-4" value="8-4">8/4</label>
		</div>
		<div>
			<label class="option" for="thickness-10-4">
				<input type="checkbox" name="Thickness" id="thickness-10-4" value="10-4">10/4</label>
		</div>
		<div>
			<label class="option" for="thickness-12-4">
				<input type="checkbox" name="Thickness" id="thickness-12-4" value="12-4">12/4</label>
		</div>
	</div>
</div>
<div class="filter length">
	<h4>Length</h4>
	<div class="form-checkboxes">
		<div>
			<label class="option" for="length-6-1">
				<input type="checkbox" name="Length" id="length-6-1" value="6-1">6'1"</label>
		</div>
		<div>
			<label class="option" for="length-7-1">
				<input type="checkbox" name="Length" id="length-7-1" value="7-1">7'1"</label>
		</div>
		<div>
			<label class="option" for="length-8-1">
				<input type="checkbox" name="Length" id="length-8-1" value="8-1">8'1"</label>
		</div>
		<div>
			<label class="option" for="length-8-3">
				<input type="checkbox" name="Length" id="length-8-3" value="8-3">8'3"</label>
		</div>
		<div>
			<label class="option" for="length-8-3-solid">
				<input type="checkbox" name="Length" id="length-8-3-solid" value="8-3--solid-pack">8'3" solid pack</label>
		</div>
		<div>
			<label class="option" for="length-10-1">
				<input type="checkbox" name="Length" id="length-10-1" value="10-1">10'1"</label>
		</div>
		<div>
			<label class="option" for="length-12-1">
			<input type="checkbox" name="Length" id="length-12-1" value="12-1">12'1"</label>
		</div>
	</div>
</div>
<div class="filter width collapsible">
	<h4>Width</h4>
	<div class="form-checkboxes">
		<div>
			<label class="option" for="width-4.5+">
				<input type="checkbox" name="Width" id="width-4.5+" value="4+">&gt; 4.5" wide</label>
		</div>
		<div>
			<label class="option" for="width-4.5-">
				<input type="checkbox" name="Width" id="width-4.5-" value="4-">&lt; 4.5" wide</label>
		</div>
	</div>
</div>
<div class="filter collapsible">
	<h4>Limiting Characteristics</h4>
	<div class="form-checkboxes">
		<div>
			<label class="option" for="Sound-knots-permitted">
				<input type="checkbox" name="Defects" id="Sound-knots-permitted" value="knots">Sound knots permitted</label>
		</div>
		<div>
			<label class="option" for="Sander-Skip-permitted">
				<input type="checkbox" name="Defects" id="Sander-Skip-permitted" value="skip">Sander Skip permitted</label>
		</div>
		<div>
			<label class="option" for="Discoloration-permitted">
				<input type="checkbox" name="Defects" id="Discoloration-permitted" value="color">Discoloration permitted</label>
		</div>
	</div>
</div>
<div class="filter collapsible">
	<h4>Cutting Face</h4>
	<div class="form-radios">
		<div>
				<label class="option" for="cf-All">
					<input type="radio" id="cf-All" name="Cutting Face" value="All" checked="checked" class="form-radio">- All -</label>
			</div>
		<div>
			<label class="option" for="cf1">
				<input type="radio" id="cf1" name="Cutting Face" value="cf1" class="form-radio">One-Face cutting (CF1)</label>
		</div>
		<div>
			<label class="option" for="cf2">
				<input type="radio" id="cf2" name="Cutting Face" value="cf2" class="form-radio">Two-Face cutting (CF2)</label>
		</div>
	</div>
</div>
<div class="reset">
	<input id="edit-reset" type="button" value="View All" class="filter-reset form-submit">
</div>

</div>
</div>

