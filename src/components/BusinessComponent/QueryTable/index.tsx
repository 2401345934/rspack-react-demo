import QueryFrom from './components/QueryFrom'
import { Table, TableProps } from 'antd'
import styles from './styles.module.less'
import { useRef, useImperativeHandle, forwardRef, useEffect } from 'react'
import { RequestType } from '@/request/index.type'
import request from '@/request'

type QueryTablePropsType = {
  tableProps: TableProps<object>
  actions?: React.ReactNode
  requestProps: RequestType
  formProps: {
    formItems?: Array<{
      label: string
      name: string
      type: string
      props?: any
    }>
  }
  initFetch?: boolean
  searchCallback?: (v: any) => void
  resetCallback?: () => void
}
function QueryTable(props: QueryTablePropsType, ref: any): JSX.Element {
  const {
    tableProps,
    formProps,
    actions,
    searchCallback,
    resetCallback,
    requestProps,
    initFetch = true
  } = props
  const tableRef = useRef<HTMLTableElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    // 是否需要初始化请求
    if (initFetch) {
      fetchRequest()
    }
  }, [])

  const fetchRequest = async () => {
    const data = await request(requestProps)
    // 根据项目具体业务逻辑进行完善
    // data
  }

  useImperativeHandle(ref, () => ({
    tableRef: tableRef.current,
    formRef: formRef?.current?.formRef
  }))
  return (
    <>
      {formProps?.formItems?.length !== 0 &&
        tableProps?.columns?.length !== 0 && (
          <>
            {/* query */}
            <div className={styles.formWarp}>
              <QueryFrom
                {...formProps}
                ref={formRef}
                searchCallback={searchCallback}
                resetCallback={resetCallback}
              ></QueryFrom>
            </div>
            {/* actions */}
            {actions && <div className={styles.actions}>{actions}</div>}
            {/* table */}
            <Table {...tableProps} ref={tableRef}></Table>
          </>
        )}
    </>
  )
}

export default forwardRef(QueryTable)
