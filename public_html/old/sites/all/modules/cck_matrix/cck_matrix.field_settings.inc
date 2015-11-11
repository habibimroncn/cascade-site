<?php

function cck_matrix_field_settings_form($field) {
  $form = array();
  $form['size'] = array(
      '#type' => 'textfield',
      '#size' => 5,
      '#title' => t('Size of textfields'),
      '#default_value' => !empty($field['size']) ? $field['size'] : 5,
      );
  $form['rows'] = array(
      '#type' => 'textarea',
      '#title' => t('Headers in Row'),
      '#description' => t('Key|Value Pairs. List down left side headers. One per line.') .'<br />',
      '#cols' => 60,
      '#rows' => 5,
      '#weight' => -2,
      '#required' => TRUE,
      '#default_value' => isset($field["rows"]) ? $field["rows"] : '',
      );
  $form['cols'] = array(
      '#type' => 'textarea',
      '#title' => t("Headers in Column"),
      '#description' => t('Key|Value Pairs. List down top row headers. One per line.') .'<br />',
      '#cols' => 60,
      '#rows' => 5,
      '#weight' => -2,
      '#required' => TRUE,
      '#default_value' => isset($field["cols"]) ? $field["cols"] : '',
      );
  $form['empty'] = array(
      '#type' => 'textfield',
      '#title' => t('Empty Values'),
      '#default_value' => !empty($field['empty']) ? $field['empty'] : '',
      '#description' => t('The value to place in Empty Fields. If nothing, leave this blank.'),
      );
  $form['max_length'] = array(
      '#type' => 'textfield',
      '#title' => t('Maximum length'),
      '#default_value' => is_numeric($field['max_length']) ? $field['max_length'] : '',
      '#required' => FALSE,
      '#element_validate' => array('_element_validate_integer_positive'),
      '#description' => t('The maximum length of the field in characters. Leave blank for an unlimited size.'),
      );
  return $form;
}

function cck_matrix_field_settings_save($field) {
  $values[] = 'rows';
  $values[] = 'cols';
  $values[] = 'size';
  $values[] = 'empty';
  $values[] = 'max_length';
  return $values;
}

function cck_matrix_field_settings_database_columns($field) {
  $cols = explode("\n", $field['cols']);
  foreach ($cols as $key => $col) {
    $col = explode('|', $col);
    if (empty($field['max_length']) || $field['max_length'] > 255) {
      $columns[$col[0]] = array('type' => 'text', 'size' => 'big', 'not null' => FALSE, 'sortable' => TRUE, 'views' => TRUE);
    }
    else {
      $columns[$col[0]] = array('type' => 'varchar', 'length' => $field['max_length'], 'not null' => FALSE, 'sortable' => TRUE, 'views' => TRUE);
    }
  }
  return $columns;
}

function cck_matrix_field_settings_views($field) {
  $data = content_views_field_views_data($field);
  $table_alias = content_views_tablename($field);

  // Swap the field handler to the included handler.
  foreach ($data[$table_alias] as $key => $fields) {
    if ($data[$table_alias][$key]['field']) {
      $data[$table_alias][$key]['field']['handler'] = 'cck_matrix_handler_field_table';
    }
  }
  return $data;

}
