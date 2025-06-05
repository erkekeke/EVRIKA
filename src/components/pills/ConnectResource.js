import {AppLayout} from "../../AppLayout";
import Select from 'react-select';
import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {Button, Modal} from "react-bootstrap"

const resourcesList = [
    {
        id: 0,
        name: 'ЭБС IPR Smart',
        linkPath: '/img/temp/ipr-smart.svg',
    },
    {
        id: 1,
        name: 'ЭБС Лань',
        linkPath: '/img/temp/fallow-deer.svg',
    },
    {
        id: 2,
        name: 'ЭБС Любань',
        linkPath: '/img/temp/luban.svg',
    },
    {
        id: 3,
        name: 'ЭБС Ололо',
        linkPath: '/img/temp/ololo.svg',
    },
]

function TechSupportRequestModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div id="tech-support-block" className="d-flex align-items-center justify-content-end" onClick={handleShow}>
                <img src="/img/connect-resource/techsupport-icon.svg" alt=""/>
                <span>Техподдержка</span>
            </div>

            <Modal id="tech-support-modal" show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>
                        Заявка в техническую поддержку
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <textarea
                        name=""
                        id=""rows="6"
                        placeholder="Напишите свой запрос или комментарий"
                        className="w-100"
                    >
                    </textarea>

                    <div>
                        <label
                            htmlFor="fileInput"
                            className="custom-file-button d-flex align-items-center justify-content-end"
                        >
                            <img src="/img/connect-resource/upload-icon.svg" alt=""/>
                            Выбрать файл
                        </label>
                        <input type="file" id="fileInput" className="d-none" />
                    </div>

                    <div className="text-center">
                        <Button id="send-button" onClick={handleClose}>
                            Отправить заявку
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

function ChooseResourceBlock({onResourceSelect, resetSelection}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [menuHeight, setMenuHeight] = useState();
    const [selectedOption, setSelectedOption] = useState(null);

    // Получение опций для селекта
    const options = resourcesList.map(resource => ({
        value: resource.id,
        label: resource.name,
        icon: resource.linkPath,
    }));

    // Стилизация селекта
    const selectStyles = {
        control: (base, {isFocused}) => ({
            ...base,
            border: 'none',
            boxShadow: 'none',
            marginTop: '20px',
            borderRadius: '10px',
            padding: '8px 15px',
            backgroundColor: '#F2F2F2',
            fontSize: '16px',
            fontWeight: '400',
            lineHeight: '125%',
            cursor: 'pointer',
        }),
        placeholder: (base) => ({
            ...base,
            fontWeight: '500',
            color: '#979797',
            lineHeight: '125%',
        }),
    };

    // Кастомный option
    const formatOptionLabel = ({label, icon}) => (
        <div className="d-flex align-items-center">
            <img src={icon} alt={label} style={{width: '20px', marginRight: '10px'}}/>
            {label}
        </div>
    );

    // Для раскрытия контейнера селекта
    const handleMenuOpen = () => {
        setIsMenuOpen(true);
        setMenuHeight(options.length * 40 + 40);
    };

    const handleMenuClose = () => {
        setIsMenuOpen(false);
    };

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        onResourceSelect(selectedOption);
    };

    // Сброс значения при получении сигнала reset
    useEffect(() => {
        if (resetSelection) {
            setSelectedOption(null);
        }
    }, [resetSelection]);

    return (
        <div
            id="choose-resource-block"
            className="content-block"
            style={{
                transition: 'padding-bottom 0.3s ease',
                paddingBottom: isMenuOpen ? `${menuHeight}px` : '35px',
                overflow: 'hidden',
            }}
        >
            <div className="content-block-title">
                Выбор ресурса
            </div>

            <Select
                className="choose-resource-select"
                classNamePrefix="select"
                placeholder="Выберите ресурс, который хотите подключить"
                options={options}
                formatOptionLabel={formatOptionLabel}
                styles={selectStyles}
                onMenuOpen={handleMenuOpen}
                onMenuClose={handleMenuClose}
                menuPlacement="auto"
                menuPosition="fixed"
                menuShouldScrollIntoView={false}
                components={{
                    IndicatorSeparator: () => null,
                    NoOptionsMessage: (props) => (
                        <div className="select__no-options text-center">
                            Ничего не найдено
                        </div>
                    )
                }}
                onChange={handleChange}
                value={selectedOption}
            />
        </div>
    );
}

