import Sidebar from "../components/Sidebar/Sidebar.js";
import Header from "../components/Header/Header.js";
import './DefaultLayout.scss'

function DefaultLayout({ children }) {
    return (<div className="default-wrapper">
        <Header />
        <div className="container">
            <Sidebar />
            <div className="content">
                {children}
            </div>
        </div>
    </div>);
}

export default DefaultLayout;