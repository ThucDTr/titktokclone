import Tippy from '@tippyjs/react/headless';
import { Wrapper as ProperWrapper } from '..';
import { useState } from 'react';
import MenuItems from './MenuItems';
import classNames from 'classnames/bind';
import styles from './MenuItems.module.scss';
import Header from './Header';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [], onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItems
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onchange(item);
                        }
                    }}
                />
            );
        });
    };
    return (
        <Tippy
            interactive
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <ProperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                title={current.title}
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, -1));
                                }}
                            />
                        )}
                        {renderItems()}
                    </ProperWrapper>
                </div>
            )}
            onHidden={() => {
                setHistory((prev) => prev.slice(0, 1));
            }}
            offset={[12, 8]}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
