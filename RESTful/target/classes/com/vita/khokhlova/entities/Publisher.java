package com.vita.khokhlova.entities;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="publisher")
@NamedQuery(name="Publisher.findAll", query="SELECT p FROM Publisher p")
public class Publisher implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(unique=true, nullable=false)
	private Integer id;

	@Column(nullable=false, length=50)
	private String name;

	@OneToMany(mappedBy="publisher")
	private List<Book> books;

	public Publisher() {
	}

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

//	public List<Book> getBooks() {
//		return this.books;
//	}
//
//	public void setBooks(List<Book> books) {
//		this.books = books;
//	}

//	public Book addBook(Book book) {
//		getBooks().add(book);
//		book.setPublisher(this);
//
//		return book;
//	}
//
//	public Book removeBook(Book book) {
//		getBooks().remove(book);
//		book.setPublisher(null);
//
//		return book;
//	}

}