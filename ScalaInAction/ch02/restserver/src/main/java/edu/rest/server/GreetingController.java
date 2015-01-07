package edu.rest.server;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.Enumeration;

/**
 * Created by Eduard Luhtonen on 07/01/15.
 * REST service controller to handle POST, GET and DELETE requests.
 *
 */
@RestController
@RequestMapping("/greeting")
public class GreetingController {

    @Autowired
    HttpServletRequest request;

    @RequestMapping(method = RequestMethod.GET)
    public String goGet() {
        return buildResponse("Get method called");
    }

    @RequestMapping(method = RequestMethod.POST)
    public String doPost() {
        return buildResponse("Post method called");
    }

    @RequestMapping(method = RequestMethod.DELETE)
    public String doDelete() {
        return "Delete method called";
    }

    private String buildResponse(String message) {
        return message + "\n" + parameters() + "\n";
    }

    private String parameters() {
        StringBuilder builder = new StringBuilder();
        // request parameters
        Enumeration<String> e = request.getParameterNames();
        while (e.hasMoreElements()) {
            String name = e.nextElement();
            builder.append(" | ").append(name).append(" -> ").append(request.getParameter(name));
        }
        builder.append("\n");
        // request headers
        e = request.getHeaderNames();
        while(e.hasMoreElements()) {
            String name = e.nextElement();
            builder.append(" | ").append(name).append(" -> ").append(request.getHeader(name));
        }
        return builder.toString();
    }
}
