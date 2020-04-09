package ru.he.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/musicPlayer")
public class MusicPlayer {

    @GetMapping
    public String getSignUpPage() {
        return "musicPlayer";
    }
}
