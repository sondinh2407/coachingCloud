import React, {PropTypes} from 'react'
import styled from 'styled-components'
import {Icon, Input} from 'react-materialize'
import format from 'date-fns/format'
import TimezonePicker from '../TimezonePicker'
import {selection} from '../../propsValidation'
import {colors, typeface, layout, spacing} from '../../../../utils/styles'
import {SESSION_SELECTIONS} from '../../../../utils/constants'

const ActionButton = `
  color: ${colors.dark};
  top: 10px;
  font-size: ${typeface.size.larger};
  position: absolute;
`
const BackButton = styled.span`${ActionButton} left: 10px;`
const CloseButton = styled.span`${ActionButton} right: 10px;`
const SessionWrapper = styled.div`
  ${layout.center}
  flex-direction: column;
`
const SessionTitle = styled.div`color: ${colors.black};`
const SessionDescription = styled.div`
  color: ${colors.darkGray};
  font-size: ${typeface.size.smaller};
  margin-top: 5px;
`
const Day = styled.div`
  color: ${colors.darkGray};
  font-size: ${typeface.size.small};
  margin-top: 5px;
`
const Hour = styled.div`
  color: ${colors.black};
  font-size: ${typeface.size.larger};
  margin-top: 20px;
`
const CustomHeader = styled.div`
  margin-top: 25px;
`
const Header = ({
  height,
  info: {selectedStep, is12h, day = {}, dateTime, timezone},
  closeSelection,
  goBackStep,
  updateSelection,
  selectedSession
}) => {
  function _goBackStep() {
    goBackStep({
      selectedStep:
        selectedStep > SESSION_SELECTIONS.SELECT_SESSION ? selectedStep - 1 : selectedStep
    })
  }
  function _updateTimezone(t) {
    updateSelection({timezone: t})
  }
  const _onChangeHourFormat = () => {
    updateSelection({
      is12h: !is12h
    })
  }
  const labels = [
    <span>Select a Session</span>,
    <CustomHeader>Select a Day</CustomHeader>,
    <CustomHeader>Select a Time</CustomHeader>
  ]
  const HeaderWrapper = styled.header`
    ${layout.center} flex-direction: column;
    height: ${height}px;
    background-color: ${colors.gray};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    line-height: 1;
    padding: ${spacing.paddingItem}px;
  `
  return (
    <HeaderWrapper>
      {selectedStep > SESSION_SELECTIONS.SELECT_SESSION &&
        <BackButton onClick={_goBackStep}>
          <Icon>arrow_back</Icon>
        </BackButton>}
      <CloseButton onClick={closeSelection}>
        <Icon>close</Icon>
      </CloseButton>
      {selectedStep > SESSION_SELECTIONS.SELECT_SESSION &&
        <SessionWrapper>
          <SessionTitle>
            {selectedSession.title}
          </SessionTitle>
          <SessionDescription>
            {selectedSession.description}
          </SessionDescription>
        </SessionWrapper>}
      {selectedStep > SESSION_SELECTIONS.SELECT_DAY &&
        <Day>{format(day.value, 'dddd DD MMMM, YYYY')}</Day>}
      {selectedStep === SESSION_SELECTIONS.CONFIRM_BOOK &&
        <Hour>{format(dateTime, is12h ? 'h:mm a' : 'H:mm')}</Hour>}
      {labels[selectedStep]}
      {(selectedStep > SESSION_SELECTIONS.SELECT_SESSION) &&
        <TimezonePicker onChange={_updateTimezone} value={timezone} />}
      {selectedStep === SESSION_SELECTIONS.SELECT_TIME &&
        <Input
          type='switch'
          offLabel='am/pm'
          onLabel='24 hour'
          onChange={_onChangeHourFormat}
          checked={!is12h}
        />}
    </HeaderWrapper>
  )
}

Header.propTypes = {
  height: PropTypes.number.isRequired,
  info: PropTypes.shape(selection).isRequired,
  updateSelection: PropTypes.func.isRequired,
  closeSelection: PropTypes.func.isRequired,
  goBackStep: PropTypes.func.isRequired,
  selectedSession: PropTypes.object
}

export default Header
