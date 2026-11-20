// import {Button, Card} from "react-bootstrap"

// import food1 from '../img/food1.jpg';
// import food2 from '../img/food2.jpg';
// import food3 from '../img/food3.jpg';

// export default function FoodCard({food}) {
    
//     return (
//         <Card style={{ width: '18rem' }}>
//             <Card.Img variant="top" src={food1} />
//             <Card.Body>
//                 <Card.Title>
//                     {foods[0].title}
//                 </Card.Title>
//                 <Card.Title>
//                     {foods[0].content}
//                 </Card.Title>
//                 <Card.Text>
//                     {foods[0].price}
//                 </Card.Text>
//                 <Button variant="primary">상세보기</Button>
//             </Card.Body>
//         </Card>
//     )
// }
import { Button, Card } from "react-bootstrap";

export default function FoodCard({ food, foods, index }) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img
                variant="top"
                src={import.meta.env.BASE_URL + food.imgPath}
            />

            <Card.Body>
                <Card.Title>{food.title}</Card.Title>
                <Card.Text>{foods[index].content}</Card.Text>
                <Card.Text>{food.price}</Card.Text>
                <Button variant="primary">상세보기</Button>
            </Card.Body>
        </Card>
    );
}