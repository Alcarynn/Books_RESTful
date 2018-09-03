package com.vita.khokhlova.repositories;

import com.vita.khokhlova.EntityManagerFactorySingleton;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;
import javax.persistence.Query;
import com.vita.khokhlova.entities.*;
import java.util.List;

public class BookRepository {

    private EntityManager em = EntityManagerFactorySingleton.getEntityManager();

    public List<Book> getAll(){
        return em.createQuery("select b from Book b ORDER by b.title").getResultList();
    }

    public Book getById(int id) {
        return  em.find(Book.class,id);
    }

    public void deleteBook(int id) {
        EntityTransaction tx = em.getTransaction();
        tx.begin();
        Book b = em.find(Book.class, id);
        if (b != null) {
            em.remove(b);
        }
        tx.commit();
    }

    public void createBook(Book book) {
        EntityTransaction tx = em.getTransaction();
        try {
            tx.begin();
            em.persist(book);
            tx.commit();
        }
        catch (Exception e) {
            tx.rollback();
        }
    }

    public void updateBook(Book book) {
        EntityTransaction tx = em.getTransaction();
        try {
            tx.begin();
            em.persist(em.merge(book));
            tx.commit();
        }
        catch (Exception e) {
            tx.rollback();
        }
    }

    public List<Book> getByTitle(String title) {
        String queryString = "select b from Book b where upper(b.title) LIKE '%" + title.toUpperCase()  + "%' ORDER BY b.id";
        Query query = em.createQuery(queryString);
        List<Book> bookList = query.getResultList();
        return bookList;
    }
}