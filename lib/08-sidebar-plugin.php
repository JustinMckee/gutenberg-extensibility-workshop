<?php

wp_enqueue_script(
	'gew-08-sidebar-plugin',
	gew_url( 'scripts/08-sidebar-plugin/index.es5.js', __FILE__ ),
	array(
		'wp-components',
		'wp-data',
		'wp-edit-post',
		'wp-editor',
		'wp-element',
		'wp-plugins',
	)
);
