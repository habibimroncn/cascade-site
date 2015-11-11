<?php
// $Id: matrix.views.inc,v 1.1.2.3 2009/06/05 10:54:14 aaron1234nz Exp $

/**
* @file
* Views hooks implemented for the Matrix module.
*/

/**
 * Implementation of hook_views_data()
 */
function matrix_views_data() {
  foreach (content_fields() as $field) {
    if ($field['type'] == 'matrix') {
      $data['node_data_'. $field['field_name']] = array(
        'table' => array(
          'group' => 'Matrix',
          'join' => array(
            'node' => array(
              'table' => 'content_type_'. $field['type_name'],
              'left_field' => 'vid',
              'field' => 'vid',
            ),
          ),
        ),
        $field['field_name'] .'_value' => array(
          'field' => array(
            'title' => $field['widget']['label'] .' ('. $field['field_name'] .')',
            'help' => t('Appears on %type_name (table layout)', array('%type_name' => $field['type_name'])),
            'handler' => 'matrix_handler_field',
            'content_field_name' => $field['field_name'],
          ),
        ),
      	$field['field_name'] .'_summary' => array(
        	'field' => array(
	          'title' => $field['widget']['label'] .' ('. $field['field_name'] .') SUMMARY',
	          'help' => t('Appears on %type_name (table layout)', array('%type_name' => $field['type_name'])),
	          'handler' => 'matrix_handler_field_summary',
	          'content_field_name' => $field['field_name'],
        	),
      	),
	    	$field['field_name'] .'_thickness' => array(
	      	'field' => array(
	          'title' => $field['widget']['label'] .' ('. $field['field_name'] .') THICKNESS',
	          'help' => t('Appears on %type_name (table layout)', array('%type_name' => $field['type_name'])),
	          'handler' => 'matrix_handler_field_thickness',
	          'content_field_name' => $field['field_name'],
	      	),
	    	),
		  	$field['field_name'] .'_lengths' => array(
		    	'field' => array(
		        'title' => $field['widget']['label'] .' ('. $field['field_name'] .') LENGTHS',
		        'help' => t('Appears on %type_name (table layout)', array('%type_name' => $field['type_name'])),
		        'handler' => 'matrix_handler_field_lengths',
		        'content_field_name' => $field['field_name'],
		    	),
		  	),
      );
      

      $rows = trim($field['rows']);
      $cols = trim($field['cols']);
      $rows = explode("\n", $rows);
      $cols = explode("\n", $cols);
      
      foreach ($rows as $row_index => $row) {
        foreach ($cols as $col_index => $col) {
          $cell_ref = $row_index .'_'. $col_index;
          $cell_name = $col .' x '. $row;
          
          $data['node_data_'. $field['field_name'] .'_'. $cell_ref] = array(
            'table' => array(
              'group' => 'Matrix',
              'join' => array(
                'node' => array(
                  'table' => 'content_type_'. $field['type_name'],
                  'left_field' => 'vid',
                  'field' => 'vid',
                ),
              ),
            ),
            $field['field_name'] .'_'. $cell_ref .'_value' => array(
              'field' => array(
                'title' => $field['widget']['label']  .' cell '. $cell_name .' ('. $field['field_name'] .')',
                'help' => t('Appears on %type_name', array('%type_name' => $field['type_name'])),
                'handler' => 'matrix_handler_cell',
                'content_field_name' => $field['field_name'],
                'row_index' => $row_index,
                'col_index' => $col_index,
              ),
            ),
          ); 
        }
      }
    }
  }
  return $data;
}

/**
 * Implementation of hook_views_handlers().
 */
function matrix_views_handlers() {
  return array(
    'info' => array(
      'path' => drupal_get_path('module', 'matrix'),
    ),
    'handlers' => array(
      'matrix_handler_field' => array(
        'parent' => 'views_handler_field',
        'file' => 'matrix_handler_field.inc',
      ),
    'matrix_handler_field_summary' => array(
      'parent' => 'views_handler_field',
      'file' => 'matrix_handler_field.inc',
    ),
  'matrix_handler_field_thickness' => array(
    'parent' => 'views_handler_field',
    'file' => 'matrix_handler_field.inc',
  ),
'matrix_handler_field_lengths' => array(
  'parent' => 'views_handler_field',
  'file' => 'matrix_handler_field.inc',
),
      'matrix_handler_cell' => array(
        'parent' => 'views_handler_field',
        'file' => 'matrix_handler_cell.inc',
      ),
    ),
  );
}