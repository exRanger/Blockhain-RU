import {useContext, useState} from 'react'
import {useRouter} from 'next/router'
import {Col,List} from 'antd'
import Link from 'next/link'
import {DataContext} from '../pages/index'

export default function Topics(){
    
    const {tasks} = useContext(DataContext)
    const router = useRouter()

    let [numLoadData, setNumLoadData] = useState(8)

    let handleButton = (e) => {
        setNumLoadData(numLoadData + 5)
        const query = router.query
        query.page = numLoadData
        router.push({
          pathname: router.pathname,
          query: query,
        })
    }
    return (
        <Col sm={12} md={2} lg={4} xl={6}>
            <List
                size="large"
                header={<div>Рубрики|</div>}
                footer={<div onClick={handleButton} onClick={handleButton}>Load more...</div>}
                bordered
                hoverable 
                dataSource={tasks}
                renderItem={data => (
                <List.Item> 
                    <Link href={`/topics/${data.id}`}> 
                            {data.description}
                    </Link>
                </List.Item>)}
            />
    </Col>
    )
}