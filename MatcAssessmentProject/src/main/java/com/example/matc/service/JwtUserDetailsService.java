package com.example.matc.service;




import java.util.Arrays;
import java.util.List;

import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


@Service
public class JwtUserDetailsService implements UserDetailsService{
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException 
	{
//		if ("sakthi".equals(username)) 
//		{
//			return  new User("sakthi","$2a$10$slYQmyNdGzTn7ZLBXBChFOC9f6kFjAqPhccnP6DxlWXx2lPk1C3G6",
//					new ArrayList<>());
//		} else {
//			throw new UsernameNotFoundException("User not found with username: " + username);
//		}
	
		List<SimpleGrantedAuthority> roles=null;
		
		
		if (username.equals("user")) {
			roles = Arrays.asList(new SimpleGrantedAuthority("ROLE_USER"));
			return new User("user", "$2a$10$ETOq/YcuDzf7p5d6pv880O1l73WjUMuiCeviqpony16q4gH0uCYku",roles);
		}
		else if(username.equals("admin")) {
			roles = Arrays.asList(new SimpleGrantedAuthority("ROLE_ADMIN"));
			return new User("admin", "$2a$10$lbOuWQD1Pfcbtp0in22ziu.3Q/j1ToVAbJVAggfSpXKJDi3XhniHC",roles);
		}
		else {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
	
	
	
	}

	
	
}
