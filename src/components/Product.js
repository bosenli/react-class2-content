//component controls the model and structure, app.js provide the content and attribute aka. props
function Product(props){
    return (
        <div>
            <img src={props.image} alt="apple image"/>
            <h3>{ props.image }</h3>
            <h1>{ props.title }</h1>
            <h3>{ props.description }</h3>
            
        </div>
    );
}

export default Product