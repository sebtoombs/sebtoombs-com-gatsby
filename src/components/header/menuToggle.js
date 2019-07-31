import React, {Component, Fragment} from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import EventEmitterInstance from '../../utils/eventEmitter'

const MenuToggleWrapper = styled.div`${tw`block md:hidden flex items-center`}`
const MenuToggleStyled = styled.button`${tw`block`}`
const Wrapper = styled.span`${tw`block relative flex items-center border-2 border-white px-3 py-1 text-white rounded-full`}`
const Hamburger = styled.span`${tw`w-5 h-4 block mr-3 relative`}
span {
    ${tw`absolute left-0 w-full bg-white`} height: 2px;
    &:first-child { top: 0; }
    &:nth-child(2) { top: 50%; transform: translateY(-1px); }
    &:last-child { bottom: 0; }
}`
const Text = styled.span`${tw`block`}`

class MenuToggle extends Component {
    render() {
        return (
            <MenuToggleWrapper>
                <MenuToggleStyled onClick={() => {EventEmitterInstance.trigger('navigation','toggle')}}>
                    <Wrapper>
                        <Hamburger>
                            <span/>
                            <span/>
                            <span/>
                        </Hamburger>
                        <Text>Menu</Text>
                    </Wrapper>
                </MenuToggleStyled>
            </MenuToggleWrapper>
        )
    }
}
export  default MenuToggle