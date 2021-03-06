package ru.he.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import ru.he.models.entities.User;
import ru.he.models.enums.State;
import ru.he.repositoriesJpa.UsersRepository;
import ru.he.services.ConfirmService;

@Component
public class ConfirmServiceImpl implements ConfirmService {

    @Autowired
    private UsersRepository usersRepository;

    @Override
    public void confirm(String confirmId) {
        User user = usersRepository.findByConfirmId(confirmId)
                .orElseThrow(() -> new IllegalArgumentException("No such user"));
        user.setState(State.CONFIRMED);
        usersRepository.save(user);
    }
}
