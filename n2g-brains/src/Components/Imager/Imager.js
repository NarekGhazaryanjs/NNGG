const Imager = ({
    width,
    src,
    alt,
    className,
    height
}) => {
    return (
        <img className={className} width={width || '200px'} height={height || '200px'} src={src} alt={alt || 'some image'} />
    )
}

export default Imager