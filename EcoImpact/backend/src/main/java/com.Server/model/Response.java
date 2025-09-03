package com.Server.model;

import jakarta.persistence.*;

@Entity
@Table
public class Response{

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;

  @Column(name = " ")
  private String response;

  @Column(name = " ")
  private double waterW;

  @Column(name = " ")
  private double electricW;

  @Column(name = " ")
  private double co2W;

  @Version
  private Long version;

}
