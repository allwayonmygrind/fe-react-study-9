// export default function Box(Props) {
//     // 컴포넌트에서 사용될 매개변수
//     return (
//         <div style={{ backgroundColor: 'lightblue' }}>
//             <h1>{Props.text}</h1>
//             <h2>{Props.detail}</h2>
//         </div>
//     )
// }



// props = { title : '아침', detail :'졸리다'}
// let {title, detail} = {title:"아침", detail:"졸리다"}

// let [a, b, c] = [10, 20, 30];

export default function Box(title, detail) {
    // 컴포넌트에서 사용될 매개변수
    return (
        <div style={{ backgroundColor: 'red' }}>
            <h1>{title}</h1>
            <h2>{detail}</h2>
        </div>
    )
}