<?php
if ($view->override_path) {
	// We're inside a live preview where the JSON is pretty-printed.
	$json = _views_json_encode_formatted($rows);
	print "<code>$json</code>";

} else {
	/*
	$json = json_encode($rows);
  if ($jsonp_prefix) $json = "$jsonp_prefix($json)";
	*/
	// create array out of JSON string from field template
	foreach($rows['nodes'] as &$node) {
		$node['node']['Matrix'] = json_decode($node['node']['Matrix']);
	}
	//die(print_r($rows));
	drupal_add_js($rows, 'setting', 'header');
}