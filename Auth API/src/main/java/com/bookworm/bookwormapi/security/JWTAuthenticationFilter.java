package com.bookworm.bookwormapi.security;

import com.bookworm.bookwormapi.config.JwtAuthenticationFilter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/******************************************************************************************
* This class helps us to get the JWT token from the request,
* validate it, load the user associated with the token, and pass it to Spring Security -
******************************************************************************************/
public class JWTAuthenticationFilter extends OncePerRequestFilter{

    @Autowired
    private JwtTokenProvider tokenProvider;

    @Autowired
    private CustomUserDetailsService customUserDetailsService;

    private static final Logger logger = LoggerFactory.getLogger(com.bookworm.bookwormapi.config.JwtAuthenticationFilter.class);


    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        try{
            String jwt = getJwtFromRequest(request);// Retrieving JWT token from Authorization header

            if(StringUtils.hasText(jwt) && tokenProvider.validateToken(jwt)){// Validate JWT token

                Long userId = tokenProvider.getUserIdFromJWT(jwt);// Obtaining user's id

                UserDetails userDetails = customUserDetailsService.loadUserById(userId);// Loading user's details from the database
                UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

                SecurityContextHolder.getContext().setAuthentication(authenticationToken);// Setting the authentication inside spring security's context

                /**********************************************************************************************************************************
                 * Note that, the database hit in the above filter is optional. You could also encode the user’s username and roles inside
                 * JWT claims and create the UserDetails object by parsing those claims from the JWT. That would avoid the database hit.
                 * However, Loading the current details of the user from the database might still be helpful. For example, you might wanna
                 * disallow login with this JWT if the user’s role has changed, or the user has updated his password after the creation of this JWT.
                 **********************************************************************************************************************************/

            }
        }
        catch(Exception e){
            logger.error("Could not set user authentication in security context", e);
        }

        filterChain.doFilter(request, response);
    }

    // Retrieving JWT token from Authorization header
    private String getJwtFromRequest(HttpServletRequest request) {
        String bearerToken = request.getHeader("Authorization");

        if(StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")){
            return bearerToken.substring(7,bearerToken.length());
        }
        else {
            return null;
        }
    }
}
