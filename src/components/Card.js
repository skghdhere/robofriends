


const Card = (props) => {
    const { id, name, email } = props;
    let src = `https://robohash.org/${id}?size=200x200`
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 wr">        
            <img src={ src} alt='robots' />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;