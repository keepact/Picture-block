/* global wp */
import ImageLink from './imagelink';
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
	InspectorControls,
} = wp.blockEditor;
const { 
	Button, 
	TextControl,
	ToggleControl,
	PanelBody,
	TextareaControl,
	ExternalLink, 
	ButtonGroup,
	Toolbar,
	IconButton,
	SelectControl,
	TabPanel,
} = wp.components;

registerBlockType( 'gutenberg-examples/example-01-picture-card-esnext', {
	title: __( 'Picture', 'gutenberg-examples' ),
	description: __( 'A block with Picture tag functionality' ),
	icon: 'format-image',
	category: 'layout',
	supports: { 
        align: true,
    },
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
			default: 'auto'
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
	},
	edit: ( props ) => {
		const {
			className,
			attributes: {
				mediaID,
				mediaURL,
				mediaJPG,
				mediaAlt, 
				toggleField, 
				mediaSource,
				sizes,
				type,
				loading,
				sourceTag,
				sourceURL,
				sourceType,
				sourceMedia,
				smallThumb,
				mediumThumb,
				originalSizeThumb,
				smallSizeThumb,
				mediumSizeThumb,
				originalSourceThumb,
				smallSourceThumb,
				mediumSourceThumb,
				sourceThumb,
				sourceThumb2,
				sourceSize,
				sourceScale,
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
				mediaAlt: original.alt,
			});
		};

		const onSelectSource = ( image ) => {
			setAttributes( {
				sourceURL: image.url,
				mediaID: image.id,
			});
		};

		const onSelectSourceThumb = ( regular ) => {
			setAttributes( {
				sourceThumb: regular.url,
				mediaID: regular.id,
			});
		};

		const onSelectSourceThumb2 = ( large ) => {
			setAttributes( {
				sourceThumb2: large.url,
				mediaID: large.id,
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

		const onChangeMedia = ( newValue ) => {
			setAttributes( { mediaSource: newValue } );
		};

		const onChangeSourceMedia = ( newValue ) => {
			setAttributes( { sourceMedia: newValue } );
		};

		const onChangeToggleField = ( newValue ) => {
			setAttributes( { toggleField: newValue } );
		};

		const onChangeToggleLazyLoad = ( newValue ) => {
			const loading = newValue ? 'lazy' : 'auto';
			
			setAttributes( { loading, } );
		};

		const onChangenewAlt = ( newAlt ) => {
			setAttributes( { mediaAlt: newAlt } );
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

		const onChangeSourceOriginalThumb = ( newValue ) => {
			setAttributes( { originalSourceThumb: newValue } );
		};

		const onChangeSourceSmallThumb = ( newValue ) => {
			setAttributes( { smallSourceThumb: newValue } );
		};

		const onChangeSourceMediumThumb = ( newValue ) => {
			setAttributes( { mediumSourceThumb: newValue } );
		};

		const onChangeSourceTag = ( newValue ) => {
			setAttributes( { sourceTag: newValue } );
		};

		const onChangeSourceScale = ( newValue ) => {
			setAttributes( { sourceScale: newValue } );
		};

		const onChangeRemoveJpg = () => {
			setAttributes( { mediaJPG: undefined, mediaAlt: undefined } )
		};

		const onChangeType = ( newValue ) => {
			const type = newValue ? 'image/webp' : null;
			
			setAttributes( { type, } );
		};

		const onChangeSourceType = ( newValue ) => {
			const sourceType = newValue ? 'image/webp' : null;
			
			setAttributes( { sourceType, } );
		};
		
		// Set the initial state of the Component
		const [ size, setSizes ] = useState( sizes );
		const [ sizeSrc, setSizeSrc ] = useState( sourceSize );

		// Update the Component after new state is set
		// Equivalent to componentDidMount in Classes
		useEffect(() => {
				setAttributes( { sizes: size } );
				
			// Starts after each new render. Here the variables determines when the function is called
		}, [size]);

		useEffect(() => {
			setAttributes( { sourceSize: sizeSrc } );			
		}, [sizeSrc]);

		useEffect(() => {
			if (toggleField === false) {
			setAttributes( { 
				smallSizeThumb: undefined,
				mediumSizeThumb: undefined,
				originalSizeThumb: undefined,
				smallThumb: undefined,
				mediumThumb: undefined,
				smallSourceThumb: undefined,
				mediumSourceThumb: undefined,
				originalSourceThumb: undefined,
				sourceThumb: undefined,
				sourceThumb2: undefined } );
			}
		}, [toggleField]);

 		
		return (
			<div className={ className }>
				<BlockControls>
					{ mediaURL && (
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
					<ImageLink { ...props } />
                </BlockControls>
				
				<InspectorControls>
					<PanelBody title={ __( 'Image Callback' ) } initialOpen={ true }>
						<div className="media-jpg-image">
							{ ! mediaJPG && (
									<p className="block-library-image__dimensions__row" style={{fontWeight : 700, marginTop : 20}}>
										{ __( 'Note: Enter one image callback for crossbrowser support' ) }
									</p>
								)
							} 
							{ ! mediaJPG && (
								<MediaUploadCheck>
									<MediaUpload
										onSelect={ onSelectJpgImage }
										allowedTypes="image"
										value={ mediaID }
										render={ ( { open } ) => (
											<Button className={ mediaJPG ? 'image-button' : 'button button-large' } onClick={ open } style={{marginTop : 10, marginBottom : 20}}>
												{ ! mediaJPG && __( 'Upload image', 'gutenberg-examples' ) }
											</Button>
										)}	
									/>
								</MediaUploadCheck>
							)} 
							{ mediaJPG && (
								<div className="block-library-picture__dimensions__row" style={{marginBottom : 20, marginTop : 10}}>
									<div className="block-library-image__dimensions__row" style={{position : 'relative'}}> 
										<img src={ mediaJPG } alt={ mediaAlt } />
										<div className="picture-block-toolbar" style={{ position: 'absolute', top: 0, right: 0 }}>
											<Toolbar>
												<MediaUploadCheck>
													<MediaUpload
														onSelect={ onSelectJpgImage }
														allowedTypes="image"
														value={ mediaID }
														render={ ( { open } ) => (
															<IconButton
																className="components-toolbar__control"
																label={ __( 'Edit media' ) }
																icon="edit"
																onClick={ open }
															/>
														)}			
													/>
												</MediaUploadCheck>
												<IconButton
													className="components-toolbar__control"
													label={ __( 'Remove media' ) }
													icon="trash"
													onClick={ onChangeRemoveJpg }
												/>		
											</Toolbar>
										</div>
									</div>
								</div> 
							)}
						</div>
						{ mediaJPG && (
							<TextareaControl
								label={ __( 'Alt Text (Alternative Text)' ) }
								value={ mediaAlt }
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
						)}
					</PanelBody>

					<PanelBody title={ __( 'Source Settings' ) } initialOpen={ false }>
						<SelectControl
							label={ __( 'Image type' ) }
							value={ type }
							options={
								[
									{ value: '', label: 'JPG/PNG' },
									{ value: 'image/webp', label: 'WebP' },
								]
							}
							onChange={ onChangeType }
						/>
						<TextControl
							label={ __( 'Media attribute' ) }
							help={ __( 'Enter the min-width in pixels' ) }
							value={ mediaSource }
							onChange={ onChangeMedia }
						/>
						{ sourceTag && (
							<div className="source-tag-2" style={{ marginBottom : 20 }}>
								{ ! sourceURL && (
									<MediaUploadCheck>
										<MediaUpload
											onSelect={ onSelectSource }
											allowedTypes="image"
											value={ mediaID }
											render={ ( { open } ) => (
												<Button className={ sourceURL ? 'image-button' : 'button button-large' } onClick={ open }>
													{ ! sourceURL && __( 'Upload Image', 'gutenberg-examples' ) }
												</Button>
											)}
										/>
									</MediaUploadCheck>
								)}
								{ sourceURL && ( 
									<>
										<div className="block-library-picture__dimensions__row" style={{marginBottom : 20, marginTop : 10}}>
											<div className="block-library-image__dimensions__row" style={{position : 'relative'}}> 
												<p style={{fontWeight : 700}}>{ __( 'Source 2' ) }</p>
												<u>{ sourceURL }</u> 
												<div className="picture-block-toolbar" style={{ position: 'absolute', top: -10, right: 0 }}>
													<Toolbar>
														<MediaUploadCheck>
															<MediaUpload
																onSelect={ onSelectSource }
																allowedTypes="image"
																value={ mediaID }
																render={ ( { open } ) => (
																	<IconButton
																		className="components-toolbar__control"
																		label={ __( 'Edit media' ) }
																		icon="edit"
																		onClick={ open }
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
						{ sourceTag && sourceURL && (
							<>
								<SelectControl
									label={ __( 'Image type' ) }
									value={ sourceType }
									options={
										[
											{ value: '', label: 'JPG/PNG' },
											{ value: 'image/webp', label: 'WebP' },
										]
									}
									onChange={ onChangeSourceType }
								/>
								<TextControl
									label={ __( 'Media attribute' ) }
									help={ __( 'Enter the min-width in pixels' ) }
									value={ sourceMedia }
									onChange={ onChangeSourceMedia }
								/>
							</>
						)}
						<ToggleControl
							label={ __( 'Additional source' ) }
							help={ __( 'Add one more tag' ) }
							checked={ sourceTag }
							onChange={ onChangeSourceTag }
						/>
					</PanelBody>

					<PanelBody title={ __( 'Advanced Settings' ) } initialOpen={ false }>
						<ToggleControl
							label={ __( 'Lazy Loading' ) }
							help={ __( 'Loads image only when user is close to seeing it' ) }
							checked={ loading === 'lazy' }
							onChange={ onChangeToggleLazyLoad }
						/>
						<ToggleControl
							label={ __( 'Pixel or Width descriptors' ) }
							help={ __( 'You need to upload 2 images' ) }
							checked={ toggleField }
							onChange={ onChangeToggleField }
						/>
					</PanelBody>
					{ toggleField && (
						<>
							<PanelBody title={ __( 'Thumbnails' ) } initialOpen={ false }>
								{ ! smallThumb && (
									<div className="media-small-image" style={{ marginTop : 10 }}>
										<MediaUploadCheck>
											<MediaUpload
												onSelect={ onSelectSmallThumb  }
												allowedTypes="image"
												value={ mediaID }
												render={ ( { open } ) => (
													<Button className={ smallThumb ? 'image-button' : 'button button-large' } onClick={ open }>
														{ ! smallThumb && __( 'Upload Small Image', 'gutenberg-examples' ) }
													</Button>
												)}
											/>
										</MediaUploadCheck>
									</div>
								)}
								{ smallThumb && (
									<div className="block-library-picture__dimensions__row" style={{marginBottom : 20, position: 'relative'}}>
										<p style={{fontWeight : 700}}>{ __( 'Small' ) }</p>
										<div className="block-library-image__dimensions__row"> 
											<u>{ smallThumb }</u> 
											<div className="picture-block-toolbar" style={{ position: 'absolute', top: -10, right: 0 }}>
												<Toolbar>
													<MediaUploadCheck>
														<MediaUpload
															onSelect={ onSelectSmallThumb }
															allowedTypes="image"
															value={ mediaID }
															render={ ( { open } ) => (
																<IconButton
																	className="components-toolbar__control"
																	label={ __( 'Edit media' ) }
																	icon="edit"
																	onClick={ open }
																/>
															)}			
														/>
													</MediaUploadCheck>
												</Toolbar>
											</div>
										</div>
									</div>
								)}
								{ ! mediumThumb && (
									<div className="media-medium-image" style={{ marginTop : 10 }}>
										<MediaUploadCheck>
											<MediaUpload
												onSelect={ onSelectMediumThumb  }
												allowedTypes="image"
												value={ mediaID }
												render={ ( { open } ) => (
													<Button className={ mediumThumb ? 'image-button' : 'button button-large' } onClick={ open }>
														{ ! mediumThumb && __( 'Upload Medium Image', 'gutenberg-examples' ) }
													</Button>
												)}
											/>
										</MediaUploadCheck>
									</div>
								)}
								{ mediumThumb && (
									<div className="block-library-picture__dimensions__row" style={{marginBottom : 20, position: 'relative'}}>
										<p style={{fontWeight : 700}}>{ __( 'Medium' ) }</p>
										<div className="block-library-image__dimensions__row"> 
											<u>{ mediumThumb }</u> 
											<div className="picture-block-toolbar" style={{ position: 'absolute', top: -10, right: 0 }}>
												<Toolbar>
													<MediaUploadCheck>
														<MediaUpload
															onSelect={ onSelectMediumThumb }
															allowedTypes="image"
															value={ mediaID }
															render={ ( { open } ) => (
																<IconButton
																	className="components-toolbar__control"
																	label={ __( 'Edit media' ) }
																	icon="edit"
																	onClick={ open }
																/>
															)}			
														/>
													</MediaUploadCheck>
												</Toolbar>
											</div>
										</div>
									</div>
								)}
								{ sourceTag && sourceScale && (
									<div style={{ position: 'relative', marginTop: 20 }}>
										<hr />	
										<p style={{fontWeight : 700}}>{ __( 'Source 2' ) }</p>
										{ ! sourceThumb && (
											<div className="media-small-image" style={{ marginTop : 10 }}>
												<MediaUploadCheck>
													<MediaUpload
								    					onSelect={ onSelectSourceThumb  }
														allowedTypes="image"
														value={ mediaID }
														render={ ( { open } ) => (
															<Button className={ sourceThumb ? 'image-button' : 'button button-large' } onClick={ open }>
																{ ! sourceThumb && __( 'Upload Small Image', 'gutenberg-examples' ) } 														
															</Button>
														)}
													/>
												</MediaUploadCheck>
											</div>
										)}
										{ sourceThumb && (
											<div className="block-library-picture__dimensions__row" style={{marginBottom : 20, position: 'relative'}}>
												<p style={{fontWeight : 700}}>{ __( 'Small' ) }</p>
												<div className="block-library-image__dimensions__row"> 
													<u>{ sourceThumb }</u> 
													<div className="picture-block-toolbar" style={{ position: 'absolute', top: -10, right: 0 }}>
														<Toolbar>
															<MediaUploadCheck>
																<MediaUpload
																	onSelect={ onSelectSourceThumb }
																	allowedTypes="image"
																	value={ mediaID }
																	render={ ( { open } ) => (
																		<IconButton
																			className="components-toolbar__control"
																			label={ __( 'Edit media' ) }
																			icon="edit"
																			onClick={ open }
																		/>
																	)}			
																/>
															</MediaUploadCheck>
														</Toolbar>
													</div>
												</div>
											</div>
										)}
										{ ! sourceThumb2 && (
											<div className="media-small-image" style={{ marginTop : 10 }}>
												<MediaUploadCheck>
													<MediaUpload
								    					onSelect={ onSelectSourceThumb2  }
														allowedTypes="image"
														value={ mediaID }
														render={ ( { open } ) => (
															<Button className={ sourceThumb2 ? 'image-button' : 'button button-large' } onClick={ open }>
																{ ! sourceThumb2 && __( 'Upload Medium Image', 'gutenberg-examples' ) } 														
															</Button>
														)}
													/>
												</MediaUploadCheck>
											</div>
										)}
										{ sourceThumb2 && (
											<div className="block-library-picture__dimensions__row" style={{marginBottom : 20, position: 'relative'}}>
												<p style={{fontWeight : 700}}>{ __( 'Medium' ) }</p>
												<div className="block-library-image__dimensions__row"> 
													<u>{ sourceThumb2 }</u> 
													<div className="picture-block-toolbar" style={{ position: 'absolute', top: -10, right: 0 }}>
														<Toolbar>
															<MediaUploadCheck>
																<MediaUpload
																	onSelect={ onSelectSourceThumb2 }
																	allowedTypes="image"
																	value={ mediaID }
																	render={ ( { open } ) => (
																		<IconButton
																			className="components-toolbar__control"
																			label={ __( 'Edit media' ) }
																			icon="edit"
																			onClick={ open }
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
								{ sourceTag && sourceURL && (
									<div className="components-base-control components-toggle-control" style={{marginTop: 20}}>
										<ToggleControl
											label={ __( 'Thumbnails for Additional source' ) }
											checked={ sourceScale }
											onChange={ onChangeSourceScale }
										/>
									</div>
								)}
							</PanelBody>
							
							<PanelBody title={ __( 'Image Settings' ) } initialOpen={ false }>
								<TabPanel className="uagb-inspect-tabs uagb-inspect-tabs-col-2"
									activeClass="active-tab"
									tabs={ [
										{
											name: "Source",
											title: __( "Source" ),
											className: "picture-thumb-source",
										},
										{
											name: "Source 2",
											title: __( "Source 2" ),
											className: "picture-thumb-source",
										},
							    	]}
								>
								{
									( tab ) => {
										let tabout

										if ( "Source" === tab.name ) {
											tabout = (
                                            	<>
											    	<TextControl
									                	label={ __( 'Original image' ) }
									                	help={
										                	<>
											                	<ExternalLink href="https://www.html5rocks.com/en/tutorials/responsive/picture-element/#toc-pixel-density-descriptors">
												                	{ __( 'Combine with pixel density or width descriptors' ) }
											                	</ExternalLink>
											                	{ __( 'Leave blank if using pixel method.' ) }
										                	</>
									                	}
									                	value={ originalSizeThumb }
									                	onChange={ onChangeSizeOriginalThumb }
								                	/>

								                	<div className="block-library-image__dimensions">
									                	<p className="block-library-image__dimensions__row">
										                	{ __( 'Thumbnails Scale' ) }
									                	</p>

									                	<div className="block-library-image__dimensions__row">
										                	<TextControl
											                	className="block-library-image__dimensions__width"
											                	label={ __( 'Small' ) }
											                	help={ __( 'e.g., 300w or 1x' ) }
											                	value={ smallSizeThumb }
											                	onChange={ onChangeSizeSmallThumb }
										                	/>
										                	<TextControl
											                	className="block-library-image__dimensions__height"
											                	label={ __( 'Medium' ) }
											                	help={ __( 'e.g., 768w or 2x' ) }
											                	value={ mediumSizeThumb }
											                	onChange={ onChangeSizeMediumThumb }
										                	/>
                                                    	</div>
									                	<div className="block-library-image__dimensions__row">
										                	<div>
											                	<p className="block-library-image__dimensions__row">
												                	{ __( 'Sizes attribute' ) }
											                	</p>
											                	<p className="components-base-control__help">
												                	{ __( 'Leave unselected if using pixel method.' ) }
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
												                    })}
											                    </ButtonGroup>
										                    </div>
									                    </div>
							    	                </div>
                                                </>
										    )
									    } else {
										        tabout = (
                                                    <>
                                                        <TextControl
												            label={ __( 'Original image' ) }
												            help={
													            <>
														            <ExternalLink href="https://www.html5rocks.com/en/tutorials/responsive/picture-element/#toc-pixel-density-descriptors">
															            { __( 'Combine with pixel density or width descriptors' ) }
													    	        </ExternalLink>
														            { __( 'Leave blank if using pixel method.' ) }
													            </>
												            }
												            value={ originalSourceThumb }
												            onChange={ onChangeSourceOriginalThumb }
											            />

											            <div className="block-library-image__dimensions">
												            <p className="block-library-image__dimensions__row">
													            { __( 'Thumbnails Scale' ) }
												            </p>

												            <div className="block-library-image__dimensions__row">
													            <TextControl
														            className="block-library-image__dimensions__width"
														            label={ __( 'Small' ) }
														            help={ __( 'e.g., 300w or 1x' ) }
														            value={ smallSourceThumb }
														            onChange={ onChangeSourceSmallThumb }
													            />
													            <TextControl
														            className="block-library-image__dimensions__height"
														            label={ __( 'Medium' ) }
														            help={ __( 'e.g., 768w or 2x' ) }
														            value={ mediumSourceThumb }
														            onChange={ onChangeSourceMediumThumb }
													            />
                                    			            </div>
												            <div className="block-library-image__dimensions__row">
													            <div>
														            <p className="block-library-image__dimensions__row">
															            { __( 'Sizes attribute' ) }
														            </p>
														            <p className="components-base-control__help">
														        	    { __( 'Leave unselected if using pixel method.' ) }
														            </p>
										
														            <ButtonGroup aria-label={ __( 'Image Size' ) }>
															            { [ '25vw', '50vw', '75vw', '100vw' ].map( ( scalesrc ) => {
																            return (
																	            <Button
																		            key={ scalesrc }
																		            isSmall
																		            isPrimary={sizeSrc === scalesrc}
																		            aria-pressed={sizeSrc === scalesrc}
																		            onClick={() => setSizeSrc( sizeSrc === scalesrc ? null: scalesrc )}
																	            >
																		            { scalesrc }
																	            </Button>
																            );
															            })}
														            </ButtonGroup>
													            </div>
												            </div>
                                                        </div>
                                                    </>
										        )
                                            }   
										return <div>{ tabout }</div>
									}}
								</TabPanel>
							</PanelBody>
						</>
					)}					
				</InspectorControls>

				<div className="picture-image">
					{ ! mediaURL && (
							<MediaPlaceholder
								labels={ __( 'Image' ) }
								className={ className }
								onSelect={ onSelectImage }
								allowedTypes="image"
								value={ mediaID }
							/>
						)
					}
					{ mediaURL && (
							<figure className={ className } style={ { margin: 0 } } >
								<img src={ mediaURL } alt={ mediaAlt } />
							</figure>
						)
					}
				</div>
			</div>
		);
	},
	save: ( props ) => {
		const {
			attributes: {
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
			},
		} = props;

		const source = (
			<>
				{ ! sourceTag && (
					<source media={ `(min-width:${ mediaSource })` } type={ type } data-srcset={ mediaURL } />
				)}
				{ sourceTag && (
					<>
						<source media={ `(min-width:${ mediaSource })` } type={ type } data-srcset={ mediaURL } />
						<source media={ `(min-width:${ sourceMedia })` } type={ sourceType } data-srcset={ sourceURL } />
					</>
				)}
			</>	
		);

		const scale = (
			<>
				{ toggleField ? (
					<RichText.Content 
						tagName="source" 
						media={ `(min-width:${ mediaSource })` } 
						type={ type } 
						data-srcset={ mediaURL + ` ${originalSizeThumb}, ` + smallThumb + ` ${smallSizeThumb}, ` + mediumThumb + ` ${mediumSizeThumb}` } 
						data-sizes={ sizes } 
					/>
                    ) : source 
				}
				
				{ sourceTag && toggleField && ! sourceScale && (
					<source media={ `(min-width:${ sourceMedia })` } type={ sourceType } data-srcset={ sourceURL } />
				)}

				{ sourceTag && toggleField && sourceScale && (
					<RichText.Content 
						tagName="source" 
						media={ `(min-width:${ sourceMedia })` } 
						type={ sourceType } 
						data-srcset={ sourceURL + ` ${originalSourceThumb}, ` + sourceThumb + ` ${smallSourceThumb}, ` + sourceThumb2 + ` ${mediumSourceThumb}` } 
						data-sizes={ sourceSize } 
					/>
					) 
				}				
			</>
		);

		const image = (
			<picture>
				{ scale }
				<img
					data-src={ mediaJPG }
					alt={ mediaAlt }
					loading={ loading }
					className={ mediaID ? `wp-image-${ mediaID } lazyload` : null }
				/>
			</picture>
		);

		const figure = (
			<>
				{ href ? (
					<a
						className={ linkClass }
						href={ href }
						target={ linkTarget }
						rel={ rel }
					>
						{ image }
					</a>
				) : image }
			</>
		);

		return (
			<div>
							
            	{ figure }

			</div>
		);
	},
} );
