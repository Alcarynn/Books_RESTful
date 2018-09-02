package com.vita.khokhlova.services;

import java.util.List;

import javax.ws.rs.*;
import javax.ws.rs.core.*;

import com.vita.khokhlova.repositories.*;
import com.vita.khokhlova.entities.*;

@Path("/publisher")

public class PublisherCRUD {

	private PublisherRepository publisherRepository = new PublisherRepository();

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Publisher> getAllPublishers() {
		return publisherRepository.getAll();
	}

	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Publisher getPublisher(@PathParam("id") int id) {
		return publisherRepository.getPublisherById(id);
	}

	@GET
	@Path("/name/{publishername}")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Publisher> getPublisherByName(@PathParam("publishername") String publishername) {
		return publisherRepository.getPublisherByName(publishername);
	}
	
	@POST
	@Path("")
	@Consumes(MediaType.APPLICATION_JSON)
	public Publisher createPublisher(Publisher publisher) {
		publisherRepository.createPublisher(publisher);
		return publisher;
	}

}
