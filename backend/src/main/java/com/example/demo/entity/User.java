package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="user")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	@Column(name="uid")
	private int uid;
	@Column(name="uname")
	private String uname;
	@Column(name="uage")
	private int uage;
	@Column(name="udateofvisit")
	private String udateofvisit;
	@Column(name="utimeslot")
	private String utimeslot;
	@Column(name="udisease")
	private String udisease;
	@Column(name="upassword")
	private String upassword;
	@Column(name="uemail")
	private String uemail;
	@Column(name="did")
	private int did;
	
	public User() {
		
	}

	public User(int uid, String uname, int uage, String udateofvisit, String utimeslot, String udisease,
			String upassword, String uemail, int did) {
		super();
		this.uid = uid;
		this.uname = uname;
		this.uage = uage;
		this.udateofvisit = udateofvisit;
		this.utimeslot = utimeslot;
		this.udisease = udisease;
		this.upassword = upassword;
		this.uemail = uemail;
		this.did = did;
	}

	public int getUid() {
		return uid;
	}

	public void setUid(int uid) {
		this.uid = uid;
	}

	public String getUname() {
		return uname;
	}

	public void setUname(String uname) {
		this.uname = uname;
	}

	public int getUage() {
		return uage;
	}

	public void setUage(int uage) {
		this.uage = uage;
	}

	public String getUdateofvisit() {
		return udateofvisit;
	}

	public void setUdateofvisit(String udateofvisit) {
		this.udateofvisit = udateofvisit;
	}

	public String getUtimeslot() {
		return utimeslot;
	}

	public void setUtimeslot(String utimeslot) {
		this.utimeslot = utimeslot;
	}

	public String getUdisease() {
		return udisease;
	}

	public void setUdisease(String udisease) {
		this.udisease = udisease;
	}

	public String getUpassword() {
		return upassword;
	}

	public void setUpassword(String upassword) {
		this.upassword = upassword;
	}

	public String getUemail() {
		return uemail;
	}

	public void setUemail(String uemail) {
		this.uemail = uemail;
	}

	public int getDid() {
		return did;
	}

	public void setDid(int did) {
		this.did = did;
	}

	@Override
	public String toString() {
		return "user [uid=" + uid + ", uname=" + uname + ", uage=" + uage + ", udateofvisit=" + udateofvisit
				+ ", utimeslot=" + utimeslot + ", udisease=" + udisease + ", upassword=" + upassword + ", uemail="
				+ uemail + ", did=" + did + "]";
	}
	
}
