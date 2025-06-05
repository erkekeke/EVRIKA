import {AppLayout} from "../../AppLayout";
import React, { useState } from 'react';
import {NavLink} from "react-router-dom";
import ConnectedResourceCard from "./ConnectedResourceCard";

const resourcesCard = [
    {
        id: 'ipr-smart',
        name: 'ЭБС IPR Smart',
        linkPath: '/img/temp/ipr-smart.svg',
    },
    {
        id: 'fallow-deer',
        name: 'ЭБС Лань',
        linkPath: '/img/temp/fallow-deer.svg',
    },
    {
        id: 'luban',
        name: 'ЭБС Любань',
        linkPath: '/img/temp/luban.svg',
    },
    {
        id: 'ololo',
        name: 'ЭБС Ололо',
        linkPath: '/img/temp/ololo.svg',
    },
]

function MainPill() {
    const [isCopied, setIsCopied] = useState(false);
    const codeValue = '<script type="text/javascript" src="1223344...."></script>';

    const handleCopyCode = () => {
        navigator.clipboard.writeText(codeValue) // Записываем в буфер обмена
            .then(() => {
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 2000); // Сброс через 2 секунды
            })
            .catch(err => {
                console.error('Ошибка копирования: ', err);
            });
    };

    return (
        <AppLayout>
            <div id="main-page" className="main-container">
                <div id="search-content-block" className="content-block">
                    <p className="content-block-title">
                        Единый поиск
                    </p>

                    {/* Инпут */}
                    <div className="input-group">
                        <span className="input-group-text bg-white border-end-0">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                              <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M10.4998 2C9.14436 2.00012 7.80863 2.32436 6.60402 2.94569C5.39941 3.56702 4.36086 4.46742 3.575 5.57175C2.78914 6.67609 2.27878 7.95235 2.08647 9.29404C1.89417 10.6357 2.02551 12.004 2.46954 13.2846C2.91357 14.5652 3.65741 15.7211 4.639 16.6557C5.62059 17.5904 6.81147 18.2768 8.11228 18.6576C9.41309 19.0384 10.7861 19.1026 12.1168 18.8449C13.4475 18.5872 14.6972 18.015 15.7618 17.176L19.4138 20.828C19.6024 21.0102 19.855 21.111 20.1172 21.1087C20.3794 21.1064 20.6302 21.0012 20.8156 20.8158C21.001 20.6304 21.1062 20.3796 21.1084 20.1174C21.1107 19.8552 21.0099 19.6026 20.8278 19.414L17.1758 15.762C18.1638 14.5086 18.7789 13.0024 18.9509 11.4157C19.1228 9.82905 18.8446 8.22602 18.148 6.79009C17.4514 5.35417 16.3646 4.14336 15.0121 3.29623C13.6595 2.44911 12.0957 1.99989 10.4998 2ZM3.99977 10.5C3.99977 8.77609 4.68458 7.12279 5.90357 5.90381C7.12256 4.68482 8.77586 4 10.4998 4C12.2237 4 13.877 4.68482 15.096 5.90381C16.3149 7.12279 16.9998 8.77609 16.9998 10.5C16.9998 12.2239 16.3149 13.8772 15.096 15.0962C13.877 16.3152 12.2237 17 10.4998 17C8.77586 17 7.12256 16.3152 5.90357 15.0962C4.68458 13.8772 3.99977 12.2239 3.99977 10.5Z"
                                  fill="#88C62A"
                              />
                            </svg>
                        </span>

                        <input
                            type="text"
                            className="form-control border-start-0"
                            placeholder="Введите поисковой запрос"
                            aria-label="Search"
                        />

                        <div className="button-wrapper">
                            <button id="search-button" className="btn text-white h-100 w-100" type="button">
                                Найти
                            </button>
                        </div>
                    </div>
                </div>

                <div id="connected-resources-content-block" className="content-block">
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="content-block-title">
                            Подключенные ресурсы
                        </p>

                        {/* Кнопка подключения ресурса */}
                        <NavLink to="/connect-resource" className="text-decoration-none">
                            <button id="connect-resource-button"
                                    className="btn d-flex align-items-center justify-content-center">
                                <img src="/img/button-plus-icon.svg" alt=""/>

                                <span className="button-text">Подключить ресурс</span>
                            </button>
                        </NavLink>
                    </div>

                    <div id="resourcesCardContainer" className="row g-20">
                        {resourcesCard.map((resourceCard, index) => (
                            <div className="col-lg-6" key={index}>
                                <ConnectedResourceCard resourceCardItems={resourceCard}/>
                            </div>
                        ))}
                    </div>
                </div>

                <div id="search-form-code-content-block" className="content-block">
                    <div className="content-block-title">
                        Код формы поиска
                    </div>

                    <div id="copy-code-container" className="row g-20">
                        <div className="col-lg-8">
                            <input
                                id="search-form-code-input"
                                type="text"
                                className="form-control"
                                value={codeValue}
                                disabled
                            />
                        </div>

                        <div className="col-lg-4">
                            <button
                                id="copy-code-button"
                                className={`w-100 h-100 ${isCopied ? 'copied' : ''}`}
                                onClick={handleCopyCode}
                            >
                                <span className="button-text ${isCopied ? 'Скопировано' : 'Скопировать'}">
                                    {isCopied ? 'Скопировано' : 'Скопировать'}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

export default MainPill;