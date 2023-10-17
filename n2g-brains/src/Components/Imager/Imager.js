const Imager = ({
    width,
    src,
    alt
}) => {
    return (
        <img width={width || '200px'} src={src} alt={alt || 'some image'} />
    )
}

export default Imager