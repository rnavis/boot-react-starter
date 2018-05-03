package com.rnavis.oms.service;

import com.rnavis.oms.vo.Order;

import java.util.List;

public interface IOrderService {
    public List<Order> getValidatedOrders(List<Order> orders);
}
