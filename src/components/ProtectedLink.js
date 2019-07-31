import React, {Component} from 'react'
import { isBrowser } from "../utils/isBrowser";

class ProtectedLink extends Component {

    render() {
        if(isBrowser === false) return null;
        return (
            <a {...this.props}>{this.props.children}</a>
        )
    }
}
export default ProtectedLink