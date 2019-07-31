import React, {Component} from 'react'

import styled from 'styled-components'
import tw from 'tailwind.macro'
import Overlay from '../overlay'

import {Link} from 'gatsby'


const OverlayNavMenu = styled.ul`
li {
    ${tw`mb-6`}
}
a {
${tw`block`}
}`


class OverlayNav extends Component {

    constructor(props) {
        super(props)

        this._refs = {}
    }

    handleRef = (name) => {
        return (ref) => {
            this._refs[name] = ref
        }
    }

    onOpen = (evt) => {
        if(this._refs.nav) this._refs.nav.focus()
    }

    render() {
        return(
            <Overlay event={"navigation"} onOpen={this.onOpen}>
                <OverlayNavMenu tabIndex="-1">
                    <nav ref={this.handleRef('nav')}>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                        </ul>
                    </nav>
                </OverlayNavMenu>
            </Overlay>
        )
    }

}
export default OverlayNav