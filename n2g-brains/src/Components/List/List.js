const List = ({
  className,
  children,
}) => {
    return (
        <ol className={className} style={{listStyleType: 'none'}}>
          {children}
        </ol>
    )
}

export default List