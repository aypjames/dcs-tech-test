package gov.dcs.employeeslist.employee;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/employees")
@CrossOrigin
public class EmployeeController {
	
	Logger logger = LoggerFactory.getLogger(EmployeeController.class);
	
	@Autowired
	private EmployeeService service;
	
	@GetMapping
	public ResponseEntity<List<Employee>> getAll() {
		List<Employee> allEmployees = this.service.getAll();
		
		logger.info("Generated all employees");
		return new ResponseEntity<>(allEmployees, HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Employee> getById(@PathVariable Long id) {
		Optional<Employee> isEmployee = this.service.getById(id);
		
		if(isEmployee.isEmpty()) {
			logger.error("Failed to find employee");
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
		}
		
		logger.info("Found employee");
		return new ResponseEntity<>(isEmployee.get(), HttpStatus.OK); 
	}
	
	@PostMapping
	public ResponseEntity<Employee> create(@Valid @RequestBody EmployeeDTO data) {
		Employee createdEmployee = this.service.create(data);
		
		logger.info("Successfully created employee");
		return new ResponseEntity<>(createdEmployee, HttpStatus.CREATED);
	}
	
	
	@PutMapping("/{id}")
	public ResponseEntity<Employee> updateEmployee(@Valid @PathVariable Long id, @RequestBody EmployeeDTO data) {
		Employee updatedEmployee = this.service.updateEmployee(id, data);
		
		// PUT will always create a record, if the data is valid, it will rewrite or create.
		// Hence there is no need to have an employee not found check.
		
		logger.info("Updated employee");
		return new ResponseEntity<>(updatedEmployee, HttpStatus.OK);
	}
	

	@DeleteMapping("/{id}")
	public ResponseEntity<Employee> delete(@PathVariable Long id) {
		boolean isDeleted = this.service.delete(id);
		
		if(isDeleted) {
			logger.info("Successfully removed employee");
			return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
		}
		
		logger.error("Failed to find employee");
		return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
		
	}

}
