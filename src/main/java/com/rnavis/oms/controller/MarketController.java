package com.rnavis.oms.controller;

import com.rnavis.oms.service.IMarketService;
import com.rnavis.oms.vo.AppStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MarketController {

    @Autowired
    private IMarketService service;

    @RequestMapping(value = "/status")
    public AppStatus getStatus() {
        return service.getMarketStatus();
    }

    @RequestMapping(value = "/stop")
    public void stop() {
        service.stopMarket();
    }

    @RequestMapping(value = "/start")
    public void start() {
        service.startMarket();
    }
}
