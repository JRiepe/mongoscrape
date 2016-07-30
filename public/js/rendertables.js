// https://datatables.net/download/npm
var $       = require( 'jquery' );
var dt      = require( 'datatables.net' )( window, $ );
var buttons = require( 'datatables.net-buttons' )( window, $ );
require( 'datatables.net-buttons/js/buttons.colVis.js' )(); # Column visibility
require( 'datatables.net-buttons/js/buttons.html5.js' )();  # HTML 5 file export
require( 'datatables.net-buttons/js/buttons.flash.js' )();  # Flash file export
require( 'datatables.net-buttons/js/buttons.print.js' )();  # Print view button
