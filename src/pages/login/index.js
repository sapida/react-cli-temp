import React, { Component } from 'react'
import './index.scss'
import { Layout } from 'antd';
const {Header, Footer, Sider, Content} = Layout;


export default class index extends Component {
  render() {
    return (
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    )
  }
}
