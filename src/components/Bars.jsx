import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

export default function Bars(props) {

    //single bar
    function Bar(prop) {
        // state for amount box
        const [isHover, setIsHover] = useState(false);

        // toggle state
        const toggleAmount =() => {
            setIsHover(prev => !prev)
        }
        
        // change colour to cyan when prop.active is true (highest amount of the day) or remain softred
        let bgColor = (prop.active) ? `hsl(186, 34%, 60%)` : 'hsl(10, 79%, 65%)';
        const height = {
            height:`${prop.height}px`,
            backgroundColor: `${bgColor}`
        }

        // return Bar()
        return (
            <div className='graph'>

                {/* animation for CSS hover */}
                <CSSTransition
                    in={isHover}
                    timeout={200}
                    classNames="slide"
                    unmountOnExit
                >
                <div className="bar-amount">
                    <p>${prop.amount}</p>
                </div>
                </CSSTransition>
            
                <span 
                    className="bar" 
                    style={height}
                    onMouseOver={toggleAmount}
                    onMouseOut={toggleAmount}
                    >
                    </span>
                <p>{prop.day}</p>
            </div>
        )
    }
    //single bar end

    // get max amount
    let highestAmount = props.datas.reduce((a,b) => a.amount > b.amount ? a:b).amount

    // return Bars()
    return (
        <div id="bar-chart">
            {props.datas.map((data, index) => {
                // bar height based on highest amount of the week 
                let height = data.amount / highestAmount * props.maxHeight;
                return (
                    <Bar
                        key={index}
                        amount={data.amount}
                        height={height}
                        day={data.day}
                        active={(data.amount === highestAmount) ? false : true}
                    />
                )
            })}
        </div>
    )

}