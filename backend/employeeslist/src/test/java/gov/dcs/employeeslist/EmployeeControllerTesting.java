package gov.dcs.employeeslist;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import gov.dcs.employeeslist.employee.Employee;
import gov.dcs.employeeslist.employee.EmployeeController;


@SpringBootTest
@AutoConfigureMockMvc
public class EmployeeControllerTesting extends AbstractTest {
	

	@Test
	public void getShouldReturnEmployees() throws Exception {
		MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.get("/employees")
				.accept(MediaType.APPLICATION_JSON_VALUE)).andReturn();
		
		int status = mvcResult.getResponse().getStatus();
		assertEquals(200, status);
	}
	
	@Test
	public void getByIdShouldReturnEmployee() throws Exception {
		MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.get("/employees/1")
				.accept(MediaType.APPLICATION_JSON_VALUE)).andReturn();
		
		int status = mvcResult.getResponse().getStatus();
		assertEquals(200, status);
	}
	
	@Test 
	public void postShouldCreateEmployees() throws Exception {
		
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("d/MM/yyyy");
		String startDate = "02/02/2023";
		String endDate = "02/02/2033";
		  
		LocalDate startDateInLocalDate = LocalDate.parse(startDate, formatter);
		LocalDate endDateInLocalDate = LocalDate.parse(endDate, formatter);
		  
		  
		Employee employee = new Employee();
		employee.setFirstName("John");
		employee.setMiddleName("F");
		employee.setLastName("Citizen");
		employee.setEmailAddress("jz@email.com");
		employee.setMobNumber((long) 401379011);
		employee.setResAddress("123 Testing Avenue");
		employee.setEmpStatus("Permanent");
		employee.setStartDate(startDateInLocalDate);
		employee.setEndDate(endDateInLocalDate);
		employee.setOnGoing(false);
		employee.setWorkBasis("Full-time");
		employee.setHrsPerWeek(40);
		
		String inputJson = super.mapToJson(employee);
		MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.post("/employees")
				.contentType(MediaType.APPLICATION_JSON_VALUE).content(inputJson)).andReturn();
		
		int status = mvcResult.getResponse().getStatus();
		assertEquals(201, status);
		String content = mvcResult.getResponse().getContentAsString();
		assertEquals(content, "Successfully created employee");
	}
	

}
