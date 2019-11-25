import attributes from './attributes';
import edit from './edit';
import save from './save';

const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

registerBlockType('gutenberg-examples/example-01-picture-card-esnext', {
  title: __('Picture', 'gutenberg-examples'),
  description: __('A block with Picture tag functionality'),
  icon: 'format-image',
  category: 'layout',
  supports: {
    align: true,
  },
  attributes,
  edit,
  save,
});
