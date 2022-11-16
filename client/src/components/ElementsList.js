import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { Row } from "react-bootstrap"
import { Context } from "../index"
import Element from "../components/Element"

const ElementsList = observer(() => {
    const { stats } = useContext(Context)
    return (
        <Row className="d-flex">
            {stats.element.map((element, index) =>
                <Element key={index} element={element} />
            )}
        </Row>
    )
})


export default ElementsList