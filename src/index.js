const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, ColorPalette } = wp.blockEditor;
const { PanelBody } = wp.components;

registerBlockType('ifp-block/custom-block', {
    title: 'Custom Block',
    icon: 'smiley',
    category: 'design',
    attributes: {
        content: {
            type: 'string',
            source: 'html',
            selector: 'p',
        },
        backgroundColor: {
            type: 'string',
            default: '#FFFFFF', // Default background color.
        },
    },

    edit: ({ attributes, setAttributes }) => {
        const { content, backgroundColor } = attributes;

        return (
            <>
                <InspectorControls>
                    <PanelBody title="Background Color">
                        <ColorPalette
                            value={backgroundColor}
                            onChange={(color) => setAttributes({ backgroundColor: color })}
                        />
                    </PanelBody>
                </InspectorControls>
                <RichText
                    tagName="p"
                    style={{ backgroundColor }}
                    value={content}
                    onChange={(newContent) => setAttributes({ content: newContent })}
                />
            </>
        );
    },

    save: ({ attributes }) => {
        const { content, backgroundColor } = attributes;
        return (
            <RichText.Content
                tagName="p"
                style={{ backgroundColor }}
                value={content}
            />
        );
    },
});
