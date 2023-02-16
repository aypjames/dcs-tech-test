package gov.dcs.employeeslist.employee;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
@Transactional
public class EmployeeService {
	
	
	@Autowired 
	private EmployeeRepository repository;
	
	public Employee create(EmployeeDTO data) {
				
		Employee newEmployee = new Employee(data.getFirstName(), 
		data.getMiddleName(), data.getLastName(), data.getEmailAddress(),
		data.getMobNumber(), data.getResAddress(), data.getEmpStatus(),
		data.getStartDate(), data.getEndDate(), data.getOnGoing(), data.getWorkBasis(), data.getHrsPerWeek());
		
		this.repository.save(newEmployee);
		return newEmployee;
	}
	
	
	public List<Employee> getAll()  {
		return this.repository.findAll();
	}
	
	public Optional <Employee> getById(Long id) {
		return this.repository.findById(id);
	}
	
	public boolean delete(Long id) {
		
		Optional<Employee> employeeToDelete = this.getById(id);
		
		if(employeeToDelete.isEmpty()) {
			return false;
		}
		this.repository.delete(employeeToDelete.get());
		return true;
	}
	
	
	public Employee updateEmployee (Long id, EmployeeDTO data) {
		Optional<Employee> employeeToUpdate = this.getById(id);
		
		// PUT needs to create a record if a record is not found.
		if(employeeToUpdate.isEmpty()) {
			return this.create(data);
		}
		
		Employee existingEmployee = employeeToUpdate.get();
		
		existingEmployee.setFirstName(data.getFirstName());
		existingEmployee.setMiddleName(data.getMiddleName());
		existingEmployee.setLastName(data.getLastName());
		existingEmployee.setEmailAddress(data.getEmailAddress());
		existingEmployee.setMobNumber(data.getMobNumber());
		existingEmployee.setResAddress(data.getResAddress());
		existingEmployee.setEmpStatus(data.getEmpStatus());
		existingEmployee.setStartDate(data.getStartDate());
		existingEmployee.setEndDate(data.getEndDate());
		existingEmployee.setOnGoing(data.getOnGoing());
		existingEmployee.setWorkBasis(data.getWorkBasis());
		existingEmployee.setHrsPerWeek(data.getHrsPerWeek());
		
				
		this.repository.save(existingEmployee);
		return existingEmployee;
	}

}
