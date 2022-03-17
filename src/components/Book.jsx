function Book(props) {
    return(
<div class="bookDiv">
    <h3> { props.title }</h3>
    <div class="desc">
    <img src= { props.image} alt="Power of Now" width="200" height="200"/>
    <p> { props.description} </p>
    </div>

</div>
    )
}

export default Book