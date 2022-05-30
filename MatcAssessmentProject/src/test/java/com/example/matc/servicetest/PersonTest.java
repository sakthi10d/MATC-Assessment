package com.example.matc.servicetest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;

import com.example.matc.MatcAssessmentProjectApplication;
import com.example.matc.entity.Person;
import com.example.matc.exception.BussinessException;
import com.example.matc.repository.PersonRepository;
import com.example.matc.service.PersonService;

@SpringBootTest(classes = MatcAssessmentProjectApplication.class)
//@ExtendWith(MockitoExtension.class)
@RunWith(MockitoJUnitRunner.class)
public class PersonTest {

	@InjectMocks
	PersonService personService;

	@Mock
	PersonRepository personRepository;


	@Test
	void insertPersonTest() {

		Person person = new Person();
		person.setId(1);
		person.setEmail("info2sakthi1@gmail.com");
		person.setMobileNumber("63818009898");
		person.setPassword("sakthi123");
		person.setUserName("sakthi");

		personService.insertPerson(person);
		verify(personRepository, times(1)).save(person);

	}
	@Test
	void getAllPersonTest() {
		List<Person> personList = new ArrayList<>();
		Person person1 = new Person(1, "sakthi123", "sakthi", "info2sakthi1@gmail.com","6381800989");
		Person person2 = new Person(2, "jeeva123", "jeeva", "info2jeeva1@gmail.com", "6381800988");
		personList.add(person1);
		personList.add(person2);


		PageRequest paging = PageRequest.of(0, 10, Sort.by("id"));

		Page<Person> pagedTasks = new PageImpl(personList);
		Page<Person> pro= Mockito.mock(Page.class);		
		Mockito.when(personRepository.findAll(paging)).thenReturn(pagedTasks);

		List<Person> expected = personRepository.findAll(paging).getContent();
		assertEquals(personList,expected);
		verify(personRepository,times(1)).findAll(paging);
	}

	@Test
	void getPersonByMobileNumber() throws BussinessException{

		Person person = new Person(1, "sakthigv", "sakthigv1298", "info2sakthi1@gmail.com", "6381800989");
		when(personRepository.findByMobileNumber(person.getMobileNumber())).thenReturn(person);	
		person= personService.getPersonByMobileNumber(person.getMobileNumber());
		assertEquals("6381800989", person.getMobileNumber());
		verify(personRepository,times(1)).findByMobileNumber(person.getMobileNumber()); 

	}


}


