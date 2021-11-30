import { useContext } from 'react'
import {Card, Meta, Avatar} from 'antd'
import Link from 'next/link'

export default function Post({user}){
    return (
    <>
        <Link href={`/posts/${user.id}`}>
            <Card
                hoverable={true}   
                title="Как задеплоить SPA приложение?"
                style={{ width: 250 }}
                cover={
                    <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                }
                actions={[
                <   div>Likes ({Math.floor(Math.random() * 30)})</div>,
                    <div>Comments ({Math.floor(Math.random() * 15)})</div>,
                ]}
                >
                <Card.Meta
                    avatar={<Avatar src={user.avatar_url} />}
                    title={user.username}
                    description="Разработчик PHP/JOOMLA/WP 10/10 CODER"
                />
            </Card>
        </Link>       
    </>
    )
}