import React from 'react'
import { When } from 'react-if'
import { DropDown } from '../DropDown'
import { Breadcrumb } from '../Breadcrumb'
import useHistoryBar from '../../../hooks/useHistoryBar'
import historyBarStyles from './historyBarStyles'

export const HistoryBar = () => {
  const [isCollapsed, unCollapsedData, collapsedData] = useHistoryBar()

  const classes = historyBarStyles()

  return (
    <div className={classes.barContainer}>
      <div>
        <When condition={isCollapsed}>
          <DropDown items={collapsedData} />
        </When>
      </div>
      <div>
        <Breadcrumb items={unCollapsedData} />
      </div>
    </div>
  )
}
