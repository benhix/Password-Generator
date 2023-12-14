import PassGen from './components/PassGen';
import Bubble from './components/BubbleTitle';
import CustomBackground from './components/Background';

import './App.css';

const App = () => {
    return (
        <div>
            <div className='app'>
                <CustomBackground />
                <Bubble />
                <div className='button-container'>
                    <PassGen />
                </div>
            </div>
            <div className='bubbles-main'>
    
            
            </div>
        </div>
    );
}

export default App;