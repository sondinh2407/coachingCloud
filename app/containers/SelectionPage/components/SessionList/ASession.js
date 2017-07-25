import React, {PropTypes} from 'react'
import styled from 'styled-components'
import {colors, spacing, layout, typeface} from '../../../../utils/styles'

const Title = styled.div`
  color: ${colors.black};
`
const DescriptionWrapper = styled.div`
  ${layout.flex}
  justify-content: space-between;
  color: ${colors.black};
  font-size: ${typeface.size.small}
`
const Description = styled.span`
  color: ${colors.darkGray};
`
const Price = styled.span`
`
const ASession = ({info: {id, title, description, price = ''}, topBorder, onClick}) => {
  const ASessionWrapper = styled.div`
    ${topBorder && `border-top: 1px solid ${colors.mediumGray}`}
    background-color: ${colors.white};
    padding: ${spacing.paddingItem}px;
  `
  const _onClick = () => onClick(id)

  return (
    <ASessionWrapper onClick={_onClick}>
      <Title>{title}</Title>
      <DescriptionWrapper>
        <Description>{description}</Description>
        <Price>{price}</Price>
      </DescriptionWrapper>
    </ASessionWrapper>
  )
}
  

ASession.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    description: PropTypes.string.isRequired,
    price: PropTypes.string
  }),
  topBorder: PropTypes.bool,
  onClick: PropTypes.func.isRequired
}

export default ASession
