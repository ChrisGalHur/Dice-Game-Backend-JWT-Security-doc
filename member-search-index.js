memberSearchIndex = [{"p":"com.chrisgalhur.dice_game.config","c":"ApiConfig","l":"ApiConfig()","u":"%3Cinit%3E()"},{"p":"com.chrisgalhur.dice_game.security","c":"CustomAuthenticationManager","l":"authenticate(Authentication)","u":"authenticate(org.springframework.security.core.Authentication)"},{"p":"com.chrisgalhur.dice_game.service","c":"AuthorizationService","l":"authenticatePlayer(SessionPlayerDTO)","u":"authenticatePlayer(com.chrisgalhur.dice_game.model.SessionPlayerDTO)"},{"p":"com.chrisgalhur.dice_game.service","c":"AuthorizationServiceImpl","l":"authenticatePlayer(SessionPlayerDTO)","u":"authenticatePlayer(com.chrisgalhur.dice_game.model.SessionPlayerDTO)"},{"p":"com.chrisgalhur.dice_game.security","c":"SecurityConfig","l":"authenticationManager(AuthenticationConfiguration)","u":"authenticationManager(org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration)"},{"p":"com.chrisgalhur.dice_game.controller","c":"AuthorizationController","l":"AuthorizationController(PlayerServiceImpl, CustomAuthenticationManager, JWTGenerator, AuthorizationServiceImpl)","u":"%3Cinit%3E(com.chrisgalhur.dice_game.service.PlayerServiceImpl,com.chrisgalhur.dice_game.security.CustomAuthenticationManager,com.chrisgalhur.dice_game.security.JWTGenerator,com.chrisgalhur.dice_game.service.AuthorizationServiceImpl)"},{"p":"com.chrisgalhur.dice_game.service","c":"AuthorizationServiceImpl","l":"AuthorizationServiceImpl(PlayerServiceImpl, CustomAuthenticationManager, JWTGenerator)","u":"%3Cinit%3E(com.chrisgalhur.dice_game.service.PlayerServiceImpl,com.chrisgalhur.dice_game.security.CustomAuthenticationManager,com.chrisgalhur.dice_game.security.JWTGenerator)"},{"p":"com.chrisgalhur.dice_game.security","c":"SecurityConstants","l":"AUTHORIZED_URL"},{"p":"com.chrisgalhur.dice_game.model","c":"AuthResponseDTO","l":"AuthResponseDTO(String, String)","u":"%3Cinit%3E(java.lang.String,java.lang.String)"},{"p":"com.chrisgalhur.dice_game.security","c":"JWTAuthEntryPoint","l":"commence(HttpServletRequest, HttpServletResponse, AuthenticationException)","u":"commence(jakarta.servlet.http.HttpServletRequest,jakarta.servlet.http.HttpServletResponse,org.springframework.security.core.AuthenticationException)"},{"p":"com.chrisgalhur.dice_game.security","c":"CustomAuthenticationManager","l":"CustomAuthenticationManager(SecurityConfig, CustomUserDetailsService)","u":"%3Cinit%3E(com.chrisgalhur.dice_game.security.SecurityConfig,com.chrisgalhur.dice_game.security.CustomUserDetailsService)"},{"p":"com.chrisgalhur.dice_game.config","c":"ApiConfig","l":"customOpenAPI()"},{"p":"com.chrisgalhur.dice_game.security","c":"CustomUserDetailsService","l":"CustomUserDetailsService(PlayerRepository, SessionPlayerRepository)","u":"%3Cinit%3E(com.chrisgalhur.dice_game.repository.PlayerRepository,com.chrisgalhur.dice_game.repository.SessionPlayerRepository)"},{"p":"com.chrisgalhur.dice_game.model","c":"DataPlayerEntity","l":"DataPlayerEntity(int, int, String)","u":"%3Cinit%3E(int,int,java.lang.String)"},{"p":"com.chrisgalhur.dice_game","c":"DiceGameApplication","l":"DiceGameApplication()","u":"%3Cinit%3E()"},{"p":"com.chrisgalhur.dice_game.security","c":"JWTAuthenticationFilter","l":"doFilterInternal(HttpServletRequest, HttpServletResponse, FilterChain)","u":"doFilterInternal(jakarta.servlet.http.HttpServletRequest,jakarta.servlet.http.HttpServletResponse,jakarta.servlet.FilterChain)"},{"p":"com.chrisgalhur.dice_game.repository","c":"SessionPlayerRepository","l":"existsByName(String)","u":"existsByName(java.lang.String)"},{"p":"com.chrisgalhur.dice_game.service","c":"PlayerService","l":"existsByName(String)","u":"existsByName(java.lang.String)"},{"p":"com.chrisgalhur.dice_game.service","c":"PlayerServiceImpl","l":"existsByName(String)","u":"existsByName(java.lang.String)"},{"p":"com.chrisgalhur.dice_game.security","c":"SecurityConfig","l":"filterChain(HttpSecurity)","u":"filterChain(org.springframework.security.config.annotation.web.builders.HttpSecurity)"},{"p":"com.chrisgalhur.dice_game.repository","c":"PlayerRepository","l":"findByName(String)","u":"findByName(java.lang.String)"},{"p":"com.chrisgalhur.dice_game.repository","c":"RoleRepository","l":"findByName(String)","u":"findByName(java.lang.String)"},{"p":"com.chrisgalhur.dice_game.repository","c":"SessionPlayerRepository","l":"findByName(String)","u":"findByName(java.lang.String)"},{"p":"com.chrisgalhur.dice_game.service","c":"GameServiceImpl","l":"GameServiceImpl()","u":"%3Cinit%3E()"},{"p":"com.chrisgalhur.dice_game.security","c":"JWTGenerator","l":"generateToken(Authentication)","u":"generateToken(org.springframework.security.core.Authentication)"},{"p":"com.chrisgalhur.dice_game.security","c":"JWTGenerator","l":"getUserNameFromJWT(String)","u":"getUserNameFromJWT(java.lang.String)"},{"p":"com.chrisgalhur.dice_game.exception","c":"InvalidCredentialsException","l":"InvalidCredentialsException(String)","u":"%3Cinit%3E(java.lang.String)"},{"p":"com.chrisgalhur.dice_game.security","c":"SecurityConstants","l":"JWT_EXPIRATION"},{"p":"com.chrisgalhur.dice_game.security","c":"SecurityConfig","l":"jwtAuthenticationFilter()"},{"p":"com.chrisgalhur.dice_game.security","c":"JWTAuthenticationFilter","l":"JWTAuthenticationFilter()","u":"%3Cinit%3E()"},{"p":"com.chrisgalhur.dice_game.security","c":"JWTAuthEntryPoint","l":"JWTAuthEntryPoint()","u":"%3Cinit%3E()"},{"p":"com.chrisgalhur.dice_game.security","c":"JWTGenerator","l":"JWTGenerator()","u":"%3Cinit%3E()"},{"p":"com.chrisgalhur.dice_game.security","c":"CustomUserDetailsService","l":"loadUserByUsername(String)","u":"loadUserByUsername(java.lang.String)"},{"p":"com.chrisgalhur.dice_game.controller","c":"AuthorizationController","l":"login(SessionPlayerDTO)","u":"login(com.chrisgalhur.dice_game.model.SessionPlayerDTO)"},{"p":"com.chrisgalhur.dice_game","c":"DiceGameApplication","l":"main(String[])","u":"main(java.lang.String[])"},{"p":"com.chrisgalhur.dice_game.config","c":"ApiConfig","l":"modelMapper()"},{"p":"com.chrisgalhur.dice_game.service","c":"Player","l":"Player()","u":"%3Cinit%3E()"},{"p":"com.chrisgalhur.dice_game.model","c":"PlayerDTO","l":"PlayerDTO()","u":"%3Cinit%3E()"},{"p":"com.chrisgalhur.dice_game.service","c":"PlayerServiceImpl","l":"PlayerServiceImpl(ModelMapper, PasswordEncoder, SessionPlayerRepository, PlayerRepository)","u":"%3Cinit%3E(org.modelmapper.ModelMapper,org.springframework.security.crypto.password.PasswordEncoder,com.chrisgalhur.dice_game.repository.SessionPlayerRepository,com.chrisgalhur.dice_game.repository.PlayerRepository)"},{"p":"com.chrisgalhur.dice_game.controller","c":"AuthorizationController","l":"register(SessionPlayerDTO)","u":"register(com.chrisgalhur.dice_game.model.SessionPlayerDTO)"},{"p":"com.chrisgalhur.dice_game.service","c":"PlayerService","l":"registerNewUser(SessionPlayerDTO)","u":"registerNewUser(com.chrisgalhur.dice_game.model.SessionPlayerDTO)"},{"p":"com.chrisgalhur.dice_game.service","c":"PlayerServiceImpl","l":"registerNewUser(SessionPlayerDTO)","u":"registerNewUser(com.chrisgalhur.dice_game.model.SessionPlayerDTO)"},{"p":"com.chrisgalhur.dice_game.model","c":"Role","l":"Role()","u":"%3Cinit%3E()"},{"p":"com.chrisgalhur.dice_game.repository","c":"SessionPlayerRepository","l":"save(SessionPlayer)","u":"save(com.chrisgalhur.dice_game.model.SessionPlayer)"},{"p":"com.chrisgalhur.dice_game.security","c":"SecurityConfig","l":"SecurityConfig(CustomUserDetailsService, JWTAuthEntryPoint)","u":"%3Cinit%3E(com.chrisgalhur.dice_game.security.CustomUserDetailsService,com.chrisgalhur.dice_game.security.JWTAuthEntryPoint)"},{"p":"com.chrisgalhur.dice_game.security","c":"SecurityConstants","l":"SecurityConstants()","u":"%3Cinit%3E()"},{"p":"com.chrisgalhur.dice_game.model","c":"SessionPlayer","l":"SessionPlayer()","u":"%3Cinit%3E()"},{"p":"com.chrisgalhur.dice_game.model","c":"SessionPlayerDTO","l":"SessionPlayerDTO()","u":"%3Cinit%3E()"},{"p":"com.chrisgalhur.dice_game.service","c":"PlayerService","l":"validatePlayer(SessionPlayerDTO)","u":"validatePlayer(com.chrisgalhur.dice_game.model.SessionPlayerDTO)"},{"p":"com.chrisgalhur.dice_game.service","c":"PlayerServiceImpl","l":"validatePlayer(SessionPlayerDTO)","u":"validatePlayer(com.chrisgalhur.dice_game.model.SessionPlayerDTO)"},{"p":"com.chrisgalhur.dice_game.security","c":"JWTGenerator","l":"validateToken(String)","u":"validateToken(java.lang.String)"}];updateSearchResults();