const attributes = {
  mediaID: {
    type: 'number',
  },
  mediaAlt: {
    type: 'string',
    source: 'attribute',
    selector: 'img',
    attribute: 'alt',
  },
  mediaURL: {
    type: 'string',
    selector: 'img',
  },
  mediaJPG: {
    type: 'string',
    selector: 'img',
  },
  mediaSource: {
    type: 'string',
  },
  toggleField: {
    type: 'boolean',
  },
  sizes: {
    type: 'string',
  },
  sourceSize: {
    type: 'string',
  },
  smallThumb: {
    type: 'string',
  },
  mediumThumb: {
    type: 'string',
  },
  originalSizeThumb: {
    type: 'string',
    default: '',
  },
  smallSizeThumb: {
    type: 'string',
    default: '1x',
  },
  mediumSizeThumb: {
    type: 'string',
    default: '2x',
  },
  originalSourceThumb: {
    type: 'string',
    default: '',
  },
  smallSourceThumb: {
    type: 'string',
    default: '1x',
  },
  mediumSourceThumb: {
    type: 'string',
    default: '2x',
  },
  sourceThumb: {
    type: 'string',
  },
  sourceThumb2: {
    type: 'string',
  },
  sourceTag: {
    type: 'boolean',
  },
  sourceScale: {
    type: 'boolean',
  },
  sourceURL: {
    type: 'string',
  },
  sourceMedia: {
    type: 'string',
  },
  sourceType: {
    type: 'string',
  },
  type: {
    type: 'string',
    source: 'attribute',
    selector: 'picture > source',
    attribute: 'type',
  },
  loading: {
    type: 'string',
    default: 'auto',
  },
  href: {
    type: 'string',
    source: 'attribute',
    selector: 'div > a',
    attribute: 'href',
  },
  rel: {
    type: 'string',
    source: 'attribute',
    selector: 'div > a',
    attribute: 'rel',
  },
  linkDestination: {
    type: 'string',
    default: 'none',
  },
  linkTarget: {
    type: 'string',
    source: 'attribute',
    selector: 'div > a',
    attribute: 'target',
  },
  linkClass: {
    type: 'string',
    source: 'attribute',
    selector: 'div > a',
    attribute: 'class',
  },
};

export default attributes;
