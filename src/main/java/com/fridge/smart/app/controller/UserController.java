package com.fridge.smart.app.controller;

import com.fridge.smart.app.model.UserDTO;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/user")
public class UserController {

    @RequestMapping(method = RequestMethod.GET)
    public @ResponseBody UserDTO getSomeUser() {
        UserDTO user = new UserDTO();
        user.setId(1L);
        user.setName("NAME");
        user.setSurname("SURNAME");
        user.setEmail("email");
        return user;
    }
}
