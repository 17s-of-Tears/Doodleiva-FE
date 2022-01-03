import React from 'react'
import styled from 'styled-components'

const AvatarImage = styled.img`
	border-radius: 50%;
`

const Avatar = () => {
	return <AvatarImage src="/img/avatar.png" alt="avatar" />
}

export default Avatar
