// function Button() {
//     const name = 'Edwin'
//     return (
//         <>
//             <button className="bg-button text-white px-5 py-3">{name}</button>
//         </>
//     )
// }

// export default Button

const Button = (props) => {
    
    const { name } = props;
    return (
        <>
            <button className="bg-accent text-white px-5 py-3">{ name }</button>
        </>
    )
}

export default Button