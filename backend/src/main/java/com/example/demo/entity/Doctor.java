package com.example.demo.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="doctor")
public class Doctor {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	@Column(name="did")
	private int did;
	@Column(name="dname")
	private String dname;
	@Column(name="dfield")
	private String dfield;
	@Column(name="dage")
	private int dage;
	@Column(name="dgender")
	private String dgender;
	@Column(name="dpatientcount")
	private int dpatientcount=0;
	@Column(name="dfees")
	private int dfees;
	@Column(name="dlistoftreatments")
	private String dlistoftreatments;
	
	
	@OneToMany
    private List<User> users;

    public List<User> getUsers() {
        return users;
    }

    public void addUsers(User user) {
        users.add(user);
    }
	
	
	public Doctor() {
		
	}

	public Doctor(int did, String dname, String dfield, int dage, String dgender, int dpatientcount, int dfees,
			String dlistoftreatments) {
		super();
		this.did = did;
		this.dname = dname;
		this.dfield = dfield;
		this.dage = dage;
		this.dgender = dgender;
		this.dpatientcount = dpatientcount;
		this.dfees = dfees;
		this.dlistoftreatments = dlistoftreatments;
	}

	public int getDid() {
		return did;
	}

	public void setDid(int did) {
		this.did = did;
	}

	public String getDname() {
		return dname;
	}

	public void setDname(String dname) {
		this.dname = dname;
	}

	public String getDfield() {
		return dfield;
	}

	public void setDfield(String dfield) {
		this.dfield = dfield;
	}

	public int getDage() {
		return dage;
	}

	public void setDage(int dage) {
		this.dage = dage;
	}

	public String getDgender() {
		return dgender;
	}

	public void setDgender(String dgender) {
		this.dgender = dgender;
	}

	public int getDpatientcount() {
		return dpatientcount;
	}

	public void setDpatientcount() {
		this.dpatientcount = dpatientcount+1;
	}

	public int getDfees() {
		return dfees;
	}

	public void setDfees(int dfees) {
		this.dfees = dfees;
	}

	public String getDlistoftreatments() {
		return dlistoftreatments;
	}

	public void setDlistoftreatments(String dlistoftreatments) {
		this.dlistoftreatments = dlistoftreatments;
	}

	@Override
	public String toString() {
		return "doctor [did=" + did + ", dname=" + dname + ", dfield=" + dfield + ", dage=" + dage + ", dgender="
				+ dgender + ", dpatientcount=" + dpatientcount + ", dfees=" + dfees + ", dlistoftreatments="
				+ dlistoftreatments + "]";
	}
}
