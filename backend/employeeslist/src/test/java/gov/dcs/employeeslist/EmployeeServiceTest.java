package gov.dcs.employeeslist;

import org.junit.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import gov.dcs.employeeslist.employee.Employee;
import gov.dcs.employeeslist.employee.EmployeeRepository;
import gov.dcs.employeeslist.employee.EmployeeService;



@ExtendWith(MockitoExtension.class)
public class EmployeeServiceTest {
	
	@Mock
	private EmployeeRepository repository;
	
    @InjectMocks
    private EmployeeService empService = new EmployeeService();
	  
	  
    @Test
    public void givenMockingIsDoneByMockito_whenGetIsCalled_shouldReturnMockedObject() {
        Employee emp = new Employee("John", "M", "Doe", "jdow@gmail.com", 401234567, "123 New St", "Permanent", "12/02/2023", "12/02/2033", false, "Full-time", 40);
        Mockito
          .when(restTemplate.getForEntity(
            “http://localhost:8080/employees/1”, Employee.class))
          .thenReturn(new ResponseEntity(emp, HttpStatus.OK));

        Employee employee = empService.getEmployee(id);
        Assertions.assertEquals(emp, employee);
	    }

}

