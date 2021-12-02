import { useContext, useMemo } from 'react'
import {Col, Row} from 'antd'
import Post from './Post'
import {DataContext} from '../pages/index'


export default function Posts(){
    const data = useContext(DataContext)

    return (
     <>
     <Col xs={14} md={22}>
        <Row wrap gutter={[1, 12]}>
                {data.users.map((user) => (
            <Col xs={24} md={12} offset={2} lg={6}>
                <Post user={user}/>
            </Col>
                ))}
        </Row>
    </Col>
    </>
    )
}
