const ColorTitle = ({ color, title }) => {
    return(
        <div style={ {color:color} }>
            <h1>{title}</h1>
        </div>
    );
}

export default ColorTitle;