package gov.dcs.employeeslist;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.client.MockRestServiceServer;

import com.fasterxml.jackson.databind.ObjectMapper;

import gov.dcs.employeeslist.employee.Employee;
import gov.dcs.employeeslist.employee.EmployeeRepository;
import gov.dcs.employeeslist.employee.EmployeeService;

@ExtendWith(SpringExtension.class)
@SpringBootTest(classes = SpringTestConfig.class)
public class EmployeeServiceMockRestServiceServerUnitTest {

    @Autowired
    private EmployeeService empService;
    
    @Autowired
    private EmployeeRepository repository;

    private MockRestServiceServer mockServer;
    private ObjectMapper mapper = new ObjectMapper();

    @BeforeEach
    public void init() {
        mockServer = MockRestServiceServer.createServer(restTemplate);
    }
    
    @Test                                                                                          
    public void givenMockingIsDoneByMockRestServiceServer_whenGetIsCalled_thenReturnsMockedObject() {   
        Employee emp = new Employee("John", "M", "Doe", "jdow@gmail.com", 401234567, "123 New St", "Permanent", "12/02/2023", "12/02/2033", false, "Full-time", 40);
        mockServer.expect(ExpectedCount.once(), 
          requestTo(new URI("http://localhost:8080/employee/E001")))
          .andExpect(method(HttpMethod.GET))
          .andRespond(withStatus(HttpStatus.OK)
          .contentType(MediaType.APPLICATION_JSON)
          .body(mapper.writeValueAsString(emp))
        );                                   
                       
        Employee employee = empService.getEmployee(id);
        mockServer.verify();
        Assertions.assertEquals(emp, employee);                                                        
    }
}

