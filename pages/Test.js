export default function Test() {
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <div style={{width: "50%"}}>
                left side
            </div>
            <ul className="test-up" style={{width: "50%"}}>
                <li className="test-down"></li>
                <li className="test-down"></li>
                <li className="test-down"></li>
                <li className="test-down"></li>
                <li className="test-down"></li>
                <li className="test-down"></li>
                <li className="test-down"></li>
            </ul>
        </div>
        
    )
}