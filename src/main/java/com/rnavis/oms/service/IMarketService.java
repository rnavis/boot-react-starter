package com.rnavis.oms.service;

import com.rnavis.oms.vo.AppStatus;

public interface IMarketService {
    AppStatus getMarketStatus();
    void startMarket();
    void stopMarket();
    boolean isMarketOpen();
}
