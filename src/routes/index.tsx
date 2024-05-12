import { Navigate } from 'react-router-dom'
import { lazy } from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
// 使用路由懒加载（lazy）
// const Home = lazy(() => import('../pages/Home.tsx'))
// const About = lazy(() => import('../pages/About.tsx'))

const routers = [
	{
		path: '/',
		element: <Navigate to="/home" />,
	},
	{
		path: '/home',
		element: <Home />,
	},
	{
		path: '/about',
		element: <About />,
	},
]
export default routers
