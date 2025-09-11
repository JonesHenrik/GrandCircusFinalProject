package com.Server.model;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "records")
public class Record{

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;

  @Column(name = "response")
  private String response;

  @Column(name = "waterW")
  private double waterW;

  @Column(name = "electricW")
  private double electricW;

  @Column(name = "co2W")
  private double co2W;

  @Version
  private Long version;

  //CNSTR
  public Record(){}

  public Record(int id, String response, double waterW, double electricW, double co2W, Long version) {
    this.id = id;
    this.response = response;
    this.waterW = waterW;
    this.electricW = electricW;
    this.co2W = co2W;
    this.version = version;
  }


  //G&S


  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getResponse() {
    return response;
  }

  public void setResponse(String response) {
    this.response = response;
  }

  public double getWaterW() {
    return waterW;
  }

  public void setWaterW(double waterW) {
    this.waterW = waterW;
  }

  public double getElectricW() {
    return electricW;
  }

  public void setElectricW(double electricW) {
    this.electricW = electricW;
  }

  public double getCo2W() {
    return co2W;
  }

  public void setCo2W(double co2W) {
    this.co2W = co2W;
  }

  public Long getVersion() {
    return version;
  }

  public void setVersion(Long version) {
    this.version = version;
  }


  public boolean equals(Object object) {
    if (object == null || getClass() != object.getClass()) return false;
    if (!super.equals(object)) return false;
    Record record = (Record) object;
    return id == record.id && java.lang.Double.compare(waterW, record.waterW) == 0 && java.lang.Double.compare(electricW, record.electricW) == 0 && java.lang.Double.compare(co2W, record.co2W) == 0 && java.util.Objects.equals(response, record.response) && java.util.Objects.equals(version, record.version);
  }

  public int hashCode() {
    return Objects.hash(super.hashCode(), id, response, waterW, electricW, co2W, version);
  }

  @java.lang.Override
  public java.lang.String toString() {
    return "Record{" +
            "id=" + id +
            ", response='" + response + '\'' +
            ", waterW=" + waterW +
            ", electricW=" + electricW +
            ", co2W=" + co2W +
            ", version=" + version +
            '}';
  }
}


