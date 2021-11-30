import { useContext } from 'react'
import {Col, Row} from 'antd'
import Post from './Post'
import {DataContext} from '../pages/index'


export default function Posts(){
    const data = useContext(DataContext)

    return (
     <>
     <Col xs={12} sm={6} md={12}>
        <Row wrap gutter={[8, 16]}>
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