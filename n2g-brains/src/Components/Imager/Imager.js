const Imager = ({
    width,
    src,
    alt,
    className
}) => {
    return (
        <img className={className} width={width || '200px'} src={src} alt={alt || 'some image'} />
    )
}

export default Imager