import React, {PropTypes} from 'react'
import styled from 'styled-components'
import {Icon, Row, Input} from 'react-materialize'
import {selection} from '../../propsValidation'
import {colors, typeface} from '../../../../utils/styles'
import {SESSION_SELECTIONS} from '../../../../utils/constants'

const HeaderWrapper = styled.header`
  min-height: 45px;
  background-color: ${colors.gray};
  position: relative;
  line-height: 1;
`
const ActionButton = `
  color: ${colors.dark};
  top: 10px;
  font-size: ${typeface.size.larger};
  position: absolute;
`
const BackButton = styled.span`
  ${ActionButton}
  left: 10px;
`
const CloseButton = styled.span`
  ${ActionButton}
  right: 10px;
`
const Header = ({info: {selectedStep}, closeSelection, goBackStep}) => {
  function _goBackStep() {
    goBackStep({
      selectedStep: selectedStep > SESSION_SELECTIONS.SELECT_SESSION ? selectedStep - 1 : selectedStep
    })
  }
  return (
    <HeaderWrapper>
      {selectedStep > SESSION_SELECTIONS.SELECT_SESSION &&
        <BackButton onClick={_goBackStep}><Icon>arrow_back</Icon></BackButton>}
      <CloseButton onClick={closeSelection}><Icon>close</Icon></CloseButton>
      <Row>
        <Input s={12} type='select' label='Materialize Select' defaultValue='2'>
          <option value='1'>Option 1</option>
          <option value='2'>Option 2</option>
          <option value='3'>Option 3</option>
        </Input>
      </Row>
    </HeaderWrapper>
  )
}

Header.propTypes = {
  info: PropTypes.shape(selection).isRequired,
  closeSelection: PropTypes.func.isRequired,
  goBackStep: PropTypes.func.isRequired,
}

export default Header
