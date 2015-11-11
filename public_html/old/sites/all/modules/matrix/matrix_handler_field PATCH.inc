<?php
// $Id: matrix_handler_field.inc,v 1.1.2.2 2009/06/05 09:54:49 aaron1234nz Exp $

/**
 * Field handler to present the Matrix field to the user.
 */
class matrix_handler_field extends views_handler_field {
  function construct() {
    parent::construct();
    $this->additional_fields['vid'] = 'vid';
    $this->content_field = content_fields($this->definition['content_field_name']);
  }
  
  function option_definition() {
    $options = parent::option_definition();
    $options['label'] = array('default' => 'Matrix', 'translatable' => TRUE);
    return $options;
  }
  
  function query() {
    $this->ensure_my_table();
    $this->add_additional_fields();
  }
  
  function render($values) {
    $node->vid = $values->{$this->aliases['vid']};
    $field_info = matrix_field('load', $node, $this->content_field, $node, null, null);

    $prepared['#field_name'] = $this->content_field['field_name'];
    $prepared['#node']->$prepared['#field_name'] = $field_info[$prepared['#field_name']];

	// ADD ON TO MAKE A KEYED ARRAY FOR JSON USE
	$matrix = array();
	$replace = array('/','"',"'", ' ');

	// replace non friendly characters with dashes
	if ($data = ($field_info[$prepared['#field_name']]['data'])) {		
		$headers = $prepared['#node']->field_cuttings['rows_header'];
		$cols = $prepared['#node']->field_cuttings['cols_header'];
		
		foreach ($headers as $index => $header) {
			$col_data = $data[$index];
			// loop through data and add values to array for any elements that have been set
			foreach($col_data as $ci => $val) {
				if ($val) {
					$c = rtrim($cols[$ci]);
					$c = str_replace($replace, '-', $c);
					$c = trim($c, '_-');
					
					$h = rtrim($header);
					$matrix[str_replace($replace, '-', $h)][$c] = true;
				}
			}
		}
	}    
	return json_encode($matrix);
    //return theme_matrix_formatter_default($prepared);
  }
}




/**
 * Field handler to present the Matrix field to the user.
 */
class matrix_handler_field_summary extends views_handler_field {
  function construct() {
    parent::construct();
    $this->additional_fields['vid'] = 'vid';
    $this->content_field = content_fields($this->definition['content_field_name']);
  }
  
  function option_definition() {
    $options = parent::option_definition();
    $options['label'] = array('default' => 'Matrix', 'translatable' => TRUE);
    return $options;
  }
  
  function query() {
    $this->ensure_my_table();
    $this->add_additional_fields();
  }
  
  function render($values) {
    $node->vid = $values->{$this->aliases['vid']};
    $field_info = matrix_field('load', $node, $this->content_field, $node, null, null);

    $prepared['#field_name'] = $this->content_field['field_name'];
    $prepared['#node']->$prepared['#field_name'] = $field_info[$prepared['#field_name']];

	// ADD ON TO MAKE A KEYED ARRAY FOR JSON USE
	$matrix = array();

	// replace non friendly characters with dashes
	if ($data = ($field_info[$prepared['#field_name']]['data'])) {		
		$headers = $prepared['#node']->field_cuttings['rows_header'];
		$cols = $prepared['#node']->field_cuttings['cols_header'];
		
		foreach ($headers as $index => $header) {
			$col_data = $data[$index];
			// loop through data and add values to array for any elements that have been set
			foreach($col_data as $ci => $val) {
				if ($val) {
					$c = rtrim($cols[$ci]);
					$c = trim($c, '_-');
					$h = rtrim($header);
					$matrix[str_replace($replace, '-', $h)][$c] = true;
				}
			}
		}
	}    

	$op = '<table><thead>';
	foreach ($matrix as $thick => $lengths) {
		$op .= '<th>'.$thick.'</th>';
		$td .= '<td>';
		// add all lengths for thickness
		$td .= implode(", ",array_keys($lengths));
		$td = rtrim($td, ', ');
		$td .= '</td>';
	}
 
	$op .= '</thead><tbody><tr>'.$td.'</tr></tbody></table>';
	
  return $op;
  }
}




/*
* Widths
*/
/**
 * Field handler to present the Matrix field to the user.
 */
class matrix_handler_field_thickness extends views_handler_field {
  function construct() {
    parent::construct();
    $this->additional_fields['vid'] = 'vid';
    $this->content_field = content_fields($this->definition['content_field_name']);
  }
  
  function option_definition() {
    $options = parent::option_definition();
    $options['label'] = array('default' => 'Matrix', 'translatable' => TRUE);
    return $options;
  }
  
  function query() {
    $this->ensure_my_table();
    $this->add_additional_fields();
  }
  
  function render($values) {
    $node->vid = $values->{$this->aliases['vid']};
    $field_info = matrix_field('load', $node, $this->content_field, $node, null, null);

    $prepared['#field_name'] = $this->content_field['field_name'];
    $prepared['#node']->$prepared['#field_name'] = $field_info[$prepared['#field_name']];

	// ADD ON TO MAKE A KEYED ARRAY FOR JSON USE
	$matrix = array();

	// replace non friendly characters with dashes
	if ($data = ($field_info[$prepared['#field_name']]['data'])) {		
		$headers = $prepared['#node']->field_cuttings['rows_header'];
		$cols = $prepared['#node']->field_cuttings['cols_header'];
		
		foreach ($headers as $index => $header) {
			$col_data = $data[$index];
			// loop through data and add values to array for any elements that have been set
			foreach($col_data as $ci => $val) {
				if ($val) {
					$c = rtrim($cols[$ci]);
					$c = trim($c, '_-');
					$h = rtrim($header);
					$matrix[str_replace($replace, '-', $h)] = true;
				}
			}
		}
	}    
	
  return implode(", ",array_keys($matrix));
  }
}




/* 
*  Lengths
*/
/**
 * Field handler to present the Matrix field to the user.
 */
class matrix_handler_field_lengths extends views_handler_field {
  function construct() {
    parent::construct();
    $this->additional_fields['vid'] = 'vid';
    $this->content_field = content_fields($this->definition['content_field_name']);
  }
  
  function option_definition() {
    $options = parent::option_definition();
    $options['label'] = array('default' => 'Matrix', 'translatable' => TRUE);
    return $options;
  }
  
  function query() {
    $this->ensure_my_table();
    $this->add_additional_fields();
  }
  
  function render($values) {
    $node->vid = $values->{$this->aliases['vid']};
    $field_info = matrix_field('load', $node, $this->content_field, $node, null, null);

    $prepared['#field_name'] = $this->content_field['field_name'];
    $prepared['#node']->$prepared['#field_name'] = $field_info[$prepared['#field_name']];

		$matrix = array();

		// replace non friendly characters with dashes
		if ($data = ($field_info[$prepared['#field_name']]['data'])) {		
			$headers = $prepared['#node']->field_cuttings['rows_header'];
			$cols = $prepared['#node']->field_cuttings['cols_header'];

			foreach ($headers as $index => $header) {
				$col_data = $data[$index];
				// loop through data and add values to array for any elements that have been set
				foreach($col_data as $ci => $val) {
					if ($val) {
						$c = rtrim($cols[$ci]);
						$c = trim($c, '_-');
						$h = rtrim($header);
						$matrix[$c] = true;
					}
				}
			}
		} 
		return implode(", ",array_keys($matrix));
	  }
}

