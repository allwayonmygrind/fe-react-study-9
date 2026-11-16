import Box from "./box";

export default function Props01() {
    
    let arr = ["아침", "점심", "저녁"];
    let detail = ['졸리다', '배부르다', '피곤하다'];
    //              0          1         2


    return (
        <>
        <div>
            {
                arr.map((value, index) => {
                    return (
                        <div style={{ backgroundColor: 'lightgray' }}>
                            <h1>{value}</h1>
                            <h2>{index}</h2>
                            <p>{detail[index]}</p>
                            <p>{arr[index]}</p>
                        </div>
                    )
                })
            }
        </div>
        
        <hr/>
        
        <Box title={arr[0]} detail = {detail[0]}/>
        <Box title={arr[1]} detail = {detail[1]}/>
        <Box title={arr[2]} detail = {detail[2]}/>

        <hr/>
        <hr/>

        {
            arr.map((value, index)=>{
                return (
                    <>
                    <Box title={arr[0]} detail = {detail[0]}/>
                    <Box title={arr[0]} detail = {detail[0]}/>
                    </>
                )
            })
        }
        </>
    )
    
}