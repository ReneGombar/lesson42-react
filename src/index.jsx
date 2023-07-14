import './style.css'
import { createRoot } from 'react-dom/client'

import App from './App'
import Clicker from './Clicker'

const root = createRoot(document.querySelector('#root'))

root.render(
    <>
        <App clickerCount={ 5 }>
            {/* everything between the tags is sent to the app component's children prop */}
                <h1>Testing children props</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptatum quidem nesciunt id dolorem quis architecto magnam voluptas error! Alias ipsa fugit id inventore vitae placeat maiores deleniti perferendis saepe.</p>
        </App>
        


    </>
)