const { __ } = wp.i18n;

const { useState, useEffect } = wp.element;

const {
  Button,
  TextControl,
  ExternalLink,
  ButtonGroup,
  TabPanel,
  PanelBody,
} = wp.components;

function Tabs({ attributes, setAttributes, toggle }) {
  const {
    originalSizeThumb,
    smallSizeThumb,
    mediumSizeThumb,
    originalSourceThumb,
    smallSourceThumb,
    mediumSourceThumb,
    sizes,
    sourceSize,
  } = attributes;

  const [size, setSizes] = useState(sizes);
  const [sizeSrc, setSizeSrc] = useState(sourceSize);

  const onChangeSizeOriginalThumb = newValue => {
    setAttributes({ originalSizeThumb: newValue });
  };

  const onChangeSizeSmallThumb = newValue => {
    setAttributes({ smallSizeThumb: newValue });
  };

  const onChangeSizeMediumThumb = newValue => {
    setAttributes({ mediumSizeThumb: newValue });
  };

  const onChangeSourceOriginalThumb = newValue => {
    setAttributes({ originalSourceThumb: newValue });
  };

  const onChangeSourceSmallThumb = newValue => {
    setAttributes({ smallSourceThumb: newValue });
  };

  const onChangeSourceMediumThumb = newValue => {
    setAttributes({ mediumSourceThumb: newValue });
  };

  useEffect(() => {
    if (toggle === false) {
      setAttributes({
        smallSizeThumb: undefined,
        mediumSizeThumb: undefined,
        originalSizeThumb: undefined,
        smallSourceThumb: undefined,
        mediumSourceThumb: undefined,
        originalSourceThumb: undefined,
      });
    }
  }, [toggle]);

  useEffect(() => {
    setAttributes({ sizes: size });
  }, [size]);

  useEffect(() => {
    setAttributes({ sourceSize: sizeSrc });
  }, [sizeSrc]);

  return (
    <PanelBody title={__('Image Settings')} initialOpen={false}>
      <TabPanel
        className="uagb-inspect-tabs uagb-inspect-tabs-col-2"
        activeClass="active-tab"
        tabs={[
          {
            name: 'Source',
            title: __('Source'),
            className: 'picture-thumb-source',
          },
          {
            name: 'Source 2',
            title: __('Source 2'),
            className: 'picture-thumb-source',
          },
        ]}
      >
        {tab => {
          let tabout;

          if (tab.name === 'Source') {
            tabout = (
              <>
                <TextControl
                  label={__('Original image')}
                  help={
                    <>
                      <ExternalLink href="https://www.html5rocks.com/en/tutorials/responsive/picture-element/#toc-pixel-density-descriptors">
                        {__('Combine with pixel density or width descriptors')}
                      </ExternalLink>
                      {__('Leave blank if using pixel method.')}
                    </>
                  }
                  value={originalSizeThumb}
                  onChange={onChangeSizeOriginalThumb}
                />

                <div className="block-library-image__dimensions">
                  <p className="block-library-image__dimensions__row">
                    {__('Thumbnails Scale')}
                  </p>

                  <div className="block-library-image__dimensions__row">
                    <TextControl
                      className="block-library-image__dimensions__width"
                      label={__('Small')}
                      help={__('e.g., 300w or 1x')}
                      value={smallSizeThumb}
                      onChange={onChangeSizeSmallThumb}
                    />
                    <TextControl
                      className="block-library-image__dimensions__height"
                      label={__('Medium')}
                      help={__('e.g., 768w or 2x')}
                      value={mediumSizeThumb}
                      onChange={onChangeSizeMediumThumb}
                    />
                  </div>
                  <div className="block-library-image__dimensions__row">
                    <div>
                      <p className="block-library-image__dimensions__row">
                        {__('Sizes attribute')}
                      </p>
                      <p className="components-base-control__help">
                        {__('Leave unselected if using pixel method.')}
                      </p>

                      <ButtonGroup aria-label={__('Image Size')}>
                        {['25vw', '50vw', '75vw', '100vw'].map(scale => {
                          return (
                            <Button
                              key={scale}
                              isSmall
                              isPrimary={size === scale}
                              aria-pressed={size === scale}
                              onClick={() =>
                                setSizes(size === scale ? null : scale)
                              }
                            >
                              {scale}
                            </Button>
                          );
                        })}
                      </ButtonGroup>
                    </div>
                  </div>
                </div>
              </>
            );
          } else {
            tabout = (
              <>
                <TextControl
                  label={__('Original image')}
                  help={
                    <>
                      <ExternalLink href="https://www.html5rocks.com/en/tutorials/responsive/picture-element/#toc-pixel-density-descriptors">
                        {__('Combine with pixel density or width descriptors')}
                      </ExternalLink>
                      {__('Leave blank if using pixel method.')}
                    </>
                  }
                  value={originalSourceThumb}
                  onChange={onChangeSourceOriginalThumb}
                />

                <div className="block-library-image__dimensions">
                  <p className="block-library-image__dimensions__row">
                    {__('Thumbnails Scale')}
                  </p>

                  <div className="block-library-image__dimensions__row">
                    <TextControl
                      className="block-library-image__dimensions__width"
                      label={__('Small')}
                      help={__('e.g., 300w or 1x')}
                      value={smallSourceThumb}
                      onChange={onChangeSourceSmallThumb}
                    />
                    <TextControl
                      className="block-library-image__dimensions__height"
                      label={__('Medium')}
                      help={__('e.g., 768w or 2x')}
                      value={mediumSourceThumb}
                      onChange={onChangeSourceMediumThumb}
                    />
                  </div>
                  <div className="block-library-image__dimensions__row">
                    <div>
                      <p className="block-library-image__dimensions__row">
                        {__('Sizes attribute')}
                      </p>
                      <p className="components-base-control__help">
                        {__('Leave unselected if using pixel method.')}
                      </p>

                      <ButtonGroup aria-label={__('Image Size')}>
                        {['25vw', '50vw', '75vw', '100vw'].map(scalesrc => {
                          return (
                            <Button
                              key={scalesrc}
                              isSmall
                              isPrimary={sizeSrc === scalesrc}
                              aria-pressed={sizeSrc === scalesrc}
                              onClick={() =>
                                setSizeSrc(
                                  sizeSrc === scalesrc ? null : scalesrc
                                )
                              }
                            >
                              {scalesrc}
                            </Button>
                          );
                        })}
                      </ButtonGroup>
                    </div>
                  </div>
                </div>
              </>
            );
          }
          return <div>{tabout}</div>;
        }}
      </TabPanel>
    </PanelBody>
  );
}

export default Tabs;
