import Tippy from '@tippyjs/react/headless';
import "./Menu.scss";
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';


function Menu({ children, items = [] }) {

    const renderItems = () => {
        return items.map((item, index) => {
            return <MenuItem key={index} data={item} />
        })
    }

    return (
        <Tippy
            delay={[0, 700]}
            interactive
            placement="bottom-end"
            render={attrs => (
                <div className="menu-list" tabIndex="-1" {...attrs}>
                    <PopperWrapper className="menu-popper">
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;