function ProfilePanelBlock() {
    return (
        <div className="profile-panel-block bg-white">
            <div className="logo-block d-flex align-items-center justify-content-center">
                <img src="/img/evrika-logo.svg" alt=""/>
                <span className="logo-block-text text-uppercase">эврика</span>
            </div>

            <div className="profile-info-block">
                <div className="profile-name text-center">
                    Иванова Ирина
                </div>

                <div className="d-flex gap-3 justify-content-center mt-1">
                    <img src="/img/main-icon.svg" alt=""/>

                    <span className="email-text">
                        ivanova@bubleiko.ru
                    </span>
                </div>

                <div className="organization-name text-center">
                    ООО “Бубль и КО”
                </div>
            </div>

            <div className="edit-profile-button fw-bold text-center">
                Редактировать профиль
            </div>
        </div>
    );
}

export default ProfilePanelBlock;