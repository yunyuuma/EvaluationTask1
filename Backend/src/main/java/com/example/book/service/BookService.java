package com.example.book.service;

import com.example.book.dto.BookUpdateRequest;
import com.example.book.entity.Book;
import com.example.book.repository.BookRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BookService {

    private final BookRepository bookRepository;

    public List<Book> findAll() {
        return bookRepository.findAll();
    }

    public Book findByJanCd(String janCd) {
        return bookRepository.findById(janCd)
                .orElseThrow(() -> new RuntimeException("対象の書籍が存在しません。"));
    }

    public Book update(String janCd, BookUpdateRequest request) {
        Book book = findByJanCd(janCd);

        book.setIsbnCd(request.getIsbnCd());
        book.setBookNm(request.getBookNm());
        book.setBookKana(request.getBookKana());
        book.setPrice(request.getPrice());

        if (request.getIssueDate() != null && !request.getIssueDate().isBlank()) {
            book.setIssueDate(LocalDate.parse(request.getIssueDate()));
        } else {
            book.setIssueDate(null);
        }

        book.setUpdateDatetime(LocalDateTime.now());

        return bookRepository.save(book);
    }
}