package com.vita.khokhlova.repositories;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;

import com.vita.khokhlova.EntityManagerFactorySingleton;
import com.vita.khokhlova.entities.*;

import java.util.List;

public class AuthorRepository {

    private EntityManager em = EntityManagerFactorySingleton.getEntityManager();

    public List<Author> getAll(){
        return em.createQuery("select a from Author a").getResultList();
    }

    public Author getById(int id) {
        return  em.find(Author.class,id);
    }
    
    public void createAuthor(Author author) {
        EntityTransaction tx = em.getTransaction();
        try {
            tx.begin();
            em.persist(author);
            tx.commit();
        }
        catch (Exception e) {
            tx.rollback();
        }
    }
}