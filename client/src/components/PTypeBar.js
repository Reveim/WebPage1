import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { Context } from "../index"
import { Card, Row } from "react-bootstrap";

const STypeBar = observer(() => {
    const { stats } = useContext(Context)
    return (
        <Row className="mt-2">
                <Row className="d-flex">
                    {stats.ptype.map(ptype =>
                        <Card
                            style={{ cursor: 'pointer' }}
                            className='p-3'
                            key={Math.random()}
                            onClick={() => {
                                stats.setSelectedSType('')
                                stats.setSelectedPType(ptype)
                                var stypes = []
                                for (var i = 0; i < stats.element.length; i++) {
                                    if (stats.element[i].ptype == Object.values(ptype)[0]) {
                                        stypes.push(stats.element[i].stype)
                                    }
                                }
                                let unique = [...new Set(stypes)]
                                stats.setSType(unique)
                            }}
                            // //border={Object.values(ptype)[0] === Object.values(stats.selectedPType)[0] ? 'danger' : 'light'}
                            border={ptype === stats.selectedPType ? 'danger' : 'light'}
                        >
                            {Object.values(ptype)}
                        </Card>
                    )}
                </Row>
        </Row>
    )
})


export default STypeBar