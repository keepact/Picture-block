/* global wp */
const { __ } = wp.i18n;
const {
	registerBlockType,
} = wp.blocks;
const {
	useState,
	useEffect,
} = wp.element;
const {
	RichText,
	MediaPlaceholder,
	MediaUpload,
	MediaUploadCheck,
	BlockControls,
	AlignmentToolbar,
	InspectorControls,
} = wp.blockEditor;
const { 
	Button, 
	TextControl,
	ToggleControl,
	SelectControl,
	PanelBody,
	TextareaControl,
	ExternalLink, 
	ButtonGroup,
	Toolbar,
	IconButton,
} = wp.components;

registerBlockType( 'gutenberg-examples/example-01-picture-card-esnext', {
	title: __( 'Picture: Webp Block test', 'gutenberg-examples' ),
	icon: 'index-card',
	category: 'layout',
	attributes: {
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
		alignment: {
            type: 'string',
            default: 'none',
		},
		toggleField: {
			type: 'boolean',
		},
		newAlt: {
			type: 'string',
		},
		sizes: {
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
		},
		smallSizeThumb: {
			type: 'string',
		},
		mediumSizeThumb: {
			type: 'string',
		},
	},
	edit: ( props ) => {
		const {
			className,
			attributes: {
				mediaID,
				mediaURL,
				mediaJPG,
				alignment,
				mediaAlt, 
				toggleField, 
				mediaSource,
				newAlt,
				sizes,
				smallThumb,
				mediumThumb,
				originalSizeThumb,
				smallSizeThumb,
				mediumSizeThumb,
			},
			setAttributes,
		} = props;
		
		const onSelectImage = ( media ) => {
			setAttributes( {
				mediaURL: media.url,
				mediaID: media.id,
				mediaAlt: media.alt,
			});
		};

		const onSelectJpgImage = ( original ) => {
			setAttributes( {
				mediaJPG: original.url,
				mediaID: original.id,
			});
		};

		const onSelectSmallThumb = ( small ) => {
			setAttributes( {
				smallThumb: small.url,
				mediaID: small.id,
			});
		};

		const onSelectMediumThumb = ( medium ) => {
			setAttributes( {
				mediumThumb: medium.url,
				mediaID: medium.id,
			});
		};

		const onChangeAlignment = ( newAlignment ) => {
            props.setAttributes( { alignment: newAlignment === undefined ? 'none' : newAlignment } );
		};

		const onChangeMedia = ( newValue ) => {
			setAttributes( { mediaSource: newValue } );
		};

		const onChangeToggleField = ( newValue ) => {
			setAttributes( { toggleField: newValue } );
		};

		const onChangenewAlt = ( newValue ) => {
			setAttributes( { newAlt: newValue } );
		};

		const onChangeSizeOriginalThumb = ( newValue ) => {
			setAttributes( { originalSizeThumb: newValue } );
		};

		const onChangeSizeSmallThumb = ( newValue ) => {
			setAttributes( { smallSizeThumb: newValue } );
		};

		const onChangeSizeMediumThumb = ( newValue ) => {
			setAttributes( { mediumSizeThumb: newValue } );
		};
		
		// Set the initial state of the Component
		const [ size, setSizes ] = useState( sizes );

		// Update the Component after new state is set
		// Equivalent to componentDidMount in Classes
		useEffect(() => {
			if (toggleField === true) {
				setAttributes( { sizes: size } );
			}

			// The Cleaning function is inside the hook
			// Equivalent to ComponentDidUnmount in Classes
			return () => {
			if (toggleField === false) {
				setAttributes( { 
					smallSizeThumb: undefined,
					mediumSizeThumb: undefined,
					originalSizeThumb: undefined,
					smallThumb: undefined,
					mediumThumb: undefined,
					sizes: undefined,
					mediaSource: undefined } );
			}
			// Starts after each new render. Here the variables determines when the function is called
		}}, [size, toggleField]);

		return (
			<div className={ className }>
				<BlockControls>
                    <AlignmentToolbar
                        value={ alignment }
                        onChange={ onChangeAlignment }
                    />
					{
						mediaURL && (
							<MediaUploadCheck>
								<Toolbar>
									<MediaUpload
										onSelect={ onSelectImage }
										allowedTypes="image"
										value={ mediaID }
										render={ ( { open } ) => (
											<IconButton
												className="components-toolbar__control"
												label={ __( 'Edit media' ) }
												icon="edit"
												onClick={ open }
											/>
											) 	
										}
									/>
								</Toolbar>
							</MediaUploadCheck>
						)
					}
                </BlockControls>
				
				<InspectorControls>
					<div className="media-jpg-image">
						{
							! mediaJPG && (
								<p className="block-library-image__dimensions__row" style={{fontWeight : 700, marginTop : 20}}>
									{ __( 'Note: Enter one JPG callback image for crossbrowser support' ) }
								</p>
							)
						}
							<MediaUploadCheck>
								<MediaUpload
									onSelect={ onSelectJpgImage }
									allowedTypes="image"
									value={ mediaID }
									render={ ( { open } ) => (
										<Button className={ mediaJPG ? 'image-button' : 'button button-large' } onClick={ open } style={{marginTop : 10, marginBottom : 20}}>
											{ ! mediaJPG ? __( 'Upload JPG callback image', 'gutenberg-examples' ) :
												<div className="block-library-image__dimensions__row">
													<p style={{fontWeight : 700}}>{ __( 'JPG Callback' ) }</p> 
													<img src={ mediaJPG } alt={ __( 'Upload Recipe Image', 'gutenberg-examples' ) } />
												</div> 
											}
										</Button>
									)}
								/>
							</MediaUploadCheck>
					</div>
					<TextareaControl
						label={ __( 'Alt Text (Alternative Text)' ) }
						value={ newAlt }
						onChange={ onChangenewAlt }
						help={
							<>
								<ExternalLink href="https://www.w3.org/WAI/tutorials/images/decision-tree">
									{ __( 'Describe the purpose of the image' ) }
								</ExternalLink>
								{ __( 'Leave empty if the image is purely decorative.' ) }
							</>
						}
					/>
					<ToggleControl
						label={ __( 'Server Scale' ) }
						help={ __( 'You need to upload 3 images' ) }
						checked={ toggleField }
						onChange={ onChangeToggleField }
					/>
					{
						toggleField && (
							<PanelBody title={ __( 'Thumbnails' ) } initialOpen={ true }>
								<div className="media-small-image" style={{ marginTop : 10 }}>
									<MediaUploadCheck>
										<MediaUpload
											onSelect={ onSelectSmallThumb  }
											allowedTypes="image"
											value={ mediaID }
											render={ ( { open } ) => (
												<Button className={ smallThumb ? 'image-button' : 'button button-large' } onClick={ open }>
													{ ! smallThumb ? __( 'Upload Small WebP', 'gutenberg-examples' ) : 
														<div className="block-library-image__dimensions__row">
															<p style={{fontWeight : 700}}>{ __( 'Small WebP' ) }</p>
															<u>{ smallThumb }</u> 
														</div>
													}
												</Button>
											)}
										/>
									</MediaUploadCheck>
								</div>
								<div className="media-medium-image" style={{ marginTop : 10 }}>
									<MediaUploadCheck>
										<MediaUpload
											onSelect={ onSelectMediumThumb  }
											allowedTypes="image"
											value={ mediaID }
											render={ ( { open } ) => (
												<Button className={ mediumThumb ? 'image-button' : 'button button-large' } onClick={ open }>
													{ ! mediumThumb ? __( 'Upload Medium WebP', 'gutenberg-examples' ) : 
														<div className="block-library-image__dimensions__row">
															<p style={{fontWeight : 700}}>{ __( 'Medium WebP' ) }</p>
															<u>{ mediumThumb }</u>
														</div>
													}
												</Button>
											)}
										/>
									</MediaUploadCheck>
								</div>
							</PanelBody>
						)
					}
					{
					toggleField && (
						<PanelBody title={ __( 'Source Settings' ) } initialOpen={ false }>
							<TextControl
								label={ __( 'Media Atribute' ) }
								help={ __( 'Enter the min-width in pixels' ) }
								value={ mediaSource }
								onChange={ onChangeMedia }
							/>

							<TextControl
								label={ __( 'Original image size' ) }
								help={ __( 'e.g., 1200w' ) }
								value={ originalSizeThumb }
								onChange={ onChangeSizeOriginalThumb }
							/>

							<div className="block-library-image__dimensions">
								<p className="block-library-image__dimensions__row">
									{ __( 'Webp Thumbnails Scale' ) }
								</p>

								<div className="block-library-image__dimensions__row">
									<TextControl
										className="block-library-image__dimensions__width"
										label={ __( 'Small' ) }
										help={ __( 'e.g., 300w' ) }
										value={ smallSizeThumb }
										onChange={ onChangeSizeSmallThumb }
									/>
									<TextControl
										className="block-library-image__dimensions__height"
										label={ __( 'Medium' ) }
										help={ __( 'e.g., 768w' ) }
										value={ mediumSizeThumb }
										onChange={ onChangeSizeMediumThumb }
									/>
								</div>

								<div className="block-library-image__dimensions__row">
									<div>
										<p className="block-library-image__dimensions__row">
											{ __( 'Sizes attribute' ) }
										</p>
										
										<ButtonGroup aria-label={ __( 'Image Size' ) }>
											{ [ '25vw', '50vw', '75vw', '100vw' ].map( ( scale ) => {
												return (
													<Button
														key={ scale }
														isSmall
														isPrimary={size === scale}
														aria-pressed={size === scale}
														onClick={() => setSizes( size === scale ? null: scale )}
													>
														{ scale }
													</Button>
													);
												}) 
											}
										</ButtonGroup>
									</div>
								</div>
							</div>
						</PanelBody>
						)
					}
				</InspectorControls>

				<div className="picture-image">
					{ 
						! mediaURL && (
							<MediaPlaceholder
								labels={ __( 'Image' ) }
								className={ className }
								onSelect={ onSelectImage }
								allowedTypes="image"
								value={ mediaID }
							/>
						)
					}{ 
						mediaURL && (
							<figure className={ className } style={ { textAlign: alignment, margin: 0 } } >
								<img src={ mediaURL } alt={ mediaAlt } sizes={ sizes } />
							</figure>
						)
					}
				</div>
			</div>
		);
	},
	save: ( props ) => {
		const {
			className,
			attributes: {
				mediaID,
				mediaURL,
				mediaJPG,
				mediaSource,
				newAlt,
				sizes,
				toggleField,
				smallThumb,
				mediumThumb,
				originalSizeThumb,
				smallSizeThumb,
				mediumSizeThumb,
			},
		} = props;
		return (
			<picture className={ className }>
				{
					! toggleField && (
						<source type="image/webp" srcset={ mediaURL } />
					)
				}
				{
					toggleField && (
						<RichText.Content 
							tagName="source" 
							media={ `(min-width:${ mediaSource })` } 
							type="image/webp" 
							srcset={ mediaURL + ` ${originalSizeThumb}, ` + smallThumb + ` ${smallSizeThumb}, ` + mediumThumb + ` ${mediumSizeThumb}` } 
							sizes={ sizes } 
				/>
					)
				}				
				{
					mediaJPG && (
						<img className={ mediaID ? `wp-image-${ mediaID }-align-${ props.attributes.alignment }` : null } src={ mediaJPG } alt={ newAlt } />
					)
				}
			</picture>
		);
	},
} );
