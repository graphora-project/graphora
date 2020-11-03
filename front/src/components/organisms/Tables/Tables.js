import React from 'react'
import { TableInOut } from '../../molecules/TableInOut'
import { TableMinMaxProm } from '../../molecules/TableMinMaxProm'

export const Tables = () => (
  <>
    <TableInOut direction="Out" />
    <TableInOut direction="In" />
    <TableMinMaxProm />
  </>
)
