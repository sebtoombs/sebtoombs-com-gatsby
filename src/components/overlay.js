import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {isBrowser} from "../utils/isBrowser";
import styled from 'styled-components'
import tw from 'tailwind.macro'
import EventEmitterInstance from '../utils/eventEmitter'

const portalRoot = document.getElementById('portal');


const OverlayBackground = styled.div`${tw`absolute left-0 top-0 w-full h-full z-10`} background-image: linear-gradient(100deg, #e13fd1 0%, #9200ab 100%);
${props => props.opacity ? `opacity: ${props.opacity};` : '' }`;

const OverlayNavStyled = styled.div`${tw`fixed top-0 left-0 w-full h-full`} z-index:10000;`
const OverlayNavWrapper = styled.div`${tw`absolute top-0 left-0 w-full h-full overflow-y-auto z-20`}`
const OverlayNavInner = styled.div`${tw`max-w-lg mx-auto my-20 px-8 text-white text-2xl leading-relaxed`}`


const MenuClose = styled.button`${tw`cursor-pointer bg-transparent border-none absolute z-30 block`} right: 2rem; top: 2rem;`;
const MenuCloseInner = styled.span`${tw`w-12 h-12 relative block`}`
const MenuCloseLine = styled.span`${tw`absolute w-12 bg-white block left-0`} height: 3px; top: 50%; transform: translateY(-50%) rotate(45deg); &:last-child{ transform: translateY(-50%) rotate(-45deg);}`


class Overlay extends Component {

    constructor(props) {
        super(props);
        this.el = document.createElement('div');

        this.state = {
            isOpen: false
        }

        this.renderNav = this.renderNav.bind(this)
        this.eventHandler = this.eventHandler.bind(this)
    }

    eventHandler(action) {
        if(action === 'toggle') {
            this.setState({isOpen: !this.state.isOpen})
        } else if(action === 'open') {
            this.setState({isOpen: true})
        } else if(action === 'close') {
            this.setState({isOpen: false})
        }
    }

    componentDidUpdate(props, oldState) {
        if(this.state.isOpen === oldState.isOpen) return

        if(this.state.isOpen) {
            document.addEventListener('keyup', this.onKeyPress)
            if(typeof this.props.onOpen === "function") this.props.onOpen()
        } else {
            document.removeEventListener('keyup', this.onKeyPress)
            if(typeof this.props.onClose === "function") this.props.onClose()
        }
    }

    componentDidMount() {
        // The portal element is inserted in the DOM tree after
        // the Modal's children are mounted, meaning that children
        // will be mounted on a detached DOM node. If a child
        // component requires to be attached to the DOM tree
        // immediately when mounted, for example to measure a
        // DOM node, or uses 'autoFocus' in a descendant, add
        // state to Modal and only render the children when Modal
        // is inserted in the DOM tree.
        portalRoot.appendChild(this.el);

        EventEmitterInstance.bind(this.props.event, this.eventHandler)
    }

    componentWillUnmount() {
        portalRoot.removeChild(this.el);

        EventEmitterInstance.unbind(this.props.event, this.eventHandler)
    }

    onKeyPress = evt => {
        if(evt.key !== 'Escape') return;
        if(typeof this.props.shouldCloseOnEsc === "function" && this.props.shouldCloseOnEsc() || typeof this.props.shouldCloseOnEsc !== "function") this.setState({isOpen: false})
    }

    renderNav() {
        return(
            <OverlayNavStyled tabIndex="-1">
                <OverlayBackground opacity={this.props.opacity} tabIndex="-1"/>
                <OverlayNavWrapper tabIndex="-1">
                    <OverlayNavInner tabIndex="-1">
                        {this.props.children}
                    </OverlayNavInner>
                </OverlayNavWrapper>
                <MenuClose onClick={() => this.setState({isOpen: false})}>
                    <MenuCloseInner>
                        <MenuCloseLine/>
                        <MenuCloseLine/>
                    </MenuCloseInner>
                </MenuClose>
            </OverlayNavStyled>
        )
    }

    render() {
        if(isBrowser && this.state.isOpen)
            return ReactDOM.createPortal(
                this.renderNav(),
                this.el,
            );
        else
            return null;
    }

}

export default Overlay