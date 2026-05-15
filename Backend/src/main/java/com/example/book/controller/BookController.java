package com.example.book.controller;

import com.example.book.dto.BookUpdateRequest;
import com.example.book.entity.Book;
import com.example.book.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/books")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class BookController {

    private final BookService bookService;

    @GetMapping
    public List<Book> getBooks() {
        return bookService.findAll();
    }

    @GetMapping("/{janCd}")
    public Book getBook(@PathVariable String janCd) {
        return bookService.findByJanCd(janCd);
    }

    @PutMapping("/{janCd}")
    public Book updateBook(
            @PathVariable String janCd,
            @RequestBody BookUpdateRequest request
    ) {
        return bookService.update(janCd, request);
    }
}