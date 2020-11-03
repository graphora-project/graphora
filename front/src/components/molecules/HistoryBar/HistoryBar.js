import React from 'react'
import { DropDown } from '../DropDown'
import { Breadcrumb } from '../Breadcrumb'
import { When } from '../../utils/When'
import useHistoryBar from '../../../hooks/useHistoryBar'

export const HistoryBar = () => {
  const [isCollapsed, unCollapsedData, collapsedData] = useHistoryBar()

  return (
    <div>
      <div>
        <When predicate={isCollapsed}>
          <DropDown items={collapsedData} />
        </When>
      </div>
      <div>
        <Breadcrumb items={unCollapsedData} />
      </div>
    </div>
  )
}
