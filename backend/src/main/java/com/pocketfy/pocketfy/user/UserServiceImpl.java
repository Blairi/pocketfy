package com.pocketfy.pocketfy.user;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.function.Predicate;

@Service
public class UserServiceImpl implements UserService{

    private static List<UserDTO> users = new ArrayList<>();
    private static Long userCount = 0L;

    static {
        users.add(
                new UserDTO(++userCount, "Axel", "blairi", "axel@mail.com", "password")
        );
        users.add(
                new UserDTO(++userCount, "Kelly", "kelly", "kelly@mail.com", "password")
        );
    }

    @Override
    public UserDTO getUserById(Long id) {
        Predicate<? super UserDTO> predicate =
                user -> user.getId().equals(id);
        Optional<UserDTO> user = users.stream().filter(predicate).findFirst();

        if( user.isEmpty() ) throw new RuntimeException("User not found");

        return user.get();
    }
}
