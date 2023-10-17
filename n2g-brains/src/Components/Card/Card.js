const Card = ({
  className,
  children
}) => {
    return (
        <section className={className || 'container'}>
            {children}
        </section>
    )
}

export default Card