import { useContext } from 'react'
import {Card, Meta, Avatar} from 'antd'
import Link from 'next/link'

export default function Post({user}){
    return (
    <>
        <Link href={`/posts/${user.id}`}>
            <Card
                hoverable={true}   
                title="How to blockhain?"
                style={{ width: 150 }}
                actions={[
                ]}
                >
                <Card.Meta
                    title={user.username}
                />
            </Card>
        </Link>       
    </>
    )
}
