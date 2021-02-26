import React from 'react';

const Coordinates = () => {
    return (
        <div className="coordinates">
            
            <table>
                <tr>
                    <td>
                        1) .... 
                    </td>
                    <td className="first">
                        .....
                    </td>   
                       
                </tr>
                <tr>
                    <td>
                        2) .... 
                    </td>
                    <td className="second">
                        .....
                    </td>   
                       
                </tr>
                <tr>
                    <td>
                        3) .... 
                    </td>
                    <td className="third">
                        .....
                    </td>   
                       
                </tr>
                <tr>
                    <td>
                        4) .... 
                    </td>
                    <td className="fourth">
                        .....
                    </td>   
                       
                </tr>
                
            </table>
            <br/>
            <br/>
            <input type="button" className="showRouteBtn" value="Show Route"/>
        </div>
    )
}

export default Coordinates;