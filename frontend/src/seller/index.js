import Headerss from './seller/Header';
import Sidebar from './seller/sidebar';
import Dashboard from './seller/main';

const App = () => {
    return (
        <div>
            <Headerss />
            <Sidebar />
            <Dashboard />
            {/* Các component khác của ứng dụng */}
        </div>
    );
}

export default App;