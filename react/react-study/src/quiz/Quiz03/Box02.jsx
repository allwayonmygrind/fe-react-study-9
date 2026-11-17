function Box2({title, detail}) {
    return (
        <div className="App">
            <div className='textItem'>
                <p className='title'>제목 : {title}</p>
                <p> 내용 : {detail}</p>
            </div>
        </div>
    )
}

// function Box2(props) {
//     return (
//         <div className="App">
//             <div className='textItem'>
//                 <p className='title'>제목 : {props.title}</p>
//                 <p> 내용 : {props.detail}</p>
//             </div>
//         </div>
//     )
// }

export default Box2;