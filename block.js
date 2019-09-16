/* global wp */
import classnames from 'classnames';
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
	SVG,
	Path,
	Rect, 
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
		alignment: {
            type: 'string',
            default: 'none',
		},
		media: {
			type: 'string',
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
				media,
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

		const mediaPreview = ( !! mediaID && <img
			alt={ __( 'Edit image' ) }
			title={ __( 'Edit image' ) }
			className={ 'edit-image-preview' }
			src={ mediaID }	/> 
		);

		const editImageIcon = ( 
			<SVG width={ 20 } height={ 20 } viewBox="0 0 20 20"><Rect x={ 11 } y={ 3 } width={ 7 } height={ 5 } rx={ 1 } /><Rect x={ 2 } y={ 12 } width={ 7 } height={ 5 } rx={ 1 } /><Path d="M13,12h1a3,3,0,0,1-3,3v2a5,5,0,0,0,5-5h1L15,9Z" /><Path d="M4,8H3l2,3L7,8H6A3,3,0,0,1,9,5V3A5,5,0,0,0,4,8Z" /></SVG> );

		const onChangeAlignment = ( newAlignment ) => {
            props.setAttributes( { alignment: newAlignment === undefined ? 'none' : newAlignment } );
		};

		const onChangeMedia = ( newValue ) => {
			setAttributes( { media: newValue } );
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
		
		const [ clicked, setClicked ] = useState( false );

		useEffect(() => {
			// Update the Atribute using the browser API
			setAttributes( { sizes: toggled } );
		});

		return (
			<div className={ className }>
				<BlockControls>
                        <AlignmentToolbar
                            value={ alignment }
                            onChange={ onChangeAlignment }
                        />

						<Toolbar>
						{ [ 'test' ].map( ( edit ) => {
							return (
							<IconButton
								className={ classnames('components-icon-button components-toolbar__control', { 'is-active': clicked }) }
								label={ __( 'Edit image' ) }
								aria-pressed={clicked === edit}
								onClick={() => setClicked( clicked === edit ? null: edit )}
								icon={ editImageIcon }
							/>
							);
									} ) }
						</Toolbar>

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
							value={ media }
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
								mediaPreview={ mediaPreview }
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
				media,
				newAlt,
				sizes,
			},
		} = props;
		return (
			<picture className={ className }>
				<RichText.Content tagName="source" media={ `(min-width:${ media })` } type="image/webp" srcset={ mediaURL + `.webp` } sizes={ sizes } />
				
				{
					mediaURL && (
						<img className={ mediaID ? `wp-image-${ mediaID }-align-${ props.attributes.alignment }` : null } src={ mediaURL } alt={ newAlt } />
					)
				}
			</picture>
		);
	},
} );
