import {AppLayout} from "../../AppLayout";
import Select from 'react-select';

function ConnectResource() {
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
                            <svg className="point-icon" width="20" height="20" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="10" r="10" fill="#E2E2E2"/>
                                <circle cx="10" cy="10" r="4" fill="#979797"/>
                            </svg>

                            <div className="status-line"></div>

                            <svg className="point-icon" width="20" height="20" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="10" r="10" fill="#E2E2E2"/>
                                <circle cx="10" cy="10" r="4" fill="#979797"/>
                            </svg>

                            <div className="status-line"></div>

                            <svg className="point-icon" width="20" height="20" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="10" r="10" fill="#E2E2E2"/>
                                <circle cx="10" cy="10" r="4" fill="#979797"/>
                            </svg>
                        </div>
                    </div>
                </div>

                <div id="choose-resource-block" className="content-block">
                    <div className="content-block-title">
                        Выбор ресурса
                    </div>

                    <Select
                        className="choose-resource-select"
                        placeholder="Выберите ресурс, который хотите подключить"
                    >
                        <option value="" disabled selected className="placeholder-red">
                            Выберите ресурс
                        </option>
                    </Select>
                </div>
            </div>
        </AppLayout>
    );
}

export default ConnectResource;