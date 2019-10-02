<?php

/**
 * Plugin Name: Gutenberg Examples Basic EsNext
 * Plugin URI: https://github.com/WordPress/gutenberg-examples
 * Description: This is a plugin demonstrating how to register new blocks for the Gutenberg editor.
 * Version: 1.0.2
 * Author: the Gutenberg Team
 *
 * @package gutenberg-examples
 */

defined( 'ABSPATH' ) || exit;

/**
 * Load all translations for our plugin from the MO file.
*/
add_action( 'init', 'gutenberg_examples_01_esnext_load_textdomain' );

function gutenberg_examples_01_esnext_load_textdomain() {
	load_plugin_textdomain( 'gutenberg-examples', false, basename( __DIR__ ) . '/languages' );
}

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * Passes translations to JavaScript.
 */
function gutenberg_examples_01_esnext_register_block() {

	if ( ! function_exists( 'register_block_type' ) ) {
		// Gutenberg is not active.
		return;
	}

	wp_register_script(
		'gutenberg-examples-01-esnext',
		plugins_url( 'block.build.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-compose', 'wp-keycodes', 'wp-data', 'underscore' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'block.build.js' )
	);

	wp_register_style(
		'gutenberg-examples-01-esnext',
		plugins_url( 'style.css', __FILE__ ),
		array( ),
		filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
	);


	register_block_type( 'gutenberg-examples/example-01-picture-card-esnext', array(
		'editor_script' => 'gutenberg-examples-01-esnext',
	) );

  if ( function_exists( 'wp_set_script_translations' ) ) {
    /**
     * May be extended to wp_set_script_translations( 'my-handle', 'my-domain',
     * plugin_dir_path( MY_PLUGIN ) . 'languages' ) ). For details see
     * https://make.wordpress.org/core/2018/11/09/new-javascript-i18n-support-in-wordpress/
     */
    wp_set_script_translations( 'gutenberg-examples-01-esnext', 'gutenberg-examples' );
  }

}
add_action( 'init', 'gutenberg_examples_01_esnext_register_block' );


/**
 * Add LazySizes library support only if browser does not support loading attribute
 * Adds data-src, data-srcset, and data-sizes attributes to support the LazySizes library.
 * 
 * @param  string wp_footer hook.
 * Passes inline JavaScript
 */

function gutenberg_examples_01_lazy_script() { 
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
add_action( 'wp_footer', 'gutenberg_examples_01_lazy_script' );
