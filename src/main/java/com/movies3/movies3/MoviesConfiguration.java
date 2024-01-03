package com.movies3.movies3;



import org.apache.catalina.core.ApplicationContext;
import org.apache.tomcat.util.descriptor.LocalResolver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.ReloadableResourceBundleMessageSource;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.i18n.LocaleChangeInterceptor;
import org.springframework.web.servlet.i18n.SessionLocaleResolver;
import org.springframework.web.servlet.view.InternalResourceViewResolver;
import org.thymeleaf.spring6.SpringTemplateEngine;
import org.thymeleaf.spring6.templateresolver.SpringResourceTemplateResolver;
import org.thymeleaf.spring6.view.ThymeleafViewResolver;


@Configuration
public class MoviesConfiguration implements WebMvcConfigurer{

       @Autowired
		private org.springframework.context.ApplicationContext applicationContext;
       
       @Override
       public void addCorsMappings(CorsRegistry registry) {
           registry.addMapping("/**").allowedOrigins("http://localhost:3000").allowedMethods("PUT", "DELETE",
                   "GET", "POST").allowedHeaders("Content-Type", "X-Requested-With", "accept", "Origin", "Access-Control-Request-Method",
                           "Access-Control-Request-Headers")
                   .exposedHeaders("Access-Control-Allow-Origin", "Access-Control-Allow-Credentials")
                   .allowCredentials(true).maxAge(3600);
       }
       
       
       @Bean
       public SpringResourceTemplateResolver templateResolver() {
           SpringResourceTemplateResolver templateResolver = new SpringResourceTemplateResolver();
           templateResolver.setCacheable(false);
           templateResolver.setPrefix("classpath:/webapp/views/");
           templateResolver.setSuffix(".html");
           return templateResolver;
       }

       @Bean
       public SpringTemplateEngine templateEngine() {
           SpringTemplateEngine springTemplateEngine = new SpringTemplateEngine();
           springTemplateEngine.addTemplateResolver(templateResolver());
           return springTemplateEngine;
       }

       @Bean
       public ThymeleafViewResolver viewResolver() {
           ThymeleafViewResolver viewResolver = new ThymeleafViewResolver();
           viewResolver.setTemplateEngine(templateEngine());
           viewResolver.setOrder(0);
           return viewResolver;
       }
}
