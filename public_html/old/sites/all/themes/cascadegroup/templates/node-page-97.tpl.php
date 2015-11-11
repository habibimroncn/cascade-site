

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
			<?php print $node->content['body']['#value']; ?>
    </div>
</div>

<div id="buyers-go-here"></div>

<!-- monkeys -->

<div id="log-procurement-info">
	<div class="wrap">
	<div class="lpi" id="lpi-1">
		<h3>How do I get paid?</h3>
		<p>It’s as easy as 1, 2, 3:</p>
		<ol>
		<li>
			Call one of our professional log buyers, they will set you up with a log purchase agreement and provide log specifications.

		</li>
		<li>
		Deliver your logs to one of our mills.
			
		</li>
		<li>
		We send you a check, payments are made weekly.
			
		</li>
		</ol>
		<p><strong>It’s that simple!</strong></p>
		
		<a class="pdf" href="/sites/all/themes/cascadegroup/procurement/LB_How-do-I-get-paid.pdf">How it works</a>
	</div>
	<div class="lpi" id="lpi-2">
		<h3>More Resources</h3>
		<a class="pdf" href="/sites/all/themes/cascadegroup/procurement/LB_When-harvest-is-ready.pdf">When is harvest ready?</a>
		<a class="pdf" href="/sites/all/themes/cascadegroup/procurement/LB_Forest-Permit.pdf">When is a permit required?</a>
		<a class="pdf" href="/sites/all/themes/cascadegroup/procurement/LB_Alder-Seedlings.pdf">Alder seedling outlets</a>
		<a class="pdf" href="/sites/all/themes/cascadegroup/procurement/Weyerhaeuser-fact-sheet-for-planting-red-alder.pdf">Fact sheet for planting</a>
		<!--
<br/>
		<a href="#>">Lorem ipsum dolar</a><br/>
		<a href="#>">Lorem ipsum dolar</a><br/>
		<a href="#>">Lorem ipsum dolar</a><br/>
-->
	</div>
	<div class="lpi" id="lpi-3">
		<h3>Are you a commercial landowner, logger or trucker?</h3>
		<div>
			<p>Cascade Hardwood Group can advance money to help with your timber purchase, and pay for up front road cost. Our professional foresters can help with obtaining harvest permits, unit layout, and timber appraisals.</p>
			<p id="phone">800-228-3065</p>
		</div>
		<div>
			<p><strong>Download cut cards</strong></p>
				<a class="pdf" href="/sites/all/themes/cascadegroup/procurement/CascadeCuttingCard.pdf">Cascade Mill</a>
				<a class="pdf" href="/sites/all/themes/cascadegroup/procurement/PAHCuttingCard.pdf">Port Angeles Mill</a>
				<a class="pdf" href="/sites/all/themes/cascadegroup/procurement/Scribner-Log-Volume-Table.pdf">Scribner Log Volume Table</a>
		</div>
		
	</div>
	</div>
</div>


<div id="video" style="display:none">
	<div class="wrap" >
		<span id="video-staple"></span>
		<video width="864" height="400" type="video/mp4" controls="controls" />
	</div>
</div>
