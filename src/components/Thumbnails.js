const { __ } = wp.i18n;

const { useEffect } = wp.element;

const { MediaUpload, MediaUploadCheck } = wp.blockEditor;

const { Button, ToggleControl, PanelBody, Toolbar, IconButton } = wp.components;

function Thumbnails({
  attributes,
  setAttributes,
  toggle,
  conditional,
  conditional2,
}) {
  const {
    smallThumb,
    mediumThumb,
    mediaID,
    sourceThumb,
    sourceThumb2,
    sourceScale,
  } = attributes;

  const onSelectSourceThumb = regular => {
    setAttributes({
      sourceThumb: regular.url,
      mediaID: regular.id,
    });
  };

  const onSelectSourceThumb2 = large => {
    setAttributes({
      sourceThumb2: large.url,
      mediaID: large.id,
    });
  };

  const onSelectSmallThumb = small => {
    setAttributes({
      smallThumb: small.url,
      mediaID: small.id,
    });
  };

  const onSelectMediumThumb = medium => {
    setAttributes({
      mediumThumb: medium.url,
      mediaID: medium.id,
    });
  };

  const onChangeSourceScale = newValue => {
    setAttributes({ sourceScale: newValue });
  };

  useEffect(() => {
    if (toggle === false) {
      setAttributes({
        smallThumb: undefined,
        mediumThumb: undefined,
        sourceThumb: undefined,
        sourceThumb2: undefined,
      });
    }
  }, [toggle]);

  return (
    <PanelBody title={__('Thumbnails')} initialOpen={false}>
      {!smallThumb && (
        <div className="media-small-image" style={{ marginTop: 10 }}>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={onSelectSmallThumb}
              allowedTypes="image"
              value={mediaID}
              render={({ open }) => (
                <Button
                  className={
                    smallThumb ? 'image-button' : 'button button-large'
                  }
                  onClick={open}
                >
                  {!smallThumb &&
                    __('Upload Small Image', 'gutenberg-examples')}
                </Button>
              )}
            />
          </MediaUploadCheck>
        </div>
      )}
      {smallThumb && (
        <div
          className="block-library-picture__dimensions__row"
          style={{ marginBottom: 20, position: 'relative' }}
        >
          <p style={{ fontWeight: 700 }}>{__('Small')}</p>
          <div className="block-library-image__dimensions__row">
            <u>{smallThumb}</u>
            <div
              className="picture-block-toolbar"
              style={{ position: 'absolute', top: -10, right: 0 }}
            >
              <Toolbar>
                <MediaUploadCheck>
                  <MediaUpload
                    onSelect={onSelectSmallThumb}
                    allowedTypes="image"
                    value={mediaID}
                    render={({ open }) => (
                      <IconButton
                        className="components-toolbar__control"
                        label={__('Edit media')}
                        icon="edit"
                        onClick={open}
                      />
                    )}
                  />
                </MediaUploadCheck>
              </Toolbar>
            </div>
          </div>
        </div>
      )}
      {!mediumThumb && (
        <div className="media-medium-image" style={{ marginTop: 10 }}>
          <MediaUploadCheck>
            <MediaUpload
              onSelect={onSelectMediumThumb}
              allowedTypes="image"
              value={mediaID}
              render={({ open }) => (
                <Button
                  className={
                    mediumThumb ? 'image-button' : 'button button-large'
                  }
                  onClick={open}
                >
                  {!mediumThumb &&
                    __('Upload Medium Image', 'gutenberg-examples')}
                </Button>
              )}
            />
          </MediaUploadCheck>
        </div>
      )}
      {mediumThumb && (
        <div
          className="block-library-picture__dimensions__row"
          style={{ marginBottom: 20, position: 'relative' }}
        >
          <p style={{ fontWeight: 700 }}>{__('Medium')}</p>
          <div className="block-library-image__dimensions__row">
            <u>{mediumThumb}</u>
            <div
              className="picture-block-toolbar"
              style={{ position: 'absolute', top: -10, right: 0 }}
            >
              <Toolbar>
                <MediaUploadCheck>
                  <MediaUpload
                    onSelect={onSelectMediumThumb}
                    allowedTypes="image"
                    value={mediaID}
                    render={({ open }) => (
                      <IconButton
                        className="components-toolbar__control"
                        label={__('Edit media')}
                        icon="edit"
                        onClick={open}
                      />
                    )}
                  />
                </MediaUploadCheck>
              </Toolbar>
            </div>
          </div>
        </div>
      )}
      {conditional && sourceScale && (
        <div style={{ position: 'relative', marginTop: 20 }}>
          <hr />
          <p style={{ fontWeight: 700 }}>{__('Source 2')}</p>
          {!sourceThumb && (
            <div className="media-small-image" style={{ marginTop: 10 }}>
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={onSelectSourceThumb}
                  allowedTypes="image"
                  value={mediaID}
                  render={({ open }) => (
                    <Button
                      className={
                        sourceThumb ? 'image-button' : 'button button-large'
                      }
                      onClick={open}
                    >
                      {!sourceThumb &&
                        __('Upload Small Image', 'gutenberg-examples')}
                    </Button>
                  )}
                />
              </MediaUploadCheck>
            </div>
          )}
          {sourceThumb && (
            <div
              className="block-library-picture__dimensions__row"
              style={{ marginBottom: 20, position: 'relative' }}
            >
              <p style={{ fontWeight: 700 }}>{__('Small')}</p>
              <div className="block-library-image__dimensions__row">
                <u>{sourceThumb}</u>
                <div
                  className="picture-block-toolbar"
                  style={{ position: 'absolute', top: -10, right: 0 }}
                >
                  <Toolbar>
                    <MediaUploadCheck>
                      <MediaUpload
                        onSelect={onSelectSourceThumb}
                        allowedTypes="image"
                        value={mediaID}
                        render={({ open }) => (
                          <IconButton
                            className="components-toolbar__control"
                            label={__('Edit media')}
                            icon="edit"
                            onClick={open}
                          />
                        )}
                      />
                    </MediaUploadCheck>
                  </Toolbar>
                </div>
              </div>
            </div>
          )}
          {!sourceThumb2 && (
            <div className="media-small-image" style={{ marginTop: 10 }}>
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={onSelectSourceThumb2}
                  allowedTypes="image"
                  value={mediaID}
                  render={({ open }) => (
                    <Button
                      className={
                        sourceThumb2 ? 'image-button' : 'button button-large'
                      }
                      onClick={open}
                    >
                      {!sourceThumb2 &&
                        __('Upload Medium Image', 'gutenberg-examples')}
                    </Button>
                  )}
                />
              </MediaUploadCheck>
            </div>
          )}
          {sourceThumb2 && (
            <div
              className="block-library-picture__dimensions__row"
              style={{ marginBottom: 20, position: 'relative' }}
            >
              <p style={{ fontWeight: 700 }}>{__('Medium')}</p>
              <div className="block-library-image__dimensions__row">
                <u>{sourceThumb2}</u>
                <div
                  className="picture-block-toolbar"
                  style={{ position: 'absolute', top: -10, right: 0 }}
                >
                  <Toolbar>
                    <MediaUploadCheck>
                      <MediaUpload
                        onSelect={onSelectSourceThumb2}
                        allowedTypes="image"
                        value={mediaID}
                        render={({ open }) => (
                          <IconButton
                            className="components-toolbar__control"
                            label={__('Edit media')}
                            icon="edit"
                            onClick={open}
                          />
                        )}
                      />
                    </MediaUploadCheck>
                  </Toolbar>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      {conditional2 && (
        <div
          className="components-base-control components-toggle-control"
          style={{ marginTop: 20 }}
        >
          <ToggleControl
            label={__('Thumbnails for Additional source')}
            checked={sourceScale}
            onChange={onChangeSourceScale}
          />
        </div>
      )}
    </PanelBody>
  );
}

export default Thumbnails;
