import { Card, Col } from "react-bootstrap"

const Element = ({ element }) => {
    return (
        <Col md={3}>
            <Card>
                <div className="mt-1 d-flex justify-content-between align-items-center">
                    <div>
                        {element.name}
                        <div>{element.value}</div>
                    </div>
                </div>

            </Card>
        </Col>
    )
}


export default Element