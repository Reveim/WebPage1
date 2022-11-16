import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { Row } from "react-bootstrap"
import { Context } from "../index"
import Achievement from "./Achievement"

const ElementsList = observer(() => {
    const { stats } = useContext(Context)
    return (
        <Row className="d-flex">
            {stats.element.map((element, index) =>
                <Achievement key={index} element={element} />
            )}
        </Row>
    )
})


export default ElementsList