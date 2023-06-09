// @ts-nocheck
import PageWarp from '@/components/BusinessComponent/PageWarp'
import React from 'react'
import React from 'react'
import { Button, Result } from 'antd'

const Component: React.FC = (): JSX.Element => {
  return (
    <PageWarp>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary">Back Home</Button>}
      />
    </PageWarp>
  )
}

export default Component