function ConnectionSetupBlock({isDisabled, onDataSubmit}) {
    const [isHidden, setHidden] = useState(false);
    const [clientId, setClientId] = useState('');
    const [secretKey, setSecretKey] = useState('');

    const toggleAccordion = () => {
        if (!isDisabled) {
            setHidden(!isHidden);
        }
    }

    const handleSubmit = () => {
        // Здесь должна быть логика отправки данных
        console.log('Отправка данных:', {clientId, secretKey});
        // После успешной отправки вызываем колбэк
        onDataSubmit();
    }

    return (
        <div id="connection-setup-block" className={`content-block ${isDisabled ? 'disabled-block' : ''}`}>
            <div
                className="d-flex align-items-center justify-content-between"
                onClick={toggleAccordion}
                style={{cursor: isDisabled ? 'default' : 'pointer'}}
            >
                <div className={`content-block-title ${isDisabled ? 'hidden' : ''}`}>
                    Настройка подключения
                </div>

                <svg className={`accordion-arrow ${isHidden ? 'hidden' : ''} ${isDisabled ? 'disabled' : ''}`}
                     width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12.5278 4.5C12.1429 3.83333 11.1806 3.83333 10.7957 4.5L2.13547 19.5C1.75057 20.1667 2.23169 21 3.00149 21H20.322C21.0918 21 21.5729 20.1667 21.188 19.5L12.5278 4.5Z"
                        fill="#5B9B15"/>
                </svg>
            </div>

            {!isDisabled && (
                <div className={`accordion-container ${isHidden ? 'hidden' : ''}`}>
                    <p className="form-text">Заполните поля</p>

                    <div className="fields-block">
                        <div className="row g-20">
                            <div className="col-lg-6">
                                <label className="form-label">Поле CLIENT_ID</label>
                                <input
                                    className="form-control"
                                    placeholder="Введите поле"
                                    value={clientId}
                                    onChange={(e) => setClientId(e.target.value)}
                                />
                            </div>
                            <div className="col-lg-6">
                                <label className="form-label">SECRET KEY</label>
                                <input
                                    className="form-control"
                                    placeholder="Введите поле"
                                    value={secretKey}
                                    onChange={(e) => setSecretKey(e.target.value)}
                                />
                                <div className="text-end">
                                    <NavLink
                                        to=""
                                        className="info-block d-inline-flex align-items-center text-decoration-none"
                                    >
                                        <img src="/img/connect-resource/info-icon.svg" alt=""/>
                                        Где взять данные?
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button
                            className="check-data-button"
                            onClick={handleSubmit}
                            disabled={!clientId || !secretKey}
                        >
                            Проверить данные
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

function ConnectionStatusBlock({isDisabled, connectionStatus, onClose}) {
    const [isHidden, setHidden] = useState(false);

    const toggleAccordion = () => {
        if (!isDisabled) {
            setHidden(!isHidden);
        }
    }

    return (
        <div id="connection-status-block" className={`content-block ${isDisabled ? 'disabled-block' : ''}`}>
            <div
                className="d-flex justify-content-between align-items-center"
                onClick={toggleAccordion}
                style={{cursor: isDisabled ? 'default' : 'pointer'}}
            >
                <div className={`content-block-title ${isDisabled ? 'hidden' : ''}`}>
                    Статус подключения
                </div>

                <svg className={`accordion-arrow ${isHidden ? 'hidden' : ''} ${isDisabled ? 'disabled' : ''}`}
                     width="24" height="25"
                     viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12.5278 4.5C12.1429 3.83333 11.1806 3.83333 10.7957 4.5L2.13547 19.5C1.75057 20.1667 2.23169 21 3.00149 21H20.322C21.0918 21 21.5729 20.1667 21.188 19.5L12.5278 4.5Z"
                        fill="#5B9B15"/>
                </svg>
            </div>

            {!isDisabled && (
                <div className={`accordion-container ${isHidden ? 'hidden' : ''}`}>
                    {connectionStatus === 'in-progress' && (
                        <div id="in-progress-block">
                            <div className="status-title-block d-flex align-items-center">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 3C16.97 3 21 7.03 21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3Z"
                                        stroke="#CFE7B8" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"/>
                                    <path d="M12 3C16.97 3 21 7.03 21 12" stroke="#5B9B15" stroke-width="2"
                                          stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                                <span>
                                    Происходит оценка статуса подключения
                                </span>
                            </div>
                        </div>
                    )}

                    {connectionStatus === 'successful' && (
                        <div id="successful-block">
                            <div className="status-title-block d-flex align-items-center">
                                <img src="/img/connect-resource/status-successful-icon.svg" alt=""/>
                                <span className="fw-bold">Успешно</span>
                            </div>

                            <p className="status-text">
                                Ресурс подключен к единому поиску
                            </p>

                            <div className="status-buttons-block">
                                <div className="col-lg-3">
                                    <button
                                        className="close-button green-button w-100"
                                        onClick={onClose}
                                    >
                                        Закрыть
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {connectionStatus === 'error' && (
                        <div id="error-block">
                            <div className="status-title-block d-flex align-items-center">
                                <img src="/img/connect-resource/status-error-icon.svg" alt=""/>
                                <span className="fw-bold">Ошибка</span>
                            </div>

                            <p className="status-text">
                                Не удалось подключить ресурс. Попробуйте ввести <br/>
                                подключить ресурс еще раз или обратитесь <br/>
                                в техническую поддержку.
                            </p>

                            <div className="status-buttons-block">
                                <div className="d-flex gap-10">
                                    <div className="col-lg-3">
                                        <button id="try-again-button" className="green-button w-100">
                                            Повторить попытку
                                        </button>
                                    </div>
                                    <div className="col-lg-3">
                                        <button
                                            className="close-button w-100"
                                            onClick={onClose}
                                        >
                                            Закрыть
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <TechSupportRequestModal />
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

function ConnectResource() {
    const [selectedResource, setSelectedResource] = useState(null);
    const [isSetupSubmitted, setIsSetupSubmitted] = useState(false);
    const [resetSelection, setResetSelection] = useState(false);

    const handleResourceSelect = (resource) => {
        setSelectedResource(resource);
        setIsSetupSubmitted(false);
        setResetSelection(false);
    };

    const handleSetupSubmit = () => {
        setIsSetupSubmitted(true);
    };

    const handleClose = () => {
        setSelectedResource(null);
        setIsSetupSubmitted(false);
        setResetSelection(true);
    };

    return (
        <AppLayout>
            <div id="connect-resource-page" className="main-container">
                <div className="content-block">
                    <div className="content-block-title">
                        Подключить ресурс
                    </div>

                    <div className="connection-status-block">
                        <div className="connection-status-titles d-flex justify-content-between">
                            <span>Выбор ресурса</span>
                            <span>Настройка подключения</span>
                            <span>Статус подключения</span>
                        </div>

                        <div className="connection-status-points d-flex align-items-center justify-content-between">
                            <svg className="point-icon active" width="20" height="20" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="10" r="10" fill="#E2E2E2"/>
                                <circle cx="10" cy="10" r="4" fill={selectedResource ? "#5B9B15" : "#979797"}/>
                            </svg>

                            <div className={`status-line ${selectedResource ? 'active' : ''}`}></div>

                            <svg className={`point-icon ${selectedResource ? 'active' : ''}`} width="20" height="20"
                                 viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="10" r="10" fill="#E2E2E2"/>
                                <circle cx="10" cy="10" r="4" fill={selectedResource ? "#5B9B15" : "#979797"}/>
                            </svg>

                            <div className={`status-line ${isSetupSubmitted ? 'active' : ''}`}></div>

                            <svg className={`point-icon ${isSetupSubmitted ? 'active' : ''}`} width="20" height="20"
                                 viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="10" r="10" fill="#E2E2E2"/>
                                <circle cx="10" cy="10" r="4" fill={isSetupSubmitted ? "#5B9B15" : "#979797"}/>
                            </svg>
                        </div>
                    </div>
                </div>

                <ChooseResourceBlock
                    onResourceSelect={handleResourceSelect}
                    resetSelection={resetSelection}
                />

                <ConnectionSetupBlock
                    isDisabled={!selectedResource}
                    onDataSubmit={handleSetupSubmit}
                />

                <ConnectionStatusBlock
                    isDisabled={!isSetupSubmitted}
                    connectionStatus="in-progress"
                    onClose={handleClose}
                />
                <ConnectionStatusBlock
                    isDisabled={!isSetupSubmitted}
                    connectionStatus="successful"
                    onClose={handleClose}
                />
                <ConnectionStatusBlock
                    isDisabled={!isSetupSubmitted}
                    connectionStatus="error"
                    onClose={handleClose}
                />
            </div>
        </AppLayout>
    );
}

export default ConnectResource;