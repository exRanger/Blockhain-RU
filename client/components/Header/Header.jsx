import { PageHeader, Divider } from 'antd'

import {Row, Col, Table, Image} from "antd"


const columns = [
    {
      title: '#',
      dataIndex: 'Name',
      key: 'key',
    },
    {
      title: 'Avatar',
      dataIndex: 'avatar_url',
      key: 'avatar',
      render: avatar_url => <Image src={avatar_url} alt="user"/>,
    } 
];


const Header = ({data}) => {
    console.log(data)
    return (
        <>
         <PageHeader title="AntDesign Demo"/>
         <Divider />
         <Row>
             <Col xs={24} md={{span: 12, offset: 6}}>
             <Table 
              dataSource={data}
              columns={columns}
            />
             </Col>
         </Row>
        </>
    )
}

export default Header