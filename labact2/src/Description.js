function Description(props) {
    return (
        <div className="description">
            <img src={props.photo} alt={props.name} />
                <div className="stores">
                    <h3>{props.name}</h3>
                    <p>{props.description}</p>
                </div>
        </div>
    );
  }

  export default Description;