const { RichText } = wp.blockEditor;

function save({ attributes }) {
  const {
    mediaID,
    mediaURL,
    mediaJPG,
    mediaSource,
    mediaAlt,
    sizes,
    href,
    toggleField,
    smallThumb,
    mediumThumb,
    originalSizeThumb,
    smallSizeThumb,
    mediumSizeThumb,
    linkTarget,
    linkClass,
    rel,
    type,
    loading,
    sourceTag,
    sourceURL,
    sourceMedia,
    sourceType,
    sourceSize,
    sourceThumb,
    sourceThumb2,
    originalSourceThumb,
    smallSourceThumb,
    mediumSourceThumb,
    sourceScale,
  } = attributes;

  const source = (
    <>
      {!sourceTag && (
        <source
          media={`(min-width:${mediaSource})`}
          type={type}
          data-srcset={mediaURL}
        />
      )}
      {sourceTag && (
        <>
          <source
            media={`(min-width:${mediaSource})`}
            type={type}
            data-srcset={mediaURL}
          />
          <source
            media={`(min-width:${sourceMedia})`}
            type={sourceType}
            data-srcset={sourceURL}
          />
        </>
      )}
    </>
  );

  const scale = (
    <>
      {toggleField ? (
        <RichText.Content
          tagName="source"
          media={`(min-width:${mediaSource})`}
          type={type}
          data-srcset={`${mediaURL} ${originalSizeThumb}, ${smallThumb} ${smallSizeThumb}, ${mediumThumb} ${mediumSizeThumb}`}
          data-sizes={sizes}
        />
      ) : (
        source
      )}

      {sourceTag && toggleField && !sourceScale && (
        <source
          media={`(min-width:${sourceMedia})`}
          type={sourceType}
          data-srcset={sourceURL}
        />
      )}

      {sourceTag && toggleField && sourceScale && (
        <RichText.Content
          tagName="source"
          media={`(min-width:${sourceMedia})`}
          type={sourceType}
          data-srcset={`${sourceURL} ${originalSourceThumb}, ${sourceThumb} ${smallSourceThumb}, ${sourceThumb2} ${mediumSourceThumb}`}
          data-sizes={sourceSize}
        />
      )}
    </>
  );

  const image = (
    <picture>
      {scale}
      <img
        data-src={mediaJPG}
        alt={mediaAlt}
        loading={loading}
        className={mediaID ? `wp-image-${mediaID} lazyload` : null}
      />
    </picture>
  );

  const figure = (
    <>
      {href ? (
        <a className={linkClass} href={href} target={linkTarget} rel={rel}>
          {image}
        </a>
      ) : (
        image
      )}
    </>
  );

  return <div>{figure}</div>;
}

export default save;
