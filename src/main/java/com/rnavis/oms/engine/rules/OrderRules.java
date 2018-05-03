package com.rnavis.oms.engine.rules;

import com.rnavis.oms.engine.marketData.MarketData;
import com.rnavis.oms.engine.marketData.MarketEngine;
import com.rnavis.oms.vo.Order;
import com.rnavis.oms.vo.OrderValidation;
import com.rnavis.oms.vo.Side;
import com.rnavis.oms.vo.Validity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

@Component
public enum OrderRules implements Rules {

    QuantityRule {
        public Validity apply(Order order) {
            StringBuilder sb = new StringBuilder(0);
            Validity validity = new Validity();
            validity.setValid(true);
            if (order.getQuantity() <=0) {
                validity.setValid(false);
                sb.append("Quanity Cannot be Zero or less"+"\n");
            }
            if (order.getQuantity()%10 != 0) {
                validity.setValid(false);
                sb.append("Not a round lot"+"\n");
            }
            validity.setMessage(sb.toString());
            return validity;
        }
    },
    PriceRule {
        public Validity apply(Order order) {
            StringBuilder sb = new StringBuilder(0);
            Validity validity = new Validity();
            validity.setValid(true);
            if (order.getPrice() <=0) {
                validity.setValid(false);
                sb.append("Quanity Cannot be Zero or less"+"\n");
            }
            validity.setMessage(sb.toString());
            return validity;
        }
    },
    SideRule {
        public Validity apply(Order order) {
            StringBuilder sb = new StringBuilder(0);
            Validity validity = new Validity();
            validity.setValid(true);
            if (order.getSide() == null) {
                validity.setValid(false);
                sb.append("Side not provided"+"\n");
            }
            if (!Side.exists(order.getSide())) {
                validity.setValid(false);
                sb.append("Invalid Side"+"\n");
            }
            validity.setMessage(sb.toString());
            return validity;
        }
    },
    SymbolRule {
        public Validity apply(Order order) {
            StringBuilder sb = new StringBuilder(0);
            Validity validity = new Validity();
            validity.setValid(true);
            if (order.getSymbol() == null) {
                validity.setValid(false);
                sb.append("Symbol not provided"+"\n");
            }
            if (!MarketEngine.isValidSymbol(order.getSymbol())) {
                validity.setValid(false);
                sb.append("Invalid Symbol"+"\n");
            }
            validity.setMessage(sb.toString());
            return validity;
        }
    };
    private static MarketEngine marketEngine;


    public static void runRules(Order order) {
        Map<String, Validity> response = new HashMap<>();
        for (OrderRules rule : OrderRules.values()) {
            response.put(rule.name(), rule.apply(order));
        }
        if (response.isEmpty()) {
            order.setIsValid(false);
            order.setValidation(new OrderValidation(order.getId(), "Unknown Server Error"));
            return;
        }
        Map<String, Validity> inValids = (response.entrySet().stream().filter(entry -> !entry.getValue().isValid())).collect(Collectors.toMap(p->p.getKey(), p->p.getValue()));
        if (inValids.isEmpty()) {
            order.setIsValid(true);
            order.setValidation(new OrderValidation(order.getId(), "Validated"));
            return;
        }
        StringBuilder message = new StringBuilder(0);
        inValids.values().stream().forEach(v -> message.append(v.getMessage()));
        order.setIsValid(false);
        order.setValidation(new OrderValidation(order.getId(), message.toString()));
    }
}
