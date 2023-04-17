import { Suspense, lazy } from 'react'
import Loading from '@/components/Loading'
import { RouterType } from './index'
const NotPage403 = lazy(() => import('@/pages/403'))
const NotPage500 = lazy(() => import('@/pages/500'))
const NotPage513 = lazy(() => import('@/pages/513'))
const NotPage = lazy(() => import('@/pages/404'))
const BaseLayout = lazy(() => import('@/index'))

const initRouter: RouterType[] = [
  {
    path: 'result',
    label: '常见反馈页面',
    element: (
      <Suspense fallback={<Loading />}>
        <BaseLayout />
      </Suspense>
    ),
    children: [
      {
        path: '403',
        label: '403',
        element: (
          <Suspense fallback={<Loading />}>
            <NotPage403 />
          </Suspense>
        )
      },
      {
        path: '404',
        label: '404',
        element: (
          <Suspense fallback={<Loading />}>
            <NotPage />
          </Suspense>
        )
      },
      {
        path: '500',
        label: '500',
        element: (
          <Suspense fallback={<Loading />}>
            <NotPage500 />
          </Suspense>
        )
      },
      {
        path: '513',
        label: '513',
        element: (
          <Suspense fallback={<Loading />}>
            <NotPage513 />
          </Suspense>
        )
      }
    ]
  }
]

export default initRouter
