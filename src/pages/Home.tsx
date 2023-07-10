import { useEffect, useState } from 'react'
// 路由导航
import { Route, Routes } from 'react-router-dom'
import EpubPage from './EpubPage.tsx'
// import { Button } from '../components'
import { Button, Divider, Menu, Layout } from 'antd'
import type { MenuProps } from 'antd'
import Library from './Library.tsx'

const { Header, Footer, Sider, Content } = Layout

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
    className: '!text-lg !h-2.5rem !line-height-2.5rem'
  } as MenuItem
}

const items: MenuProps['items'] = [
  getItem('书架', 'library'),
  getItem('设置', 'settings')
]

export default function Home() {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e)
  }
  return (
    <Layout className="flex h-100%">
      <Sider
        theme="light"
        className="flex flex-col py-3rem px-2rem bg-blueGray"
        width="w-30rem"
      >
        <div className="text-3xl font-700 mb-6">阅读</div>
        <div>枕上诗书闲处好，门前风景雨来佳</div>
        <Divider />
        <Menu
          onClick={onClick}
          style={{ border: 'none' }}
          defaultSelectedKeys={['library']}
          defaultOpenKeys={['sub1']}
          mode="vertical"
          className="flex-grow-1 space-y-3"
          items={items}
        />
      </Sider>
      <Content>
        <div className="h-100%">
          <Routes>
            <Route path="/" Component={Library} />
            <Route path="/book/*" Component={EpubPage} />
          </Routes>
        </div>
      </Content>
    </Layout>
  )
}
