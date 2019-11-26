import Tabs from './components/Tabs';
import Thumbnails from './components/Thumbnails';

const { __ } = wp.i18n;

const {
  MediaPlaceholder,
  MediaUpload,
  MediaUploadCheck,
  BlockControls,
  InspectorControls,
} = wp.blockEditor;

const {
  Button,
  TextControl,
  ToggleControl,
  PanelBody,
  TextareaControl,
  ExternalLink,
  Toolbar,
  IconButton,
  SelectControl,
} = wp.components;

function edit({ attributes, className, setAttributes }) {
  const {
    mediaID,
    mediaURL,
    mediaJPG,
    mediaAlt,
    toggleField,
    mediaSource,
    type,
    loading,
    sourceTag,
    sourceURL,
    sourceType,
    sourceMedia,
    sourceScale,
  } = attributes;

  const onSelectImage = media => {
    setAttributes({
      mediaURL: media.url,
      mediaID: media.id,
      mediaAlt: media.alt,
    });
  };

  const onSelectJpgImage = original => {
    setAttributes({
      mediaJPG: original.url,
      mediaID: original.id,
      mediaAlt: original.alt,
    });
  };

  const onSelectSource = image => {
    setAttributes({
      sourceURL: image.url,
      mediaID: image.id,
    });
  };

  const onChangeMedia = newValue => {
    setAttributes({ mediaSource: newValue });
  };

  const onChangeSourceMedia = newValue => {
    setAttributes({ sourceMedia: newValue });
  };

  const onChangeToggleField = newValue => {
    setAttributes({ toggleField: newValue });
  };

  const onChangeToggleLazyLoad = newValue => {
    const loading = newValue ? 'lazy' : 'auto';

    setAttributes({ loading });
  };

  const onChangenewAlt = newAlt => {
    setAttributes({ mediaAlt: newAlt });
  };

  const onChangeSourceTag = newValue => {
    setAttributes({ sourceTag: newValue });
  };

  const onChangeRemoveJpg = () => {
    setAttributes({ mediaJPG: undefined, mediaAlt: undefined });
  };

  const onChangeType = newValue => {
    const type = newValue ? 'image/webp' : null;

    setAttributes({ type });
  };

  const onChangeSourceType = newValue => {
    const sourceType = newValue ? 'image/webp' : null;

    setAttributes({ sourceType });
  };

  return (
    <div className={className}>
      <BlockControls>
        {mediaURL && (
          <MediaUploadCheck>
            <Toolbar>
              <MediaUpload
                onSelect={onSelectImage}
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
            </Toolbar>
          </MediaUploadCheck>
        )}
      </BlockControls>

      <InspectorControls>
        <PanelBody title={__('Image Callback')} initialOpen>
          <div className="media-jpg-image">
            {!mediaJPG && (
              <p
                className="block-library-image__dimensions__row"
                style={{ fontWeight: 700, marginTop: 20 }}
              >
                {__('Note: Enter one image callback for crossbrowser support')}
              </p>
            )}
            {!mediaJPG && (
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={onSelectJpgImage}
                  allowedTypes="image"
                  value={mediaID}
                  render={({ open }) => (
                    <Button
                      className={
                        mediaJPG ? 'image-button' : 'button button-large'
                      }
                      onClick={open}
                      style={{ marginTop: 10, marginBottom: 20 }}
                    >
                      {!mediaJPG && __('Upload image', 'gutenberg-examples')}
                    </Button>
                  )}
                />
              </MediaUploadCheck>
            )}
            {mediaJPG && (
              <div
                className="block-library-picture__dimensions__row"
                style={{ marginBottom: 20, marginTop: 10 }}
              >
                <div
                  className="block-library-image__dimensions__row"
                  style={{ position: 'relative' }}
                >
                  <img src={mediaJPG} alt={mediaAlt} />
                  <div
                    className="picture-block-toolbar"
                    style={{ position: 'absolute', top: 0, right: 0 }}
                  >
                    <Toolbar>
                      <MediaUploadCheck>
                        <MediaUpload
                          onSelect={onSelectJpgImage}
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
                      <IconButton
                        className="components-toolbar__control"
                        label={__('Remove media')}
                        icon="trash"
                        onClick={onChangeRemoveJpg}
                      />
                    </Toolbar>
                  </div>
                </div>
              </div>
            )}
          </div>
          {mediaJPG && (
            <TextareaControl
              label={__('Alt Text (Alternative Text)')}
              value={mediaAlt}
              onChange={onChangenewAlt}
              help={
                <>
                  <ExternalLink href="https://www.w3.org/WAI/tutorials/images/decision-tree">
                    {__('Describe the purpose of the image')}
                  </ExternalLink>
                  {__('Leave empty if the image is purely decorative.')}
                </>
              }
            />
          )}
        </PanelBody>

        <PanelBody title={__('Source Settings')} initialOpen={false}>
          <SelectControl
            label={__('Image type')}
            value={type}
            options={[
              { value: '', label: 'JPG/PNG' },
              { value: 'image/webp', label: 'WebP' },
            ]}
            onChange={onChangeType}
          />
          <TextControl
            label={__('Media attribute')}
            help={__('Enter the min-width in pixels')}
            value={mediaSource}
            onChange={onChangeMedia}
          />
          {sourceTag && (
            <div className="source-tag-2" style={{ marginBottom: 20 }}>
              {!sourceURL && (
                <MediaUploadCheck>
                  <MediaUpload
                    onSelect={onSelectSource}
                    allowedTypes="image"
                    value={mediaID}
                    render={({ open }) => (
                      <Button
                        className={
                          sourceURL ? 'image-button' : 'button button-large'
                        }
                        onClick={open}
                      >
                        {!sourceURL && __('Upload Image', 'gutenberg-examples')}
                      </Button>
                    )}
                  />
                </MediaUploadCheck>
              )}
              {sourceURL && (
                <>
                  <div
                    className="block-library-picture__dimensions__row"
                    style={{ marginBottom: 20, marginTop: 10 }}
                  >
                    <div
                      className="block-library-image__dimensions__row"
                      style={{ position: 'relative' }}
                    >
                      <p style={{ fontWeight: 700 }}>{__('Source 2')}</p>
                      <u>{sourceURL}</u>
                      <div
                        className="picture-block-toolbar"
                        style={{ position: 'absolute', top: -10, right: 0 }}
                      >
                        <Toolbar>
                          <MediaUploadCheck>
                            <MediaUpload
                              onSelect={onSelectSource}
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
                </>
              )}
            </div>
          )}
          {sourceTag && sourceURL && (
            <>
              <SelectControl
                label={__('Image type')}
                value={sourceType}
                options={[
                  { value: '', label: 'JPG/PNG' },
                  { value: 'image/webp', label: 'WebP' },
                ]}
                onChange={onChangeSourceType}
              />
              <TextControl
                label={__('Media attribute')}
                help={__('Enter the min-width in pixels')}
                value={sourceMedia}
                onChange={onChangeSourceMedia}
              />
            </>
          )}
          <ToggleControl
            label={__('Additional source')}
            help={__('Add one more tag')}
            checked={sourceTag}
            onChange={onChangeSourceTag}
          />
        </PanelBody>

        <PanelBody title={__('Advanced Settings')} initialOpen={false}>
          <ToggleControl
            label={__('Lazy Loading')}
            help={__('Loads image only when user is close to seeing it')}
            checked={loading === 'lazy'}
            onChange={onChangeToggleLazyLoad}
          />
          <ToggleControl
            label={__('Pixel or Width descriptors')}
            help={__('You need to upload 2 images')}
            checked={toggleField}
            onChange={onChangeToggleField}
          />
        </PanelBody>
        {toggleField && (
          <>
            <Thumbnails
              conditional={sourceTag && sourceURL && true}
              conditional2={!!sourceTag}
              toggle={!!toggleField}
            />
            <Tabs toggle={!!toggleField} />
          </>
        )}
      </InspectorControls>

      <div className="picture-image">
        {!mediaURL && (
          <MediaPlaceholder
            labels={__('Image')}
            className={className}
            onSelect={onSelectImage}
            allowedTypes="image"
            value={mediaID}
          />
        )}
        {mediaURL && (
          <figure className={className} style={{ margin: 0 }}>
            <img src={mediaURL} alt={mediaAlt} />
          </figure>
        )}
      </div>
    </div>
  );
}

export default edit;
