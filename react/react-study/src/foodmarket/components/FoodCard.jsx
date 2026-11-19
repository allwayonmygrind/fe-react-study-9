import {Button, Card} from "react-bootstrap"

import food1 from '../img/food1.jpg';
import food2 from '../img/food2.jpg';
import food3 from '../img/food3.jpg';

export default function FoodCard() {
    
    eturn (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={food1} />
            <Card.Body>
                <Card.Title>
                    {foods[0].title}
                </Card.Title>
                <Card.Title>
                    {foods[0].content}
                </Card.Title>
                <Card.Text>
                    {foods[0].price}
                </Card.Text>
                <Button variant="primary">상세보기</Button>
            </Card.Body>
        </Card>
    )
}