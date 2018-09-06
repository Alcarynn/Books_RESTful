package com.vita.khokhlova.services;

import java.util.List;

import javax.ws.rs.*;
import javax.ws.rs.core.*;

import com.vita.khokhlova.repositories.*;
import com.vita.khokhlova.entities.*;

@Path("/author")
public class AuthorCRUD {

	private AuthorRepository authorRepository = new AuthorRepository();

	@GET
	@Path("/")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Author> getAll() {
		return authorRepository.getAll();
	}
	
	@GET
	@Path("author/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Author getAuthor(@PathParam("id") int id) {
		return authorRepository.getById(id);
	}
	
	@POST
	@Path("/")
	@Consumes(MediaType.APPLICATION_JSON)
	public Author createAuthor(Author author) {
		authorRepository.createAuthor(author);
		return author;
	}
}
