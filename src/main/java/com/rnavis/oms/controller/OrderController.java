package com.rnavis.oms.controller;

import com.rnavis.oms.service.OrderService;
import com.rnavis.oms.vo.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class OrderController {

    @Autowired
    private OrderService orderService;

    @RequestMapping(value="/echo")
    public String echo(@RequestParam(value="request", defaultValue="here !!") String request) {
        return request;
    }

    @RequestMapping(value="/saveAndValidateOrders" , method = RequestMethod.POST)
    public List<Order> getValidatedOrders(@RequestBody List<Order> orders) {
        return orderService.getValidatedOrders(orders);
    }
}
