import {NavLink} from "react-router-dom";
import {useState} from "react";

const contentButtons = [
    {
        id: 'main',
        iconPath: '/img/main-profile-panel-icon.svg',
        buttonText: 'Главная',
        link: '/main',
    },
    {
        id: 'connecting-resources',
        iconPath: '/img/resources-add-icon.svg',
        buttonText: 'Подключение ресурсов',
        link: '/connecting-resources',
        subItems: [
            {
                text: 'Подключить ресурс',
                link: '/connect-resource',
                iconPath: '/img/connect-resource-icon-pill.svg'
            },
            {
                text: 'Список подключенных ресурсов',
                link: '/resources-list',
                iconPath: '/img/resources-list-icon-pill.svg'
            }
        ]
    },
    {
        id: 'unified-search',
        iconPath: '/img/pill-search-icon.svg',
        buttonText: 'Единый поиск',
        link: '/unified-search',
        subItems: [
            {
                text: 'Поиск по библиотеке',
                link: '/library-search',
                iconPath: '/img/library-seach-icon.svg'
            },
            {
                text: 'Получить код-ключ',
                link: '/get-key-code',
                iconPath: '/img/get-key-code-icon.svg'
            }
        ]
    },
    {
        id: 'support',
        iconPath: '/img/customer-support-icon.svg',
        buttonText: 'Поддержка',
        link: '/support',
    },
    {
        id: 'knowledge-base',
        iconPath: '/img/documentation-icon.svg',
        buttonText: 'База знаний',
        link: '/knowledge-base',
    },
    {
        id: 'logout',
        iconPath: '/img/exit-to-app-icon.svg',
        buttonText: 'Выйти',
        link: '/logout',
    },
]

function NavigationMenuItem(props) {
    const [isHovered, setIsHovered] = useState(false);

    const hasSubItems = props.buttonItems.subItems && props.buttonItems.subItems.length > 0;

    return (
        <>
            {hasSubItems ? (
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#${props.buttonItems.id}`}
                        >
                            <img src={props.buttonItems.iconPath} alt=""/>
                            {props.buttonItems.buttonText}
                        </button>
                    </h2>
                    <div id={props.buttonItems.id} class="accordion-collapse collapse">
                        <div class="accordion-body d-flex flex-column">
                            {props.buttonItems.subItems.map((subItem, index) => (
                                <NavLink to={subItem.link} className="navigation-sub-item d-flex" key={index}>
                                    <img src={subItem.iconPath} alt=""/>
                                    <div>
                                        {subItem.text}
                                    </div>
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <NavLink to={props.buttonItems.link} className="navigation-item d-flex align-items-center">
                    <img src={props.buttonItems.iconPath} alt=""/>
                    <span className="navigation-item-text">{props.buttonItems.buttonText}</span>
                    {hasSubItems && <span className="accordion-arrow">›</span>}
                </NavLink>
            )}
        </>
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
