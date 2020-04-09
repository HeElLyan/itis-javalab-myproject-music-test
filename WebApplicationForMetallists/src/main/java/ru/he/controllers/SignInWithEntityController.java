package ru.he.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import ru.he.dto.AuthDto;
import ru.he.dto.UserDto;
import ru.he.services.SignInWithTokenService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Controller
@RequestMapping("/signIn")
public class SignInWithEntityController {

    @Autowired
    private SignInWithTokenService signInService;

    @GetMapping
    public String getSingIn(Authentication authentication, ModelMap model, HttpServletRequest request, HttpSession session, AuthDto authDto) {
        if (authentication != null) {
            return "redirect:/profile";
        }
        //если параметр error на странице присутствует, то выводится страница error
        if (request.getParameterMap().containsKey("error")) {
            model.addAttribute("error", true);
        }
        return "signIn";
    }

    @PostMapping
    public String signIn(HttpSession session, AuthDto authDto) {
        UserDto userDto = signInService.signIn(authDto);
//        session.setAttribute("user-username", userDto.getUsername());
        session.setAttribute("user-email", userDto.getEmail());
        return "redirect:/profile";
    }
}
