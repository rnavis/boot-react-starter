package com.rnavis.oms;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class OmsController {
    @Autowired
    private OrderService orderService;
    @RequestMapping(value="/echo")
    public String echo(@RequestParam(value="request", defaultValue="Hello!") String request) {
        return request;
    }

    @RequestMapping(value="/getOrders")
    public List<Order> getOrders() {
        return orderService.getOrders();
    }

    @RequestMapping(value="/status")
    public AppStatus getStatus() {
        AppStatus status = new AppStatus();
        status.setStatus("Connected");
        status.setMarketStatus("NotConnected");
        return status;
    }

}


