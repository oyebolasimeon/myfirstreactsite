

class App extends React.Component {

    state = {
        names : 'Simeon',
        track : 'FrontEnd',
        tool : 'ReactJS'
    }
    render(){
       
        return (
            <div className="banner">
                <div className="header-title"><h3>Simeon ReactJS</h3></div>
                <div className="nav-items">
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
                <p className="para">{Date()}</p>
                <br></br>
                <p className="para">Welcome {this.state.names.toUpperCase()} ---- you are registered as a {this.state.track.toUpperCase()} Dev using : {this.state.tool.toUpperCase()} </p>
                </div>
                
               
                    
             
                </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('app')); 