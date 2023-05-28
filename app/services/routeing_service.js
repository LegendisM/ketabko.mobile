import React from "react";

class RouteingService {
    constructor(Base) {
        this.BaseClass = Base;
        this.Routes = {};
        this.CurrentRouteName = "SplashScreen";
        this.BeforeRouteName = "";
    }

    RegisterRouteByName(Name, Content) {
        delete this.Routes[Name];
        this.Routes[Name] = Content;
    }
    SetCurrentRouteByName(Name) {
        this.BeforeRouteName = this.CurrentRouteName;
        this.CurrentRouteName = Name;
        setTimeout(() => {
            this.BaseClass.setState({});
        }, 500);
    }
    GetCurrentRoute() {
        return this.Routes[this.CurrentRouteName];
    }
    GetCurrentRouteName() {
        return this.CurrentRouteName;
    }
    GotoPreviousRoute() {
        if (this.BeforeRouteName != "") {
            this.SetCurrentRouteByName(this.BeforeRouteName);
            this.BeforeRouteName = "";
        }
    }
}

export default RouteingService;