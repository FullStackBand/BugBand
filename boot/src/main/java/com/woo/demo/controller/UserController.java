package com.woo.demo.controller;

import com.woo.demo.bean.User;
import com.woo.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Objects;

@Controller
@RequestMapping("/rest")
public class UserController {

    @Autowired
    private UserRepository userRepository;


    @RequestMapping(value = "/user", method = RequestMethod.POST)
    @ResponseBody
    public void addUser(@RequestBody User user) {
        if (Objects.nonNull(user)) {
            SimpleDateFormat sf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            user.setRegTime(sf.format(new Date()));
        }
        userRepository.saveAndFlush(user);
    }

    @RequestMapping(value = "/user", method = RequestMethod.GET)
    @ResponseBody
    public Object getUser() {
        return userRepository.findAll();
    }

    @RequestMapping(value = "/user", method = RequestMethod.DELETE)
    @ResponseBody
    public void deleteUser() {
        userRepository.deleteAllInBatch();
    }
}
