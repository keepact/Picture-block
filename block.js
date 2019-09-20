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
		selectSize: {
			type: 'string',
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
	},
	edit: ( props ) => {
		const {
			className,
			attributes: {
				mediaID,
				mediaURL,
				alignment,
				mediaAlt, 
				toggleField, 
				selectSize,
				mediaSource,
				newAlt,
				sizes,
				smallThumb,
				mediumThumb,
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

		const onChangeAlignment = ( newAlignment ) => {
            props.setAttributes( { alignment: newAlignment === undefined ? 'none' : newAlignment } );
		};

		const onChangeMedia = ( newValue ) => {
			setAttributes( { mediaSource: newValue } );
		};

		const onChangeToggleField = ( newValue ) => {
			setAttributes( { toggleField: newValue } );
		};

		const onChangeSize = ( newValue ) => {
			setAttributes( { selectSize: newValue } );
		};

		const onChangenewAlt = ( newValue ) => {
			setAttributes( { newAlt: newValue } );
		};

		const onChangeSmallThumb = ( newValue ) => {
			setAttributes( { smallThumb: newValue } );
		};

		const onChangeMediumThumb = ( newValue ) => {
			setAttributes( { mediumThumb: newValue } );
		};
		
		// Set the initial state of the Component
		const [ size, setSizes ] = useState( sizes );

		// Update the Component after new state is set
		// Equivalent to componentDidMount in Classes
		useEffect(
			() => {
			setAttributes( { sizes: size } );

			// Starts after each new render. Here the variables determines when the function is called
		}, [size]);

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
						<PanelBody title={ __( 'Source Settings' ) } initialOpen={ false }>
							<TextControl
								label={ __( 'Media Atribute' ) }
								help={ __( 'Enter the min-width in pixels' ) }
								value={ mediaSource }
								onChange={ onChangeMedia }
							/>

							<SelectControl
								label={ __( 'Original image size' ) }
								value={ selectSize }
								options={
									[
										{ value: '100vw', label: '1200px' },
										{ value: '80vw', label: '1024px' },
										{ value: '50vw', label: '800px' },
										{ value: '25vw', label: '600px' },
									]
								}
								onChange={ onChangeSize }
							/>

							<div className="block-library-image__dimensions">
								<p className="block-library-image__dimensions__row">
									{ __( 'Webp Thumbnails sizes (eg: 300w)' ) }
								</p>

								<div className="block-library-image__dimensions__row">
									<TextControl
										className="block-library-image__dimensions__width"
										label={ __( 'Small' ) }
										value={ smallThumb }
										onChange={ onChangeSmallThumb }
									/>
									<TextControl
										className="block-library-image__dimensions__height"
										label={ __( 'Medium' ) }
										value={ mediumThumb }
										onChange={ onChangeMediumThumb }
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
				mediaSource,
				newAlt,
				sizes,
				toggleField,
				smallThumb,
				mediumThumb,
				selectSize,
			},
		} = props;
		return (
			<picture className={ className }>
				{
					! toggleField && (
						<source type="image/webp" srcset={mediaURL + `.webp`} />
					)
				}
				{
					toggleField && (
						<RichText.Content 
							tagName="source" 
							media={ `(min-width:${ mediaSource })` } 
							type="image/webp" 
							srcset={ mediaURL + `.webp ${ selectSize },` + ` ` + mediaURL + `-small.webp ${ smallThumb },` + ` ` + mediaURL + `-medium.webp ${ mediumThumb }` } 
							sizes={ sizes } 
				/>
					)
				}				
				{
					mediaURL && (
						<img className={ mediaID ? `wp-image-${ mediaID }-align-${ props.attributes.alignment }` : null } src={ mediaURL } alt={ newAlt } />
					)
				}
			</picture>
		);
	},
} );
