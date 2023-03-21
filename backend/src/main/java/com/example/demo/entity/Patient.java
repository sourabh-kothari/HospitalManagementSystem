package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Patient")
public class Patient {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	@Column(name="pid")
	private int pid;
	@Column(name="pname")
	private String pname;
	@Column(name="pgender")
	private String pgender;
	@Column(name="page")
	private int page;
	@Column(name="padhaar")
	private String padhaar;
	@Column(name="pdisease")
	private String pdisease;
	@Column(name="pdate")
	private String pdate;
	@Column(name="ptimeslot")
	private String ptimeslot;
	@Column(name="pmobile")
	private String pmobile;
	@Column(name="did")
	private int did;
	public Patient() {
		
	}
	public Patient(int pid, String pname, String pgender, int page, String padhaar, String pdisease, String pdate,
			String ptimeslot, int did) {
		super();
		this.pid = pid;
		this.pname = pname;
		this.pgender = pgender;
		this.page = page;
		this.padhaar = padhaar;
		this.pdisease = pdisease;
		this.pdate = pdate;
		this.ptimeslot = ptimeslot;
		this.did = did;
	}
	public int getPid() {
		return pid;
	}
	public void setPid(int pid) {
		this.pid = pid;
	}
	public String getPname() {
		return pname;
	}
	public void setPname(String pname) {
		this.pname = pname;
	}
	public String getPgender() {
		return pgender;
	}
	public void setPgender(String pgender) {
		this.pgender = pgender;
	}
	public int getPage() {
		return page;
	}
	public void setPage(int page) {
		this.page = page;
	}
	public String getPadhaar() {
		return padhaar;
	}
	public void setPadhaar(String padhaar) {
		this.padhaar = padhaar;
	}
	public String getPdisease() {
		return pdisease;
	}
	public void setPdisease(String pdisease) {
		this.pdisease = pdisease;
	}
	public String getPdate() {
		return pdate;
	}
	public void setPdate(String pdate) {
		this.pdate = pdate;
	}
	public String getPtimeslot() {
		return ptimeslot;
	}
	public void setPtimeslot(String ptimeslot) {
		this.ptimeslot = ptimeslot;
	}
	public int getDid() {
		return did;
	}
	public void setDid(int did) {
		this.did = did;
	}
	@Override
	public String toString() {
		return "Patient [pid=" + pid + ", pname=" + pname + ", pgender=" + pgender + ", page=" + page + ", padhaar="
				+ padhaar + ", pdisease=" + pdisease + ", pdate=" + pdate + ", ptimeslot=" + ptimeslot + ", did=" + did
				+ "]";
	}
	


}
