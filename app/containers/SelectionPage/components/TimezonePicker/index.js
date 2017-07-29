import React, {PropTypes} from 'react'
import styled from 'styled-components'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import {colors, layout, typeface} from '../../../../utils/styles'
import {TIME_ZONES, DEFAULT_TIME_ZONE} from './time-zone'

const SelectWrapper = styled(Select)`
  ${layout.center}
  font-size: ${typeface.size.smaller};
  width: 100%;
  &:focus {
    outline: none !important;
  }
  .Select-control {
    box-shadow: none !important;
    background-color: transparent !important;
    border: none !important;
    &:hover {
      box-shadow: none !important;
    }
  }
  .Select-arrow-zone {
    display: none !important;
  }
  .Select-value {
    text-align: center;
  }
  .Select-value-label {
    color: ${colors.pink} !important;
  }
  .Select-menu-outer {
    border-top-color: #ccc;
  }
`
function renderValue(option) {
  return (
    <span className='needsclick'>
      {`Timezone: ${option.label}`}
    </span>
  )
}

const TimezonePicker = ({onChange = () => {}, value = DEFAULT_TIME_ZONE.value}) => {
  function _onChange(t) {
    onChange(t.value)
  }
  return (
    <SelectWrapper
      searchable={false}
      clearable={false}
      value={value}
      options={TIME_ZONES}
      onChange={_onChange}
      valueRenderer={renderValue}
    />
  )
}

TimezonePicker.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string.isRequired
}

export default TimezonePicker
