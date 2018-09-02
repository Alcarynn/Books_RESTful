package com.vita.khokhlova.services;

import javax.ws.rs.*;
import javax.ws.rs.core.*;

@Path("/hello")
public class HelloWorldRest {

    
    @GET
    @Path("")
    @Produces(MediaType.TEXT_PLAIN)
    public String getHello() {
        return "Ca marche!";
    }

    @GET
    @Path("/{s}")
    @Produces(MediaType.TEXT_PLAIN)
    public String getHello(@PathParam("s") String s) {
        return "Hello "+s;
    }
   
}
