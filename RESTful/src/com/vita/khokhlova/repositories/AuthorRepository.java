package com.vita.khokhlova.repositories;

import javax.persistence.EntityManager;

import com.vita.khokhlova.EntityManagerFactorySingleton;
import com.vita.khokhlova.entities.*;

import java.util.List;

public class AuthorRepository {

    private EntityManager em = EntityManagerFactorySingleton.getEntityManager();

    public List<Author> getAll(){
        return em.createQuery("select a from Atuhor a").getResultList();
    }

    public Author getById(int id) {
        return  em.find(Author.class,id);
    }
}