package ru.he.repositoriesJpa;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.he.models.entities.User;

import java.util.Optional;

//видит как компонент
@Repository
public interface UsersRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    Optional<User> findByConfirmId(String confirmId);
//    void update(User user);
}
