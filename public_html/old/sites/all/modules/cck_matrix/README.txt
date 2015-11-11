*************
** README: **
*************

DESCRIPTION:
-----------
This module provides a field type for cck with table view of textfields.


REQUIREMENTS:
-------------
The cck_matrix.module requires the content.module to be installed.


INSTALLATION:
-------------

1. Place the entire matrix directory into your Drupal modules/
directory.


2. Enable the matrix module by navigating to:

administer > modules

Enabling the matrix module will create the necessary database
tables for you.


USING THE MATRIX MODULE:
------------------------
After enableing the module, you can create a new field. Choose the CCK Matrix field, at the moment only
textfield widgets are available. On the configuration page, there will appear two large fieldsets, one
for setting the columns and one for the rows. Fill in your wanted labels for rows/columns, empty fields
won't appear in the node-form.


VERY IMPORTANT NOTES:
---------------------
Since this module now works with Creating Dynamic CCK Tables, you have to setup the Rows and Columns Field Settings 
  * found at: admin/content/node-type/[content-type]/fields/[matrix-field]
Rows and Columns need to have key|value pairs. Eg:
  Rows:
    1_day|1 Day, 1 night
    2_day|2 Days, 1 night
  Columns:
    1_person| 1 Person
    2_person| 2 People Sharing

This will create columns in the Database under the content_field_[matrix_field] table:
select * from content_field_greg_matrix;
+-------+-------+-------+--------------------------+--------------------------+
| vid   | nid   | delta | field_matrix_1_person    | field_matrix_2_person    |
+-------+-------+-------+--------------------------+--------------------------+

Rows are saved as the Delta, and the amount of Rows (2 in the example above) will equal the amount of rows available on node/add/[content-type]

This allows us to display the Matrix field in Views as Fields.

VIEWS:
------
This module is now views compatible. Atleast for Fields. And possibly filtering on the Delta. Filtering for NOT EQUAL TO works, but not much else at the moment. Patches in this regard are welcome.


TODO:
-----
* Allow users/administrators to add cols and rows dynamically
* Adding other widgets


Author:
-------
Original Author:
Matthias Hutterer
mh86@drupal.org
m_hutterer@hotmail.com

Current Maintainer:
Aaron Fulton
aaron@webtolife.org
