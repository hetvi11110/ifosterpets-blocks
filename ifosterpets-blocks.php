<?php
/**
 * Plugin Name: My Custom Block
 * Description: Adds a custom block to Gutenberg.
 * Version: 1.0
 */

function ifp_block_register_block() {
    wp_register_script(
        'ifp-block-editor-script',
        plugins_url('build/index.js', __FILE__),
        array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor'),
        filemtime(plugin_dir_path(__FILE__) . 'build/index.js')
    );

    register_block_type('ifp-block/custom-block', array(
        'editor_script' => 'ifp-block-editor-script',
    ));
}

add_action('init', 'ifp_block_register_block');
