package com.categorymanager.microservice.entity;

import java.util.Set;
import javax.persistence.*;

import lombok.Data;


@Entity
@Table(name = "app_category")
@Data
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "name", nullable = false)
    private String name;


    @Column(name = "parentid")
    private Long parentid;

}
