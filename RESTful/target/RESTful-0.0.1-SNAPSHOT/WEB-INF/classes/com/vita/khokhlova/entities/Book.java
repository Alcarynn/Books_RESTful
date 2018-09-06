package com.vita.khokhlova.entities;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="book")
@NamedQuery(name="Book.findAll", query="SELECT b FROM Book b")
public class Book implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(unique=true, nullable=false)
	private Integer id;

	private Integer nbpage;

	@Column(nullable=false)
	private double price;

	@Column(nullable=false, length=50)
	private String title;

	@ManyToMany
	@JoinTable(
		name="book_author"
		, joinColumns={
			@JoinColumn(name="book_id", nullable=false)
			}
		, inverseJoinColumns={
			@JoinColumn(name="author_id", nullable=false)
			}
		)
	private List<Author> authors;


	@ManyToOne
	@JoinColumn(name="publisherid")
	private Publisher publisher;

	public Book() {
	}

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getNbpage() {
		return this.nbpage;
	}

	public void setNbpage(Integer nbpages) {
		this.nbpage = nbpages;
	}

	public double getPrice() {
		return this.price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getTitle() {
		return this.title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public List<Author> getAuthors() {
		return this.authors;
	}

	public void setAuthors(List<Author> authors) {
		this.authors = authors;
	}

	public Publisher getPublisher() {
		return this.publisher;
	}

	public void setPublisher(Publisher publisher) {
		this.publisher = publisher;
	}

}