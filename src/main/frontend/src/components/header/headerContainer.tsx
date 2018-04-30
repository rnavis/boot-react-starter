import * as React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import { AppState } from "../../app-state";
import { loadAppStatus } from "../../actions/loadAppStatus";
import { Header } from "./header";

const mapStateToProps = (state: AppState) => ({
    appStatus: state.appStatus,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ loadAppStatus }, dispatch);

export const HeaderContainer =
    connect(mapStateToProps, mapDispatchToProps)(Header);