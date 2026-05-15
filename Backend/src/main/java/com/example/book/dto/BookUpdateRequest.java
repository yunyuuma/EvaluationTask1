package com.example.book.dto;

import lombok.Data;

@Data
public class BookUpdateRequest {

    private String isbnCd;
    private String bookNm;
    private String bookKana;
    private Integer price;
    private String issueDate;
}