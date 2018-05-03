package com.rnavis.oms.service;

import com.rnavis.oms.engine.rules.OrderRules;
import com.rnavis.oms.engine.rules.Rules;
import com.rnavis.oms.vo.Order;
import com.rnavis.oms.vo.OrderValidation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Service
public class OrderService implements IOrderService{
    @Autowired
    IMarketService marketService;
    public List<Order> getValidatedOrders(List<Order> orders) {
        for (Order order: orders) {
            order.setId(generateId());
            if (!marketService.isMarketOpen()) {
                updateMarketAsClosed(order);
            } else {
                OrderRules.runRules(order);
            }
        }
        return orders;
    }

    private void updateMarketAsClosed(Order order) {
        order.setValidation(new OrderValidation(order.getId(), "Market Closed"));
    }
    private static int generateId() {
        return generateId(1,100000);
    }

    private static int generateId(int min, int max) {
        if (min >= max) {
            throw new IllegalArgumentException("max must be greater than min");
        }

        Random r = new Random();
        return r.nextInt((max - min) + 1) + min;
    }

}
