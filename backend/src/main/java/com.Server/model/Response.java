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

  //CNSTR
  public Response(){}

  public Response(int id, String response, double waterW, double electricW, double co2W, Long version) {
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


  @java.lang.Override
  public java.lang.String toString() {
    return "Response{" +
      "id=" + id +
      ", response='" + response + '\'' +
      ", waterW=" + waterW +
      ", electricW=" + electricW +
      ", co2W=" + co2W +
      ", version=" + version +
      '}';
  }

  public boolean equals(Object object) {
    if (!(object instanceof Response)) return false;
    if (!super.equals(object)) return false;
    Response response1 = (Response) object;
    return getId() == response1.getId() && java.lang.Double.compare(getWaterW(), response1.getWaterW()) == 0 && java.lang.Double.compare(getElectricW(), response1.getElectricW()) == 0 && java.lang.Double.compare(getCo2W(), response1.getCo2W()) == 0 && java.util.Objects.equals(getResponse(), response1.getResponse()) && java.util.Objects.equals(getVersion(), response1.getVersion());
  }

  public int hashCode() {
    return Objects.hash(super.hashCode(), getId(), getResponse(), getWaterW(), getElectricW(), getCo2W(), getVersion());
  }
}
