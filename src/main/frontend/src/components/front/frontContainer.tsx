import * as React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { AppState } from "../../reducers";
import { loadAppStatus } from "../../actions/loadAppStatus";
import { Front } from "./front";

const mapStateToProps = (state: AppState) => ({
    appStatus: state.appStatus,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ loadAppStatus }, dispatch);

export const FrontContainer =
    connect(mapStateToProps, mapDispatchToProps)(Front);