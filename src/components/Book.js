
function Book(props){
    return (
        <div>
            <img src={props.image} alt={props.alt}/>
            <h3>{ props.image }</h3>
            <h1>{ props.title }</h1>
            <h3>{ props.description }</h3>
            
        </div>
    );
}

export default Book