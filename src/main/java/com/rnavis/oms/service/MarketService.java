package com.rnavis.oms.service;

import com.rnavis.oms.engine.marketData.MarketEngine;
import com.rnavis.oms.vo.AppStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MarketService implements IMarketService {

    @Autowired
    private MarketEngine engine;
    @Override
    public AppStatus getMarketStatus() {
        AppStatus status = new AppStatus();
        status.setStatus("Connected");
        if (engine.isRunning()) {
            status.setMarketStatus("Connected");
        } else {
            status.setMarketStatus("NotConnected");
        }
        return status;
    }

    @Override
    public void startMarket() {
        engine.startMarket();
    }

    @Override
    public void stopMarket() {
        engine.stopMarket();
    }

    @Override
    public boolean isMarketOpen() {
        return engine.isRunning();
    }

}
