
import { Provider } from 'react-redux';
import store from './state/store';
import Contador from './Contador';
import Listado from './Listado';


const MyApp = () => {




    return (
        <Provider store={store}>
            <Contador/>
            <Listado/>
        </Provider>
    )
}

export default MyApp