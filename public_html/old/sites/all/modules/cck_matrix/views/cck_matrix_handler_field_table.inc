<?php
class cck_matrix_handler_field_table extends views_handler_field_custom {
  var $content_field;

  function render($values) {
    $node = node_load($values->nid);
    // Perhaps there is an easier way to build this table, without having to Node Load so that we can send it to the formatter_default theme function.
    $element['#node'] = $node;
    $element['#field_name'] = $this->definition['content_field_name'];
    return  theme_cck_matrix_formatter_default($element);
    return $values;
  }
}

