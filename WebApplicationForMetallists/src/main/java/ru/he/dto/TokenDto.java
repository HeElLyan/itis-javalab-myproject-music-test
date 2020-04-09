package ru.he.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import ru.he.models.entities.Token;

@Data
@AllArgsConstructor
public class TokenDto {
    private String value;

    public static TokenDto from(Token token) {
        return new TokenDto(token.getValue());
    }

}
