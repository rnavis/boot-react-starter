package com.rnavis.oms.engine.rules;

import com.rnavis.oms.vo.Order;
import com.rnavis.oms.vo.Validity;

public interface Rules {

    Validity apply(Order order);

}
