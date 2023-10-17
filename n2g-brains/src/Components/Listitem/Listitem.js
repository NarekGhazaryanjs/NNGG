const Listitem = ({
   className,
   children
}) => {
    return (
        <li className={className}>
            {children}
        </li>
    )
}

export default Listitem