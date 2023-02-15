package gov.dcs.employeeslist;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import gov.dcs.employeeslist.employee.EmployeeController;


//Testing context is creating the controller.

@SpringBootTest
public class EmployeeslistApplicationTests {
	
	@Autowired
	private EmployeeController controller;

	@Test
	public void contextLoads() throws Exception {
		assertThat(controller).isNotNull();
	}

}
