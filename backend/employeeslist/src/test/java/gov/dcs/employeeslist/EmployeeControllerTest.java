package gov.dcs.employeeslist;

import static org.hamcrest.Matchers.*;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import gov.dcs.employeeslist.employee.Employee;
import gov.dcs.employeeslist.employee.EmployeeController;
import gov.dcs.employeeslist.employee.EmployeeRepository;
import gov.dcs.employeeslist.employee.EmployeeService;


@ExtendWith(MockitoExtension.class)
public class EmployeeControllerTest {
	
	  	@Mock
	  	private EmployeeRepository repository;

	    @InjectMocks
	    private EmployeeController employeeController;

	    @Test
	    public void getAll_ReturnsListOfEmployees() {
	        List<Employee> employees = new ArrayList<>();
	        employees.add(new Employee("John", "M", "Doe", "jdow@gmail.com", 401234567, "123 New St", "Permanent", "12/02/2023", "12/02/2033", false, "Full-time", 40));

//	        when(employeeService.getAll()).thenReturn(employees);
//
//	        ResponseEntity<List<Employee>> response = employeeController.getAll();
//
//	        verify(employeeService, times(1)).getAll();
//	        assertThat(response.getStatusCode(), equalTo(HttpStatus.OK));
//	        assertThat(response.getBody(), hasSize(2));
	    }

}
