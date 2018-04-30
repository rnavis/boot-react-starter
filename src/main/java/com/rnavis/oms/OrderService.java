package com.rnavis.oms;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class OrderService {

    public List<Order> getOrders() {
        return getOrderList();
    }

    private List<Order> getOrderList() {
        Order o1 = new Order();
        o1.setId(1);
        o1.setPrice(100);
        o1.setQuantity(5);
        o1.setSymbol("AAPL");
        Order o2 = new Order();
        o2.setId(2);
        o2.setPrice(200);
        o2.setQuantity(10);
        o2.setSymbol("GOOG");
        List<Order> orders = new ArrayList();
        orders.add(o1);
        orders.add(o2);
        return orders;
    }
}
