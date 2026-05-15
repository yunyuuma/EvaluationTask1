package com.example.book.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "BOOK")
@Data
public class Book {

    @Id
    @Column(name = "JAN_CD")
    private String janCd;

    @Column(name = "ISBN_CD")
    private String isbnCd;

    @Column(name = "BOOK_NM")
    private String bookNm;

    @Column(name = "BOOK_KANA")
    private String bookKana;

    @Column(name = "PRICE")
    private Integer price;

    @Column(name = "ISSUE_DATE")
    private LocalDate issueDate;

    @Column(name = "CREATE_DATETIME")
    private LocalDateTime createDatetime;

    @Column(name = "UPDATE_DATETIME")
    private LocalDateTime updateDatetime;
}