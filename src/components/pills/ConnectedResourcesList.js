import {AppLayout} from "../../AppLayout";
import ConnectedResourceCard from "./ConnectedResourceCard";
import React from "react";

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

function ConnectedResourcesList () {
    return (
        <AppLayout>
            <div id="connected-resources-list" className="main-container">
                <div className="content-block">
                    <div className="content-block-title">
                        Список подключенных ресурсов
                    </div>

                    <div id="resourcesCardContainer" className="row g-20">
                        {resourcesCard.map((resourceCard, index) => (
                            <div className="col-lg-6" key={index}>
                                <ConnectedResourceCard resourceCardItems={resourceCard}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

export default ConnectedResourcesList;
