
import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/service">Service</Link></li>
                <li><Link to="/life-cycle">Life Cycle</Link></li>
                <li><Link to="/functional-lyf-cycle">Functional Life Cycle</Link></li>
                <li><Link to="/map-method">Map Method</Link></li>
                <li><Link to="/foreach">Foreach Method</Link></li>
                <li><Link to="/reacrstraplogin">Reactstrap login</Link></li>
                <li><Link to="/matlogin">Materialised login</Link></li>
                
            </ul>
        </>
    )
}
