const Card = (props) => {
    return (
        <section className={this.props.className || 'container'}>
            {props.children}
        </section>
    )
}

export default Card