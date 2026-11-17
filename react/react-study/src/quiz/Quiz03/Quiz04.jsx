import './Quiz04.css'
import Box2 from './Box02';

export default function Quiz04() {

    let title = ['하나', '둘', '셋', '넷', '다섯'];
    let detail = ['내용 하나', '내용 둘', '내용 셋', '내용 넷', '내용 다섯'];

    return (
        <div>
            {
                title.map((value, index) => {
                    return (
                        <Box2 title={value} detail={detail[index]} key={index} />
                    )
                })
            }
        </div>
    );
}

