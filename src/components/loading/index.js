import React from 'react'
import { Spinner } from 'react-bootstrap'
import styled from 'styled-components'

const Loading =  () => {
  return (
    <>
        <SpinnerLoading animation="grow" size="sm" />
        <SpinnerLoading animation="grow" />
    </>
  )
}
export default Loading 

const SpinnerLoading = styled(Spinner)`
color:goldenrod;

`

