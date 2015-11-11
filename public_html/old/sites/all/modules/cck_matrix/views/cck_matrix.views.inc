<?php

/**
 * Implementation of hook_views_handlers().
 */
function cck_matrix_views_handlers() {
  return array(
      'info' => array(
        'path' => drupal_get_path('module', 'cck_matrix') . '/views',
        ),
      'handlers' => array(
        'cck_matrix_handler_field_table' => array(
        // We want a custom field handler because we want to handle Multiple Values ourselves.
          'parent' => 'views_handler_field_custom',
          ),
        ),
      );
}
