<?php
// $Id: matrix_handler_cell.inc,v 1.1.2.1 2009/06/05 10:54:14 aaron1234nz Exp $

/**
 * Cell handler to present a cell from the Matrix field to the user.
 */
class matrix_handler_cell extends views_handler_field {
  function construct() {
    parent::construct();
    $this->additional_fields['vid'] = 'vid';
    $this->content_field = content_fields($this->definition['content_field_name']);
    $this->row_index = $this->definition['row_index'];
    $this->col_index = $this->definition['col_index'];
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
    
    $result = db_query("SELECT value FROM {node_field_matrix_data} WHERE row = %d AND col = %d AND field_name = '%s'", $this->row_index, $this->col_index, $this->definition['content_field_name']);
    
    return db_result($result);
  }
}
