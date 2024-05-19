import React from 'react';
import CarouselHome from './CarouselHome';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'; // Importar Link de react-router-dom
import teamImage1 from './imagenes/Alvaro.jpg';
import teamImage2 from './imagenes/balza.jpg';
import teamImage3 from './imagenes/sahir.jpg';
import teamImage4 from './imagenes/Jared.jpg';
import missionImage from './imagenes/mision.jpg';
import historyImage from './imagenes/historia.jpg'; // Nueva imagen para la historia
import timelineImage from './imagenes/linea de tiempo.jpg'; // Línea de tiempo visual

// Estilos para las tarjetas
const cardStyles = {
  transition: 'transform 0.3s, box-shadow 0.3s',
};

const cardHoverStyles = {
  transform: 'scale(1.05)',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
};

function About() {
  return (
    <Container maxWidth="md">
      <Typography variant="h1" component="h1" gutterBottom align="center" style={{ color: 'black' }}>
        N O T L Y 
      </Typography>
      <Typography variant="h5" component="h1" gutterBottom align="Left" style={{ color: 'black' }}>
      Bienvenido a nuestra aplicación de gestor de proyectos. Aquí puedes gestionar y asignar tareas fácilmente. 
      </Typography>
      <br />
      <CarouselHome />
      {/* Agregando misión */}
      <Typography variant="h4" component="h2" gutterBottom style={{ color: 'black' }}>
        Nuestra Misión
      </Typography>
      <Card>
        <CardMedia
          component="img"
          height="200"
          image={missionImage}
          alt="Nuestra misión"
        />
        <CardContent>
          <Typography variant="body1" component="p" style={{ color: 'black' }}>
            Nuestra misión es proporcionar una herramienta sencilla y eficaz para gestionar tareas y aumentar la productividad.
          </Typography>
        </CardContent>
      </Card>

      {/* Agregando historia */}
      <Typography variant="h4" component="h2" gutterBottom style={{ marginTop: '20px', color: 'black' }}>
        Nuestra Historia
      </Typography>
      <Card>
        <CardMedia
          component="img"
          height="200"
          image={historyImage}
          alt="Nuestra Historia"
        />
        <CardContent>
          <Typography variant="body1" component="p" style={{ color: 'black' }}>
            Fundada en 2020, nuestra empresa ha crecido rápidamente gracias a la dedicación y esfuerzo de nuestro talentoso equipo. Comenzamos como un pequeño grupo de desarrolladores apasionados con una visión clara: hacer que la gestión de proyectos sea más accesible y eficiente para todos. Desde entonces, hemos lanzado múltiples actualizaciones y características que han mejorado significativamente la experiencia del usuario.
          </Typography>
          <Typography variant="body1" component="p" style={{ marginTop: '10px', color: 'black' }}>
            <strong>2020:</strong> La idea de Notly nació durante una sesión de brainstorming entre nuestros fundadores. Con una misión clara y objetivos ambiciosos, comenzamos el desarrollo de la primera versión de nuestra aplicación.
          </Typography>
          <Typography variant="body1" component="p" style={{ marginTop: '10px', color: 'black' }}>
            <strong>2021:</strong> Lanzamos nuestra primera versión beta, que recibió una retroalimentación positiva de nuestra comunidad de usuarios inicial. Esto nos impulsó a continuar mejorando y expandiendo nuestras funcionalidades.
          </Typography>
          <Typography variant="body1" component="p" style={{ marginTop: '10px', color: 'black' }}>
            <strong>2022:</strong> Añadimos nuevas características como la integración con otras herramientas de productividad y una interfaz de usuario mejorada. Nuestro equipo creció, incorporando a más desarrolladores talentosos.
          </Typography>
          <Typography variant="body1" component="p" style={{ marginTop: '10px', color: 'black' }}>
            <strong>2023:</strong> Celebramos nuestro tercer aniversario con el lanzamiento de Notly 2.0, una versión completamente renovada que incluye inteligencia artificial para una mejor asignación de tareas y seguimiento de proyectos.
          </Typography>
          <Typography variant="body1" component="p" style={{ marginTop: '10px', color: 'black' }}>
            <strong>2024:</strong> Continuamos innovando y expandiéndonos, siempre enfocados en ofrecer las mejores herramientas para nuestros usuarios. Nuestro compromiso con la excelencia y la satisfacción del cliente sigue siendo nuestra mayor prioridad.
          </Typography>
        </CardContent>
      </Card>

      <Card style={{ marginTop: '20px' }}>
        <CardMedia
          component="img"
          height="200"
          image={timelineImage}
          alt="Línea de tiempo de nuestra historia"
        />
      </Card>
      
      {/* Agregando equipo */}
      <Typography variant="h3" component="h3" gutterBottom align="center" style={{ color: 'black' }}>
        Nuestro Equipo
      </Typography>
      <Grid container spacing={5} justifyContent="center">
        {/* Primer fila de tarjetas */}
        <Grid item xs={12} sm={6} md={4} display="flex" justifyContent="center">
          <Link component={RouterLink} to="https://www.linkedin.com/in/%C3%A1lvaro-narv%C3%A1ez-372039141/" underline="none">
            <Card style={cardStyles} sx={{ '&:hover': cardHoverStyles }}>
              <CardMedia
                component="img"
                height="200"
                image={teamImage1}
                alt="Equipo"
              />
              <CardContent>
                <Typography variant="h5" component="h3">
                  Álvaro Narvaez
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Desarrollador Backend
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4} display="flex" justifyContent="center">
          <Link component={RouterLink} to="https://www.linkedin.com/in/juan-balza-39b1472b5/" underline="none">
            <Card style={cardStyles} sx={{ '&:hover': cardHoverStyles }}>
              <CardMedia
                component="img"
                height="200"
                image={teamImage2}
                alt="Equipo"
              />
              <CardContent>
                <Typography variant="h5" component="h3">
                  Juan Balza
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Desarrollador Frontend
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      </Grid>

      <Grid container spacing={5} justifyContent="center" style={{ marginTop: '20px' }}>
        {/* Segunda fila de tarjetas */}
        <Grid item xs={12} sm={6} md={4} display="flex" justifyContent="center">
          <Link component={RouterLink} to="https://www.linkedin.com/in/sahir-david-ruiz-taborda-612a3921a/" underline="none">
            <Card style={cardStyles} sx={{ '&:hover': cardHoverStyles }}>
              <CardMedia
                component="img"
                height="200"
                image={teamImage3}
                alt="Equipo"
              />
              <CardContent>
                <Typography variant="h5" component="h3">
                  Sahir Ruiz
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Desarrollador Backend
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4} display="flex" justifyContent="center">
          <Link component={RouterLink} to="https://www.linkedin.com/in/jared-trujillo-espinosa-8891462b5/" underline="none">
            <Card style={cardStyles} sx={{ '&:hover': cardHoverStyles }}>
              <CardMedia
                component="img"
                height="200"
                image={teamImage4}
                alt="Equipo"
              />
              <CardContent>
                <Typography variant="h5" component="h3">
                  Jared Trujillo
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Desarrollador Backend
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      </Grid>

      {/* Footer */}
      <Box mt={5} textAlign="center">
        <Typography variant="body2" color="textSecondary">
          &copy; 2024 Notly. Todos los derechos reservados.
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Diseñado por: Álvaro Narvaez, Sahir Ruiz, Juan Balza y Jared Trujillo.
        </Typography>
      </Box>
    </Container>
  );
}

export default About;
