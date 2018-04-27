package com.rnavis.oms;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OmsController {
    
    @RequestMapping(value="/echo")
    public String echo(@RequestParam(value="request", defaultValue="Hello!") String request) {
        return request;
    }
}


