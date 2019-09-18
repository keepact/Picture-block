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
			},
			setAttributes,
		} = props;
		
		const onSelectImage = ( media ) => {
			setAttributes( {
				mediaURL: media.url,
				mediaID: media.id,
				mediaAlt: media.alt,
			} );
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
		
		const [ toggled, setToggled ] = useState( sizes );

		useEffect(() => {
			// Update the Atribute after new state using hooks instead of classes
			setAttributes( { sizes: toggled } );
		}, [toggled]);

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
									) }
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
						label="Server Scale"
						help="You need to upload 3 images"
						checked={ toggleField }
						onChange={ onChangeToggleField }
					/>
					<PanelBody title={ __( 'Source Settings' ) } initialOpen={ false }>
						<TextControl
							label="Media Atribute"
							help="Enter the min-width em pixels."
							value={ mediaSource }
							onChange={ onChangeMedia }
						/>

						<SelectControl
							label="Predefined Size"
							value={ selectSize }
							options={
								[
									{ value: '100vw', label: '100vw' },
									{ value: '80vw', label: '80vw' },
									{ value: '50vw', label: '50vw' },
									{ value: '25vw', label: '25vw' },
								]
							}
							onChange={ onChangeSize }
						/>
						<div className="block-library-image__dimensions__row">
								<ButtonGroup aria-label={ __( 'Image Size' ) }>
									{ [ '25vw', '50vw', '75vw', '100vw' ].map( ( scale ) => {
										return (
											<Button
												key={ scale }
												isSmall
												isPrimary={toggled === scale}
												aria-pressed={toggled === scale}
												onClick={() => setToggled(  toggled === scale ? null: scale )}
											>
												{ scale }
											</Button>
										);
									} ) }
								</ButtonGroup>
							</div>
					</PanelBody>
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
						<div>			
							<figure className={ className } style={ { textAlign: alignment, margin: 0 } } >
								<img src={ mediaURL } alt={ mediaAlt } sizes={ sizes } />
							</figure>
						</div> )
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
			},
		} = props;
		return (
			<picture className={ className }>
				<RichText.Content tagName="source" media={ `(min-width:${ mediaSource })` } type="image/webp" srcset={ mediaURL + `.webp` } sizes={ sizes } />
				
				{
					mediaURL && (
						<img className={ mediaID ? `wp-image-${ mediaID }-align-${ props.attributes.alignment }` : null } src={ mediaURL } alt={ newAlt } />
					)
				}
			</picture>
		);
	},
} );
