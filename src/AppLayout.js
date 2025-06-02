import Header from "./components/Header";
import {Fragment} from "react";
import ProfilePanelBlock from "./components/ProfilePanelBlock";
import NavigationMenuBlock from "./components/NavigationMenuBlock";

export const AppLayout = ({children, Wrapper = Fragment}) => {
    return (
        <Wrapper>
            <Header/>
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <ProfilePanelBlock />

                            <NavigationMenuBlock />
                        </div>
                        <div className="col-lg-8">
                            {children}
                        </div>
                    </div>
                </div>
            </main>
        </Wrapper>
    )
}
