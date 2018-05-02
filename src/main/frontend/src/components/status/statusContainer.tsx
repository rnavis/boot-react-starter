import * as React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { AppState } from "../../reducers";
import { loadAppStatus } from "../../actions/loadAppStatus";
import { Status } from "./status";

const mapStateToProps = (state: AppState) => ({
    appStatus: state.appStatus,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ loadAppStatus }, dispatch);

export const StatusContainer =
    connect(mapStateToProps, mapDispatchToProps)(Status);