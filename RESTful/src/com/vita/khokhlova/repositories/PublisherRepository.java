package com.vita.khokhlova.repositories;

import com.vita.khokhlova.EntityManagerFactorySingleton;

import javax.persistence.EntityManager;
import com.vita.khokhlova.entities.*;

import java.util.List;

public class PublisherRepository {

    private EntityManager em = EntityManagerFactorySingleton.getEntityManager();

    public List<Publisher> getAll(){
        return em.createQuery("select p from Publisher p").getResultList();
    }

    public Publisher getPublisherById(int id) {
        return  em.find(Publisher.class,id);
    }

    public List<Publisher> getPublisherByName(String publishername){
        return em.createQuery("select p from Publisher p where upper(p.name)  like '%" + publishername.toUpperCase() + "%'").getResultList();
    }

}