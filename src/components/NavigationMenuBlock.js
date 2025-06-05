import {NavLink, useLocation} from "react-router-dom";
import {useState, useEffect} from "react";

const contentButtons = [
    {
        id: 'main',
        iconPath: '/img/pills-icons/main-profile-panel-icon.svg',
        buttonText: 'Главная',
        link: '/main',
    },
    {
        id: 'connecting-resources',
        iconPath: '/img/pills-icons/resources-add-icon.svg',
        buttonText: 'Подключение ресурсов',
        link: '/connecting-resources',
        subItems: [
            {
                text: 'Подключить ресурс',
                link: '/connect-resource',
                iconPath: '/img/pills-icons/connect-resource-icon-pill.svg'
            },
            {
                text: 'Список подключенных ресурсов',
                link: '/connected-resources-list',
                iconPath: '/img/pills-icons/resources-list-icon-pill.svg'
            }
        ]
    },
    {
        id: 'unified-search',
        iconPath: '/img/pills-icons/pill-search-icon.svg',
        buttonText: 'Единый поиск',
        link: '/unified-search',
        subItems: [
            {
                text: 'Поиск по библиотеке',
                link: '/library-search',
                iconPath: '/img/pills-icons/library-seach-icon.svg'
            },
            {
                text: 'Получить код-ключ',
                link: '/get-key-code',
                iconPath: '/img/pills-icons/get-key-code-icon.svg'
            }
        ]
    },
    {
        id: 'support',
        iconPath: '/img/pills-icons/customer-support-icon.svg',
        buttonText: 'Поддержка',
        link: '/support',
    },
    {
        id: 'knowledge-base',
        iconPath: '/img/pills-icons/documentation-icon.svg',
        buttonText: 'База знаний',
        link: '/knowledge-base',
    },
    {
        id: 'logout',
        iconPath: '/img/pills-icons/exit-to-app-icon.svg',
        buttonText: 'Выйти',
        link: '/logout',
    },
]

function NavigationMenuItem(props) {
    const [isExpanded, setIsExpanded] = useState(false);
    const hasSubItems = props.buttonItems.subItems && props.buttonItems.subItems.length > 0;
    const location = useLocation();
    const [isActive, setIsActive] = useState(false);

    // Проверяем, активен ли текущий путь или один из саб-элементов
    useEffect(() => {
        const checkActive = () => {
            // Проверяем основной линк
            if (location.pathname === props.buttonItems.link) {
                return true;
            }

            // Проверяем саб-элементы
            if (hasSubItems) {
                return props.buttonItems.subItems.some(
                    subItem => location.pathname === subItem.link
                );
            }

            return false;
        };

        setIsActive(checkActive());

        // Автоматически раскрываем аккордеон, если активен саб-элемент
        if (hasSubItems) {
            const shouldExpand = props.buttonItems.subItems.some(
                subItem => location.pathname === subItem.link
            );
            setIsExpanded(shouldExpand);
        }
    }, [location.pathname, hasSubItems, props.buttonItems]);

    const toggleAccordion = () => {
        if (hasSubItems) {
            setIsExpanded(!isExpanded);
        }
    };

    return (
        <div className={`navigation-item-wrapper ${hasSubItems ? 'has-subitems' : ''}`}>
            {hasSubItems ? (
                <>
                    <div
                        className={`navigation-item accordion-header d-flex align-items-center ${isExpanded ? 'expanded' : ''} ${isActive ? 'active' : ''}`}
                        onClick={toggleAccordion}
                    >
                        <img src={props.buttonItems.iconPath} alt=""/>
                        <span className="navigation-item-text">{props.buttonItems.buttonText}</span>
                        {hasSubItems && (
                            <img className={`accordion-arrow ${isExpanded ? 'expanded' : ''}`} src="/img/accordion-arrow.svg" alt=""/>
                        )}
                    </div>

                    <div className={`accordion-content ${isExpanded ? 'expanded' : ''}`}>
                        <div className="accordion-body d-flex flex-column">
                            {props.buttonItems.subItems.map((subItem, index) => (
                                <NavLink
                                    to={subItem.link}
                                    className={({isActive}) =>
                                        `navigation-sub-item d-flex ${isActive ? 'active' : ''}`
                                    }
                                    key={index}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <img src={subItem.iconPath} alt=""/>
                                    <div>{subItem.text}</div>
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </>
            ) : (
                <NavLink
                    to={props.buttonItems.link}
                    className={({isActive}) =>
                        `navigation-item d-flex align-items-center ${isActive ? 'active' : ''}`
                    }
                    onClick={(e) => e.stopPropagation()}
                >
                    <img src={props.buttonItems.iconPath} alt=""/>
                    <span className="navigation-item-text">{props.buttonItems.buttonText}</span>
                </NavLink>
            )}
        </div>
    );
}

function NavigationMenuBlock() {
    return (
        <div className="navigation-block">
            {contentButtons.map((btn, index) => (
                <NavigationMenuItem key={index} buttonItems={btn}/>
            ))}
        </div>
    );
}

export default NavigationMenuBlock;
