<?php

/**
 * Plugin Name: Picture Block
 * Plugin URI: https://github.com/WordPress/gutenberg-examples
 * Description: A block with Picture tag functionality.
 * Version: 1.0.2
 * Author: the Gutenberg Team
 *
 * @package gutenberg-examples
 */

defined( 'ABSPATH' ) || exit;

/**
 * Load all translations for our plugin from the MO file.
*/
add_action( 'init', 'picture_block_esnext_load_textdomain' );

function picture_block_esnext_load_textdomain() {
	load_plugin_textdomain( 'gutenberg-examples', false, basename( __DIR__ ) . '/languages' );
}

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * Passes translations to JavaScript.
 */
function picture_block_esnext_register_block() {

	if ( ! function_exists( 'register_block_type' ) ) {
		// Gutenberg is not active.
		return;
	}

	wp_register_script(
		'picture-block-esnext',
		plugins_url( 'build/index.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-compose', 'wp-keycodes', 'wp-data', 'underscore' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js' )
	);

	wp_register_style(
		'picture-block-esnext',
		plugins_url( 'style.css', __FILE__ ),
		array( ),
		filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
	);

	register_block_type( 'gutenberg-examples/picture-block', array(
		'style' => 'picture-block-esnext',
		'editor_script' => 'picture-block-esnext',
	) );

  if ( function_exists( 'wp_set_script_translations' ) ) {
    /**
     * May be extended to wp_set_script_translations( 'my-handle', 'my-domain',
     * plugin_dir_path( MY_PLUGIN ) . 'languages' ) ). For details see
     * https://make.wordpress.org/core/2018/11/09/new-javascript-i18n-support-in-wordpress/
     */
    wp_set_script_translations( 'picture-block-esnext', 'gutenberg-examples' );
  }

}
add_action( 'init', 'picture_block_esnext_register_block' );


/**
 * Add LazySizes library support only if browser does not support loading attribute
 * Adds data-src, data-srcset, and data-sizes attributes to support the LazySizes library.
 *
 * @param  string wp_footer hook.
 * Passes inline JavaScript
 */

function picture_block_lazy_script() {
  ?>
      <script>
          if ('loading' in HTMLImageElement.prototype) {
              const images = document.querySelectorAll('img[loading]');
              images.forEach(img => {
              img.src = img.dataset.src;
              img.dataset.srcset = img.srcset;
              });
              const sourceimg = document.querySelectorAll('source');
              sourceimg.forEach(source => {
              source.srcset = source.dataset.srcset;
              });
              const sourcesize = document.querySelectorAll('source[data-sizes]');
              sourcesize.forEach(sources => {
              sources.sizes = sources.dataset.sizes;
              });
          } else {
              // Dynamically import the LazySizes library
              const script = document.createElement('script');
              script.async = true;
              script.src =
              'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/4.1.8/lazysizes.min.js';
              document.body.appendChild(script);
          }
      </script>
  <?php
}
add_action( 'wp_footer', 'picture_block_lazy_script' );
