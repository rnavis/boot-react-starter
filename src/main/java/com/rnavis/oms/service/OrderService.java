package com.rnavis.oms.service;

import com.rnavis.oms.vo.Order;
import com.rnavis.oms.vo.OrderValidation;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Service
public class OrderService {

    public List<Order> getValidatedOrders(List<Order> orders) {
        for (Order o: orders) {
            o.setId(generateId());
            o.setIsValid(true);
            if (o.getSymbol().equalsIgnoreCase("GMO")) {
                o.setIsValid(false);
                o.setValidation(new OrderValidation(o.getId(), "My unknown symbol"));
            } else {
                o.setValidation(new OrderValidation(o.getId(), "Good to execute"));
            }
        }
        return orders;
    }

    private static int generateId() {
        return generateId(1,1000);
    }

    private static int generateId(int min, int max) {
        if (min >= max) {
            throw new IllegalArgumentException("max must be greater than min");
        }

        Random r = new Random();
        return r.nextInt((max - min) + 1) + min;
    }
}
