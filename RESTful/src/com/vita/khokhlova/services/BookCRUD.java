package com.vita.khokhlova.services;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.vita.khokhlova.entities.Book;
import com.vita.khokhlova.repositories.BookRepository;

@Path("/book")
public class BookCRUD {

	private BookRepository bookRepository = new BookRepository();

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Book> getAllBooks() {
		return bookRepository.getAll();
	}

	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Book> getBookById(@PathParam("id") int id) {
		List<Book> bookList = new ArrayList<Book>();
		bookList.add(bookRepository.getById(id));
		return bookList;
	}

	@GET
	@Path("/title/{title}")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Book> getBookByTitle(@PathParam("title") String title) {
		return bookRepository.getByTitle(title);
	}

	@DELETE
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response deleteBook(@PathParam("id") int id) {
		Response response;
		Book book = bookRepository.getById(id);
		if (book == null) {
			response = Response.ok("entity with id=" + id + " does not exist").build();
		} else {
			bookRepository.deleteBook(id);
			response = Response.ok("entity " + book + " is deleted").build();
		}

		return response;
	}

	@POST
	@Path("")
	@Consumes(MediaType.APPLICATION_JSON)
	public Book createBookByPost(Book book) {
		bookRepository.createBook(book);
		return book;
	}

	@PUT
	@Path("")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response updateBookByPut(Book book) {
		Book bexists = bookRepository.getById(book.getId());
		String s = bexists.toString();
		bookRepository.updateBook(book);
		return Response.ok("book " + s + " is updated to " + book).build();
	}
}
